import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

export const revalidate = 60;

export default async function BlogDetail({
  params,
}: {
  params: { slug: string }; // NOT Promise
}) {
  const { slug } = await params;

  if (!slug) return notFound();

  const blog = await prisma.blog.findUnique({
    where: { slug }, // Prisma expects string
  });

  if (!blog) return notFound();

  return (
    <div className="container max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>

      {blog.featured_image && (
        <img
          src={blog.featured_image}
          alt={blog.title}
          className="w-full h-80 object-cover rounded mb-6"
        />
      )}

      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
}
