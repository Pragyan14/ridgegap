import { prisma } from "@/lib/prisma";
import BlogList from "@/components/BlogList";

const POSTS_PER_PAGE = 10;

export const revalidate = 60;

export default async function BlogPage() {
  const currentPage = 1;

  // Total posts
  const totalPosts = await prisma.blog.count({
    where: { status: "publish" },
  });
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  // Fetch posts for page 1
  const blogs = await prisma.blog.findMany({
    where: { status: "publish" },
    orderBy: { published_at: "desc" },
    take: POSTS_PER_PAGE,
  });

  return (
    <BlogList
      blogs={blogs}
      currentPage={currentPage}
      totalPages={totalPages}
    />
  );
}
