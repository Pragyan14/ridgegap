import { blogs } from "@/lib/blog-data";
import BlogCard from "./BlogCard";
import Link from "next/link";

const POSTS_PER_PAGE = 2;

export default function BlogList({
  currentPage,
}: {
  currentPage: number;
}) {
  const totalPages = Math.ceil(blogs.length / POSTS_PER_PAGE);

  if (currentPage > totalPages) {
    return <div className="text-center py-10">Page not found</div>;
  }

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedBlogs = blogs.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE
  );

  return (
    <div className="container max-w-7xl mx-auto py-10">
      {/* Blog Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {paginatedBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10 gap-3">
        {Array.from({ length: totalPages }).map((_, index) => {
          const pageNumber = index + 1;

          const href =
            pageNumber === 1
              ? "/blog"
              : `/blog/page/${pageNumber}`;

          return (
            <Link
              key={pageNumber}
              href={href}
              className={`px-4 py-2 border rounded ${
                currentPage === pageNumber
                  ? "bg-black text-white"
                  : "bg-white"
              }`}
            >
              {pageNumber}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
