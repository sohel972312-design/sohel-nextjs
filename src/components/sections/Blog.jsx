import Image from "next/image";
import { SectionBadge } from "@/lib/shared";

const posts = [
  { title: "My Inspiring Journey from Beginner to...", desc: "I started with basic HTML and CSS, and step by step became a professional developer....", date: "November 6, 2025", comments: 0, img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1000&auto=format&fit=crop" },
  { title: "Top 10 Web Design Trends in 2025",        desc: "Discover the hottest design trends shaping the web in 2025 and how to apply them...",  date: "December 1, 2025",  comments: 3, img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop" },
  { title: "Why WordPress Still Dominates in 2025",   desc: "WordPress powers over 40% of the web. Here's why it remains the go-to CMS...",        date: "January 10, 2026",  comments: 7, img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop" },
];

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const CommentIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

export default function Blog() {
  return (
    <section className="servicesec commonsec relative" id="blog">
      <div className="container mx-auto px-4">
        <div className="mb-6 text-center xl:text-left">
          <SectionBadge label="Blog" />
          <div className="flex items-center flex-col xl:flex-row gap-4 justify-center mt-3">
            <h2 className="text-white text-4xl bold unbounded_semibold">
              Explore My Creative <span className="text-[#ffc20c]">Journey.</span>
            </h2>
            <p className="mb-0">Discover insights, ideas, and experiences that shape my creative projects.</p>
            <a className="nav-link greenbtn custbtn inline-block rounded-full medium js-tilt tile" href="#">
              <span className="inner"><span className="inline-block ml-1">View All</span></span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.title} className="blog-card flex flex-col h-full">
              <div className="card-image">
                <Image src={post.img} alt={post.title} width={600} height={220} className="w-full h-full object-cover" />
              </div>
              <div className="meta-data">
                <div className="meta-item"><CalendarIcon /><span>{post.date}</span></div>
                <div className="meta-item"><CommentIcon /><span>{post.comments}</span></div>
              </div>
              <h2 className="card-title unbounded_semibold text-lg text-white">{post.title}</h2>
              <p className="card-desc">{post.desc}</p>
              <div className="mt-auto">
                <a href="#" className="blog_link transition textgreen">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
