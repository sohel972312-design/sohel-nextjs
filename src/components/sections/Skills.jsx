"use client";

import { useEffect, useRef } from "react";
import { SectionBadge } from "@/lib/shared";

const skills = [
  {
    name: "Figma", pct: 85,
    svg: (
      <svg className="skillbox_percimg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 346 512.36">
        <g fillRule="nonzero">
          <path fill="#00B6FF" d="M172.53 246.9c0-42.04 34.09-76.11 76.12-76.11h11.01c.3.01.63-.01.94-.01 47.16 0 85.4 38.25 85.4 85.4 0 47.15-38.24 85.39-85.4 85.39-.31 0-.64-.01-.95-.01l-11 .01c-42.03 0-76.12-34.09-76.12-76.12V246.9z" />
          <path fill="#24CB71" d="M0 426.98c0-47.16 38.24-85.41 85.4-85.41l87.13.01v84.52c0 47.65-39.06 86.26-86.71 86.26C38.67 512.36 0 474.13 0 426.98z" />
          <path fill="#FF7237" d="M172.53.01v170.78h87.13c.3-.01.63.01.94.01 47.16 0 85.4-38.25 85.4-85.4C346 38.24 307.76 0 260.6 0c-.31 0-.64.01-.95.01h-87.12z" />
          <path fill="#FF3737" d="M0 85.39c0 47.16 38.24 85.4 85.4 85.4h87.13V.01H85.39C38.24.01 0 38.24 0 85.39z" />
          <path fill="#874FFF" d="M0 256.18c0 47.16 38.24 85.4 85.4 85.4h87.13V170.8H85.39C38.24 170.8 0 209.03 0 256.18z" />
        </g>
      </svg>
    ),
  },
  {
    name: "WordPress", pct: 80,
    svg: (
      <svg className="skillbox_percimg" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M36.5025 0.0908C26.8463 0.0908 17.5856 3.9267 10.7576 10.7547C3.9297 17.5827 0.0938 26.8434 0.0938 36.4996C0.0938 46.1558 3.9297 55.4165 10.7576 62.2444C17.5856 69.0724 26.8463 72.9083 36.5025 72.9083C46.1587 72.9083 55.4194 69.0724 62.2474 62.2444C69.0753 55.4165 72.9113 46.1558 72.9113 36.4996C72.9113 26.8434 69.0753 17.5827 62.2474 10.7547C55.4194 3.9267 46.1587 0.0908 36.5025 0.0908Z" fill="white" />
        <path d="M7.3008 36.4998C7.3008 48.063 14.0168 58.0458 23.7586 62.7798L9.8266 24.6154C8.2078 28.249 7.3008 32.2585 7.3008 36.4998Z" fill="#01579B" />
      </svg>
    ),
  },
  {
    name: "HTML5", pct: 95,
    svg: (
      <svg className="skillbox_percimg" viewBox="0 0 73 82" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M73.0016 0H0L6.44132 73.0016L36.5008 81.59L66.5603 73.0016L73.0016 0Z" fill="#E65100" />
        <path d="M36.5 6.44141V74.9341L60.5476 68.0633L65.9153 6.44141H36.5Z" fill="#FF6D00" />
        <path d="M36.5 42.942V34.3536H54.9651L53.4621 59.0453L36.5 64.6278V55.6099L45.3031 52.604L45.9473 42.942H36.5ZM55.6092 25.7652L56.2534 17.1768H36.5V25.7652H55.6092Z" fill="white" />
        <path d="M36.4957 55.6099V64.6278L19.5336 59.0453L18.6747 47.2362H27.2631L27.6926 52.604L36.4957 55.6099ZM25.9749 25.7652H36.4957V17.1768H16.957L18.46 42.942H36.4957V34.3536H26.619L25.9749 25.7652Z" fill="#EEEEEE" />
      </svg>
    ),
  },
  {
    name: "CSS3", pct: 90,
    svg: (
      <svg className="skillbox_percimg" viewBox="0 0 73 82" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M73 0H0L6.44118 73L36.5 81.5882L66.5588 73L73 0Z" fill="#0277BD" />
        <path d="M36.5 6.44092V74.9321L60.5471 68.0615L65.9147 6.44092H36.5Z" fill="#039BE5" />
        <path d="M56.0382 17.1768H36.5V25.765H47.0206L46.3765 34.3532H36.5V42.9415H45.9471L45.3029 52.6032L36.5 55.6091V64.6268L53.4618 59.0444L54.9647 34.3532L56.0382 17.1768Z" fill="white" />
        <path d="M36.499 17.1768V25.765H17.3902L16.7461 17.1768H36.499ZM26.6226 34.3532L27.052 42.9415H36.499V34.3532H26.6226ZM27.4814 47.2356H18.8932L19.5373 59.0444L36.499 64.6268V55.6091L27.6961 52.6032L27.4814 47.2356Z" fill="#EEEEEE" />
      </svg>
    ),
  },
  {
    name: "Bootstrap 5", pct: 90,
    svg: (
      <svg className="skillbox_percimg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 408">
        <defs>
          <linearGradient id="bs" gradientUnits="userSpaceOnUse" x1="76" y1="10" x2="523" y2="365">
            <stop offset="0" stopColor="#9013FE" /><stop offset="1" stopColor="#6610F2" />
          </linearGradient>
        </defs>
        <path fill="url(#bs)" fillRule="nonzero" d="M56.48 53.32C55.52 25.58 77.13 0 106.34 0H405.7c29.21 0 50.82 25.58 49.86 53.32-.93 26.65.27 61.16 8.96 89.31 8.72 28.23 23.41 46.08 47.48 48.37v26c-24.07 2.29-38.76 20.14-47.48 48.37-8.69 28.15-9.89 62.66-8.96 89.31.96 27.74-20.65 53.32-49.86 53.32H106.34c-29.21 0-50.82-25.58-49.86-53.32.93-26.65-.28-61.16-8.96-89.31C38.8 237.14 24.07 219.29 0 217v-26c24.07-2.29 38.8-20.14 47.52-48.37 8.68-28.15 9.89-62.66 8.96-89.31z" />
        <path fill="#fff" d="M342.9 251.1c0 38.2-28.5 61.36-75.8 61.36h-89.2v-217h88.74c39.44 0 65.32 21.35 65.32 54.13 0 23.01-17.4 43.62-39.59 47.22v1.21c30.2 3.31 50.53 24.21 50.53 53.08z" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS", pct: 90,
    svg: (
      <svg className="skillbox_percimg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 73.29">
        <path style={{ fill: "#06b6d4", fillRule: "evenodd" }} d="M61.44,0Q36.87,0,30.72,24.43q9.22-12.21,21.5-9.16c4.68,1.16,8,4.53,11.72,8.26,6,6.08,13,13.11,28.22,13.11q24.57,0,30.72-24.43-9.21,12.22-21.5,9.16c-4.68-1.16-8-4.53-11.72-8.26C83.64,7,76.67,0,61.44,0ZM30.72,36.64Q6.15,36.64,0,61.07q9.23-12.21,21.5-9.16c4.68,1.16,8,4.53,11.72,8.27,6,6.07,13,13.11,28.22,13.11q24.57,0,30.72-24.43Q82.95,61.07,70.66,58c-4.68-1.16-8-4.53-11.72-8.26-6-6.08-13-13.12-28.22-13.12Z" />
      </svg>
    ),
  },
  {
    name: "jQuery / JS", pct: 75,
    svg: (
      <svg className="skillbox_percimg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.88">
        <polygon style={{ fillRule: "evenodd", clipRule: "evenodd", fill: "#F7DF1E" }} points="0,0 122.88,0 122.88,122.88 0,122.88 0,0" />
        <path style={{ fillRule: "evenodd", clipRule: "evenodd" }} d="M32.31,102.69l9.4-5.69c1.81,3.22,3.46,5.94,7.42,5.94c3.79,0,6.19-1.48,6.19-7.26V56.41h11.55v39.43c0,11.96-7.01,17.4-17.24,17.4C40.39,113.24,35.03,108.46,32.31,102.69z M73.14,101.45l9.4-5.44c2.48,4.04,5.69,7.01,11.38,7.01c4.78,0,7.84-2.39,7.84-5.69c0-3.96-3.13-5.36-8.41-7.67l-2.89-1.24c-8.33-3.55-13.86-8-13.86-17.4c0-8.66,6.6-15.26,16.91-15.26c7.34,0,12.62,2.56,16.41,9.24l-8.99,5.77c-1.98-3.55-4.12-4.95-7.42-4.95c-3.38,0-5.53,2.14-5.53,4.95c0,3.46,2.14,4.87,7.09,7.01l2.89,1.24c9.82,4.21,15.34,8.5,15.34,18.15c0,10.39-8.17,16.08-19.14,16.08C83.45,113.25,76.52,108.13,73.14,101.45z" />
      </svg>
    ),
  },
];

export default function Skills() {
  const barsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const bar = entry.target;
          if (bar.classList.contains("animate")) return;

          const target = parseInt(bar.getAttribute("data-percent"), 10);
          if (isNaN(target)) return;

          bar.style.setProperty("--percent", target + "%");
          bar.classList.add("animate");
          obs.unobserve(bar);

          // animate counter
          const box = bar.closest(".skillbox");
          const el = box?.querySelector(".skill-percent");
          if (!el) return;
          let start = null;
          const duration = 1200;
          const step = (ts) => {
            if (!start) start = ts;
            const progress = Math.min((ts - start) / duration, 1);
            el.textContent = Math.floor(progress * target) + "%";
            if (progress < 1) requestAnimationFrame(step);
            else el.textContent = target + "%";
          };
          requestAnimationFrame(step);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0 }
    );

    barsRef.current.forEach((b) => b && observer.observe(b));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="skillproj commonsec relative">
      <div className="container mx-auto px-4">
        <div className="mb-8 lg:mb-12 text-center">
          <SectionBadge label="Skills" />
          <h2 className="text-white text-4xl bold unbounded_semibold mt-3 mb-3">
            Explore the Core Skills <br className="hidden xl:block" /> Behind{" "}
            <span className="textyellow">My Work.</span>
          </h2>
          <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <div key={skill.name} className="skillbox p-4 relative overflow-hidden rounded-2xl w-full">
              <div className="flex items-center justify-between mb-6 xl:mb-10">
                <div className="flex gap-2 items-center">
                  {skill.svg}
                  <div className="text-lg unbounded_semibold text-white">{skill.name}</div>
                </div>
                <div className="text-lg unbounded_semibold text-white skill-percent" data-percent={skill.pct}>
                  0%
                </div>
              </div>
              <div
                className="skillprocessline w-full"
                data-percent={skill.pct}
                ref={(el) => (barsRef.current[i] = el)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
