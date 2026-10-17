"use client";

import { useCallback, useEffect, useRef, useState, type PointerEvent } from "react";
import Link from "next/link";
import Navbar from "../Navbar";
import type { MenuCategory } from "../../data/menuCategories";

type Props = {
  category: MenuCategory;
  menuType: "alacarte" | "buffet";
};

type MenuItem = MenuCategory["items"][number];

function StirFryCarousel({ items }: { items: MenuItem[] }) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const isAdjustingRef = useRef(false);
  const dragRef = useRef({ active: false, startX: 0, startScroll: 0 });
  const [active, setActive] = useState(0);

  // Three identical sets let the user move in either direction without reaching an end.
  const repeatedItems = [...items, ...items, ...items];

  const getCardStep = useCallback(() => {
    const slider = sliderRef.current;
    if (!slider) return 0;
    const first = slider.children[0] as HTMLElement | undefined;
    const second = slider.children[1] as HTMLElement | undefined;
    if (!first || !second) return 0;
    return second.offsetLeft - first.offsetLeft;
  }, []);

  const getSetWidth = useCallback(() => {
    const slider = sliderRef.current;
    if (!slider || items.length === 0) return 0;
    // Use the measured card spacing to avoid relying on rounded scrollWidth values.
    return getCardStep() * items.length;
  }, [getCardStep, items.length]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider || items.length === 0) return;

    const centerOnMiddleSet = () => {
      const setWidth = getSetWidth();
      if (setWidth > 0) slider.scrollLeft = setWidth;
    };

    const frame = window.requestAnimationFrame(centerOnMiddleSet);
    window.addEventListener("resize", centerOnMiddleSet);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", centerOnMiddleSet);
    };
  }, [getSetWidth, items.length]);

  const handleScroll = () => {
    const slider = sliderRef.current;
    if (!slider || items.length === 0 || isAdjustingRef.current) return;

    const step = getCardStep();
    const setWidth = getSetWidth();
    if (step <= 0 || setWidth <= 0) return;

    // Re-center before the user gets near the physical ends. The repeated cards
    // are identical, so shifting by one full set keeps the visible content unchanged.
    const leftBoundary = setWidth * 0.5;
    const rightBoundary = setWidth * 2.5;
    if (slider.scrollLeft < leftBoundary || slider.scrollLeft > rightBoundary) {
      isAdjustingRef.current = true;
      const direction = slider.scrollLeft < leftBoundary ? 1 : -1;
      slider.scrollLeft += direction * setWidth;
      requestAnimationFrame(() => {
        isAdjustingRef.current = false;
      });
    }

    const index = Math.round(slider.scrollLeft / step);
    const nextActive = ((index % items.length) + items.length) % items.length;
    setActive((current) => (current === nextActive ? current : nextActive));
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;
    const slider = sliderRef.current;
    if (!slider) return;
    dragRef.current = {
      active: true,
      startX: event.clientX,
      startScroll: slider.scrollLeft,
    };
    slider.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.active) return;
    const slider = sliderRef.current;
    if (!slider) return;
    slider.scrollLeft = dragRef.current.startScroll - (event.clientX - dragRef.current.startX);
  };

  const handlePointerUp = () => {
    dragRef.current.active = false;
  };

  const scroll = (direction: "left" | "right") => {
    const slider = sliderRef.current;
    const step = getCardStep();
    if (!slider || !step) return;
    slider.scrollBy({ left: direction === "right" ? step : -step, behavior: "smooth" });
  };

  if (items.length === 0) return null;

  return (
    <div className="relative mt-10">
      <div
        ref={sliderRef}
        onScroll={handleScroll}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="flex cursor-grab select-none gap-5 overflow-x-auto overscroll-x-contain px-6 pb-6 active:cursor-grabbing [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ WebkitOverflowScrolling: "touch", touchAction: "pan-x pan-y", scrollBehavior: "auto" }}
      >
        {repeatedItems.map((item, index) => {
          const itemType = item.name.toLowerCase().startsWith("teriyaki") ? "TERIYAKI" : "BARBEQUE";
          return (
            <article
              key={`${item.name}-${index}`}
              className="group relative h-[440px] w-[280px] flex-none overflow-hidden rounded-3xl border border-white/10 bg-[#171717] sm:w-[320px] md:h-[540px] md:w-[390px]"
            >
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.name}
                  draggable={false}
                  loading="lazy"
                  decoding="async"
                  className="pointer-events-none h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-[#171717] text-gray-500">No Image</div>
              )}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="pointer-events-none absolute right-6 top-6 rounded-full border border-white/30 bg-black/40 px-4 py-2 text-xs tracking-widest backdrop-blur-md">
                {String((index % items.length) + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
              </div>
              <div className="pointer-events-none absolute bottom-0 left-0 w-full p-6 sm:p-8">
                <p className="text-xs font-semibold tracking-[0.3em] text-orange-400">{itemType}</p>
                <h3 className="mt-3 text-2xl font-bold sm:text-3xl">{item.name}</h3>
                <p className="mt-3 max-w-sm text-sm leading-6 text-gray-300">{item.description}</p>
                {item.price && <p className="mt-3 text-sm font-semibold text-orange-400">{item.price}</p>}
                <div className="mt-5 h-px w-16 bg-orange-500 transition-all duration-500 group-hover:w-full" />
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-8 flex items-center justify-center gap-8">
        <button
          type="button"
          onClick={() => scroll("left")}
          aria-label="Previous stir fry item"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-xl transition hover:border-orange-500 hover:bg-orange-500"
        >←</button>
        <div className="flex items-center gap-3 text-sm tracking-widest">
          <span className="font-bold text-orange-400">{String(active + 1).padStart(2, "0")}</span>
          <span className="h-px w-12 bg-white/30" />
          <span className="text-gray-500">{String(items.length).padStart(2, "0")}</span>
        </div>
        <button
          type="button"
          onClick={() => scroll("right")}
          aria-label="Next stir fry item"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-xl transition hover:border-orange-500 hover:bg-orange-500"
        >→</button>
      </div>
    </div>
  );
}

export default function StirFry({ category, menuType }: Props) {
  const backUrl = `/menu/${menuType}`;
  const menuLabel = menuType === "alacarte" ? "À La Carte" : "Buffet";

  return (
    <main className="min-h-screen overflow-hidden bg-[#090909] text-white">
      <Navbar />
      <section className="border-t border-white/10 bg-[#090909] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Link href={backUrl} className="inline-flex text-sm font-medium text-orange-400 transition duration-300 hover:-translate-x-1 hover:text-orange-300">
            ← Back to {menuLabel}
          </Link>
          <div className="mt-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-orange-400">The Fun2 Selection</p>
            <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
              <span className="text-orange-400">{category.name || "Stir Fry"}</span>
            </h1>
            <div className="mx-auto mt-7 h-px w-24 bg-orange-500" />
            <p className="mx-auto mt-7 max-w-xl leading-8 text-gray-400">{category.description}</p>
          </div>
        </div>

        <section className="mx-auto mt-16 max-w-7xl">
          <div className="px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-400">STIR FRY</p>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">Teriyaki &amp; Barbeque Selection</h2>
            <div className="mt-5 h-px w-full bg-white/10" />
          </div>
          <StirFryCarousel items={category.items} />
        </section>

        <p className="mt-10 text-center text-xs uppercase tracking-[0.35em] text-gray-500">Choose • Taste • Enjoy</p>
        <div className="mt-8 text-center">
          <Link href={backUrl} className="inline-flex rounded-full border border-white/30 px-8 py-4 font-semibold transition hover:border-orange-400 hover:text-orange-400">
            ← View All Categories
          </Link>
        </div>
      </section>
    </main>
  );
}
