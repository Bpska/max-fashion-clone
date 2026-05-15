import { createFileRoute, Link } from "@tanstack/react-router";
import { HeroCarousel } from "@/components/HeroCarousel";
import { Truck, RefreshCw, ShieldCheck, Star } from "lucide-react";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import man2 from "@/image/man_2.jpg";
import man4 from "@/image/man_4.jpg";
import man5 from "@/image/man_5.jpg";
import man6 from "@/image/man_6.jpg";
import man8 from "@/image/man_8.jpg";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Rhodium — Shop Latest Styles for Women, Men & Kids" },
      {
        name: "description",
        content:
          "Explore new arrivals, summer edits and ethnic wear at Rhodium. Flat ₹300 off on ₹1999 with code RHODIUM300.",
      },
    ],
  }),
});

/* ── Main Category Data ─────────────────────────────────────── */
const mainCategories = [
  {
    id: "kids",
    label: "Kids Wear",
    emoji: "👶",
    color: "#FF6B9D",
    bg: "#FFF0F6",
    img: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=200&h=200&fit=crop",
    to: "/kids" as const,
    subs: [
      { label: "Boys (0–7 yrs)", img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=120&h=120&fit=crop" },
      { label: "Girls (0–7 yrs)", img: "https://images.unsplash.com/photo-1476234251651-f353703a034d?w=120&h=120&fit=crop" },
      { label: "Boys (8–14 yrs)", img: "https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?w=120&h=120&fit=crop" },
      { label: "Girls (8–14 yrs)", img: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=120&h=120&fit=crop" },
    ],
  },
  {
    id: "ladies",
    label: "Ladies Wear",
    emoji: "👗",
    color: "#C2185B",
    bg: "#FFF0F5",
    img: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=200&h=200&fit=crop",
    to: "/women" as const,
    subs: [
      { label: "Short Kurtis", img: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=120&h=120&fit=crop" },
      { label: "Long Kurtis", img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=120&h=120&fit=crop" },
    ],
  },
  {
    id: "mens",
    label: "Mens Wear",
    emoji: "👔",
    color: "#1565C0",
    bg: "#EFF6FF",
    img: man6,
    to: "/men" as const,
    subs: [
      { label: "Formal Shirts", img: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=120&h=120&fit=crop" },
      { label: "Formal Pants", img: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=120&h=120&fit=crop" },
      { label: "T-Shirts", img: man4 },
      { label: "Jeans", img: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=120&h=120&fit=crop" },
      { label: "Sports Wear", img: man5 },
    ],
  },
  {
    id: "innerwear",
    label: "Ladies Inner Wear",
    emoji: "🩱",
    color: "#7B1FA2",
    bg: "#F9F0FF",
    img: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=200&h=200&fit=crop",
    to: "/women" as const,
    subs: [
      { label: "Bras", img: "https://images.unsplash.com/photo-1617922001439-4a2e6562f328?w=120&h=120&fit=crop" },
      { label: "Panties", img: "https://images.unsplash.com/photo-1612030388074-30a4f1b3e606?w=120&h=120&fit=crop" },
      { label: "Camisoles", img: "https://images.unsplash.com/photo-1571513722275-4b41940f54b8?w=120&h=120&fit=crop" },
      { label: "Night Wear", img: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=120&h=120&fit=crop" },
    ],
  },
  {
    id: "sarees",
    label: "Sarees",
    emoji: "🥻",
    color: "#B8933E",
    bg: "#FFFBF0",
    img: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=200&h=200&fit=crop",
    to: "/women" as const,
    subs: [
      { label: "Cotton Sarees", img: "https://images.unsplash.com/photo-1617922001439-4a2e6562f328?w=120&h=120&fit=crop" },
      { label: "Silk Sarees", img: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=120&h=120&fit=crop" },
      { label: "Printed Sarees", img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=120&h=120&fit=crop" },
      { label: "Party Wear", img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=120&h=120&fit=crop" },
    ],
  },
];

/* ── Reusable components ──────────────────────────────────────── */
function BannerCard({
  src,
  label,
  h = 320,
  alt,
}: {
  src: string;
  label: string;
  h?: number;
  alt?: string;
}) {
  return (
    <div className="relative overflow-hidden group cursor-pointer rounded-sm" style={{ height: h }}>
      <img
        src={src}
        alt={alt ?? label}
        loading="lazy"
        className="img-cover transition-transform duration-500 group-hover:scale-[1.04]"
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent 55%)" }}
      />
      <span className="banner-label">{label}</span>
    </div>
  );
}

function SectionHeading({ title, viewAll }: { title: string; viewAll?: boolean }) {
  return (
    <div className="flex items-end justify-between mb-6">
      <h2 className="section-heading">{title}</h2>
      {viewAll && (
        <a
          className="text-xs font-bold uppercase tracking-wider cursor-pointer transition-colors"
          style={{ color: "#B8933E" }}
        >
          View All →
        </a>
      )}
    </div>
  );
}

/* ── Category Card Component ──────────────────────────────── */
function CategorySection() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="py-10 bg-white">
      <div className="max-container">
        <h2 className="section-heading mb-8">Shop by Category</h2>

        {/* 5 Main Category Icons Row */}
        <div className="flex justify-center gap-4 sm:gap-8 flex-wrap mb-8">
          {mainCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveId(activeId === cat.id ? null : cat.id)}
              className="flex flex-col items-center gap-2 group focus:outline-none"
              aria-expanded={activeId === cat.id}
            >
              <div
                className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden transition-all duration-300"
                style={{
                  boxShadow: activeId === cat.id
                    ? `0 0 0 3px ${cat.color}, 0 4px 20px rgba(0,0,0,0.15)`
                    : "0 2px 12px rgba(0,0,0,0.10)",
                  border: `3px solid ${activeId === cat.id ? cat.color : "transparent"}`,
                  transition: "box-shadow 0.25s, border-color 0.25s",
                }}
              >
                <img src={cat.img} alt={cat.label} className="img-cover" loading="lazy" />
                <div
                  className="absolute inset-0 flex items-end justify-center pb-1"
                  style={{
                    background: "linear-gradient(to top, rgba(0,0,0,0.45) 40%, transparent)",
                  }}
                >
                  <span className="text-white text-lg leading-none">{cat.emoji}</span>
                </div>
              </div>
              <span
                className="text-xs font-bold text-center leading-tight transition-colors"
                style={{ color: activeId === cat.id ? cat.color : "#333", maxWidth: 80 }}
              >
                {cat.label}
              </span>
            </button>
          ))}
        </div>

        {/* Sub-category panel — shown when a main category is active */}
        {activeId && (() => {
          const cat = mainCategories.find(c => c.id === activeId)!;
          return (
            <div
              className="rounded-2xl p-6 transition-all duration-300"
              style={{
                background: cat.bg,
                border: `1.5px solid ${cat.color}22`,
                animation: "fadeSlideDown 0.25s ease",
              }}
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="text-2xl">{cat.emoji}</span>
                <h3 className="text-base font-bold" style={{ color: cat.color }}>
                  {cat.label}
                </h3>
                <Link
                  to={cat.to}
                  className="ml-auto text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full text-white transition-opacity hover:opacity-80"
                  style={{ background: cat.color }}
                >
                  View All →
                </Link>
              </div>
              <div className="flex gap-4 flex-wrap justify-center sm:justify-start">
                {cat.subs.map((sub) => (
                  <Link
                    to={cat.to}
                    key={sub.label}
                    className="flex flex-col items-center gap-2 group"
                  >
                    <div
                      className="w-16 h-16 rounded-full overflow-hidden border-2 border-white group-hover:scale-110 transition-transform duration-200"
                      style={{ boxShadow: `0 2px 10px ${cat.color}33` }}
                    >
                      <img src={sub.img} alt={sub.label} className="img-cover" loading="lazy" />
                    </div>
                    <span
                      className="text-[11px] font-semibold text-center leading-tight group-hover:underline"
                      style={{ color: cat.color, maxWidth: 72 }}
                    >
                      {sub.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          );
        })()}
      </div>

      <style>{`
        @keyframes fadeSlideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

/* ── Home page ────────────────────────────────────────────────── */
function Home() {
  const menProducts = products.filter((_, idx) => [1, 3, 5, 8, 10].includes(idx));

  return (
    <>
      {/* Hero */}
      <HeroCarousel />

      {/* Promo strip */}
      <div
        className="text-white text-xs font-bold uppercase tracking-widest text-center py-2.5"
        style={{ background: "#091F13" }}
      >
        🎉&nbsp; Flat ₹300 OFF on ₹1999 &nbsp;|&nbsp; Code: MAXFASHION300 &nbsp;|&nbsp; Free Shipping
        above ₹699 &nbsp;🎉
      </div>

      {/* ── 5 Main Category Icons + Sub-icons ── */}
      <CategorySection />

      {/* Character Mode */}
      <section className="py-10 max-container">
        <SectionHeading title="Men's Style Edit" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <BannerCard src={man4} label="Casual Tees & Chinos" h={380} />
          <BannerCard src={man2} label="Smart Casuals" h={380} />
          <BannerCard src={man8} label="Sports & Active" h={380} />
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-10" style={{ background: "#fff" }}>
        <div className="max-container">
          <SectionHeading title="Trending Now" viewAll />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {menProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Full-width summer banner */}
      <section className="py-10 max-container">
        <SectionHeading title="Summer Ready" viewAll />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="col-span-2">
            <BannerCard
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&h=520&fit=crop"
              label="Dresses"
              h={360}
            />
          </div>
          <BannerCard
            src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=360&fit=crop"
            label="Shorts"
            h={170}
          />
          <BannerCard
            src="https://images.unsplash.com/photo-1588099768523-f4e6a5679d88?w=400&h=360&fit=crop"
            label="Floral Shirts"
            h={170}
          />
          <BannerCard
            src="https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=400&h=180&fit=crop"
            label="Co-ords"
            h={180}
          />
          <BannerCard
            src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=180&fit=crop"
            label="Swimwear"
            h={180}
          />
        </div>
      </section>

      {/* Ethnic banner */}
      <section className="py-10 max-container">
        <div
          className="relative overflow-hidden rounded-sm"
          style={{ height: "clamp(200px, 35vw, 340px)" }}
        >
          <img
            src="https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=1280&h=600&fit=crop"
            alt="Ethnic Edit"
            loading="lazy"
            className="img-cover"
          />
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.48)" }} />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
            <h3 className="text-2xl md:text-4xl font-extrabold uppercase tracking-wider mb-2">
              Ethnic Edit
            </h3>
            <p className="text-sm md:text-base mb-5 opacity-90">Kurtas, Kurtis & More</p>
            <button
              className="px-8 py-3 text-xs font-bold uppercase tracking-[1.5px] bg-white transition hover:bg-[#B8933E] hover:text-white"
              style={{ color: "#091F13", border: "2px solid #B8933E" }}
            >
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* Style Spotlight */}
      <section className="py-10 max-container">
        <SectionHeading title="Style Spotlight" viewAll />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <BannerCard
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=320&h=560&fit=crop"
            label="Western Wear"
            h={260}
          />
          <BannerCard
            src="https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=320&h=560&fit=crop"
            label="Ethnic Wear"
            h={260}
          />
          <BannerCard src={man5} label="Active Wear" h={260} />
          <BannerCard
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=320&h=560&fit=crop"
            label="Party Wear"
            h={260}
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12" style={{ background: "#fff" }}>
        <div className="max-container">
          <SectionHeading title="What Our Customers Say" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                name: "Priya S.",
                review:
                  "Love the quality! The kurta fits perfectly and the fabric is so soft. Will definitely buy again.",
                rating: 5,
              },
              {
                name: "Rahul M.",
                review:
                  "Best value for money. The chinos looked just like the photo and arrived in 2 days. Impressed!",
                rating: 5,
              },
              {
                name: "Ananya K.",
                review:
                  "Super stylish collection. Got so many compliments at the office party. The dress was a hit!",
                rating: 4,
              },
            ].map(({ name, review, rating }) => (
              <div
                key={name}
                className="p-6 rounded-lg"
                style={{ background: "#F9F9F3", border: "1px solid #E8E8D8" }}
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: rating }).map((_, j) => (
                    <Star key={j} size={14} fill="#B8933E" color="#B8933E" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#555" }}>
                  &ldquo;{review}&rdquo;
                </p>
                <p
                  className="text-xs font-bold uppercase tracking-wider"
                  style={{ color: "#091F13" }}
                >
                  {name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="py-12" style={{ background: "#F5F5DC" }}>
        <div className="max-container grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { Icon: Truck, title: "Free Shipping", desc: "On orders above ₹699" },
            {
              Icon: RefreshCw,
              title: "Easy 30-Day Returns",
              desc: "Hassle-free returns to any store",
            },
            { Icon: ShieldCheck, title: "Secure Payments", desc: "100% safe & encrypted" },
          ].map(({ Icon, title, desc }) => (
            <div key={title} className="bg-white p-8 text-center rounded-sm shadow-sm">
              <Icon size={40} style={{ color: "#091F13" }} className="mx-auto mb-3" />
              <h4 className="text-sm font-bold mb-1" style={{ color: "#333" }}>
                {title}
              </h4>
              <p className="text-xs" style={{ color: "#888" }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
