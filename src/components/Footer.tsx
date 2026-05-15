import {
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  MessageCircle,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  ShieldCheck,
  CreditCard,
  Truck,
  RefreshCw,
} from "lucide-react";
import logo from "@/image/2nd-logo.png";

const footerLinks = [
  {
    title: "LADIES WEAR",
    links: [
      { name: "Short Kurtis", to: "/women" },
      { name: "Long Kurtis", to: "/women" },
      { name: "Sarees", to: "/women" },
      { name: "Dupattas", to: "/women" },
      { name: "Accessories", to: "/women" },
    ],
  },
  {
    title: "MENS WEAR",
    links: [
      { name: "Formal Shirts", to: "/men" },
      { name: "Formal Pants", to: "/men" },
      { name: "T-Shirts", to: "/men" },
      { name: "Jeans", to: "/men" },
      { name: "Sports Wear", to: "/men" },
    ],
  },
  {
    title: "KIDS WEAR",
    links: [
      { name: "Boys (0–7 yrs)", to: "/kids" },
      { name: "Girls (0–7 yrs)", to: "/kids" },
      { name: "Boys (8–14 yrs)", to: "/kids" },
      { name: "Girls (8–14 yrs)", to: "/kids" },
    ],
  },
  {
    title: "SUPPORT",
    links: [
      { name: "Help Centre", to: "#" },
      { name: "Track Order", to: "#" },
      { name: "Easy Returns", to: "#" },
      { name: "Store Locator", to: "#" },
      { name: "Gift Cards", to: "#" },
    ],
  },
];

const WHATSAPP_NUMBER = "919876543210";

export function Footer() {
  return (
    <footer className="mt-20 bg-[#091F13] text-white overflow-hidden relative">
      {/* Decorative Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#B8933E] to-transparent opacity-50" />
      
      {/* WhatsApp sticky CTA */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Rhodium!%20I%20need%20help%20with%20my%20order.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.4)] text-white text-sm font-bold transition-all hover:scale-110 active:scale-95 group"
        style={{ background: "#25D366" }}
      >
        <MessageCircle size={20} fill="white" className="group-hover:rotate-12 transition-transform" />
        <span className="hidden sm:inline">Concierge Support</span>
      </a>

      {/* 1. Value Props Section */}
      <div className="border-b border-[#1E3824]">
        <div className="max-container py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Truck, title: "Swift Delivery", desc: "Across India in 2-4 days" },
            { icon: RefreshCw, title: "Hassle-Free Returns", desc: "Easy 30-day exchange" },
            { icon: CreditCard, title: "Secure Checkout", desc: "100% encrypted payments" },
            { icon: ShieldCheck, title: "Premium Quality", desc: "Curated luxury fabrics" },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center lg:items-start lg:text-left gap-3 group">
              <div className="w-12 h-12 rounded-xl bg-[#0D2B1A] flex items-center justify-center border border-[#1E3824] group-hover:border-[#B8933E] transition-colors">
                <item.icon size={22} className="text-[#B8933E]" />
              </div>
              <div>
                <h4 className="text-sm font-bold tracking-wide uppercase">{item.title}</h4>
                <p className="text-xs mt-1 text-[#9DB09A]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Main Footer Content */}
      <div className="max-container pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Identity */}
          <div className="lg:col-span-4 pr-0 lg:pr-12">
            <div className="mb-8 group cursor-pointer inline-block">
              <img 
                src={logo} 
                alt="Rhodium" 
                className="h-20 w-auto object-contain transition-transform group-hover:scale-105" 
                style={{ filter: "brightness(0) invert(1)" }} 
              />
            </div>
            <p className="text-[15px] leading-relaxed text-[#9DB09A] mb-8 italic font-serif">
              "Rhodium is a premium fashion brand — trend-forward styles for the entire family at prices you'll love."
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4 text-sm text-[#9DB09A] hover:text-white transition-colors cursor-pointer group">
                <div className="mt-1 p-2 rounded-lg bg-[#0D2B1A] group-hover:bg-[#B8933E] group-hover:text-black transition-all">
                  <MapPin size={16} />
                </div>
                <span>12, Fashion Street, Mumbai — 400001</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-[#9DB09A] hover:text-white transition-colors cursor-pointer group">
                <div className="p-2 rounded-lg bg-[#0D2B1A] group-hover:bg-[#B8933E] group-hover:text-black transition-all">
                  <Phone size={16} />
                </div>
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-[#9DB09A] hover:text-white transition-colors cursor-pointer group">
                <div className="p-2 rounded-lg bg-[#0D2B1A] group-hover:bg-[#B8933E] group-hover:text-black transition-all">
                  <Mail size={16} />
                </div>
                <span>care@rhodiumindia.com</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {footerLinks.map((section) => (
              <div key={section.title} className="col-span-1">
                <h4 className="text-[13px] font-bold tracking-[2px] uppercase mb-6 text-[#B8933E] relative inline-block">
                  {section.title}
                  <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-[#B8933E] opacity-50" />
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.to} 
                        className="text-sm text-[#9DB09A] hover:text-white transition-all hover:translate-x-1 inline-block"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter / Experience */}
          <div className="lg:col-span-3">
            <h4 className="text-[13px] font-bold tracking-[2px] uppercase mb-6 text-[#B8933E]">
              The Inner Circle
            </h4>
            <p className="text-sm text-[#9DB09A] mb-6">
              Subscribe to unlock early access, private sales, and curated style edits.
            </p>
            <div className="relative mb-8">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-[#0D2B1A] border border-[#1E3824] rounded-lg py-3 px-4 pr-12 text-sm focus:outline-none focus:border-[#B8933E] transition-colors"
              />
              <button className="absolute right-2 top-1.5 p-1.5 bg-[#B8933E] text-black rounded-md hover:scale-105 transition-transform active:scale-95">
                <ArrowRight size={18} />
              </button>
            </div>
            
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
                  className="w-10 h-10 rounded-full border border-[#1E3824] flex items-center justify-center text-[#9DB09A] hover:text-[#B8933E] hover:border-[#B8933E] transition-all hover:-translate-y-1"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Bar */}
      <div className="bg-[#041009] py-8">
        <div className="max-container flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6 text-[11px] font-medium tracking-wider text-[#5A7060] uppercase">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="w-1 h-1 rounded-full bg-[#1E3824]" />
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <span className="w-1 h-1 rounded-full bg-[#1E3824]" />
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
          <p className="text-[11px] font-medium tracking-wider text-[#5A7060] uppercase text-center">
            © 2026 Rhodium Fashion Pvt Ltd • All Rights Reserved
          </p>
          <div className="flex items-center gap-4 opacity-40 grayscale">
            {/* Payment Icons Placeholder */}
            <CreditCard size={20} />
            <ShieldCheck size={20} />
          </div>
        </div>
      </div>
    </footer>
  );
}

