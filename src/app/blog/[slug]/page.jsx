import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

async function getBlog(slug) {
  const res = await fetch("https://sohelmalek.com/api/blogs.php", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch blogs");

  const blogs = await res.json();
  // match slug exactly with blog_url
  const blog = blogs.find(b => b.blog_url === slug);
  return blog || null;
}

export default async function BlogPage({ params }) {
  const { slug } = params;
  console.log("PARAMS:", params);
  const blog = await getBlog(slug);
  if (!blog) return notFound(); // 404 if no blog found
  console.log("PARAMS:", params);

  return (
    <section className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">{blog.blog_name}</h1>
      <img
        src={`https://sohelmalek.com/assets/blogs/${blog.images}`}
        alt={blog.image_alt}
        className="w-full max-h-[400px] object-cover mb-6 rounded"
      />
      <p className="text-gray-400 mb-6">{blog.short_description}</p>
      {blog.content && (
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      )}
    </section>
  );
}