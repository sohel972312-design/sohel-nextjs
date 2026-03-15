import { notFound } from "next/navigation";
import Banner from "@/components/sections/Banner";

export const dynamic = "force-dynamic";

async function getBlog(slug) {
  const res = await fetch("https://sohelmalek.com/api/blogs.php", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch blogs");

  const blogs = await res.json();
  // match slug exactly with blog_url
  const blog = blogs.find(b => b.blog_url === slug);
  return blog || null;
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const blog = await getBlog(slug);

  if (!blog) {
    return {
      title: "Blog Not Found | Sohel Malek",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${blog.blog_name} | Blog by Sohel Malek`,
    description: blog.short_description || `Read ${blog.blog_name} - Web design and development insights by Sohel Malek.`,
  };
}

export default async function BlogPage({ params }) {
  const { slug } = params;
  // console.log("PARAMS:", params);
  const blog = await getBlog(slug);
  if (!blog) return notFound(); // 404 if no blog found
  // console.log("PARAMS:", params);

  return (
    <>

      <Banner
        title={`${blog.blog_name}`}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Blogs", href: "/blogs" },
          { label: blog.blog_name }
        ]}
        backgroundImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072"
      />
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

    </>

  );
}