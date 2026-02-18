import { prisma } from "@/lib/prisma";
import BlogList from "@/components/BlogList";
import { notFound } from "next/navigation";

const POSTS_PER_PAGE = 10; // adjust as needed

export const revalidate = 60;

export default async function PaginatedPage({
  params,
}: {
  params: Promise<{ page: string }>; // Turbopack passes a Promise
}) {
  const { page } = await params;
  const pageNumber = Number(page);

  if (isNaN(pageNumber) || pageNumber < 1) {
    return notFound();
  }

  // Total number of published posts
  const totalPosts = await prisma.blog.count({
    where: { status: "publish" },
  });

  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  if (pageNumber > totalPages) {
    return notFound();
  }

  // Fetch posts for this page
  const blogs = await prisma.blog.findMany({
    where: { status: "publish" },
    orderBy: { published_at: "desc" },
    skip: (pageNumber - 1) * POSTS_PER_PAGE,
    take: POSTS_PER_PAGE,
  });

  return (
    <BlogList
      blogs={blogs}
      currentPage={pageNumber}
      totalPages={totalPages}
    />
  );
}
