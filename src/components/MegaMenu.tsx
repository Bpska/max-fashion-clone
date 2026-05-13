import { Link } from "@tanstack/react-router";
import { useState, useRef } from "react";

type MenuKey = "WOMEN" | "MEN" | "KIDS" | "KIDS FEST" | "SLEEPWEAR" | "GENZ STORE";

const menuItems: { key: MenuKey; to: string }[] = [
  { key: "KIDS FEST", to: "/kids" },
  { key: "WOMEN", to: "/women" },
  { key: "MEN", to: "/men" },
  { key: "KIDS", to: "/kids" },
  { key: "SLEEPWEAR", to: "/women" },
  { key: "GENZ STORE", to: "/women" },
];

const dropdowns: Partial<Record<MenuKey, { title: string; links: string[] }[]>> = {
  WOMEN: [
    { title: "Topwear", links: ["T-Shirts", "Tops", "Shirts", "Sweatshirts"] },
    { title: "Bottomwear", links: ["Jeans", "Trousers", "Skirts", "Shorts"] },
    { title: "Dresses & Jumpsuits", links: ["Maxi", "Midi", "Mini", "Jumpsuits"] },
    { title: "Indian Wear", links: ["Kurtas", "Suits", "Sarees", "Dupattas"] },
    { title: "Sleepwear", links: ["Night Suits", "Robes", "Loungewear"] },
    { title: "Footwear", links: ["Heels", "Flats", "Sneakers", "Sandals"] },
  ],
  MEN: [
    { title: "T-Shirts", links: ["Polo", "Crew Neck", "V-Neck", "Henley"] },
    { title: "Shirts", links: ["Casual", "Formal", "Linen", "Printed"] },
    { title: "Trousers", links: ["Chinos", "Formal", "Casual", "Joggers"] },
    { title: "Jeans", links: ["Slim Fit", "Regular", "Skinny", "Bootcut"] },
    { title: "Sport", links: ["T-Shirts", "Shorts", "Track Pants"] },
    { title: "Footwear", links: ["Sneakers", "Loafers", "Sandals", "Formal"] },
  ],
  KIDS: [
    { title: "Boys (0-14 yrs)", links: ["T-Shirts", "Shirts", "Shorts", "Jeans"] },
    { title: "Girls (0-14 yrs)", links: ["Dresses", "Tops", "Skirts", "Leggings"] },
    { title: "Infants", links: ["Rompers", "Sets", "Bibs", "Shoes"] },
    { title: "School Wear", links: ["Uniforms", "Bags", "Shoes"] },
    { title: "Accessories", links: ["Caps", "Belts", "Bags"] },
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
