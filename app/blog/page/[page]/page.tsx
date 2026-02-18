import BlogList from "@/components/BlogList";
import { notFound } from "next/navigation";

export default async function PaginatedPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;

  const pageNumber = Number(page);

  if (isNaN(pageNumber) || pageNumber < 1) {
    return notFound();
  }

  return <BlogList currentPage={pageNumber} />;
}
