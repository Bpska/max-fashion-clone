import { createFileRoute } from "@tanstack/react-router";
import { CategoryView } from "@/components/CategoryView";

export const Route = createFileRoute("/sports")({
  component: () => <CategoryView title="Sports Wear" breadcrumb="Sports" category="Sports" />,
  head: () => ({ meta: [{ title: "Sports Wear — Rhodium" }, { name: "description", content: "Shop performance sports wear at Rhodium." }] }),
});
