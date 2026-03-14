"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionBadge, PhoneIconSVG } from "@/lib/shared";

const faqs = [
  { q: "How to Change my Photo from Admin Dashboard?",  a: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast." },
  { q: "How to Change my Password easily?",             a: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts." },
  { q: "What services do you offer?",                   a: "I offer web design, WordPress development, UI/UX design, SEO, and digital marketing services." },
  { q: "How long does a project take?",                 a: "Project timelines vary depending on scope. A basic website typically takes 1–2 weeks, while complex projects may take 4–8 weeks." },
  { q: "Do you provide ongoing support?",               a: "Yes! I offer 24/7 support and maintenance packages to keep your website running smoothly after launch." },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <section className="projectsec commonsec relative">
      <div className="container mx-auto px-4">
        <div className="mb-8 lg:mb-12 text-center">
          <SectionBadge label="FAQs" />
          <h2 className="text-white text-4xl bold unbounded_semibold mt-3 mb-3">
            Your Questions, My Clear and <br className="hidden xl:block" />
            <span className="textyellow">Honest Answers.</span>
          </h2>
          <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">

          {/* Accordion */}
          <div className="xl:col-span-8">
            <div className="custom-accordion">
              {faqs.map((faq, i) => (
                <div key={i} className="accordion-item">
                  <div className="accordion-header">
                    <button
                      className={`accordion-button ${open === i ? "open" : ""}`}
                      onClick={() => toggle(i)}
                      type="button"
                    >
                      {faq.q}
                    </button>
                  </div>
                  <div className={`accordion-collapse ${open === i ? "show" : ""}`}>
                    <div className="accordion-body">{faq.a}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Side cards */}
          <div className="xl:col-span-4 flex flex-col gap-4">
            {/* Image card with CTA */}
            <div className="relative rounded-2xl overflow-hidden service_card_img h-auto">
              <div className="flex flex-col gap-4 p-4 z-10 relative w-full text-center">
                <div className="faqscall grid_center mx-auto">
                  <PhoneIconSVG fill="#ffffff" size={20} />
                </div>
                <div className="text-xl text-white unbounded_semibold">Want to know something? Ask.</div>
                <p className="mb-0">Curious about my work or services? Reach out anytime here.</p>
                <div>
                  <a className="nav-link greenbtn custbtn inline-block rounded-full medium js-tilt tile" href="#contact">
                    <span className="inner">Contact Us</span>
                  </a>
                </div>
              </div>
              <Image
                src="https://kits.roxthemes.com/ethan/wp-content/uploads/2025/11/Graphic-Design-1.webp"
                alt="FAQ" width={400} height={272}
                className="h-full w-full object-cover absolute top-0 left-0"
              />
            </div>

            {/* 24/7 Service card */}
            <div className="commonsec relative rounded-2xl overflow-hidden faqcont service_card_boxmain p-4">
              <div className="text-xl unbounded_bold text-white border-b border-gray-600 pb-2 text-center">
                24/7 Service
              </div>
              <div className="flex gap-2 justify-center items-center mt-4">
                <PhoneIconSVG fill="#9de600" size={35} />
                <div>
                  <p className="mb-0 text-white">Your needs, our promise.</p>
                  <div className="text-lg text-white unbounded_semibold">+91 97231 21537</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
