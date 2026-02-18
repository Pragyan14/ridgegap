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
    <>
      <div className="bg-gray-100 min-h-screen py-14">
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-10">

          {/* LEFT – BLOG CONTENT */}
          <div className="col-span-2 bg-white rounded-lg shadow-md p-10">

            {/* Title Banner */}
            <div className="bg-[#f0f8ff] p-6 rounded-md mb-6">
              <h1 className="text-4xl font-semibold text-[#1a96cd] leading-tight">
                {blog.title}
              </h1>
            </div>

            {/* Meta */}
            <p className="text-sm text-gray-500 mb-6">
              Posted on {formattedDate} by{" "}
              <span className="text-blue-600">ridgegap_user</span>
            </p>

            <img
              src={blog.featured_image ?? undefined}
              alt={blog.slug}
              className="my-6 rounded-4xl"
            />

            {/* Blog Content */}
            <div className="prose max-w-none">
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            </div>
          </div>


          {/* RIGHT – SIDEBAR */}
          <div className="space-y-6">

            {/* Recent Posts Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">
                Recent Posts
              </h3>

              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="hover:text-blue-600 cursor-pointer">
                  Corporate Gifting for Gen Z Employees: A Complete 2026 Guide
                </li>
                <li className="hover:text-blue-600 cursor-pointer">
                  Quarterly Appreciation Gifting vs Annual Bonuses
                </li>
                <li className="hover:text-blue-600 cursor-pointer">
                  Corporate Gifting Mistakes That Damage Employer Brand
                </li>
                <li className="hover:text-blue-600 cursor-pointer">
                  Phygital Corporate Gifts for Employees and Clients
                </li>
              </ul>
            </div>


            {/* Categories Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">
                Categories
              </h3>

              <ul className="text-sm text-blue-600">
                <li className="hover:underline cursor-pointer">
                  Corporate Gifting
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}
