"use client";

const items = [
  { label: "UI/UX Design" },
  { label: "App Development" },
  { label: "Graphic Design" },
  { label: "Website Development" },
  { label: "Digital Marketing" },
];

const JavaSVG = () => (
  <svg aria-hidden="true" className="w-8 h-8" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3z" />
  </svg>
);

function TickerItem({ label }) {
  const icon =
    label === "Website Development" ? <JavaSVG /> :
    label === "Digital Marketing" ? <i aria-hidden="true" className="w-8 h-8" /> :
    label === "App Development" ? <i aria-hidden="true" className="w-8 h-8" /> :
    label === "Graphic Design" ? <i aria-hidden="true" className="w-8 h-8" /> :
    <i aria-hidden="true" className="w-8 h-8" />;

  return (
    <div className="text-center font-semibold">
      <div className="flex items-center gap-2 px-4">
        {icon}
        <div style={{ fontSize: '2.9rem', fontWeight: 600, color: 'transparent', letterSpacing: '0.3rem', fontFamily: 'Unbounded, sans-serif', WebkitTextStroke: '0.05rem #9de600', textTransform: 'uppercase', lineHeight: 1 }}>{label}</div>
      </div>
    </div>
  );
}

// Duplicate items 3× for seamless infinite scroll
const tickerItems = [...items, ...items, ...items];

export default function ScrollTicker() {
  return (
    <div className="w-full overflow-hidden relative py-12 bg-black">
      <div className="flex w-max gap-4 hover:pause" style={{ animation: 'scrollLeft 80s linear infinite' }}>
        {tickerItems.map((item, i) => (
          <TickerItem key={i} label={item.label} />
        ))}
      </div>
    </div>
  );
}
