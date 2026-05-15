import { Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import type { Product } from "@/lib/products";
import { useStore } from "@/lib/store";

export function ProductCard({ product, showMoveToCart }: { product: Product; showMoveToCart?: boolean }) {
  const { toggleWishlist, inWishlist, addToCart, moveToCart } = useStore();
  const liked = inWishlist(product.id);

  return (
    <div className="group flex flex-col relative cursor-pointer font-sans">
      {/* Image Section */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
        <Link to="/product/$id" params={{ id: product.id }} className="block w-full h-full bg-[#f7f7f7]">
          <img 
            src={product.image} 
            alt={product.name} 
            loading="lazy" 
            className="img-cover transition-transform duration-[500ms] group-hover:scale-105" 
          />
        </Link>
        
        {/* Badges / Tags */}
        {product.badge && (
          <span className="absolute top-0 left-0 text-white text-[10px] font-bold uppercase px-2 py-1" style={{ background: product.badge === "SALE" ? "#00B852" : "#333" }}>
            {product.badge}
          </span>
        )}

        {/* Wishlist Button (Bewakoof style - clean, no background pill) */}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product);
          }}
          className="absolute top-2 right-2 p-1.5 transition-transform active:scale-90"
          aria-label="Wishlist"
        >
          <Heart size={20} fill={liked ? "#E31E24" : "rgba(255,255,255,0.8)"} color={liked ? "#E31E24" : "#A0A0A0"} strokeWidth={1.5} />
        </button>

        {/* Quick Add to Bag - slides up on hover */}
        <button
          onClick={(e) => {
            e.preventDefault();
            addToCart(product);
          }}
          className="absolute bottom-0 left-0 right-0 text-white text-[12px] font-bold uppercase tracking-widest h-10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
          style={{ background: "rgba(0, 0, 0, 0.85)", backdropFilter: "blur(4px)" }}
        >
          Add to Bag
        </button>
      </div>

      {/* Product Details Section */}
      <div className="pt-3 pb-1 px-1">
        {/* Brand & Name */}
        <div className="flex flex-col mb-1.5">
          <p className="text-[13px] font-bold text-[#2A2A2A] uppercase tracking-wide">
            {product.brand}
          </p>
          <Link to="/product/$id" params={{ id: product.id }}>
            <p className="text-[12px] text-[#737373] whitespace-nowrap overflow-hidden text-ellipsis mt-0.5">
              {product.name}
            </p>
          </Link>
        </div>


        {/* Cart Page specific action */}
        {showMoveToCart && (
          <button
            onClick={() => moveToCart(product)}
            className="mt-3 w-full h-9 text-[12px] font-bold uppercase tracking-wider transition-colors"
            style={{ border: "1px solid #333", color: "#333" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#333"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#333"; }}
          >
            Move to Cart
          </button>
        )}
      </div>
    </div>
  );
}
