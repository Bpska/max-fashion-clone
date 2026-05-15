import { Link } from "@tanstack/react-router";
import { useState, useRef } from "react";

type MenuKey = "KIDS WEAR" | "LADIES WEAR" | "MENS WEAR" | "LADIES INNER WEAR" | "SAREES";

const menuItems: { key: MenuKey; to: string }[] = [
  { key: "KIDS WEAR", to: "/kids" },
  { key: "LADIES WEAR", to: "/women" },
  { key: "MENS WEAR", to: "/men" },
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

      {mobileOpen && (
        <div className="md:hidden border-b bg-white" style={{ borderColor: "#E0E0E0" }}>
          <div className="flex flex-col py-2">
            {menuItems.map((item) => (
              <Link key={item.key} to={item.to} onClick={onClose} className="nav-item px-4 py-3 border-b" style={{ borderColor: "#E0E0E0" }}>{item.key}</Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
