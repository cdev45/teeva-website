import { useState, useEffect } from "react";
import { Link } from "wouter";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("teeva-cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("teeva-cookie-consent", "accepted");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem("teeva-cookie-consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
      style={{ backgroundColor: "#0F2439", borderTop: "1px solid rgba(212, 175, 55, 0.3)" }}
    >
      <div className="container flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-white/80 text-sm leading-relaxed max-w-2xl" style={{ fontFamily: "'Inter', sans-serif" }}>
          We use cookies to enhance your experience and analyze site traffic. Functional cookies are required for site operation.{" "}
          <Link href="/cookies" className="underline hover:text-white transition-colors" style={{ color: "#D4AF37" }}>
            Cookie Policy
          </Link>
        </p>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={reject}
            className="px-5 py-2 text-xs font-medium text-white/60 hover:text-white border border-white/20 hover:border-white/40 transition-all"
            style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.05em" }}
          >
            Reject
          </button>
          <button
            onClick={accept}
            className="teeva-btn-gold text-xs px-5 py-2"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
