import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/signin")({
  component: SignIn,
  head: () => ({ meta: [{ title: "Sign In — Rhodium" }] }),
});

function SignIn() {
  const [tab, setTab] = useState<"signin" | "register">("signin");
  return (
    <div className="flex justify-center py-16 px-4">
      <div className="w-full max-w-[480px] p-12" style={{ border: "1px solid #E0E0E0", borderRadius: 4 }}>
        <div className="text-center mb-6">
          <span style={{ background: "#E31E24" }} className="text-white font-extrabold text-2xl px-3 py-1 tracking-wider">RHODIUM</span>
        </div>
        <div className="flex border-b mb-6" style={{ borderColor: "#E0E0E0" }}>
          {(["signin", "register"] as const).map((t) => (
            <button key={t} onClick={() => setTab(t)} className="flex-1 py-3 text-[13px] font-bold uppercase tracking-wider"
              style={{ color: tab === t ? "#E31E24" : "#333", borderBottom: tab === t ? "2px solid #E31E24" : "2px solid transparent" }}>
              {t === "signin" ? "Sign In" : "Register"}
            </button>
          ))}
        </div>

        {tab === "signin" ? (
          <form className="space-y-3">
            <input type="email" placeholder="Email" className="w-full h-11 px-3 text-[14px]" style={{ border: "1px solid #E0E0E0" }} />
            <input type="password" placeholder="Password" className="w-full h-11 px-3 text-[14px]" style={{ border: "1px solid #E0E0E0" }} />
            <a className="block text-right text-[12px]" style={{ color: "#E31E24" }}>Forgot Password?</a>
            <button type="button" className="w-full h-12 text-white text-[14px] font-bold uppercase tracking-wider" style={{ background: "#E31E24", letterSpacing: "1px" }}>Sign In</button>
            <div className="flex items-center gap-3 my-4"><div className="flex-1 h-px" style={{ background: "#E0E0E0" }} /><span className="text-[12px]" style={{ color: "#888" }}>OR</span><div className="flex-1 h-px" style={{ background: "#E0E0E0" }} /></div>
            <button type="button" className="w-full h-12 text-[13px] font-bold uppercase tracking-wider bg-white" style={{ border: "1px solid #E0E0E0", color: "#333" }}>Continue with Google</button>
          </form>
        ) : (
          <form className="space-y-3">
            <input placeholder="Full Name" className="w-full h-11 px-3 text-[14px]" style={{ border: "1px solid #E0E0E0" }} />
            <input type="email" placeholder="Email" className="w-full h-11 px-3 text-[14px]" style={{ border: "1px solid #E0E0E0" }} />
            <input placeholder="Mobile" className="w-full h-11 px-3 text-[14px]" style={{ border: "1px solid #E0E0E0" }} />
            <input type="password" placeholder="Password" className="w-full h-11 px-3 text-[14px]" style={{ border: "1px solid #E0E0E0" }} />
            <input type="password" placeholder="Confirm Password" className="w-full h-11 px-3 text-[14px]" style={{ border: "1px solid #E0E0E0" }} />
            <button type="button" className="w-full h-12 text-white text-[14px] font-bold uppercase tracking-wider" style={{ background: "#E31E24", letterSpacing: "1px" }}>Create Account</button>
          </form>
        )}
      </div>
    </div>
  );
}
