import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroImg1 from "../image/Hero-image.png";
import heroImg2 from "../image/Hero-image-2.png";
import man3 from "../image/man_3.jpg";

const slides = [
  {
    img: heroImg1,
    title: "NEW ARRIVALS — SUMMER 2026",
    sub: "Flat ₹300 off on orders above ₹1999",
    cta: "SHOP NOW",
    accent: "#B8933E",
  },
  {
    img: heroImg2,
    title: "MEN'S STYLE — BUILT FOR YOU",
    sub: "Chinos, Shirts, Tees & More",
    cta: "EXPLORE MEN",
    accent: "#091F13",
  },
  {
    img: man3,
    title: "SHIRTS & FORMALS",
    sub: "Office-ready looks at unbeatable prices",
    cta: "SHOP FORMALS",
    accent: "#E31E24",
  },
];

export function HeroCarousel() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((x) => (x + 1) % slides.length), 4500);
    return () => clearInterval(t);
  }, [paused]);

  const go = (delta: number) => setI((x) => (x + delta + slides.length) % slides.length);

  return (
    <div
      className="relative overflow-hidden z-0"
      style={{ height: "clamp(320px, 65vw, 600px)" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((s, idx) => (
        <div
          key={idx}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: idx === i ? 1 : 0, pointerEvents: idx === i ? "auto" : "none" }}
        >
          <img
            src={s.img}
            alt={s.title}
            loading={idx === 0 ? "eager" : "lazy"}
            className="img-cover"
          />
          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)",
            }}
          />
          {/* Text */}
          <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 lg:px-24">
            <span
              className="text-xs md:text-sm font-bold uppercase tracking-[3px] mb-3"
              style={{ color: s.accent }}
            >
              {s.sub}
            </span>
            <h2
              className="text-2xl sm:text-3xl md:text-5xl font-extrabold uppercase leading-tight mb-6 text-white"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.5)", maxWidth: 560 }}
            >
              {s.title}
            </h2>
            <div>
              <button
                className="inline-block px-7 py-3 text-sm font-bold uppercase tracking-[1.5px] text-white border-2 border-white transition hover:bg-white hover:text-black"
                style={{ borderRadius: 2 }}
              >
                {s.cta}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Nav arrows */}
      <button
        onClick={() => go(-1)}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur flex items-center justify-center hover:bg-white transition"
        aria-label="Previous"
      >
        <ChevronLeft size={20} color="#333" />
      </button>
      <button
        onClick={() => go(1)}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur flex items-center justify-center hover:bg-white transition"
        aria-label="Next"
      >
        <ChevronRight size={20} color="#333" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Slide ${idx + 1}`}
            className="transition-all duration-300"
            style={{
              width: idx === i ? 28 : 8,
              height: 8,
              borderRadius: 4,
              background: idx === i ? "#B8933E" : "rgba(255,255,255,0.5)",
              border: "none",
            }}
          />
        ))}
      </div>
    </div>
  );
}
