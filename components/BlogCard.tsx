import Link from "next/link";
import { Blog } from "@/lib/blog-data";

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <article className="h-full border p-4 shadow-sm rounded-md bg-white">
      <div className="mb-3">
        <Link href={`/blog/${blog.slug}`}>
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-56 object-cover rounded"
          />
        </Link>
      </div>

      <h3 className="font-semibold text-lg mb-2">
        <Link href={`/blog/${blog.slug}`} className="hover:underline">
          {blog.title}
        </Link>
      </h3>

      <p className="text-sm text-gray-500 mb-2">{blog.date}</p>

      <p className="text-gray-700 text-sm mb-3">{blog.excerpt}</p>

      <Link
        href={`/blog/${blog.slug}`}
        className="inline-block px-4 py-2 border rounded text-sm hover:bg-gray-100"
      >
        Read More
      </Link>
    </article>
  );
}
