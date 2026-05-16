import { Link } from "@tanstack/react-router";
import { Search, User, Heart, ShoppingBag, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { useStore } from "@/lib/store";
import { MegaMenu } from "./MegaMenu";
import logo from "@/image/2nd-logo.png";

export function Header() {
  const { cart } = useStore();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const count = cart.reduce((s, i) => s + i.qty, 0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top Banner (Gold) */}
      <div className="bg-[#B8933E] text-white text-center py-1.5 text-[10px] md:text-[12px] font-bold tracking-wide px-4 truncate">
        Offers • Free Shipping on orders above ₹999 • Shop Now
      </div>

      {/* Main Navbar */}
      <div className={`sticky top-0 z-50 bg-white border-b border-[#EAEAEA] transition-all duration-300 ${scrolled ? 'shadow-md py-1' : 'py-2'}`}>
        <div className="max-container flex items-center justify-between gap-4 md:gap-6">
          
          {/* Logo & Main Links */}
          <div className="flex items-center gap-3 md:gap-8">
            <div className="flex items-center gap-3">
              <button onClick={() => setMobileOpen(true)} className="md:hidden p-1" aria-label="Menu">
                <Menu size={22} color="#091F13" />
              </button>
              <Link to="/" className="flex items-center">
                <img src={logo} alt="Rhodium" className="h-7 md:h-10 w-auto object-contain" />
              </Link>
            </div>
            
            <nav className="hidden md:flex items-center gap-6 mt-1">
              {['MEN', 'WOMEN', 'KIDS'].map(cat => (
                <Link key={cat} to={`/${cat.toLowerCase()}`} className="text-[13px] font-bold text-[#091F13] tracking-wide hover:text-[#B8933E] transition-colors border-b-2 border-transparent hover:border-[#B8933E] pb-4">
                  {cat}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3 md:gap-6 flex-1 justify-end">
            
            {/* Search Bar - Desktop */}
            <div className="hidden md:flex items-center flex-1 max-w-[320px] h-10 px-4 rounded-md bg-[#F5F5F5] border border-transparent focus-within:border-[#B8933E] focus-within:bg-white transition-all">
              <Search size={18} color="#737373" className="mr-2" />
              <input className="flex-1 bg-transparent outline-none text-[13px] text-[#091F13] placeholder-[#737373]" placeholder="Search products..." />
            </div>

            {/* Search Bar - Mobile Toggle */}
            <button 
              onClick={() => setSearchOpen(!searchOpen)} 
              className="md:hidden p-1 text-[#091F13]"
              aria-label="Toggle Search"
            >
              <Search size={22} />
            </button>

            <div className="w-[1px] h-6 bg-[#EAEAEA] hidden md:block" />

            {/* Icons */}
            <div className="flex items-center gap-3 md:gap-5 text-[#091F13]">
              <Link to="/signin" className="hidden md:flex items-center font-bold text-[12px] uppercase tracking-wider hover:text-[#B8933E] transition-colors">
                Login
              </Link>
              <Link to="/wishlist" aria-label="Wishlist" className="hover:scale-110 transition-transform">
                <Heart size={22} strokeWidth={1.5} />
              </Link>
              <Link to="/cart" aria-label="Cart" className="relative hover:scale-110 transition-transform">
                <ShoppingBag size={22} strokeWidth={1.5} />
                {count > 0 && (
                  <span className="absolute -top-1.5 -right-2 text-white text-[10px] font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center bg-[#B8933E] border-2 border-white">
                    {count}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Search Overlay */}
        {searchOpen && (
          <div className="md:hidden px-4 pb-3 pt-2 bg-white border-t border-[#F5F5F5] animate-in slide-in-from-top duration-300">
            <div className="flex items-center h-11 px-4 rounded-lg bg-[#F5F5F5] border border-[#EAEAEA]">
              <Search size={18} color="#737373" className="mr-2" />
              <input 
                className="flex-1 bg-transparent outline-none text-[14px] text-[#091F13] placeholder-[#737373]" 
                placeholder="Search for items..."
                autoFocus
              />
            </div>
          </div>
        )}
      </div>
      <MegaMenu mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
