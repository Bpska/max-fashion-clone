import { Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import type { Product } from "@/lib/products";
import { useStore } from "@/lib/store";

export function ProductCard({ product, showMoveToCart }: { product: Product; showMoveToCart?: boolean }) {
  const { toggleWishlist, inWishlist, addToCart, moveToCart } = useStore();
  const liked = inWishlist(product.id);

  return (
    <div className="group flex flex-col">
      <div className="relative overflow-hidden bg-[#F5F5F5]" style={{ aspectRatio: "3/4" }}>
        <Link to="/product/$id" params={{ id: product.id }}>
          <img src={product.image} alt={product.name} loading="lazy" className="img-cover transition-transform duration-[400ms] group-hover:scale-105" />
        </Link>
        {product.badge && (
          <span className="absolute top-2 left-2 text-white text-[10px] font-bold uppercase px-1.5 py-0.5" style={{ background: product.badge === "SALE" ? "#E31E24" : "#000" }}>
            {product.badge}
          </span>
        )}
        <button
          onClick={() => toggleWishlist(product)}
          className="absolute top-2 right-2 bg-white/80 rounded-full p-1.5"
          aria-label="Wishlist"
        >
          <Heart size={18} fill={liked ? "#E31E24" : "none"} color={liked ? "#E31E24" : "#888"} />
        </button>
        <button
          onClick={() => addToCart(product)}
          className="absolute bottom-0 left-0 right-0 text-white text-[13px] font-bold uppercase tracking-wider h-9 opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ background: "#E31E24", letterSpacing: "1px" }}
        >
          Add to Cart
        </button>
      </div>
      <div className="pt-2.5 pb-1">
        <p className="text-[11px] uppercase" style={{ color: "#888" }}>{product.brand}</p>
        <Link to="/product/$id" params={{ id: product.id }}>
          <p className="text-[13px] font-medium line-clamp-2" style={{ color: "#333" }}>{product.name}</p>
        </Link>
        <div className="flex items-baseline gap-2 mt-1">
          <span className="text-[14px] font-bold" style={{ color: "#E31E24" }}>₹{product.price}</span>
          <span className="text-[12px] line-through" style={{ color: "#888" }}>₹{product.mrp}</span>
          <span className="text-[12px]" style={{ color: "#E31E24" }}>{product.discount}% OFF</span>
        </div>
        {showMoveToCart && (
          <button
            onClick={() => moveToCart(product)}
            className="mt-2 w-full h-9 text-[13px] font-bold uppercase tracking-wider"
            style={{ border: "2px solid #E31E24", color: "#E31E24" }}
          >
            Move to Cart
          </button>
        )}
      </div>
    </div>
  );
}
