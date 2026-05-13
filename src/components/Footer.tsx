import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const cols = [
  { title: "ABOUT RHODIUM", links: ["About Us", "Stores", "Careers", "Press", "Sustainability"] },
  { title: "WOMEN", links: ["Tops", "Dresses", "Bottoms", "Kurtas", "Footwear", "Accessories"] },
  { title: "MEN", links: ["T-Shirts", "Shirts", "Trousers", "Footwear", "Innerwear"] },
  { title: "KIDS", links: ["Boys", "Girls", "Infants", "School Wear"] },
  { title: "SUPPORT", links: ["Help Centre", "Track Order", "Returns", "Store Locator", "Gift Cards"] },
];

export function Footer() {
  return (
    <footer style={{ background: "#1A1A1A" }} className="text-[var(--footer-txt)] mt-12">
      <div className="max-container py-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="text-[13px] font-bold uppercase tracking-[1px] mb-4" style={{ color: "#FFF" }}>{c.title}</h4>
            {c.title === "ABOUT RHODIUM" ? (
              <p className="text-[12px]" style={{ color: "#CCC", lineHeight: 1.6 }}>
                Rhodium is India's leading value fashion brand offering trend-forward styles for the entire family.
              </p>
            ) : (
              <ul className="space-y-2">
                {c.links.map((l) => (
                  <li key={l}><a className="text-[12px] hover:text-[#E31E24]" style={{ color: "#CCC" }}>{l}</a></li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <div style={{ background: "#111", borderTop: "1px solid #333" }}>
        <div className="max-container py-4 flex flex-col md:flex-row gap-3 items-center justify-between">
          <p className="text-[12px]" style={{ color: "#888" }}>© 2025 Rhodium India Pvt Ltd | Privacy Policy | Terms of Use | Sitemap</p>
          <div className="flex gap-4 text-white">
            <Instagram size={20} className="hover:text-[#E31E24] cursor-pointer" />
            <Facebook size={20} className="hover:text-[#E31E24] cursor-pointer" />
            <Twitter size={20} className="hover:text-[#E31E24] cursor-pointer" />
            <Youtube size={20} className="hover:text-[#E31E24] cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}
