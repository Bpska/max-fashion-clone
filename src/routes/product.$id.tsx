import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Star, ChevronDown, ChevronUp } from "lucide-react";
import { getProduct, products } from "@/lib/products";
import { useStore } from "@/lib/store";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/product/$id")({
  component: ProductPage,
  head: ({ params }) => {
    const p = getProduct(params.id);
    return { meta: [{ title: `${p.name} — Max Fashion` }, { name: "description", content: `Buy ${p.name} at ₹${p.price}.` }, { property: "og:image", content: p.image }] };
  },
});

const thumbs = [
  "https://picsum.photos/seed/detail1/100/130",
  "https://picsum.photos/seed/detail2/100/130",
  "https://picsum.photos/seed/detail3/100/130",
  "https://picsum.photos/seed/detail4/100/130",
];
const mains = [
  "https://picsum.photos/seed/detail1/500/660",
  "https://picsum.photos/seed/detail2/500/660",
  "https://picsum.photos/seed/detail3/500/660",
  "https://picsum.photos/seed/detail4/500/660",
];
const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
const swatches = [{ n: "Red", v: "#E31E24" }, { n: "Black", v: "#000" }, { n: "Blue", v: "#2563eb" }];

function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [o, setO] = useState(false);
  return (
    <div className="border-b py-3" style={{ borderColor: "#E0E0E0" }}>
      <button onClick={() => setO(!o)} className="w-full flex justify-between items-center text-[13px] font-bold uppercase" style={{ color: "#333" }}>
        {title}{o ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      {o && <p className="mt-2 text-[13px]" style={{ color: "#666" }}>{children}</p>}
    </div>
  );
}

function ProductPage() {
  const { id } = Route.useParams();
  const p = getProduct(id);
  const { addToCart, toggleWishlist, inWishlist } = useStore();
  const [imgIdx, setImgIdx] = useState(0);
  const [size, setSize] = useState("M");
  const [color, setColor] = useState(swatches[0].n);
  const [qty, setQty] = useState(1);

  return (
    <div className="max-container py-6">
      <div className="text-[12px] mb-4" style={{ color: "#888" }}>Home &gt; Women &gt; Dresses &gt; {p.name}</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <div className="flex gap-3">
          <div className="flex flex-col gap-2">
            {thumbs.map((t, i) => (
              <button key={i} onClick={() => setImgIdx(i)} className="w-[100px] h-[130px] overflow-hidden" style={{ border: imgIdx === i ? "2px solid #E31E24" : "1px solid #E0E0E0" }}>
                <img src={t} alt={`thumb ${i}`} className="img-cover" />
              </button>
            ))}
          </div>
          <div className="flex-1 overflow-hidden" style={{ maxWidth: 500, height: 660 }}>
            <img src={mains[imgIdx]} alt={p.name} className="img-cover" />
          </div>
        </div>

        <div className="md:pl-12">
          <p className="text-[13px] uppercase" style={{ color: "#888" }}>{p.brand}</p>
          <h1 className="text-[22px] font-bold" style={{ color: "#333" }}>{p.name}</h1>
          <div className="flex items-center gap-2 mt-2">
            {[1,2,3,4].map(i => <Star key={i} size={16} fill="#fbbf24" color="#fbbf24" />)}
            <Star size={16} color="#fbbf24" />
            <span className="text-[13px]" style={{ color: "#888" }}>4.2 (312 reviews)</span>
          </div>
          <div className="flex items-baseline gap-3 mt-3">
            <span className="text-[22px] font-bold" style={{ color: "#E31E24" }}>₹{p.price}</span>
            <span className="text-[14px] line-through" style={{ color: "#888" }}>₹{p.mrp}</span>
            <span className="text-[14px] font-bold" style={{ color: "#E31E24" }}>{p.discount}% OFF</span>
          </div>

          <div className="border-t my-5" style={{ borderColor: "#E0E0E0" }} />

          <div className="flex items-center justify-between mb-3">
            <p className="text-[13px] font-bold uppercase" style={{ color: "#333" }}>Select Size</p>
            <a className="text-[12px]" style={{ color: "#E31E24" }}>Size Guide</a>
          </div>
          <div className="flex gap-2 mb-5">
            {sizes.map((s) => (
              <button key={s} onClick={() => setSize(s)} className="w-11 h-10 text-[13px] font-medium"
                style={{ background: size === s ? "#E31E24" : "#fff", color: size === s ? "#fff" : "#333", border: "1px solid #E0E0E0" }}>
                {s}
              </button>
            ))}
          </div>

          <p className="text-[13px] font-bold uppercase mb-3" style={{ color: "#333" }}>Color</p>
          <div className="flex gap-3 mb-5">
            {swatches.map((s) => (
              <button key={s.n} onClick={() => setColor(s.n)} className="w-7 h-7 rounded-full"
                style={{ background: s.v, boxShadow: color === s.n ? "0 0 0 2px #fff, 0 0 0 4px #E31E24" : "0 0 0 1px #E0E0E0" }} />
            ))}
          </div>

          <div className="flex items-center gap-3 mb-5">
            <span className="text-[13px] font-bold uppercase" style={{ color: "#333" }}>Quantity</span>
            <div className="flex items-center" style={{ border: "1px solid #E0E0E0" }}>
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-9 h-9">−</button>
              <span className="w-10 text-center text-[14px]">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="w-9 h-9">+</button>
            </div>
          </div>

          <button onClick={() => addToCart(p, { size, color })} className="w-full h-12 text-white text-base font-bold uppercase tracking-wider mb-3" style={{ background: "#E31E24", letterSpacing: "1px" }}>
            Add to Cart
          </button>
          <button onClick={() => toggleWishlist(p)} className="w-full h-12 bg-white text-base font-bold uppercase tracking-wider"
            style={{ color: "#E31E24", border: "2px solid #E31E24", letterSpacing: "1px" }}>
            {inWishlist(p.id) ? "In Wishlist" : "Add to Wishlist"}
          </button>

          <div className="mt-6">
            <Accordion title="Fabric">100% Cotton, breathable and soft.</Accordion>
            <Accordion title="Fit">Regular fit, true to size.</Accordion>
            <Accordion title="Care Instructions">Machine wash cold. Tumble dry low.</Accordion>
            <Accordion title="Country of Origin">India</Accordion>
          </div>
        </div>
      </div>

      <section className="mt-16">
        <h2 className="section-heading mb-6">You May Also Like</h2>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {products.slice(0, 6).map((rp) => (
            <div key={rp.id} className="flex-shrink-0 w-56"><ProductCard product={rp} /></div>
          ))}
        </div>
      </section>
    </div>
  );
}
