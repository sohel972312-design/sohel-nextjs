import Image from "next/image";
import { SectionBadge, ServiceCardArrow } from "@/lib/shared";

const projects = [
  { title: "App Development",         desc: "There are many variations of passages",  img: "https://kits.roxthemes.com/ethan/wp-content/uploads/2025/11/Data-Visualization-.webp" },
  { title: "Graphic Design",          desc: "Designing the Beauty Behind the Data.",   img: "https://kits.roxthemes.com/ethan/wp-content/uploads/2025/11/Graphic-Design-1.webp" },
  { title: "Dream Site",              desc: "Designing the Beauty Behind the Data.",   img: "https://kits.roxthemes.com/ethan/wp-content/uploads/2025/11/Dream-Site-.webp" },
  { title: "Web Design & Development", desc: "Designing the Beauty Behind the Data.", img: "https://kits.roxthemes.com/ethan/wp-content/uploads/2025/11/Web-Design-Devlopment-.webp" },
  { title: "Mobile Apps Design",      desc: "Designing the Beauty Behind the Data.",   img: "https://kits.roxthemes.com/ethan/wp-content/uploads/2025/11/Mobile-Apps-Design-.webp" },
];

function ProjectCard({ title, desc, img }) {
  return (
    <div className="p-4 rounded-2xl overflow-hidden relative projectcard">
      <div className="relative">
        <div className="service_card_img relative rounded-2xl overflow-hidden w-full">
          <div className="absolute top-0 left-0 p-4 z-10">
            <div className="text-xl text-white unbounded_semibold">{title}</div>
            <div className="py-3"><p className="mb-0">{desc}</p></div>
          </div>
          <Image src={img} alt={title} width={600} height={272} className="h-full w-full object-cover" />
        </div>
        <ServiceCardArrow />
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="servicesec projectsec commonsec relative">
      <div className="container mx-auto px-4">
        <div className="mb-6 text-center xl:text-left">
          <SectionBadge label="Project" />
          <div className="flex items-center flex-col xl:flex-row gap-4 justify-center mt-3">
            <h2 className="text-white text-4xl bold unbounded_semibold">
              Where Design Meets <span className="textyellow">Function.</span>
            </h2>
            <p className="mb-0">Showcasing creative projects blending design, strategy, and innovation.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
