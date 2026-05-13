import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ProductCard } from "./ProductCard";
import { products } from "@/lib/products";

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
const colors = [
  { name: "Red", v: "#E31E24" }, { name: "Black", v: "#000" }, { name: "White", v: "#FFF" },
  { name: "Blue", v: "#2563eb" }, { name: "Green", v: "#16a34a" },
];
const discounts = ["10% off", "20% off", "30% off", "40% off+"];

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="border-b py-3" style={{ borderColor: "#E0E0E0" }}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between text-[13px] font-bold uppercase" style={{ color: "#333" }}>
        {title}
        {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      {open && <div className="mt-3">{children}</div>}
    </div>
  );
}

export function CategoryView({ title, breadcrumb }: { title: string; breadcrumb: string }) {
  const [sort, setSort] = useState("Recommended");
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  const sorted = [...products].sort((a, b) => {
    if (sort === "Price: Low to High") return a.price - b.price;
    if (sort === "Price: High to Low") return b.price - a.price;
    if (sort === "Discount") return b.discount - a.discount;
    return 0;
  });

  return (
    <div className="max-container py-6">
      <div className="text-[12px] mb-4" style={{ color: "#888" }}>Home &gt; {breadcrumb}</div>
      <div className="flex gap-6">
        <aside className="hidden md:block w-[220px] flex-shrink-0">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-bold" style={{ color: "#333" }}>FILTERS</h3>
            <button className="text-[12px]" style={{ color: "#E31E24" }}>CLEAR ALL</button>
          </div>
          <FilterGroup title="Category">
            {["Tops", "Dresses", "Bottoms", "Kurtas", "Footwear"].map((c) => (
              <label key={c} className="flex items-center gap-2 text-[13px] py-1" style={{ color: "#333" }}>
                <input type="checkbox" /> {c}
              </label>
            ))}
          </FilterGroup>
          <FilterGroup title="Size">
            <div className="flex flex-wrap gap-2">
              {sizes.map((s) => {
                const sel = selectedSizes.includes(s);
                return (
                  <button key={s}
                    onClick={() => setSelectedSizes((p) => sel ? p.filter(x => x !== s) : [...p, s])}
                    className="w-10 h-9 text-[12px] font-medium"
                    style={{ background: sel ? "#E31E24" : "#fff", color: sel ? "#fff" : "#333", border: "1px solid #E0E0E0" }}>
                    {s}
                  </button>
                );
              })}
            </div>
          </FilterGroup>
          <FilterGroup title="Color">
            <div className="flex flex-wrap gap-2">
              {colors.map((c) => (
                <button key={c.name} title={c.name} className="w-5 h-5 rounded-full" style={{ background: c.v, border: "1px solid #E0E0E0" }} />
              ))}
            </div>
          </FilterGroup>
          <FilterGroup title="Price Range">
            <input type="range" min={0} max={3000} className="w-full accent-[#E31E24]" />
            <div className="flex justify-between text-[12px] mt-1" style={{ color: "#888" }}><span>₹0</span><span>₹3000</span></div>
          </FilterGroup>
          <FilterGroup title="Discount">
            {discounts.map((d) => (
              <label key={d} className="flex items-center gap-2 text-[13px] py-1" style={{ color: "#333" }}>
                <input type="checkbox" /> {d}
              </label>
            ))}
          </FilterGroup>
        </aside>

        <div className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-bold uppercase" style={{ color: "#333" }}>{title}</h1>
            <div className="flex items-center gap-4">
              <span className="text-[13px]" style={{ color: "#888" }}>{sorted.length} Products</span>
              <select value={sort} onChange={(e) => setSort(e.target.value)} className="text-[13px] px-3 py-2" style={{ border: "1px solid #E0E0E0" }}>
                <option>Recommended</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>New Arrivals</option>
                <option>Discount</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {sorted.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
