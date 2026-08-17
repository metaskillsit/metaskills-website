import { useEffect, useState } from "react";
import { z } from "zod";
import { CheckCircle2, Loader2, Mail } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your full name").max(100),
  email: z.string().trim().email("Please enter a valid work email").max(255),
  company: z.string().trim().min(1, "Please enter your organisation").max(150),
  role: z.string().trim().max(120).optional(),
  team_size: z.string().trim().max(60).optional(),
  audience: z.string().trim().max(60).optional(),
  format: z.string().trim().max(60).optional(),
  timeframe: z.string().trim().max(120).optional(),
  message: z.string().trim().max(2000).optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Please agree to be contacted" }),
  }),
});

const fieldClass =
  "w-full rounded-sm border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent";
const labelClass = "block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2";

const DEFAULT_AUDIENCE = ["Enterprise governance", "Public sector & sovereign"];
const DEFAULT_FORMAT = [
  "In-house (at your office)",
  "Private cohort (our venue)",
  "Custom / sector-specific",
];

type Props = {
  audienceLabel?: string;
  audienceOptions?: string[];
  presetAudience?: string;
  showFormat?: boolean;
  formatOptions?: string[];
  roleLabel?: string;
  rolePlaceholder?: string;
  roleType?: string;
  teamSizeLabel?: string;
  teamSizePlaceholder?: string;
  timeframeLabel?: string;
  timeframePlaceholder?: string;
  messageLabel?: string;
  messagePlaceholder?: string;
  submitLabel?: string;
  successText?: string;
};

