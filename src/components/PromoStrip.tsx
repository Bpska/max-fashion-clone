import { useState } from "react";
import { X } from "lucide-react";

export function PromoStrip() {
  const [show, setShow] = useState(true);
  if (!show) return null;
  return (
    <div style={{ background: "#E31E24" }} className="text-white h-9 flex items-center relative">
      <div className="max-container w-full text-center text-[13px] font-medium">
        Sitewide offer! Flat ₹300 off on ₹1999. Code: <strong>RHODIUM300</strong>
      </div>
      <button onClick={() => setShow(false)} className="absolute right-4 top-1/2 -translate-y-1/2 text-white" aria-label="Close promo">
        <X size={16} />
      </button>
    </div>
  );
}
