import { createFileRoute, Link } from "@tanstack/react-router";
import { useStore } from "@/lib/store";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/wishlist")({
  component: WishlistPage,
  head: () => ({ meta: [{ title: "My Wishlist — Max Fashion" }] }),
});

function WishlistPage() {
  const { wishlist } = useStore();
  return (
    <div className="max-container py-8">
      <h1 className="text-xl font-bold uppercase mb-6">My Wishlist ({wishlist.length} items)</h1>
      {wishlist.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-[14px] mb-4" style={{ color: "#888" }}>Your wishlist is empty.</p>
          <Link to="/" className="text-[13px] font-bold uppercase" style={{ color: "#E31E24" }}>Start Shopping</Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {wishlist.map((p) => <ProductCard key={p.id} product={p} showMoveToCart />)}
        </div>
      )}
    </div>
  );
}
