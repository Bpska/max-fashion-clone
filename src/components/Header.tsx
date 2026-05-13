import { Link } from "@tanstack/react-router";
import { Search, User, Heart, ShoppingBag, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { useStore } from "@/lib/store";
import { MegaMenu } from "./MegaMenu";

export function Header() {
  const { cart } = useStore();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const count = cart.reduce((s, i) => s + i.qty, 0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50 bg-white" style={{ boxShadow: scrolled ? "0 2px 8px rgba(0,0,0,0.1)" : "none", transition: "box-shadow 0.2s" }}>
      <div className="border-b" style={{ borderColor: "#E0E0E0" }}>
        <div className="max-container h-16 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center">
            <span style={{ background: "#E31E24" }} className="text-white font-extrabold text-2xl px-3 py-1 leading-none tracking-wider">MAX</span>
          </Link>

          <div className="hidden md:flex items-center flex-1 max-w-[420px] mx-8 h-10 px-3 rounded-sm" style={{ background: "#F5F5F5", border: "1px solid #E0E0E0" }}>
            <input className="flex-1 bg-transparent outline-none text-[13px]" placeholder="Search for products, brands and more" />
            <Link to="/search" aria-label="Search"><Search size={18} style={{ color: "#E31E24" }} /></Link>
          </div>

          <div className="hidden md:flex items-center gap-6" style={{ color: "#333333" }}>
            <Link to="/signin" className="flex flex-col items-center gap-0.5"><User size={22} /><span className="text-[11px]">Sign In</span></Link>
            <Link to="/wishlist" className="flex flex-col items-center gap-0.5"><Heart size={22} /><span className="text-[11px]">Favourites</span></Link>
            <Link to="/cart" className="flex flex-col items-center gap-0.5 relative">
              <div className="relative">
                <ShoppingBag size={22} />
                {count > 0 && (
                  <span className="absolute -top-1.5 -right-2 text-white text-[10px] font-bold rounded-full min-w-[16px] h-4 px-1 flex items-center justify-center" style={{ background: "#E31E24" }}>{count}</span>
                )}
              </div>
              <span className="text-[11px]">Basket</span>
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <button onClick={() => setMobileOpen((o) => !o)} aria-label="Menu"><Menu size={24} /></button>
            <Link to="/cart" className="relative">
              <ShoppingBag size={22} />
              {count > 0 && <span className="absolute -top-1 -right-2 text-white text-[10px] font-bold rounded-full min-w-[16px] h-4 px-1 flex items-center justify-center" style={{ background: "#E31E24" }}>{count}</span>}
            </Link>
          </div>
        </div>
      </div>
      <MegaMenu mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </div>
  );
}