const EnquiryForm = ({
  audienceLabel = "Audience",
  audienceOptions = DEFAULT_AUDIENCE,
  presetAudience,
  showFormat = true,
  formatOptions = DEFAULT_FORMAT,
  roleLabel = "Role",
  rolePlaceholder,
  roleType = "text",
  teamSizeLabel = "Team size",
  teamSizePlaceholder = "e.g. 10",
  timeframeLabel = "Preferred timeframe",
  timeframePlaceholder = "e.g. Q3 2026",
  messageLabel = "Message",
  messagePlaceholder = "Tell us about your team, current AI workloads and what you want them to leave with.",
  submitLabel = "Request in-house training",
  successText = "Thank you. A Metaskills programme specialist will follow up within one working day. A copy has also been sent to admissions@metaskills.sg.",
}: Props) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    team_size: "",
    audience: presetAudience ?? audienceOptions[0],
    format: showFormat ? formatOptions[0] : "",
    timeframe: "",
    message: "",
    consent: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  useEffect(() => {
    if (presetAudience) setValues((v) => ({ ...v, audience: presetAudience }));
  }, [presetAudience]);

  const set = (key: string, value: string | boolean) =>
    setValues((v) => ({ ...v, [key]: value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const flat = parsed.error.flatten().fieldErrors;
      setErrors(
        Object.fromEntries(Object.entries(flat).map(([k, v]) => [k, (v as string[])[0]]))
      );
      return;
    }
    setErrors({});
    setStatus("sending");
    const d = parsed.data;
    const { error } = await supabase.from("enquiries").insert([
      {
        name: d.name!,
        email: d.email!,
        company: d.company!,
        role: d.role,
        team_size: d.team_size,
        audience: d.audience,
        format: d.format,
        timeframe: d.timeframe,
        message: d.message,
        consent: true,
      },
    ]);
    setStatus(error ? "error" : "done");
  };

  if (status === "done") {
    return (
      <div className="rounded-sm border border-accent/40 bg-white/5 p-10 text-center">
        <CheckCircle2 className="mx-auto mb-4 h-10 w-10 text-accent" aria-hidden="true" />
        <h3 className="font-heading text-2xl font-bold text-white mb-2">Enquiry received</h3>
        <p className="text-white/70 text-sm max-w-md mx-auto">{successText}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className={labelClass} htmlFor="eq-name">Full name *</label>
          <input id="eq-name" className={fieldClass} value={values.name}
            onChange={(e) => set("name", e.target.value)} autoComplete="name"
            aria-invalid={!!errors.name} aria-describedby={errors.name ? "err-name" : undefined} />
          {errors.name && <p id="err-name" className="mt-1 text-xs text-destructive">{errors.name}</p>}
        </div>
        <div>
          <label className={labelClass} htmlFor="eq-email">Work email *</label>
          <input id="eq-email" type="email" className={fieldClass} value={values.email}
            onChange={(e) => set("email", e.target.value)} autoComplete="email"
            aria-invalid={!!errors.email} aria-describedby={errors.email ? "err-email" : undefined} />
          {errors.email && <p id="err-email" className="mt-1 text-xs text-destructive">{errors.email}</p>}
        </div>
        <div>
          <label className={labelClass} htmlFor="eq-company">Company / organisation *</label>
          <input id="eq-company" className={fieldClass} value={values.company}
            onChange={(e) => set("company", e.target.value)} autoComplete="organization"
            aria-invalid={!!errors.company} />
          {errors.company && <p className="mt-1 text-xs text-destructive">{errors.company}</p>}
        </div>
        <div>
          <label className={labelClass} htmlFor="eq-role">{roleLabel}</label>
          <input id="eq-role" type={roleType} className={fieldClass} value={values.role}
            placeholder={rolePlaceholder}
            onChange={(e) => set("role", e.target.value)} />
        </div>
        <div>
          <label className={labelClass} htmlFor="eq-team">{teamSizeLabel}</label>
          <input id="eq-team" className={fieldClass} value={values.team_size}
            onChange={(e) => set("team_size", e.target.value)} placeholder={teamSizePlaceholder} />
        </div>
        <div>
          <label className={labelClass} htmlFor="eq-audience">{audienceLabel}</label>
          <select id="eq-audience" className={fieldClass} value={values.audience}
            onChange={(e) => set("audience", e.target.value)}>
            {audienceOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
        {showFormat && (
          <div>
            <label className={labelClass} htmlFor="eq-format">Preferred format</label>
            <select id="eq-format" className={fieldClass} value={values.format}
              onChange={(e) => set("format", e.target.value)}>
              {formatOptions.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </div>
        )}
        <div>
          <label className={labelClass} htmlFor="eq-time">{timeframeLabel}</label>
          <input id="eq-time" className={fieldClass} value={values.timeframe}
            onChange={(e) => set("timeframe", e.target.value)} placeholder={timeframePlaceholder} />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="eq-msg">{messageLabel}</label>
        <textarea id="eq-msg" rows={4} className={fieldClass} value={values.message}
          onChange={(e) => set("message", e.target.value)}
          placeholder={messagePlaceholder} />
      </div>

      <div className="flex items-start gap-3">
        <input id="eq-consent" type="checkbox" checked={values.consent}
          onChange={(e) => set("consent", e.target.checked)}
          className="mt-1 h-4 w-4 rounded-sm border-white/30 bg-white/10 accent-[hsl(var(--accent))]" />
        <label htmlFor="eq-consent" className="text-sm text-white/70 leading-relaxed">
          I agree to be contacted by Metaskills Institute about this enquiry. *
        </label>
      </div>
      {errors.consent && <p className="text-xs text-destructive">{errors.consent}</p>}

      {status === "error" && (
        <p role="alert" className="text-sm text-destructive">
          Something went wrong sending your enquiry. Please email us directly at{" "}
          <a href="mailto:admissions@metaskills.sg" className="underline hover:text-destructive/80">
            admissions@metaskills.sg
          </a>
          {" "}or WhatsApp us at +65 8948 3482.
        </p>
      )}

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
        <button type="submit" disabled={status === "sending"}
          className="inline-flex items-center gap-2 rounded-sm bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:brightness-110 disabled:opacity-60">
          {status === "sending" && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
          {submitLabel}
        </button>
        <a
          href="mailto:admissions@metaskills.sg"
          className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-accent transition-colors"
        >
          <Mail className="w-4 h-4" />
          admissions@metaskills.sg
        </a>
      </div>
    </form>
  );
};

export default EnquiryForm;
