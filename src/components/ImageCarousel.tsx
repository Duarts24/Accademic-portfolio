import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  images: readonly string[];
  alt: string;
  prevLabel: string;
  nextLabel: string;
};

export function ImageCarousel({ images, alt, prevLabel, nextLabel }: Props) {
  const [index, setIndex] = useState(0);
  const total = images.length;

  const go = (delta: number) => setIndex((i) => (i + delta + total) % total);

  return (
    <div className="group/carousel relative aspect-video w-full overflow-hidden bg-muted">
      {images.map((src, i) => (
        <img
          key={src + i}
          src={src}
          alt={alt}
          loading="lazy"
          width={1024}
          height={768}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {total > 1 && (
        <>
          <button
            type="button"
            aria-label={prevLabel}
            onClick={() => go(-1)}
            className="carousel-nav-button absolute left-2 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            aria-label={nextLabel}
            onClick={() => go(1)}
            className="carousel-nav-button absolute right-2 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full"
          >
            <ChevronRight className="size-4" />
          </button>
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((src, i) => (
              <button
                key={"dot" + src + i}
                type="button"
                aria-label={`${i + 1}/${total}`}
                onClick={() => setIndex(i)}
                className={`carousel-dot-button size-1.5 rounded-full transition ${
                  i === index ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
