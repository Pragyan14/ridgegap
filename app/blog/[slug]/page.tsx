import ContactForm from "@/components/Contactform";
import FloatingCTA from "@/components/FloatingCTA";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const revalidate = 60;

const DIRECTUS_URL =
  process.env.NEXT_PUBLIC_DIRECTUS_URL || "http://localhost:8055";

async function getBlogBySlug(slug: string) {
  const res = await fetch(
    `${DIRECTUS_URL}/items/blogs?filter[slug][_eq]=${slug}&filter[status][_eq]=publish&limit=1`,
    {
      next: { revalidate: 60 },
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${process.env.DIRECTUS_TOKEN}`, // if private
      },
    }
  );

  const json = await res.json();

  return json.data?.[0] || null;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {

  const { slug } = await params;

  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "The requested blog could not be found",
    };
  }

  return {
    title: blog.seo_title,
    description: blog.seo_description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      images: blog.featured_image
        ? [`${DIRECTUS_URL}/assets/${blog.featured_image}`]
        : [],
    },
  };
}

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!slug) return notFound();

  const blog = await getBlogBySlug(slug);

  if (!blog) return notFound();

  const formattedDate = blog.date_created
    ? new Date(blog.date_created).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";   

  return (
    <>
      <div className="bg-gray-100 min-h-screen py-14">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 sm:px-6">

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
              src={blog.featured_image_url}
              alt={blog.slug}
              className="my-6 rounded-4xl"
            />

            {/* Blog Content */}
            <div className="prose max-w-none text-justify">
              <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </div>
          </div>

          {/* RIGHT – SIDEBAR */}
          <div className="space-y-6 self-start sticky top-24 h-fit">

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

      <FloatingCTA type="connect" />
      <ContactForm />
    </>
  );
}