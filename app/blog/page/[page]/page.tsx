import BlogList from "@/components/BlogList";
import { notFound } from "next/navigation";
import FloatingCTA from "@/components/FloatingCTA";
import ContactForm from "@/components/Contactform";

const POSTS_PER_PAGE = 10;

export const revalidate = 60;

const DIRECTUS_URL =
  process.env.NEXT_PUBLIC_DIRECTUS_URL || "http://localhost:8055";

async function getBlogs(page: number) {
  const offset = (page - 1) * POSTS_PER_PAGE;

  try {
    const res = await fetch(
      `${DIRECTUS_URL}/items/blogs?filter[status][_eq]=published&limit=${POSTS_PER_PAGE}&offset=${offset}&sort=-date_created&meta=filter_count`,
      {
        next: { revalidate: 60 },
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Handle non-200 responses
    if (!res.ok) {
      console.error(`[getBlogs] Directus error: ${res.status} ${res.statusText}`);
      return { blogs: [], totalPosts: 0 };
    }

    const json = await res.json();

    return {
      blogs: json?.data ?? [],
      totalPosts: json?.meta?.filter_count ?? 0,
    };

  } catch (err) {
    return { blogs: [], totalPosts: 0 };
  }
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

  // Only 404 if there ARE pages but user requested beyond them
  // If totalPages is 0 (no blogs yet), don't 404 — show empty state
  if (totalPages > 0 && pageNumber > totalPages) {
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