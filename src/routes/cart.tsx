import { createFileRoute, Link } from "@tanstack/react-router";
import { X } from "lucide-react";
import { useStore } from "@/lib/store";

export const Route = createFileRoute("/cart")({
  component: CartPage,
  head: () => ({ meta: [{ title: "My Bag — Max Fashion" }] }),
});

const cartImgs = [
  "https://picsum.photos/seed/cart1/80/100",
  "https://picsum.photos/seed/cart2/80/100",
  "https://picsum.photos/seed/cart3/80/100",
];

function CartPage() {
  const { cart, removeFromCart, updateQty } = useStore();
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const mrpTotal = cart.reduce((s, i) => s + i.mrp * i.qty, 0);
  const discount = mrpTotal - subtotal;

  return (
    <div className="max-container py-8">
      <h1 className="text-xl font-bold uppercase mb-6">My Bag ({cart.reduce((s, i) => s + i.qty, 0)} items)</h1>
      {cart.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-[14px] mb-4" style={{ color: "#888" }}>Your bag is empty.</p>
          <Link to="/" className="text-[13px] font-bold uppercase" style={{ color: "#E31E24" }}>Continue Shopping</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {cart.map((item, idx) => (
              <div key={item.id} className="flex gap-4 py-4 border-b" style={{ borderColor: "#E0E0E0" }}>
                <img src={item.image || cartImgs[idx % 3]} alt={item.name} className="w-20 h-[100px] object-cover" />
                <div className="flex-1">
                  <p className="text-[13px] font-medium" style={{ color: "#333" }}>{item.name}</p>
                  <p className="text-[12px]" style={{ color: "#888" }}>Size: {item.size ?? "M"} | Color: {item.color ?? "Red"}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center" style={{ border: "1px solid #E0E0E0" }}>
                      <button onClick={() => updateQty(item.id, item.qty - 1)} className="w-8 h-8">−</button>
                      <span className="w-8 text-center text-[13px]">{item.qty}</span>
                      <button onClick={() => updateQty(item.id, item.qty + 1)} className="w-8 h-8">+</button>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[14px] font-bold" style={{ color: "#E31E24" }}>₹{item.price * item.qty}</p>
                  <button onClick={() => removeFromCart(item.id)} className="mt-2" aria-label="Remove"><X size={18} color="#888" /></button>
                </div>
              </div>
            ))}
          </div>

          <aside className="lg:sticky lg:top-32 lg:self-start p-6" style={{ border: "1px solid #E0E0E0", borderRadius: 4 }}>
            <h3 className="text-[13px] font-bold uppercase mb-4">Order Summary</h3>
            <div className="space-y-2 text-[13px]">
              <div className="flex justify-between"><span>MRP Total</span><span>₹{mrpTotal}</span></div>
              <div className="flex justify-between"><span>Discount</span><span style={{ color: "#E31E24" }}>−₹{discount}</span></div>
              <div className="flex justify-between"><span>Delivery Charges</span><span style={{ color: "#E31E24" }}>FREE</span></div>
              <div className="border-t pt-2 mt-2 flex justify-between font-bold text-[14px]" style={{ borderColor: "#E0E0E0" }}>
                <span>Total</span><span>₹{subtotal}</span>
              </div>
            </div>
            <button className="w-full h-12 text-white text-[14px] font-bold uppercase tracking-wider mt-5" style={{ background: "#E31E24", letterSpacing: "1px" }}>
              Proceed to Checkout
            </button>
            <Link to="/" className="block text-center mt-3 text-[13px]" style={{ color: "#E31E24" }}>Continue Shopping</Link>
          </aside>
        </div>
      )}
    </div>
  );
}
