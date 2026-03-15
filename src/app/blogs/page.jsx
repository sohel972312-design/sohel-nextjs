// This page fetches all blogs dynamically from your PHP API
export const dynamic = "force-dynamic";

async function getBlogs() {
  const res = await fetch("https://sohelmalek.com/api/blogs.php", {
    cache: "no-store", // always fetch fresh data
  });

  if (!res.ok) throw new Error("Failed to fetch blogs");
  return res.json();
}

export default async function BlogsPage() {
  let blogs = [];

  try {
    blogs = await getBlogs();
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return (
      <section className="container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-8">Blogs</h1>
        <p className="text-red-500">Failed to load blogs. Please try again later.</p>
      </section>
    );
  }

  return (
    <section className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Blogs</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="border p-4 rounded shadow hover:shadow-lg transition">
            <img
              src={`https://sohelmalek.com/blog-images/${blog.images}`}
              alt={blog.image_alt}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h2 className="text-xl font-semibold mb-2">{blog.blog_name}</h2>
            <p className="text-gray-600 mb-4">{blog.short_description}</p>
            <a
              href={`/blog/${blog.blog_url}`}
              className="text-green-600 font-semibold hover:underline"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}