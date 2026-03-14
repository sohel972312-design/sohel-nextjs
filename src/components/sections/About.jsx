import Image from "next/image";
import { SectionBadge } from "@/lib/shared";

export default function About() {
  return (
    <section className="relative" id="about">
      <div className="absolute inset-0 bg-[radial-gradient(at_top_right,var(--green_theme)_30%,var(--transparent_theme)_70%)] opacity-18 pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          <div>
            <div className="w-4/5 bg-cover bg-center bg-no-repeat h-[35rem] rounded-2xl flex flex-col justify-end relative" style={{ backgroundImage: 'url(https://kits.roxthemes.com/ethan/wp-content/uploads/2025/11/About-Us-001.webp)' }}>
              <div className="absolute h-64% w-[72%] bottom-[-5%] right-[-15%] border-2 border-brandyellow rounded-2xl -z-10"></div>
              <div>
                <div className="mb-12 rounded-r-xl w-max text-center bg-black p-4 pr-0 relative">
                  <div className="w-8 h-8 absolute bottom-[-1.7rem] left-[-1px] rotate-180 bg-black" style={{ maskImage: 'radial-gradient(circle at 0 0, transparent 70%, black 70%)', WebkitMaskImage: 'radial-gradient(circle at 0 0, transparent 70%, black 70%)' }}></div>
                  <div className="w-8 h-8 absolute top-[-1.7rem] left-[-1px] rotate-90 bg-black" style={{ maskImage: 'radial-gradient(circle at 0 0, transparent 70%, black 70%)', WebkitMaskImage: 'radial-gradient(circle at 0 0, transparent 70%, black 70%)' }}></div>
                  <div className="p-4 bg-[#9de60030] rounded-xl">
                    <div className="text-3xl text-white font-['Unbounded'] font-semibold">4+</div>
                    <p className="mb-0">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#161616] w-1/2 h-80 -mt-64 rounded-2xl ml-auto relative z-10 block p-3">
              <Image
                src="https://kits.roxthemes.com/ethan/wp-content/uploads/2025/11/About-Me-02.webp"
                alt="Sohel Malek"
                width={400}
                height={400}
                className="h-full w-full object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Content */}
          <div className="mt-4 lg:mt-0">
            <div className="pr-0 lg:pr-8 text-center lg:text-left">
              <div className="mb-3 lg:mb-6">
                <SectionBadge label="About Me" />
                <h2 className="text-white text-4xl font-bold font-['Unbounded'] font-semibold mt-3">
                  Exploring Creativity to Shape a{" "}
                  <span className="text-[#ffc20c]">Better Future.</span>
                </h2>
              </div>
              <p className="mb-3 lg:mb-6">
                I transform imagination into impactful and meaningful designs that inspire change, spark innovation, and redefine digital creativity.
              </p>

              <div className="bg-[radial-gradient(at_top_right,rgba(157,230,0,0.2)_30%,#161616_70%)] p-4 rounded-2xl overflow-hidden relative mb-3 lg:mb-6">
                <div className="absolute inset-0 bg-[radial-gradient(at_top_right,var(--green_theme)_-50%,var(--black)_66%)] -z-10"></div>
                <div className="relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <p className="mb-0 text-white">Name:<br />Sohel Malek</p>
                    <p className="mb-0 text-white">Phone:<br /><a href="tel:+919723121537" className="text-white">+919723121537</a></p>
                    <p className="mb-0 text-white">Email:<br /><a href="mailto:sohel@sohelmalek.com" className="text-white">sohel@sohelmalek.com</a></p>
                    <p className="mb-0 text-white">Address:<br />Gujarat, India</p>
                  </div>
                </div>
              </div>

              <div className="mb-3 lg:mb-6 flex flex-wrap gap-4 items-center justify-center lg:justify-start">
                <a className="bg-[#9de600] text-black border border-transparent hover:border-brandyellow hover:bg-transparent hover:text-brandyellow px-6 py-3 font-medium rounded-full transition duration-300 inline-block" href="#">
                  <span className="flex items-center justify-center transform translate-z-0 transition duration-300">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-black hover:fill-transparent hover:stroke-brandyellow transition duration-300">
                      <path d="M12 10.4V20M12 10.4C12 8.15979 12 7.03969 11.564 6.18404C11.1805 5.43139 10.5686 4.81947 9.81596 4.43597C8.96031 4 7.84021 4 5.6 4H4.6C4.03995 4 3.75992 4 3.54601 4.10899C3.35785 4.20487 3.20487 4.35785 3.10899 4.54601C3 4.75992 3 5.03995 3 5.6V16.4C3 16.9601 3 17.2401 3.10899 17.454C3.20487 17.6422 3.35785 17.7951 3.54601 17.891C3.75992 18 4.03995 18 4.6 18H7.54668C8.08687 18 8.35696 18 8.61814 18.0466C8.84995 18.0879 9.0761 18.1563 9.29191 18.2506C9.53504 18.3567 9.75977 18.5065 10.2092 18.8062L12 20M12 10.4C12 8.15979 12 7.03969 12.436 6.18404C12.8195 5.43139 13.4314 4.81947 14.184 4.43597C15.0397 4 16.1598 4 18.4 4H19.4C19.9601 4 20.2401 4 20.454 4.10899C20.6422 4.20487 20.7951 4.35785 20.891 4.54601C21 4.75992 21 5.03995 21 5.6V16.4C21 16.9601 21 17.2401 20.891 17.454C20.7951 17.6422 20.6422 17.7951 20.454 17.891C20.2401 18 19.9601 18 19.4 18H16.4533C15.9131 18 15.643 18 15.3819 18.0466C15.15 18.0879 14.9239 18.1563 14.7081 18.2506C14.465 18.3567 14.2402 18.5065 13.7908 18.8062L12 20" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="inline-block ml-1">Read More</span>
                  </span>
                </a>
                <div className="flex gap-2 items-center">
                  <div className="w-14 h-14 rounded-full border-2 border-[#9de600] overflow-hidden">
                    <Image src="https://kits.roxthemes.com/ethan/wp-content/uploads/2025/11/About-Me-02.webp" alt="Sohel Malek" width={56} height={56} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p className="mb-0 font-['Unbounded'] font-bold text-white">Sohel Malek</p>
                    <p className="mb-0">Web Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
