async function getBlogs() {

  const res = await fetch("https://sohelmalek.com/api/blogs.php", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  return res.json();
}

export default async function BlogsPage() {

  const blogs = await getBlogs();

  return (
    <section className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Blogs</h1>

      <div className="grid md:grid-cols-3 gap-8">

        {blogs.map((blog) => (

          <div key={blog.id} className="border p-4 rounded">

            <img
              src={`/blog-images/${blog.images}`}
              alt={blog.image_alt}
              className="w-full h-48 object-cover mb-4"
            />

            <h2 className="text-xl font-semibold mb-2">
              {blog.blog_name}
            </h2>

            <p className="text-gray-600 mb-4">
              {blog.short_description}
            </p>

            <a
              href={`/blog/${blog.blog_url}`}
              className="text-green-600 font-semibold"
            >
              Read More →
            </a>

          </div>

        ))}

      </div>

    </section>
  );
}