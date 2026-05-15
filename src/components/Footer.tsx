import {
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  MessageCircle,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import logo from "@/image/2nd-logo.png";

const cols = [
  {
    title: "LADIES WEAR",
    links: ["Short Kurtis", "Long Kurtis", "Sarees", "Dupattas", "Accessories"],
  },
  { title: "MENS WEAR", links: ["Formal Shirts", "Formal Pants", "T-Shirts", "Jeans", "Sports Wear"] },
  { title: "KIDS WEAR", links: ["Boys (0–7 yrs)", "Girls (0–7 yrs)", "Boys (8–14 yrs)", "Girls (8–14 yrs)"] },
  {
    title: "SUPPORT",
    links: ["Help Centre", "Track Order", "Easy Returns", "Store Locator", "Gift Cards"],
  },
];

const WHATSAPP_NUMBER = "919876543210"; // Replace with real number

export function Footer() {
  return (
    <footer style={{ background: "#091F13" }} className="mt-16">
      {/* WhatsApp sticky CTA */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Rhodium!%20I%20need%20help%20with%20my%20order.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full shadow-2xl text-white text-sm font-bold transition-transform hover:scale-105 active:scale-95"
        style={{ background: "#25D366" }}
      >
        <MessageCircle size={22} fill="white" />
        <span className="hidden sm:inline">Chat with Us</span>
      </a>

      {/* Main footer grid */}
      <div className="max-container pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="mb-5">
              <img src={logo} alt="Rhodium" className="h-20 w-auto object-contain" style={{ filter: "brightness(0) invert(1)" }} />
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#AAB8A0" }}>
              Rhodium is a premium fashion brand — trend-forward styles for the entire
              family at prices you'll love.
            </p>
            <div className="flex flex-col gap-2 text-sm" style={{ color: "#AAB8A0" }}>
              <span className="flex items-center gap-2">
                <MapPin size={15} /> 12, Fashion Street, Mumbai — 400001
              </span>
              <span className="flex items-center gap-2">
                <Phone size={15} /> +91 98765 43210
              </span>
              <span className="flex items-center gap-2">
                <Mail size={15} /> care@rhodiumindia.com
              </span>
            </div>
          </div>

          {/* Link columns */}
          {cols.map((c) => (
            <div key={c.title} className="lg:col-span-1">
              <h4
                className="text-xs font-bold uppercase tracking-[2px] mb-4 pb-2"
                style={{ color: "#B8933E", borderBottom: "1px solid #1E3824" }}
              >
                {c.title}
              </h4>
              <ul className="space-y-2">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      className="text-sm transition-colors cursor-pointer"
                      style={{ color: "#9DB09A" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#B8933E")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#9DB09A")}
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div
          className="mt-12 rounded-xl p-6 flex flex-col md:flex-row items-center gap-4"
          style={{ background: "#0D2B1A" }}
        >
          <div className="flex-1">
            <h4 className="text-white font-bold text-lg mb-1">Stay in the Loop</h4>
            <p className="text-sm" style={{ color: "#AAB8A0" }}>
              Get exclusive deals, new arrivals & style tips straight to your inbox.
            </p>
          </div>
          <div className="flex w-full md:w-auto gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 md:w-64 px-4 py-2 rounded-lg text-sm outline-none"
              style={{ background: "#0A1F12", border: "1px solid #1E3824", color: "#fff" }}
            />
            <button
              className="px-5 py-2 rounded-lg text-white font-bold text-sm whitespace-nowrap transition-opacity hover:opacity-90"
              style={{ background: "#B8933E" }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid #163623", background: "#041009" }}>
        <div className="max-container py-4 flex flex-col sm:flex-row gap-3 items-center justify-between">
          <p className="text-xs text-center" style={{ color: "#5A7060" }}>
            © 2026 Rhodium Fashion Pvt Ltd &nbsp;|&nbsp; Privacy Policy &nbsp;|&nbsp; Terms of Use
            &nbsp;|&nbsp; Sitemap
          </p>
          <div className="flex gap-4">
            {[
              { Icon: Instagram, label: "Instagram" },
              { Icon: Facebook, label: "Facebook" },
              { Icon: Twitter, label: "Twitter" },
              { Icon: Youtube, label: "YouTube" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="text-white transition-colors"
                onMouseEnter={(e) => (e.currentTarget.style.color = "#B8933E")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
