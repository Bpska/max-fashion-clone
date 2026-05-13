import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { img: "https://picsum.photos/seed/fashion1/1280/480", title: "NEW ARRIVALS — SUMMER 2025", cta: "SHOP NOW" },
  { img: "https://picsum.photos/seed/sport2/1280/480", title: "RHODIUM SPORT — BUILT FOR PERFORMANCE", cta: "EXPLORE NOW" },
  { img: "https://picsum.photos/seed/kids3/1280/480", title: "KIDS FEST — UP TO 50% OFF", cta: "SHOP KIDS" },
  { img: "https://picsum.photos/seed/ethnic4/1280/480", title: "ETHNIC EDIT — KURTAS & SUITS", cta: "SHOP ETHNIC" },
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
    <div className="relative overflow-hidden" style={{ height: 480 }} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {slides.map((s, idx) => (
        <div key={idx} className="absolute inset-0 transition-opacity duration-700" style={{ opacity: idx === i ? 1 : 0 }}>
          <img src={s.img} alt={s.title} loading="eager" className="img-cover" />
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.4)" }} />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-wider mb-6">{s.title}</h2>
            <button className="px-8 py-3 text-[13px] font-bold uppercase tracking-[1px] border-2 border-white hover:bg-white hover:text-black transition">
              {s.cta}
            </button>
          </div>
        </div>
      ))}
      <button onClick={() => go(-1)} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center" aria-label="Prev">
        <ChevronLeft size={20} color="#333" />
      </button>
      <button onClick={() => go(1)} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center" aria-label="Next">
        <ChevronRight size={20} color="#333" />
      </button>
      <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, idx) => (
          <button key={idx} onClick={() => setI(idx)} aria-label={`Slide ${idx + 1}`}
            className="w-3 h-3 rounded-full border-2 border-white"
            style={{ background: idx === i ? "#E31E24" : "transparent", borderColor: idx === i ? "#E31E24" : "#fff" }}
          />
        ))}
      </div>
    </div>
  );
}
