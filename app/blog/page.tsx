import BlogList from "@/components/BlogList";
import FloatingCTA from "@/components/FloatingCTA";
import ContactForm from "@/components/Contactform";

const POSTS_PER_PAGE = 10;

export const revalidate = 60;

export default async function BlogPage() {
  const currentPage = 1;

  async function getBlogs(page = 1) {
    const offset = (page - 1) * POSTS_PER_PAGE;

    const res = await fetch(
      `http://localhost:8055/items/blogs?filter[status][_eq]=publish&limit=${POSTS_PER_PAGE}&offset=${offset}&sort=-date_created&meta=filter_count`,
      {
        next: { revalidate: 60 }, // Next.js caching
        headers: {
          "Content-Type": "application/json",
          // "Authorization": `Bearer ${process.env.DIRECTUS_TOKEN}`, // if needed
        },
      }
    );

    const json = await res.json();

    return {
      blogs: json.data,
      totalPosts: json.meta.filter_count,
    };
  }

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