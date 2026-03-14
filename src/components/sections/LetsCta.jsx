import Image from "next/image";
import { CheckIcon, PhoneIconSVG } from "@/lib/shared";

const features = ["Creative Strategy", "Responsive Web Design", "Ongoing Support"];

export default function LetsCta() {
  return (
    <section className="servicesec commonsec relative pb-0">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Left: text + buttons */}
          <div className="text-center lg:text-left">
            <div className="flex flex-col gap-6">
              <h2 className="text-white text-4xl bold unbounded_semibold">
                Creative Ideas to Elevate Your <span className="textyellow">Brand.</span>
              </h2>
              <p className="mb-0">
                I know turning your ideas into reality can feel challenging — that&apos;s why I&apos;m here to help with creative, modern, and impactful design.
              </p>
              <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
                <a className="nav-link greenbtn custbtn inline-block rounded-full medium js-tilt tile bookicon" href="#contact">
                  <span className="inner">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 10.4V20M12 10.4C12 8.15979 12 7.03969 11.564 6.18404C11.1805 5.43139 10.5686 4.81947 9.81596 4.43597C8.96031 4 7.84021 4 5.6 4H4.6C4.03995 4 3.75992 4 3.54601 4.10899C3.35785 4.20487 3.20487 4.35785 3.10899 4.54601C3 4.75992 3 5.03995 3 5.6V16.4C3 16.9601 3 17.2401 3.10899 17.454C3.20487 17.6422 3.35785 17.7951 3.54601 17.891C3.75992 18 4.03995 18 4.6 18H7.54668C8.08687 18 8.35696 18 8.61814 18.0466C8.84995 18.0879 9.0761 18.1563 9.29191 18.2506C9.53504 18.3567 9.75977 18.5065 10.2092 18.8062L12 20M12 10.4C12 8.15979 12 7.03969 12.436 6.18404C12.8195 5.43139 13.4314 4.81947 14.184 4.43597C15.0397 4 16.1598 4 18.4 4H19.4C19.9601 4 20.2401 4 20.454 4.10899C20.6422 4.20487 20.7951 4.35785 20.891 4.54601C21 4.75992 21 5.03995 21 5.6V16.4C21 16.9601 21 17.2401 20.891 17.454C20.7951 17.6422 20.6422 17.7951 20.454 17.891C20.2401 18 19.9601 18 19.4 18H16.4533C15.9131 18 15.643 18 15.3819 18.0466C15.15 18.0879 14.9239 18.1563 14.7081 18.2506C14.465 18.3567 14.2402 18.5065 13.7908 18.8062L12 20"
                        stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="inline-block ml-1">Let&apos;s Work Together</span>
                  </span>
                </a>
                <a className="nav-link greenbtn custbtn inline-block rounded-full medium js-tilt tile" href="#contact">
                  <span className="inner">
                    <PhoneIconSVG />
                    <span className="inline-block ml-1">Get In Touch</span>
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: feature tags + image */}
          <div className="flex flex-col lg:flex-row items-start gap-4">
            <div className="flex flex-col gap-4 w-full lg:w-auto">
              {features.map((f, i) => (
                <div key={f} className={i % 2 === 0 ? "ml-0 md:ml-6 lg:ml-16" : ""}>
                  <div className="work_box commonsec letbox flex flex-col justify-center p-3 px-4 relative overflow-hidden">
                    <ul className="feature-list p-0 mb-0 flex flex-col gap-3">
                      <li className="feature-item flex gap-2">
                        <CheckIcon /> {f}
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <div className="shrink-0">
              <Image
                src="https://kits.roxthemes.com/ethan/wp-content/uploads/2025/11/creative-1-removebg-preview.png"
                alt="Creative"
                width={300}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
