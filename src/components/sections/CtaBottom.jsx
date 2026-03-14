import { PhoneIconSVG, SectionBadge } from "@/lib/shared";

export default function CtaBottom() {
  return (
    <section className="bottom_ctasec pb-0">
      <div className="container mx-auto px-4">
        <div className="flex items-center flex-col lg:flex-row gap-8 justify-center lg:justify-between px-4 xl:px-10 py-10 ctasec_box rounded-t-2xl">
          <div className="text-center lg:text-left">
            <SectionBadge label="Get Started" centerOnMobile />
            <h2 className="text-white text-4xl bold unbounded_semibold mt-3">
              Empower Yourself Through <br className="hidden xl:block" />
              <span className="textyellow">Learning and Growth.</span>
            </h2>
          </div>
          <div>
            <a className="nav-link greenbtn custbtn ctaminibtn inline-block rounded-full medium js-tilt tile" href="#contact">
              <span className="inner">
                <PhoneIconSVG />
                <span className="inline-block ml-1">Contact Now</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
