import { createFileRoute } from "@tanstack/react-router";
import { CategoryView } from "@/components/CategoryView";

export const Route = createFileRoute("/search")({
  component: SearchPage,
  head: () => ({ meta: [{ title: "Search — Max Fashion" }] }),
});

function SearchPage() {
  return (
    <div>
      <div className="max-container pt-6">
        <input className="w-full h-11 px-4 text-[14px]" placeholder="Search for products, brands and more" style={{ background: "#F5F5F5", border: "1px solid #E0E0E0" }} />
        <p className="mt-3 text-[14px]" style={{ color: "#888" }}>Showing 12 results for 'dress'</p>
      </div>
      <CategoryView title="Search Results" breadcrumb="Search" />
    </div>
  );
}
