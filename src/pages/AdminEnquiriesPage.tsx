import { useEffect, useState } from "react";
import { ArrowUpDown, Loader2, LogOut } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";

type Enquiry = {
  id: string;
  created_at: string;
  name: string;
  email: string;
  company: string;
  role: string | null;
  team_size: string | null;
  audience: string | null;
  format: string | null;
  timeframe: string | null;
  message: string | null;
};

const AdminEnquiriesPage = () => {
  const [session, setSession] = useState<unknown>(null);
  const [checked, setChecked] = useState(false);
  const [rows, setRows] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(false);
  const [denied, setDenied] = useState(false);
  const [desc, setDesc] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");

  useEffect(() => {
    document.title = "Enquiries — Metaskills Institute Admin";
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => {
      setSession(s);
      setChecked(true);
    });
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setChecked(true);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!session) return;
    setLoading(true);
    supabase
      .from("enquiries")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data, error }) => {
        setDenied(!!error || !data);
        setRows((data as Enquiry[]) || []);
        setLoading(false);
      });
  }, [session]);

  const signIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError("");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setAuthError(error.message);
  };

  const sorted = [...rows].sort((a, b) =>
    desc
      ? b.created_at.localeCompare(a.created_at)
      : a.created_at.localeCompare(b.created_at)
  );

  if (!checked) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-32 pb-24 px-6">
          <form onSubmit={signIn} className="max-w-sm mx-auto space-y-4">
            <h1 className="font-heading text-2xl font-bold text-foreground">Admin sign in</h1>
            <p className="text-sm text-muted-foreground">
              Enquiry records are restricted to authorised Metaskills staff.
            </p>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="Email" aria-label="Email"
              className="w-full rounded-sm border border-border bg-card px-4 py-3 text-sm" />
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}
              placeholder="Password" aria-label="Password"
              className="w-full rounded-sm border border-border bg-card px-4 py-3 text-sm" />
            {authError && <p className="text-xs text-destructive">{authError}</p>}
            <button type="submit"
              className="w-full rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110 transition">
              Sign in
            </button>
          </form>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 md:pt-32 pb-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="font-heading text-3xl font-bold text-foreground">Training enquiries</h1>
              <p className="text-sm text-muted-foreground mt-1">{rows.length} submitted</p>
            </div>
            <button onClick={() => supabase.auth.signOut()}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition">
              <LogOut className="h-4 w-4" /> Sign out
            </button>
          </div>

          {loading && <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />}

          {!loading && denied && (
            <p className="text-sm text-muted-foreground">
              This account does not have access to enquiry records.
            </p>
          )}

          {!loading && !denied && (
            <div className="overflow-x-auto border border-border rounded-sm">
              <table className="w-full text-sm">
                <caption className="sr-only">Submitted training enquiries</caption>
                <thead className="bg-muted text-left">
                  <tr>
                    <th scope="col" className="px-4 py-3">
                      <button onClick={() => setDesc((d) => !d)}
                        className="inline-flex items-center gap-1 font-semibold">
                        Date <ArrowUpDown className="h-3 w-3" />
                      </button>
                    </th>
                    <th scope="col" className="px-4 py-3 font-semibold">Name</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Email</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Organisation</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Audience</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Format</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Team</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Message</th>
                  </tr>
                </thead>
                <tbody>
                  {sorted.map((r) => (
                    <tr key={r.id} className="border-t border-border align-top">
                      <td className="px-4 py-3 whitespace-nowrap text-muted-foreground">
                        {new Date(r.created_at).toLocaleDateString("en-SG", {
                          year: "numeric", month: "short", day: "2-digit",
                        })}
                      </td>
                      <td className="px-4 py-3">{r.name}<div className="text-xs text-muted-foreground">{r.role}</div></td>
                      <td className="px-4 py-3"><a href={`mailto:${r.email}`} className="hover:text-accent">{r.email}</a></td>
                      <td className="px-4 py-3">{r.company}</td>
                      <td className="px-4 py-3">{r.audience}</td>
                      <td className="px-4 py-3">{r.format}</td>
                      <td className="px-4 py-3">{r.team_size}</td>
                      <td className="px-4 py-3 max-w-xs text-muted-foreground">{r.message}</td>
                    </tr>
                  ))}
                  {sorted.length === 0 && (
                    <tr><td colSpan={8} className="px-4 py-8 text-center text-muted-foreground">No enquiries yet.</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminEnquiriesPage;
