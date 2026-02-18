import BlogCard from "./BlogCard";
import Link from "next/link";

interface BlogListProps {
  blogs: any[];
  currentPage: number;
  totalPages: number;
}

export default function BlogList({
  blogs,
  currentPage,
  totalPages,
}: BlogListProps) {
  return (
    <div className="container max-w-7xl mx-auto py-10">
      {/* Blog Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {blogs.map((blog) => (
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
