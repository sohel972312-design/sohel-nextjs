import { PhoneIconSVG, CheckIcon } from "@/lib/shared";

export default function CtaMid() {
  return (
    <section className="ctasec">
      <div className="container mx-auto px-4">
        <div className="ctasec_box rounded-2xl text-center py-12">
          <div className="my-0 lg:my-10">
            <div className="mb-3">
              <span className="text-white text-4xl bold unbounded_semibold">Let&apos;s Design Something </span>
              <span className="textyellow text-4xl bold unbounded_semibold">Extraordinary.</span>
            </div>
            <p className="textlight mb-3">
              I&apos;m passionate about creating meaningful digital experiences that connect ideas, people, and innovation.
            </p>
            <a className="nav-link greenbtn custbtn inline-block rounded-full medium js-tilt tile" href="#contact">
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
