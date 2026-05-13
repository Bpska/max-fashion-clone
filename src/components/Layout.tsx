import type { ReactNode } from "react";
import { UtilityBar } from "./UtilityBar";
import { Header } from "./Header";
import { PromoStrip } from "./PromoStrip";
import { Footer } from "./Footer";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <UtilityBar />
      <Header />
      <PromoStrip />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
