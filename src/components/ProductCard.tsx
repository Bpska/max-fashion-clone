import { Link } from "@tanstack/react-router";
import { Heart, Star } from "lucide-react";
import type { Product } from "@/lib/products";
import { useStore } from "@/lib/store";

export function ProductCard({ product, showMoveToCart }: { product: Product; showMoveToCart?: boolean }) {
  const { toggleWishlist, inWishlist, addToCart, moveToCart } = useStore();
  const liked = inWishlist(product.id);

  return (
    <div className="group flex flex-col relative cursor-pointer font-sans mb-4">
      {/* Image Section */}
      <div className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-sm border border-[#F5F5F5]" style={{ aspectRatio: "3/4" }}>
        <Link to="/product/$id" params={{ id: product.id }} className="block w-full h-full bg-[#f7f7f7]">
          <img 
            src={product.image} 
            alt={product.name} 
            loading="lazy" 
            className="w-full h-full object-cover transition-transform duration-[500ms] group-hover:scale-105" 
          />
        </Link>
        
        {/* Badges / Tags */}
        {product.badge && (
          <span className="absolute top-0 left-0 bg-gray-800/80 text-white text-[10px] font-bold uppercase px-2 py-1 rounded-br-lg">
            {product.badge === "SALE" ? "BEST SELLER" : "NEW ARRIVAL"}
          </span>
        )}

        {/* Rating Pill */}
        <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm px-1.5 py-0.5 rounded-sm flex items-center gap-1 text-[10px] font-bold text-[#2D2D2D] shadow-sm">
          <Star size={10} fill="#FFC107" color="#FFC107" />
          4.{Math.floor(Math.random() * 5) + 5}
        </div>

        {/* Quick Add to Bag - slides up on hover */}
        <button
          onClick={(e) => {
            e.preventDefault();
            addToCart(product);
          }}
          className="absolute bottom-0 left-0 right-0 text-white text-[12px] font-bold uppercase tracking-widest h-10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-black/80 backdrop-blur-sm"
        >
          Add to Bag
        </button>
      </div>

      {/* Product Details Section */}
      <div className="pt-3 pb-1 px-1 relative flex flex-col flex-grow">
        {/* Wishlist Icon */}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product);
          }}
          className="absolute top-2 right-1 p-1 transition-transform active:scale-90"
          aria-label="Wishlist"
        >
          <Heart size={18} fill={liked ? "#E31E24" : "transparent"} color={liked ? "#E31E24" : "#A0A0A0"} strokeWidth={2} />
        </button>

        {/* Brand & Name */}
        <div className="flex flex-col pr-8 mb-auto">
          <p className="text-[12px] md:text-[13px] font-bold text-[#091F13] truncate uppercase tracking-tighter">
            {product.brand}
          </p>
          <Link to="/product/$id" params={{ id: product.id }}>
            <p className="text-[11px] text-[#737373] truncate mt-0.5">
              {product.name}
            </p>
          </Link>
        </div>

        {/* Pricing */}
        <div className="flex flex-wrap items-center gap-1.5 md:gap-2 mt-2">
          <span className="text-[14px] font-black text-[#091F13]">₹{product.price}</span>
          {product.mrp > product.price && (
            <>
              <span className="text-[11px] md:text-[12px] text-[#737373] line-through font-medium">₹{product.mrp}</span>
              <span className="text-[11px] md:text-[12px] font-black text-[#B8933E]">{product.discount}% OFF</span>
            </>
          )}
        </div>

        {/* Mobile Add to Bag - visible on small screens since hover is difficult */}
        <button
          onClick={(e) => {
            e.preventDefault();
            addToCart(product);
          }}
          className="md:hidden mt-3 w-full py-2 bg-[#091F13] text-white text-[10px] font-black uppercase tracking-[0.1em]"
        >
          Add to Bag
        </button>

        {/* Cart Page specific action */}
        {showMoveToCart && (
          <button
            onClick={() => moveToCart(product)}
            className="mt-3 w-full h-9 text-[11px] font-bold uppercase tracking-wider transition-colors border border-[#091F13] text-[#091F13] hover:bg-[#091F13] hover:text-white"
          >
            Move to Cart
          </button>
        )}
      </div>
    </div>
  );
}
