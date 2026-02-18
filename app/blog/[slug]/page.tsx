import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

export const revalidate = 60;

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!slug) return notFound();

  const blog = await prisma.blog.findFirst({
    where: { slug, status: "publish" },
  });

  if (!blog) return notFound();

  const formattedDate = blog.published_at
    ? new Date(blog.published_at).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <div className="container max-w-4xl mx-auto py-10 prose">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>

      {blog.author_name && (
        <p className="text-sm text-gray-500 mb-6">
          By {blog.author_name} | {formattedDate}
        </p>
      )}

      <p className="text-sm text-gray-500 mb-6">
          Posted on {formattedDate} by ridgegap_user
        </p>

      <div dangerouslySetInnerHTML={{ __html: blog.content }} />

      {blog.categories.length > 0 && (
        <p className="mt-6 text-sm">
          Categories: {blog.categories.join(", ")}
        </p>
      )}

      {blog.tags.length > 0 && (
        <p className="mt-2 text-sm">Tags: {blog.tags.join(", ")}</p>
      )}
    </div>
  );
}
