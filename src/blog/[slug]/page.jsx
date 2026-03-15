import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

// Fetch a single blog by slug
async function getBlog(slug) {
  const res = await fetch(`https://sohelmalek.com/api/blogs.php?slug=${slug}`, {
    cache: "no-store", // always fetch latest
  });

  if (!res.ok) throw new Error("Failed to fetch blog");

  const data = await res.json();
  return data.length ? data[0] : null;
}

// Generate metadata dynamically for SEO
export async function generateMetadata({ params }) {
  const blog = await getBlog(params.slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "This blog does not exist.",
    };
  }

  return {
    title: blog.meta_title || blog.blog_name,
    description: blog.meta_discription || blog.short_description,
    openGraph: {
      title: blog.meta_title || blog.blog_name,
      description: blog.meta_discription || blog.short_description,
      images: [
        {
          url: `https://sohelmalek.com/blog-images/${blog.images}`,
          alt: blog.image_alt || blog.blog_name,
        },
      ],
    },
  };
}

export default async function BlogPage({ params }) {
  const { slug } = params;
  let blog = null;

  try {
    blog = await getBlog(slug);
  } catch (error) {
    console.error("Error fetching blog:", error);
    return (
      <section className="container mx-auto py-10">
        <p className="text-red-500">Failed to load blog. Please try again later.</p>
      </section>
    );
  }

  if (!blog) return notFound();

  return (
    <article className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-4">{blog.blog_name}</h1>
      <img
        src={`https://sohelmalek.com/blog-images/${blog.images}`}
        alt={blog.image_alt}
        className="w-full h-64 object-cover mb-6 rounded"
      />
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </article>
  );
}