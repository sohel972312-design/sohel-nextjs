import Image from "next/image";
import { SectionBadge, ServiceCardArrow, PhoneIconSVG } from "@/lib/shared";

const services = [
  {
    num: "01", title: "App Development",
    desc: "There are many variations of passages",
    img: "https://kits.roxthemes.com/ethan/wp-content/uploads/2025/11/App-Design-.webp",
  },
  {
    num: "02", title: "UI/UX Design",
    desc: "There are many variations of passages",
    img: "https://kits.roxthemes.com/ethan/wp-content/uploads/2025/11/UIUX-Design-.webp",
  },
  {
    num: "03", title: "Website Development",
    desc: "There are many variations of passages",
    img: "https://kits.roxthemes.com/ethan/wp-content/uploads/2025/11/Website-Design.webp",
  },
];

export default function Services() {
  return (
    <section className="servicesec commonsec relative" id="services">
      <div className="container mx-auto px-4">
        <div className="mb-6 text-center xl:text-left">
          <SectionBadge label="Services" />
          <div className="flex items-center flex-col xl:flex-row gap-4 justify-center mt-3">
            <h2 className="text-white text-4xl bold unbounded_semibold">
              Delivering Excellence Through <span className="textyellow">Experience.</span>
            </h2>
            <p className="mb-0">With years of hands-on expertise, I craft innovative, high-quality digital solutions.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.num} className="p-4 rounded-2xl overflow-hidden relative service_card_boxmain commonsec">
              <div className="service_card_box relative">
                <div className="flex items-center justify-between mb-3 lg:mb-6">
                  <div className="service_card_icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path opacity="0.1" d="M3 6.5C3 5.09554 3 4.39331 3.33706 3.88886C3.48298 3.67048 3.67048 3.48298 3.88886 3.33706C4.39331 3 5.09554 3 6.5 3C7.90446 3 8.60669 3 9.11114 3.33706C9.32952 3.48298 9.51702 3.67048 9.66294 3.88886C10 4.39331 10 5.09554 10 6.5C10 7.90446 10 8.60669 9.66294 9.11114C9.51702 9.32952 9.32952 9.51702 9.11114 9.66294C8.60669 10 7.90446 10 6.5 10C5.09554 10 4.39331 10 3.88886 9.66294C3.67048 9.51702 3.48298 9.32952 3.33706 9.11114C3 8.60669 3 7.90446 3 6.5Z" fill="#323232" />
                      <path d="M3 6.5C3 5.09554 3 4.39331 3.33706 3.88886C3.48298 3.67048 3.67048 3.48298 3.88886 3.33706C4.39331 3 5.09554 3 6.5 3C7.90446 3 8.60669 3 9.11114 3.33706C9.32952 3.48298 9.51702 3.67048 9.66294 3.88886C10 4.39331 10 5.09554 10 6.5C10 7.90446 10 8.60669 9.66294 9.11114C9.51702 9.32952 9.32952 9.51702 9.11114 9.66294C8.60669 10 7.90446 10 6.5 10C5.09554 10 4.39331 10 3.88886 9.66294C3.67048 9.51702 3.48298 9.32952 3.33706 9.11114C3 8.60669 3 7.90446 3 6.5Z" stroke="#323232" strokeWidth="2" />
                      <path d="M14 6.5H21" stroke="#323232" strokeWidth="2" strokeLinecap="round" />
                      <path d="M17.5 3V10" stroke="#323232" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="stroke-text text-5xl unbounded_bold">{s.num}</div>
                </div>
                <div className="text-xl text-white unbounded_semibold">{s.title}</div>
                <div className="py-3"><p className="mb-0">{s.desc}</p></div>
                <div className="service_card_img rounded-2xl overflow-hidden w-full">
                  <Image src={s.img} alt={s.title} width={600} height={272} className="h-full w-full object-cover" />
                </div>
                <ServiceCardArrow />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
