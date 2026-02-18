import Link from "next/link";
import { decode } from "html-entities";

export default function BlogCard({ blog }: { blog: any }) {
  const formattedDate = blog.published_at
    ? new Date(blog.published_at).toDateString()
    : "";

  return (
    <article className="h-full border border-gray-300 p-4 shadow-sm bg-white">
      <div className="mb-3 ">
        <Link href={`/blog/${blog.slug}`}>
          <img
            src={blog.featured_image || "/images/default.jpg"}
            alt={blog.title}
            className="w-full h-86 object-cover rounded-4xl"
          />
        </Link>
      </div>

      <h3 className="font-semibold text-lg mb-2">
        <Link href={`/blog/${blog.slug}`} className="hover:underline">
          {decode(blog.title)}
        </Link>
      </h3>

      <p className="text-sm text-gray-500 mb-2">{formattedDate}</p>

      <p className="text-gray-700 text-sm mb-3">{decode(blog.excerpt || "")}</p>

      <Link
        href={`/blog/${blog.slug}`}
        className="inline-block px-4 py-2 border border-gray-300 rounded text-sm hover:bg-gray-100"
      >
        Read More
      </Link>
    </article>
  );
}

