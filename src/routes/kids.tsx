import { createFileRoute } from "@tanstack/react-router";
import { CategoryView } from "@/components/CategoryView";

export const Route = createFileRoute("/kids")({
  component: () => <CategoryView title="Kids" breadcrumb="Kids" />,
  head: () => ({ meta: [{ title: "Kids Fashion — Max" }, { name: "description", content: "Shop kids fashion at Max." }] }),
});
