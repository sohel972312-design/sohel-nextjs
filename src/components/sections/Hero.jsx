import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { PhoneIconSVG, SocialLinks } from "@/lib/shared";

export default function Hero() {
  return (
    <div className="relative bg-black pt-32 xl:pt-52 pb-10 md:pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(at_top_left,var(--green_theme)_30%,var(--transparent_theme)_70%)] opacity-18 pointer-events-none"></div>
      <div className="  ">
        <Container>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-12 gap-8">

            {/* Text */}
            <div className="col-span-1 lg:col-span-1 xl:col-span-5 flex items-center justify-center">
              <div className="text-center xl:text-left">
                <div className="mb-3">
                  <div className="text-white text-2xl lg:text-2xl xl:text-3xl font-bold font-['Unbounded'] ">I&apos;m</div>
                  <div className="text-white text-2xl lg:leading-15 lg:text-5xl xl:text-6xl leading-8 xl:leading-19 font-bold font-['Unbounded'] ">Sohel Malek,</div>
                  <div className="text-brandyellow text-2xl leading-8 xl:leading-19 border-brandyellow lg:leading-15 lg:text-5xl xl:text-6xl font-bold font-['Unbounded'] ">Web Designer</div>
                </div>
                <p className=" mb-3">
                  A passionate Web Designer, SEO Specialist, and Digital Creator with over 4 years of experience helping brands grow online.
                </p>
                <Button href="contact">
                  <span className="flex items-center justify-center transition duration-300">

                    <PhoneIconSVG className="w-5 h-5 group-hover:text-brandyellow transition" />

                    <span className="inline-block ml-1 group-hover:text-brandyellow transition">
                      Contact Me
                    </span>

                  </span>
                </Button>
              </div>
            </div>

            <div className="col-span-1 lg:col-span-1 xl:col-span-3 mt-4 xl:mt-0 flex items-center justify-center">
              <div className="px-12 xl:px-0 w-full border-b-3 sm:w-3xs border-brandgreen">
                <Image
                  src="https://kits.roxthemes.com/ethan/wp-content/uploads/2025/11/ethan2.webp"
                  alt="Sohel Malek"
                  width={500}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>

            {/* Side content */}
            <div className="col-span-1  xl:col-span-4 flex items-center">
              <div className="flex flex-col gap-6 lg:gap-12 items-center w-full">
                <div className="flex flex-col gap-3">
                  <div className="flex gap-2 items-center">
                    <span className="w-4 h-4">
                      <svg aria-hidden="true" className="fill-brandgreen h-4 w-4" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z" />
                      </svg>
                    </span>
                    <p className="mb-0 text-white">Specialized In</p>
                  </div>
                  <div className="text-base font-semibold font-['Unbounded'] text-white">
                    We are creating digital solutions to<br className="hidden xl:block" /> promote global brands every day.
                  </div>
                  <p className=" mb-0">
                    I build professional, responsive, and SEO-optimized websites that look great, load fast, and convert visitors into customers. Whether you need a personal portfolio, business site, or e-commerce platform — let’s bring your vision to life.
                  </p>
                  <div>
                    <a href="https://sohelmalek.com/assets/pdf/sohel-resume.pdf" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                      <span className="mr-2 font-semibold text-base text-white font-['Unbounded']">Download CV</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                        <path fill="#9de600" d="M14.853 9.647c-0.195-0.195-0.512-0.195-0.707 0l-4.146 4.146v-11.293c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v11.293l-4.146-4.146c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l5 5c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.147l5-5c0.195-0.195 0.195-0.512-0-0.707z" />
                        <path fill="#9de600" d="M17.5 19h-16c-0.827 0-1.5-0.673-1.5-1.5v-2c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v2c0 0.276 0.224 0.5 0.5 0.5h16c0.276 0 0.5-0.224 0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v2c0 0.827-0.673 1.5-1.5 1.5z" />
                      </svg>
                    </a>
                  </div>


                  <div className="w-full">
                    <div className="text-white font-['Unbounded'] font-semibold flex md:items-center gap-2 flex-wrap md:justify-end">
                      <span>Follow Me:</span>
                      <div className="social-links"><SocialLinks /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>

      </div>
    </div>
  );
}
