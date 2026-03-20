import BlogList from "@/components/BlogList";
import FloatingCTA from "@/components/FloatingCTA";
import ContactForm from "@/components/Contactform";

const POSTS_PER_PAGE = 10;

export const revalidate = 60;

const DIRECTUS_URL =
  process.env.NEXT_PUBLIC_DIRECTUS_URL || "http://localhost:8055";

async function getBlogs(page = 1) {
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

    if (!res.ok) {
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

export default async function BlogPage() {
  const currentPage = 1;

  const { blogs, totalPosts } = await getBlogs(currentPage);

  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  return (
    <>
      <BlogList
        blogs={blogs}
        currentPage={currentPage}
        totalPages={totalPages}
      />
      <ContactForm />
      <FloatingCTA type="connect" />
    </>
  );
}