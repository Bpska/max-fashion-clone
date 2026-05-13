import { createFileRoute, Link } from "@tanstack/react-router";
import { HeroCarousel } from "@/components/HeroCarousel";
import { Truck, RefreshCw, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Max Fashion — Shop Latest Styles for Women, Men & Kids" },
      { name: "description", content: "Explore new arrivals, summer edits and ethnic wear at Max Fashion. Flat ₹300 off on ₹1999 with code MAX300." },
    ],
  }),
});

const cats = [
  { label: "Women", img: "https://picsum.photos/seed/women/80/80", to: "/women" as const },
  { label: "Men", img: "https://picsum.photos/seed/men/80/80", to: "/men" as const },
  { label: "Kids", img: "https://picsum.photos/seed/kids/80/80", to: "/kids" as const },
  { label: "Sleepwear", img: "https://picsum.photos/seed/sleep/80/80", to: "/women" as const },
  { label: "Winterwear", img: "https://picsum.photos/seed/winter/80/80", to: "/women" as const },
  { label: "Sport", img: "https://picsum.photos/seed/sport/80/80", to: "/men" as const },
];

function BannerCard({ src, label, h = 320, alt }: { src: string; label: string; h?: number; alt?: string }) {
  return (
    <div className="relative overflow-hidden group cursor-pointer" style={{ height: h }}>
      <img src={src} alt={alt ?? label} loading="lazy" className="img-cover transition-transform duration-300 group-hover:scale-[1.02]" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55), transparent 50%)" }} />
      <span className="banner-label">{label}</span>
    </div>
  );
}

function SectionHeading({ title, viewAll }: { title: string; viewAll?: boolean }) {
  return (
    <div className="flex items-end justify-between mb-6">
      <h2 className="section-heading">{title}</h2>
      {viewAll && <a className="text-[12px] font-bold uppercase" style={{ color: "#E31E24" }}>View All →</a>}
    </div>
  );
}

function Home() {
  return (
    <>
      <HeroCarousel />

      {/* Category quick links */}
      <section className="py-6">
        <div className="max-container flex justify-center gap-6 md:gap-10 flex-wrap">
          {cats.map((c) => (
            <Link to={c.to} key={c.label} className="flex flex-col items-center gap-2 group">
              <div className="w-[72px] h-[72px] rounded-full overflow-hidden border-2 border-transparent group-hover:border-[#E31E24]" style={{ background: "#F5F5F5" }}>
                <img src={c.img} alt={c.label} className="img-cover" loading="lazy" />
              </div>
              <span className="text-[12px] group-hover:text-[#E31E24]" style={{ color: "#333" }}>{c.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Character Mode */}
      <section className="py-12 max-container">
        <SectionHeading title="Character Mode: ON" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <BannerCard src="https://picsum.photos/seed/girls/600/640" label="Girls' Zone" />
          <BannerCard src="https://picsum.photos/seed/boys/600/640" label="Boys' Zone" />
        </div>
        <div className="mt-4 relative overflow-hidden group" style={{ height: 180 }}>
          <img src="https://picsum.photos/seed/newseason/1280/360" alt="New Season" loading="lazy" className="img-cover transition-transform duration-300 group-hover:scale-[1.02]" />
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.4)" }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-white text-2xl md:text-3xl font-extrabold uppercase tracking-wider">New Season. New Looks.</h3>
          </div>
        </div>
      </section>

      {/* Summer Ready */}
      <section className="py-12 max-container">
        <SectionHeading title="Summer Ready" viewAll />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="md:col-span-2"><BannerCard src="https://picsum.photos/seed/summer1/800/520" label="Dresses" h={520} /></div>
          <BannerCard src="https://picsum.photos/seed/shorts/400/520" label="Shorts" h={250} />
          <BannerCard src="https://picsum.photos/seed/floral/400/520" label="Floral Shirts" h={250} />
          <BannerCard src="https://picsum.photos/seed/coods/400/520" label="Co-ords" h={250} />
          <BannerCard src="https://picsum.photos/seed/dresses/400/520" label="Swimwear" h={250} />
        </div>
      </section>

      {/* Style Spotlight */}
      <section className="py-12 max-container">
        <SectionHeading title="Style Spotlight" viewAll />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <BannerCard src="https://picsum.photos/seed/spot1/320/560" label="Western Wear" h={280} />
          <BannerCard src="https://picsum.photos/seed/spot2/320/560" label="Ethnic Wear" h={280} />
          <BannerCard src="https://picsum.photos/seed/spot3/320/560" label="Active Wear" h={280} />
          <BannerCard src="https://picsum.photos/seed/spot4/320/560" label="Party Wear" h={280} />
        </div>
      </section>

      {/* Ethnic Edit */}
      <section className="py-12 max-container">
        <div className="relative overflow-hidden" style={{ height: 300 }}>
          <img src="https://picsum.photos/seed/ethnic/1280/600" alt="Ethnic Edit" loading="lazy" className="img-cover" />
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.45)" }} />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
            <h3 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wider mb-2">Ethnic Edit</h3>
            <p className="text-base mb-5">Kurtas, Kurtis & More</p>
            <button className="px-8 py-3 text-[13px] font-bold uppercase tracking-[1px] bg-white" style={{ color: "#E31E24", border: "2px solid #E31E24" }}>Shop Now</button>
          </div>
        </div>
      </section>

      {/* Online Exclusives */}
      <section className="py-12 max-container">
        <SectionHeading title="Online Exclusives" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <BannerCard src="https://picsum.photos/seed/curves/420/480" label="Curves (Plus Size)" h={240} />
          <BannerCard src="https://picsum.photos/seed/bestsell/420/480" label="Best Sellers" h={240} />
          <BannerCard src="https://picsum.photos/seed/value/420/480" label="Value Packs" h={240} />
        </div>
      </section>

      {/* Footwear & Accessories */}
      <section className="py-12 max-container">
        <SectionHeading title="Footwear & Accessories Zone" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <BannerCard src="https://picsum.photos/seed/shoes/640/400" label="Footwear" h={200} />
          <BannerCard src="https://picsum.photos/seed/access/640/400" label="Accessories" h={200} />
        </div>
      </section>

      {/* We've Got You */}
      <section className="py-12" style={{ background: "#F5F5F5" }}>
        <div className="max-container grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { Icon: Truck, title: "Free Shipping", desc: "On orders above ₹699" },
            { Icon: RefreshCw, title: "Easy 30-Day Returns", desc: "Hassle-free returns to any store" },
            { Icon: ShieldCheck, title: "Secure Payments", desc: "100% safe & encrypted" },
          ].map(({ Icon, title, desc }) => (
            <div key={title} className="bg-white p-8 text-center" style={{ borderRadius: 4 }}>
              <Icon size={48} style={{ color: "#E31E24" }} className="mx-auto mb-3" />
              <h4 className="text-sm font-bold mb-1" style={{ color: "#333" }}>{title}</h4>
              <p className="text-[13px]" style={{ color: "#888" }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
