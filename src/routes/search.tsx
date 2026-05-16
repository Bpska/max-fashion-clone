import { createFileRoute } from "@tanstack/react-router";
import { CategoryView } from "@/components/CategoryView";
import { Search } from "lucide-react";

export const Route = createFileRoute("/search")({
  component: SearchPage,
  head: () => ({ meta: [{ title: "Search — Rhodium" }] }),
});

function SearchPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-container pt-8 pb-4">
        <div className="relative max-w-2xl mx-auto">
          <input 
            className="w-full h-12 pl-12 pr-4 text-[15px] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B8933E]/20 transition-all" 
            placeholder="Search by product, category or collection" 
            style={{ background: "#F5F5F5", border: "1px solid #EAEAEA", color: "#091F13" }} 
            autoFocus
          />
          <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#737373]" />
        </div>
      </div>
      <CategoryView title="Search Results" breadcrumb="Search" />
    </div>
  );
}
