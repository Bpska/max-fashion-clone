import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ProductCard } from "./ProductCard";
import { products } from "@/lib/products";

const sizes = ["XS", "S", "M", "L", "XL", "XXL", "3XL"];
const colors = [
  { name: "Black", v: "#000" }, { name: "White", v: "#FFF" },
  { name: "Blue", v: "#2563eb" }, { name: "Green", v: "#16a34a" },
  { name: "Red", v: "#E31E24" }, { name: "Grey", v: "#6b7280" }
];
const categories = ["T-Shirts", "Shirts", "Jeans", "Joggers", "Shorts"];

function FilterGroup({ title, children, defaultOpen = true }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-[#EAEAEA] py-4">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between text-[13px] font-bold uppercase text-[#091F13] tracking-wide">
        {title}
        {open ? <ChevronUp size={18} color="#888" /> : <ChevronDown size={18} color="#888" />}
      </button>
      {open && <div className="mt-4">{children}</div>}
    </div>
  );
}

export function CategoryView({ title, breadcrumb, category }: { title: string; breadcrumb: string; category?: string }) {
  const [sort, setSort] = useState("Popular");
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const filteredProducts = category 
    ? products.filter(p => p.category === category)
    : products;

  const sorted = [...filteredProducts].sort((a, b) => {
    if (sort === "Price: Low to High") return a.price - b.price;
    if (sort === "Price: High to Low") return b.price - a.price;
    if (sort === "Discount") return b.discount - a.discount;
    return 0; // Popular / Recommended
  });

  return (
    <div className="max-container py-4 md:py-8 font-sans bg-white px-4 md:px-0">
      <div className="text-[10px] md:text-[12px] mb-4 md:mb-6 text-[#737373] flex gap-2 overflow-x-auto whitespace-nowrap no-scrollbar px-1">
        <span className="hover:text-black cursor-pointer">Home</span> 
        <span>/</span>
        <span className="text-[#091F13] font-medium">{breadcrumb}</span>
      </div>

      {/* Header section with Title and Product Count */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 md:mb-10 gap-4">
        <div>
          <h1 className="text-xl md:text-3xl font-black uppercase tracking-wider text-[#091F13]">
            {title} <span className="text-sm md:text-lg font-medium text-[#737373] ml-2">({sorted.length})</span>
          </h1>
          <div className="w-12 md:w-16 h-1 bg-[#B8933E] mt-2 rounded-full"></div>
        </div>
        
        <div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto border-t border-b md:border-none border-[#F5F5F5] py-2 md:py-0">
          <button 
            onClick={() => setShowMobileFilters(true)}
            className="md:hidden flex items-center gap-2 text-[12px] font-black uppercase tracking-widest text-[#091F13] px-2"
          >
            Filters
          </button>
          
          <div className="flex items-center gap-2 px-2">
            <span className="text-[11px] md:text-[13px] font-black uppercase tracking-wider text-[#091F13]">Sort By</span>
            <select 
              value={sort} 
              onChange={(e) => setSort(e.target.value)} 
              className="text-[11px] md:text-[13px] px-1 md:px-2 py-1 border-none outline-none font-bold text-[#091F13] cursor-pointer bg-transparent"
            >
              <option>Popular</option>
              <option>New</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Discount</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex gap-8 lg:gap-12">
        {/* Sidebar Filters - Desktop */}
        <aside className="hidden md:block w-[260px] flex-shrink-0 sticky top-24 h-max overflow-y-auto max-h-[calc(100vh-120px)] no-scrollbar">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-[14px] font-black uppercase tracking-widest text-[#091F13]">Refine Selection</h3>
            <button className="text-[11px] font-bold text-[#B8933E] uppercase tracking-wider hover:underline">Clear All</button>
          </div>
          
          <FilterGroup title="Categories">
            <div className="flex flex-col gap-3.5">
              {categories.map((c) => (
                <label key={c} className="flex items-center gap-3 text-[13px] font-medium text-[#091F13] cursor-pointer group">
                  <input type="checkbox" className="w-4.5 h-4.5 accent-[#091F13] rounded border-[#EAEAEA] cursor-pointer" /> 
                  <span className="group-hover:text-[#B8933E] transition-colors">{c}</span>
                </label>
              ))}
            </div>
          </FilterGroup>

          <FilterGroup title="Size Guide">
            <div className="grid grid-cols-4 gap-2">
              {sizes.map((s) => {
                const sel = selectedSizes.includes(s);
                return (
                  <button key={s}
                    onClick={() => setSelectedSizes((p) => sel ? p.filter(x => x !== s) : [...p, s])}
                    className={`h-10 rounded-none text-[11px] font-black transition-all ${sel ? 'bg-[#091F13] text-white' : 'bg-white text-[#091F13] border border-[#EAEAEA] hover:border-[#091F13]'}`}
                  >
                    {s}
                  </button>
                );
              })}
            </div>
          </FilterGroup>

          <FilterGroup title="Color Palette">
            <div className="flex flex-wrap gap-3.5">
              {colors.map((c) => (
                <button 
                  key={c.name} 
                  title={c.name} 
                  className="w-8 h-8 rounded-full border border-[#EAEAEA] hover:scale-110 transition-transform relative ring-offset-2 hover:ring-2 hover:ring-[#B8933E]" 
                  style={{ background: c.v }} 
                />
              ))}
            </div>
          </FilterGroup>

          <FilterGroup title="Offers">
            <div className="flex flex-col gap-3.5">
              {["10% & above", "20% & above", "30% & above", "50% & above"].map((d) => (
                <label key={d} className="flex items-center gap-3 text-[13px] font-medium text-[#091F13] cursor-pointer group">
                  <input type="checkbox" className="w-4.5 h-4.5 accent-[#B8933E] rounded border-[#EAEAEA]" /> 
                  <span className="group-hover:text-[#B8933E] transition-colors">{d}</span>
                </label>
              ))}
            </div>
          </FilterGroup>
        </aside>

        {/* Mobile Filter Drawer */}
        {showMobileFilters && (
          <div className="fixed inset-0 z-[110] md:hidden">
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setShowMobileFilters(false)} />
            <div className="absolute top-0 right-0 bottom-0 w-[85%] bg-white shadow-2xl animate-in slide-in-from-right duration-300">
              <div className="p-5 border-b flex items-center justify-between bg-[#091F13] text-white">
                <span className="font-black uppercase tracking-[0.2em] text-xs">Filter & Refine</span>
                <button onClick={() => setShowMobileFilters(false)} className="text-[#B8933E] font-bold text-xs uppercase tracking-widest">Close</button>
              </div>
              <div className="p-6 overflow-y-auto h-[calc(100%-120px)] no-scrollbar">
                <div className="mb-8">
                  <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#B8933E] mb-6">Categories</p>
                  <div className="grid grid-cols-2 gap-4">
                    {categories.map((c) => (
                      <label key={c} className="flex items-center gap-3 text-[13px] font-bold text-[#091F13]">
                        <input type="checkbox" className="w-5 h-5 accent-[#091F13]" /> {c}
                      </label>
                    ))}
                  </div>
                </div>
                <div className="mb-8 pt-8 border-t border-[#F5F5F5]">
                  <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#B8933E] mb-6">Sizes</p>
                  <div className="grid grid-cols-4 gap-2">
                    {sizes.map((s) => (
                      <button key={s} className="h-12 border border-[#EAEAEA] text-[12px] font-black text-[#091F13]">
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-[#F5F5F5]">
                <button 
                  onClick={() => setShowMobileFilters(false)}
                  className="w-full py-4 bg-[#091F13] text-white font-black uppercase tracking-[0.2em] text-[11px] hover:bg-[#B8933E] transition-colors"
                >
                  Show Results
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Product Grid */}
        <main className="flex-1">
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 md:gap-x-6 gap-y-8 md:gap-y-12">
            {sorted.map((p, i) => (
              <div key={p.id} className="fade-in-up" style={{ animationDelay: `${(i % 8) * 0.05}s` }}>
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
