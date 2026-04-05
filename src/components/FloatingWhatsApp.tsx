import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/6589483482?text=Hi%20I'm%20interested%20in%20your%20AI%20training%20and%20solutions.%20Can%20you%20advise"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-lg hover:bg-[#1da851] transition-all hover:scale-105 font-semibold text-sm"
      aria-label="Chat with Specialist"
    >
      <MessageCircle className="w-5 h-5" />
      Chat with Specialist
    </a>
  );
};

export default FloatingWhatsApp;
