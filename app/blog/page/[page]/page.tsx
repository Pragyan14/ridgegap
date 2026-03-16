import BlogList from "@/components/BlogList";
import { notFound } from "next/navigation";
import FloatingCTA from "@/components/FloatingCTA";
import ContactForm from "@/components/Contactform";

const POSTS_PER_PAGE = 10;

export const revalidate = 60;

const DIRECTUS_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL || "http://localhost:8055";

async function getBlogs(page: number) {
  const offset = (page - 1) * POSTS_PER_PAGE;

  const res = await fetch(
    `${DIRECTUS_URL}/items/blogs?filter[status][_eq]=publish&limit=${POSTS_PER_PAGE}&offset=${offset}&sort=-date_created&meta=filter_count`,
    {
      next: { revalidate: 60 },
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${process.env.DIRECTUS_TOKEN}`, // if needed
      },
    }
  );

  const json = await res.json();

  return {
    blogs: json.data,
    totalPosts: json.meta.filter_count,
  };
}

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

  const { blogs, totalPosts } = await getBlogs(pageNumber);

  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  if (pageNumber > totalPages && totalPages !== 0) {
    return notFound();
  }

  return (
    <>
      <BlogList
        blogs={blogs}
        currentPage={pageNumber}
        totalPages={totalPages}
      />
      <ContactForm />
      <FloatingCTA type="connect" />
    </>
  );
}