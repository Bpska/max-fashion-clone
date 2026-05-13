import { Truck, RefreshCw, Gift } from "lucide-react";

export function UtilityBar() {
  return (
    <div style={{ background: "#1A1A1A" }} className="text-white text-[11px]" >
      <div className="max-container h-10 flex items-center justify-between" style={{ letterSpacing: "0.3px" }}>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5"><Truck size={13} /> Free Shipping on orders above ₹699</span>
          <span className="hidden md:flex items-center gap-1.5"><RefreshCw size={13} /> Return to Store — Shop Online, Return In-Store</span>
          <span className="hidden lg:flex items-center gap-1.5"><Gift size={13} /> Online Gift Card — Endless Fashion Choices</span>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <span>Download our Apps</span><span>|</span>
          <span>Store Locator</span><span>|</span>
          <span>Help</span>
        </div>
      </div>
    </div>
  );
}
