import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroImg1 from "../image/Hero-image.png";
import heroImg2 from "../image/Hero-image-2.png";
import man3 from "../image/man_3.jpg";

const slides = [
  { img: heroImg1, link: "/women" },
  { img: heroImg2, link: "/men" },
  { img: man3, link: "/men" },
];

export function HeroCarousel() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((x) => (x + 1) % slides.length), 4000);
    return () => clearInterval(t);
  }, [paused]);

  const go = (delta: number) => setI((x) => (x + delta + slides.length) % slides.length);

  return (
    <div
      className="relative overflow-hidden w-full z-0 group"
      style={{ height: "clamp(250px, 45vw, 500px)" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((s, idx) => (
        <a
          key={idx}
          href={s.link}
          className="absolute inset-0 transition-opacity duration-500 ease-in-out cursor-pointer"
          style={{ opacity: idx === i ? 1 : 0, pointerEvents: idx === i ? "auto" : "none" }}
        >
          <img
            src={s.img}
            alt={`Banner ${idx + 1}`}
            loading={idx === 0 ? "eager" : "lazy"}
            className="w-full h-full object-cover"
          />
        </a>
      ))}

      {/* Nav arrows - reveal on hover */}
      <button
        onClick={() => go(-1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center text-[#2D2D2D] opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110"
        aria-label="Previous"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => go(1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center text-[#2D2D2D] opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110"
        aria-label="Next"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Slide ${idx + 1}`}
            className="transition-all duration-300"
            style={{
              width: idx === i ? 24 : 8,
              height: 8,
              borderRadius: 4,
              background: idx === i ? "#B8933E" : "rgba(255,255,255,0.7)",
              border: "none",
            }}
          />
        ))}
      </div>
    </div>
  );
}
