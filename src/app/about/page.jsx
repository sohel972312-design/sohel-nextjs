import Link from "next/link";

export default function About() {
  return (
    <section className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">About Sohel Malek11</h1>
      <p className="mb-4">About page content here...</p>
      <div className="space-y-2">
        <p>
          Link to <Link className="text-green-400" href="/contact">Contact</Link>
        </p>
        <p>
          Link to <Link className="text-green-400" href="/">Home</Link>
        </p>
      </div>
    </section>
  );
}