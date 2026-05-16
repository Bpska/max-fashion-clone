import { Link } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { X, ChevronDown } from "lucide-react";

type MenuKey = "KIDS WEAR" | "LADIES WEAR" | "MENS WEAR" | "LADIES INNER WEAR" | "SAREES" | "SPORTS WEAR";

const menuItems: { key: MenuKey; to: string }[] = [
  { key: "KIDS WEAR", to: "/kids" },
  { key: "LADIES WEAR", to: "/women" },
  { key: "MENS WEAR", to: "/men" },
  { key: "SPORTS WEAR", to: "/sports" },
  { key: "LADIES INNER WEAR", to: "/women" },
  { key: "SAREES", to: "/women" },
];

const dropdowns: Partial<Record<MenuKey, { title: string; links: string[] }[]>> = {
  "KIDS WEAR": [
    { title: "Boys (0–7 yrs)", links: ["T-Shirts", "Shorts", "Jeans", "Shirts"] },
    { title: "Girls (0–7 yrs)", links: ["Dresses", "Tops", "Skirts", "Frocks"] },
    { title: "Boys (8–14 yrs)", links: ["T-Shirts", "Jeans", "Joggers", "Hoodies"] },
    { title: "Girls (8–14 yrs)", links: ["Tops", "Leggings", "Dresses", "Co-ords"] },
  ],
  "LADIES WEAR": [
    { title: "Short Kurtis", links: ["Printed", "Solid", "Embroidered", "Casual"] },
    { title: "Long Kurtis", links: ["Anarkali", "Straight", "A-Line", "Designer"] },
  ],
  "MENS WEAR": [
    { title: "Formal Shirts", links: ["Plain", "Checked", "Striped", "Full Sleeve"] },
    { title: "Formal Pants", links: ["Slim Fit", "Regular Fit", "Pleated", "Chinos"] },
    { title: "T-Shirts", links: ["Polo", "Crew Neck", "V-Neck", "Printed"] },
    { title: "Jeans", links: ["Slim Fit", "Regular", "Skinny", "Bootcut"] },
    { title: "Sports Wear", links: ["Track Pants", "Shorts", "Sports Tees", "Joggers"] },
  ],
  "LADIES INNER WEAR": [
    { title: "Bras", links: ["Sports Bra", "T-Shirt Bra", "Padded", "Wired"] },
    { title: "Panties", links: ["Briefs", "Boyshorts", "Bikini", "Thongs"] },
    { title: "Camisoles", links: ["Lace", "Spaghetti", "Slip", "Tank"] },
    { title: "Night Wear", links: ["Night Suits", "Nighty", "Robes", "Loungewear"] },
  ],
  "SAREES": [
    { title: "Cotton Sarees", links: ["Handloom", "Printed", "Plain", "Casual"] },
    { title: "Silk Sarees", links: ["Banarasi", "Kanjivaram", "Art Silk", "Georgette"] },
    { title: "Printed Sarees", links: ["Digital Print", "Block Print", "Floral", "Geometric"] },
    { title: "Party Wear", links: ["Designer", "Embellished", "Embroidered", "Sequin"] },
  ],
  "SPORTS WEAR": [
    { title: "Men's Sports", links: ["Tracksuits", "Shorts", "Tees", "Jackets"] },
    { title: "Women's Sports", links: ["Leggings", "Sports Bras", "Tanks", "Co-ords"] },
    { title: "Accessories", links: ["Gym Bags", "Socks", "Headbands", "Equipment"] },
  ],
};

export function MegaMenu({ mobileOpen, onClose }: { mobileOpen: boolean; onClose: () => void }) {
  const [active, setActive] = useState<MenuKey | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const open = (key: MenuKey) => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setActive(key), 200);
  };
  const close = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setActive(null), 150);
  };

  return (
    <>
      <nav className="hidden md:block border-b bg-white relative" style={{ borderColor: "#E0E0E0", height: 48 }} onMouseLeave={close}>
        <div className="max-container h-full flex items-center gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.key}
              to={item.to}
              onMouseEnter={() => open(item.key)}
              className="nav-item h-full flex items-center border-b-2 border-transparent hover:text-[#E31E24]"
              activeProps={{ style: { borderBottomColor: "#E31E24", color: "#E31E24" } }}
              style={{ transition: "color 0.2s" }}
            >
              {item.key}
            </Link>
          ))}
        </div>

        {active && dropdowns[active] && (
          <div
            onMouseEnter={() => open(active)}
            className="absolute left-0 right-0 top-full bg-white z-50"
            style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.1)" }}
          >
            <div className="max-container py-8 grid grid-cols-6 gap-8">
              {dropdowns[active]!.map((col) => (
                <div key={col.title}>
                  <h4 className="text-xs font-bold uppercase mb-3" style={{ color: "#333" }}>{col.title}</h4>
                  <ul className="space-y-2">
                    {col.links.map((l) => (
                      <li key={l}><a className="text-xs hover:text-[#E31E24]" style={{ color: "#666" }}>{l}</a></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
          
          {/* Menu Panel */}
          <div className="absolute top-0 left-0 bottom-0 w-[280px] bg-white shadow-2xl animate-in slide-in-from-left duration-300">
            <div className="p-6 border-b flex items-center justify-between" style={{ background: "#091F13" }}>
              <span className="font-bold text-sm tracking-widest uppercase text-[#B8933E]">Menu</span>
              <button onClick={onClose} className="p-1 text-[#B8933E]"><X size={20} /></button>
            </div>
            
            <div className="py-4 overflow-y-auto h-[calc(100%-80px)]">
              {menuItems.map((item) => (
                <div key={item.key}>
                  <button 
                    onClick={() => setActive(active === item.key ? null : item.key)}
                    className="w-full flex items-center justify-between px-6 py-4 border-b text-[13px] font-bold uppercase tracking-wide text-[#091F13]"
                    style={{ borderColor: "#F5F5F5" }}
                  >
                    {item.key}
                    <ChevronDown size={16} className={`transition-transform ${active === item.key ? 'rotate-180 text-[#B8933E]' : ''}`} />
                  </button>
                  
                  {active === item.key && dropdowns[item.key] && (
                    <div className="bg-[#F9F9F9] py-2">
                      {dropdowns[item.key]!.map((group) => (
                        <div key={group.title} className="px-8 py-2">
                          <p className="text-[11px] font-bold text-[#B8933E] uppercase mb-2">{group.title}</p>
                          <ul className="space-y-2 ml-2">
                            {group.links.map((l) => (
                              <li key={l}>
                                <Link 
                                  to={item.to} 
                                  onClick={onClose}
                                  className="text-[13px] text-[#091F13] block py-1.5 border-b border-transparent hover:border-[#B8933E] transition-all"
                                >
                                  {l}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
