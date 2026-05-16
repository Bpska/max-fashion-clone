import { createFileRoute, Link } from "@tanstack/react-router";
import { HeroCarousel } from "@/components/HeroCarousel";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { ShieldCheck, Truck, RotateCcw, Mail } from "lucide-react";
import man2 from "@/image/man_2.jpg";
import man4 from "@/image/man_4.jpg";
import man5 from "@/image/man_5.jpg";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Rhodium — Official Online Store" },
    ],
  }),
});

function Home() {
  const trendingProducts = products.filter((_, idx) => [1, 5, 8, 12].includes(idx));
  const newArrivals = products.filter((_, idx) => [2, 7, 10, 15].includes(idx));

  const premiumCategories = [
    { label: "Men's Edit", img: man4, link: "/men" },
    { label: "Women's Collection", img: products[0]?.image || "", link: "/women" },
    { label: "Kids Apparel", img: products.find(p => p.category === "Kids")?.image || "", link: "/kids" },
    { label: "Activewear", img: man5, link: "/search" },
  ];

  return (
    <div className="bg-white min-h-screen font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full">
        <HeroCarousel />
      </section>

      {/* Featured Categories - Circular Grid */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-container px-4">
          <div className="flex items-center justify-center gap-4 mb-10 md:mb-14">
            <div className="h-[1px] bg-[#EAEAEA] flex-1 max-w-[40px] md:max-w-[100px]" />
            <h2 className="text-center text-lg md:text-3xl font-black uppercase tracking-[0.2em] text-[#091F13]">
              Curated Categories
            </h2>
            <div className="h-[1px] bg-[#EAEAEA] flex-1 max-w-[40px] md:max-w-[100px]" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {premiumCategories.map(cat => (
              <Link key={cat.label} to={cat.link} className="group flex flex-col items-center gap-4">
                <div className="relative w-full aspect-square overflow-hidden bg-[#F9F9F9] rounded-full border-[6px] border-white shadow-lg ring-1 ring-[#EAEAEA] group-hover:ring-[#B8933E] transition-all duration-500">
                  <img src={cat.img} alt={cat.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                </div>
                <h3 className="text-[#091F13] text-[13px] md:text-[16px] font-black uppercase tracking-widest text-center group-hover:text-[#B8933E] transition-colors">{cat.label}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="py-16 md:py-24 bg-[#F9F9F9]">
        <div className="max-container px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 border-b border-[#EAEAEA] pb-6 gap-4">
            <div>
              <span className="text-[#B8933E] text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-2 block">Trending Now</span>
              <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-[#091F13]">Bestsellers</h2>
              <p className="text-[#737373] text-sm mt-2 font-medium">Handpicked favorites from the Rhodium collection.</p>
            </div>
            <Link to="/search" className="inline-flex items-center text-[12px] md:text-[13px] font-black uppercase tracking-widest text-[#B8933E] hover:text-[#091F13] transition-all group">
              View All Collection 
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {trendingProducts.map((p) => (
              <ProductCard key={p.id} product={p} showMoveToCart={false} />
            ))}
          </div>
        </div>
      </section>

      {/* Premium Lookbook Banner */}
      <section className="relative overflow-hidden">
        <div className="relative w-full aspect-[4/5] md:aspect-[21/8] bg-[#091F13] flex items-center">
           <img src={man2} className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply" alt="Lookbook" />
           <div className="relative z-10 max-container px-6 md:px-12 w-full">
              <div className="max-w-xl">
                <span className="text-[#B8933E] text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Editorial</span>
                <h3 className="text-3xl md:text-6xl font-black uppercase text-white leading-[1.1] mb-6">The Summer<br/><span className="text-[#B8933E]">Lookbook</span></h3>
                <p className="text-[#EAEAEA] text-sm md:text-lg font-medium mb-10 max-w-md leading-relaxed opacity-90">Experience the intersection of traditional craftsmanship and modern silhouette.</p>
                <Link to="/search" className="inline-block px-10 py-4 bg-white text-[#091F13] font-black uppercase text-xs md:text-sm hover:bg-[#B8933E] hover:text-white transition-all shadow-xl hover:-translate-y-1">
                  Explore The Drop
                </Link>
              </div>
           </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-container px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 border-b border-[#EAEAEA] pb-6 gap-4">
            <div>
              <span className="text-[#B8933E] text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-2 block">Fresh Drops</span>
              <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-[#091F13]">New Arrivals</h2>
              <p className="text-[#737373] text-sm mt-2 font-medium">Just arrived at the warehouse.</p>
            </div>
            <Link to="/search" className="inline-flex items-center text-[12px] md:text-[13px] font-black uppercase tracking-widest text-[#B8933E] hover:text-[#091F13] transition-all group">
              Shop New Styles
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {newArrivals.map((p) => (
              <ProductCard key={p.id} product={p} showMoveToCart={false} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Brands Marquee */}
      <section className="py-12 md:py-20 bg-[#F9F9F9] border-t border-b border-[#EAEAEA]">
        <div className="max-container px-4 text-center">
          <h3 className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em] text-[#737373] mb-12">House of Brands</h3>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700 cursor-default">
            {['Rhino', 'Puma', 'Levi\'s', 'Adidas', 'Vans'].map(brand => (
              <span key={brand} className="text-xl md:text-3xl font-black uppercase tracking-tighter text-[#091F13]">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 md:py-32 bg-[#E8F3ED]">
        <div className="max-container px-4 text-center max-w-4xl">
          <div className="w-16 h-[2px] bg-[#B8933E] mx-auto mb-8" />
          <h2 className="text-2xl md:text-5xl font-black uppercase tracking-tight text-[#091F13] mb-8 leading-tight">
            Commitment to<br/>Sustainability
          </h2>
          <p className="text-[#091F13] text-sm md:text-xl font-medium mb-12 leading-relaxed opacity-80">
            At Rhodium, we believe fashion shouldn't cost the Earth. Our eco-collection is crafted from 100% organic fibers and recycled materials, reducing our carbon footprint by 40%.
          </p>
          <Link to="/search" className="inline-block px-12 py-4 bg-[#091F13] text-white font-black uppercase text-xs md:text-sm hover:bg-[#B8933E] transition-all shadow-xl">
            View Eco Manifesto
          </Link>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-[#091F13] text-white overflow-hidden relative">
        <div className="max-container px-4 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">Inside Rhodium</h3>
            <p className="text-[#EAEAEA] text-sm md:text-lg opacity-70 leading-relaxed font-medium">Join our community for early access to limited edition drops and 15% off your first order.</p>
          </div>
          <div className="w-full max-w-lg">
            <form className="flex bg-white/5 backdrop-blur-md p-2 border border-white/10" onSubmit={e => e.preventDefault()}>
              <div className="flex items-center pl-4 pr-2 text-white/50">
                <Mail size={20} strokeWidth={1.5} />
              </div>
              <input type="email" placeholder="email@address.com" className="flex-1 h-14 bg-transparent text-white outline-none text-sm md:text-base px-2 placeholder:text-white/30" />
              <button className="px-8 md:px-12 bg-[#B8933E] text-white font-black uppercase text-[10px] md:text-xs hover:bg-white hover:text-[#091F13] transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Premium USP Section */}
      <section className="py-16 md:py-20 bg-white border-t border-[#EAEAEA]">
        <div className="max-container px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center max-w-6xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#F9F9F9] flex items-center justify-center mb-6 ring-1 ring-[#EAEAEA]">
                <ShieldCheck size={32} strokeWidth={1} className="text-[#B8933E]" />
              </div>
              <h4 className="text-[14px] md:text-[16px] font-black uppercase tracking-widest text-[#091F13] mb-2">Secure Transactions</h4>
              <p className="text-[#737373] text-[12px] md:text-[13px] font-medium leading-relaxed">Encrypted payments with 256-bit SSL security.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#F9F9F9] flex items-center justify-center mb-6 ring-1 ring-[#EAEAEA]">
                <RotateCcw size={32} strokeWidth={1} className="text-[#B8933E]" />
              </div>
              <h4 className="text-[14px] md:text-[16px] font-black uppercase tracking-widest text-[#091F13] mb-2">Effortless Returns</h4>
              <p className="text-[#737373] text-[12px] md:text-[13px] font-medium leading-relaxed">No-questions-asked 15 day return policy.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#F9F9F9] flex items-center justify-center mb-6 ring-1 ring-[#EAEAEA]">
                <Truck size={32} strokeWidth={1} className="text-[#B8933E]" />
              </div>
              <h4 className="text-[14px] md:text-[16px] font-black uppercase tracking-widest text-[#091F13] mb-2">Express Logistics</h4>
              <p className="text-[#737373] text-[12px] md:text-[13px] font-medium leading-relaxed">Free delivery on all premium orders above ₹999.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
