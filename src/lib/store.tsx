import { createContext, useContext, useState, type ReactNode } from "react";
import type { Product } from "./products";

export type CartItem = Product & { qty: number; size?: string; color?: string };

type StoreCtx = {
  cart: CartItem[];
  wishlist: Product[];
  addToCart: (p: Product, opts?: { size?: string; color?: string }) => void;
  removeFromCart: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  toggleWishlist: (p: Product) => void;
  inWishlist: (id: string) => boolean;
  moveToCart: (p: Product) => void;
};

const Ctx = createContext<StoreCtx | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);

  const addToCart: StoreCtx["addToCart"] = (p, opts) => {
    setCart((c) => {
      const found = c.find((i) => i.id === p.id);
      if (found) return c.map((i) => (i.id === p.id ? { ...i, qty: i.qty + 1 } : i));
      return [...c, { ...p, qty: 1, size: opts?.size, color: opts?.color }];
    });
  };
  const removeFromCart = (id: string) => setCart((c) => c.filter((i) => i.id !== id));
  const updateQty = (id: string, qty: number) =>
    setCart((c) => c.map((i) => (i.id === id ? { ...i, qty: Math.max(1, qty) } : i)));
  const toggleWishlist = (p: Product) =>
    setWishlist((w) => (w.find((i) => i.id === p.id) ? w.filter((i) => i.id !== p.id) : [...w, p]));
  const inWishlist = (id: string) => wishlist.some((i) => i.id === id);
  const moveToCart = (p: Product) => {
    addToCart(p);
    setWishlist((w) => w.filter((i) => i.id !== p.id));
  };

  return (
    <Ctx.Provider value={{ cart, wishlist, addToCart, removeFromCart, updateQty, toggleWishlist, inWishlist, moveToCart }}>
      {children}
    </Ctx.Provider>
  );
}

export function useStore() {
  const c = useContext(Ctx);
  if (!c) throw new Error("StoreProvider missing");
  return c;
}
