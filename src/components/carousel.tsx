import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

export function Carousel({ children }: { children: ReactNode[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = () => {
    const el = ref.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  };

  useEffect(() => {
    update();
    const el = ref.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollBy = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={ref}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children.map((child, i) => (
          <div key={i} className="min-w-[85%] snap-start md:min-w-[45%] lg:min-w-[32%]">
            {child}
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-end gap-2">
        <button
          onClick={() => scrollBy(-1)}
          disabled={!canPrev}
          aria-label="Previous"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-all duration-200 hover:border-mint hover:bg-mint/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint/40 disabled:opacity-30 disabled:hover:border-border disabled:hover:bg-transparent"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={() => scrollBy(1)}
          disabled={!canNext}
          aria-label="Next"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-all duration-200 hover:border-mint hover:bg-mint/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint/40 disabled:opacity-30 disabled:hover:border-border disabled:hover:bg-transparent"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}