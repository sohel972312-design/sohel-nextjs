"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { SectionBadge } from "@/lib/shared";

const testimonials = [
  { name: "James Wilson", role: "Founder & CEO", avatar: "https://i.pravatar.cc/150?u=1" },
  { name: "Sarah Johnson", role: "Product Manager", avatar: "https://i.pravatar.cc/150?u=2" },
  { name: "Mark Davis",   role: "Marketing Director", avatar: "https://i.pravatar.cc/150?u=3" },
];

export default function Testimonials() {
  const swiperRef = useRef(null);

  useEffect(() => {
    let swiperInstance = null;

    const init = async () => {
      const { Swiper } = await import("swiper");
      const { Autoplay, Pagination } = await import("swiper/modules");

      await import("swiper/css");
      await import("swiper/css/pagination");

      if (swiperRef.current) {
        swiperInstance = new Swiper(swiperRef.current, {
          modules: [Autoplay, Pagination],
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          autoplay: { delay: 2500, disableOnInteraction: false },
          pagination: { el: ".swiper-pagination", clickable: true },
        });
      }
    };

    init();
    return () => swiperInstance?.destroy(true, true);
  }, []);

  return (
    <section className="servicesec commonsec relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left image with avatar stack */}
          <div className="lg:col-span-4">
            <div className="p-4 rounded-2xl overflow-hidden relative projectcard bg-black">
              <div className="relative">
                <div className="service_card_img avtarimgbox relative rounded-2xl overflow-hidden w-full">
                  <Image
                    src="https://kits.roxthemes.com/ethan/wp-content/uploads/2025/11/Data-Visualization-.webp"
                    alt="Clients" width={400} height={480} className="h-full w-full object-cover"
                  />
                </div>
                <div className="service_card_link_box p-3 pr-0 pb-0 service_card_link h-auto w-auto avtar service_card_link_boxedge absolute bottom-0 right-0">
                  <div className="p-4 bg-greentrans flex flex-col items-center justify-center rounded-full">
                    <div className="avatar-stack">
                      {[1, 2, 3].map((u) => (
                        <div key={u} className="avatar flex items-center justify-center">
                          <Image src={`https://i.pravatar.cc/150?u=${u}`} alt={`User ${u}`} width={48} height={48} />
                        </div>
                      ))}
                      <div className="avatar flex items-center justify-center add-button">+</div>
                    </div>
                    <div className="text-white text-sm semibold mt-2 text-center">13+ Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Swiper testimonials */}
          <div className="lg:col-span-5">
            <div className="text-center lg:text-left mb-6">
              <SectionBadge label="Client Review" />
              <h2 className="text-white text-4xl bold unbounded_semibold mt-3">
                Trusted by <span className="textyellow">clients worldwide.</span>
              </h2>
            </div>
            <p className="mb-3 lg:mb-6">
              Real stories and heartfelt feedback from happy clients who trusted my work to bring results worldwide.
            </p>

            <div className="swiper myTestimonialSwiper" ref={swiperRef}>
              <div className="swiper-wrapper">
                {testimonials.map((t) => (
                  <div key={t.name} className="swiper-slide">
                    <div className="testimonial-card p-4 rounded-2xl">
                      <div className="text-3xl mb-2">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="star">★</span>
                        ))}
                      </div>
                      <p className="testimonial-text mb-4">
                        Honest words from happy clients reflecting creativity, quality, and dedication behind every successful project delivered.
                      </p>
                      <div className="flex items-center">
                        <div className="avatar-container mr-3">
                          <Image src={t.avatar} alt={t.name} width={56} height={56} className="rounded-full object-cover" />
                        </div>
                        <div>
                          <div className="text-lg unbounded_semibold text-white">{t.name}</div>
                          <p className="mb-0">{t.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="swiper-pagination mt-4" />
            </div>
          </div>

          {/* Right image */}
          <div className="lg:col-span-3">
            <div className="p-4 rounded-2xl overflow-hidden relative projectcard bg-black">
              <div className="service_card_img avtarimgbox relative rounded-2xl overflow-hidden w-full">
                <Image
                  src="https://kits.roxthemes.com/ethan/wp-content/uploads/2025/11/Data-Visualization-.webp"
                  alt="Portfolio" width={300} height={480} className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
