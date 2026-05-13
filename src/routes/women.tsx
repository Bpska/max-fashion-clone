import { createFileRoute } from "@tanstack/react-router";
import { CategoryView } from "@/components/CategoryView";

export const Route = createFileRoute("/women")({
  component: () => <CategoryView title="Women" breadcrumb="Women" />,
  head: () => ({ meta: [{ title: "Women's Fashion — Max" }, { name: "description", content: "Shop the latest women's fashion at Max." }] }),
});
