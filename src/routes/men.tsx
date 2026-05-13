import { createFileRoute } from "@tanstack/react-router";
import { CategoryView } from "@/components/CategoryView";

export const Route = createFileRoute("/men")({
  component: () => <CategoryView title="Men" breadcrumb="Men" />,
  head: () => ({ meta: [{ title: "Men's Fashion — Rhodium" }, { name: "description", content: "Shop the latest men's fashion at Rhodium." }] }),
});
