import { SectionBadge } from "@/lib/shared";

const steps = [
  { num: "01", title: "Research & Discovery" },
  { num: "02", title: "Planning & Strategy" },
  { num: "03", title: "Design & Concept" },
  { num: "04", title: "Launch & Delivery" },
  { num: "05", title: "Testing & Review" },
  { num: "06", title: "Support & Maintenance" },
];

function WorkBox({ num, title }) {
  return (
    <div className="work_box commonsec w-full flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <div className="flex items-center flex-col sm:flex-row gap-4 xl:gap-12 px-0 xl:px-4 text-center sm:text-left">
        <div className="stroke-text-white text-5xl">{num}</div>
        <div>
          <div className="text-white unbounded_semibold mb-1 text-lg">{title}</div>
          <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.</p>
        </div>
      </div>
    </div>
  );
}

export default function WorkProcess() {
  return (
    <section className="projectsec commonsec relative">
      <div className="container mx-auto px-4">
        <div className="mb-8 lg:mb-12 text-center">
          <SectionBadge label="Work Process" />
          <h2 className="text-white text-4xl bold unbounded_semibold mt-3 mb-3">
            Step-by-Step Process Behind Every <br className="hidden xl:block" />
            <span className="textyellow">Great Project.</span>
          </h2>
          <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="flex flex-col gap-8 items-center justify-center">
          {/* Row 1 */}
          <div className="flex flex-col lg:flex-row gap-8 items-center w-full lg:w-5/6">
            <WorkBox {...steps[0]} />
            <WorkBox {...steps[1]} />
          </div>

          {/* Row 2 with circle */}
          <div className="flex flex-col lg:flex-row gap-8 items-center w-full">
            <WorkBox {...steps[2]} />
            <div className="circle_icno grid_center hidden lg:block shrink-0">
              <svg className="w-full h-auto" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <path id="textPathCircle" d="M 100, 100 m -72, 0 a 72,72 0 1,1 144,0 a 72,72 0 1,1 -144,0" />
                </defs>
                <circle cx="100" cy="100" r="100" fill="#1C1E16" />
                <circle cx="100" cy="100" r="46" fill="#A4D618" />
                <text fill="white" fontWeight="700" fontSize="22" letterSpacing="1.5">
                  <textPath href="#textPathCircle" startOffset="25%" textAnchor="middle">WORK PROCESS.</textPath>
                  <textPath href="#textPathCircle" startOffset="75%" textAnchor="middle">WORK PROCESS.</textPath>
                </text>
                <g stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="square" strokeLinejoin="miter">
                  <path d="M 90 110 L 110 90" />
                  <path d="M 96 90 L 110 90 L 110 104" />
                </g>
              </svg>
            </div>
            <WorkBox {...steps[3]} />
          </div>

          {/* Row 3 */}
          <div className="flex flex-col lg:flex-row gap-8 items-center w-full lg:w-5/6">
            <WorkBox {...steps[4]} />
            <WorkBox {...steps[5]} />
          </div>
        </div>
      </div>
    </section>
  );
}
