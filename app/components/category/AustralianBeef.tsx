"use client";

import {
  useLayoutEffect,
  useRef,
  useState,
  type PointerEvent,
} from "react";

import Link from "next/link";
import Navbar from "../Navbar";
import type { MenuCategory } from "../../data/menuCategories";

type Props = {
  category: MenuCategory;
  menuType: "alacarte" | "buffet";
};

export default function AustralianBeef({
  category,
  menuType,
}: Props) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const movingRef = useRef(false);

  const dragRef = useRef({
    active: false,
    startX: 0,
    startScroll: 0,
  });

  const [active, setActive] = useState(0);

  const items = category.items;
  const repeatedItems = [
    ...items,
    ...items,
    ...items,
  ];

  const backUrl = `/menu/${menuType}`;

  const menuLabel =
    menuType === "alacarte"
      ? "À La Carte"
      : "Buffet";

  const getCardWidth = () => {
    const slider = sliderRef.current;

    if (!slider) return 0;

    const first =
      slider.children[0] as HTMLElement;

    const second =
      slider.children[1] as HTMLElement;

    if (!first || !second) return 0;

    return second.offsetLeft - first.offsetLeft;
  };

  useLayoutEffect(() => {
    const slider = sliderRef.current;

    if (!slider || items.length === 0) return;

    slider.scrollLeft =
      getCardWidth() * items.length;
  }, [items.length]);

  const handleScroll = () => {
    const slider = sliderRef.current;

    if (!slider || movingRef.current) return;

    const step = getCardWidth();

    if (!step || items.length === 0) return;

    const setWidth =
      step * items.length;

    if (slider.scrollLeft < setWidth) {
      slider.scrollLeft += setWidth;
    } else if (
      slider.scrollLeft >= setWidth * 2
    ) {
      slider.scrollLeft -= setWidth;
    }

    const index = Math.round(
      slider.scrollLeft / step
    );

    setActive(
      ((index % items.length) +
        items.length) %
        items.length
    );
  };

  const handlePointerDown = (
    event: PointerEvent<HTMLDivElement>
  ) => {
    if (event.pointerType !== "mouse") return;
    if (movingRef.current) return;

    const slider = sliderRef.current;

    if (!slider) return;

    dragRef.current = {
      active: true,
      startX: event.clientX,
      startScroll: slider.scrollLeft,
    };

    slider.setPointerCapture(
      event.pointerId
    );
  };

  const handlePointerMove = (
    event: PointerEvent<HTMLDivElement>
  ) => {
    if (!dragRef.current.active) return;

    const slider = sliderRef.current;

    if (!slider) return;

    const distance =
      event.clientX -
      dragRef.current.startX;

    slider.scrollLeft =
      dragRef.current.startScroll -
      distance;
  };

  const handlePointerUp = () => {
    if (!dragRef.current.active) return;

    dragRef.current.active = false;

    const slider = sliderRef.current;

    if (!slider) return;

    const step = getCardWidth();

    if (!step) return;

    const nearest = Math.round(
      slider.scrollLeft / step
    );

    slider.scrollTo({
      left: nearest * step,
      behavior: "smooth",
    });
  };

  const scroll = (
    direction: "left" | "right"
  ) => {
    const slider = sliderRef.current;

    if (!slider || movingRef.current) return;

    movingRef.current = true;

    const step = getCardWidth();

    if (!step) {
      movingRef.current = false;
      return;
    }

    const middle =
      step * items.length;

    const next =
      direction === "right"
        ? (active + 1) % items.length
        : (active - 1 + items.length) %
          items.length;

    const target =
      middle +
      active * step +
      (direction === "right"
        ? step
        : -step);

    slider.scrollTo({
      left: target,
      behavior: "smooth",
    });

    setActive(next);

    window.setTimeout(() => {
      slider.scrollTo({
        left:
          middle +
          next * getCardWidth(),
        behavior: "instant",
      });

      movingRef.current = false;
    }, 650);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#090909] text-white">
      <Navbar />

      <section className="border-t border-white/10 bg-[#090909] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">

          <Link
            href={backUrl}
            className="inline-flex text-sm font-medium text-orange-400 transition duration-300 hover:-translate-x-1 hover:text-orange-300"
          >
            ← Back to {menuLabel}
          </Link>

          <div className="mt-12 text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-orange-400">
              The Fun2 Selection
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
              Australian
              <span className="text-orange-400">
                {" Beef"}
              </span>
            </h1>

            <div className="mx-auto mt-7 h-px w-24 bg-orange-500" />

            <p className="mx-auto mt-7 max-w-xl leading-8 text-gray-400">
              {category.description}
            </p>

          </div>
        </div>

        <div className="relative mx-auto mt-16 max-w-7xl">

          <div
            ref={sliderRef}
            onScroll={handleScroll}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            className="flex cursor-grab select-none gap-5 overflow-x-auto px-6 pb-6 active:cursor-grabbing [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >

            {repeatedItems.map(
              (item, index) => {

                const itemNumber =
                  index % items.length;

                const isPremiumAustralian =
                  itemNumber < 5;

                return (
                  <article
                    key={`${item.name}-${index}`}
                    className={`group relative h-[440px] w-[300px] flex-none overflow-hidden rounded-3xl md:h-[540px] md:w-[390px] ${
                      isPremiumAustralian
                        ? "border-2 border-orange-300 bg-[#17120d] shadow-[0_0_50px_rgba(251,146,60,0.25)]"
                        : "border border-white/10 bg-[#171717]"
                    }`}
                  >

                    {/* IMAGE */}

                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        draggable={false}
                        className="pointer-events-none h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-[#171717] text-gray-500">
                        No Image
                      </div>
                    )}

                    {/* GRADIENT */}

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                    {/* PREMIUM BADGE */}

                    {isPremiumAustralian && (
                      <div className="pointer-events-none absolute left-6 top-6 z-10 rounded-full border border-orange-300 bg-black/70 px-4 py-2 text-[10px] font-bold tracking-[0.25em] text-orange-300 backdrop-blur-md">
                        ✦ PREMIUM AUSTRALIAN
                      </div>
                    )}

                    {/* COUNTER */}

                    <div className="pointer-events-none absolute right-6 top-6 rounded-full border border-white/30 bg-black/40 px-4 py-2 text-xs tracking-widest backdrop-blur-md">
                      {String(
                        itemNumber + 1
                      ).padStart(2, "0")}
                      {" / "}
                      {String(
                        items.length
                      ).padStart(2, "0")}
                    </div>

                    {/* CARD CONTENT */}

                    <div className="pointer-events-none absolute bottom-0 left-0 w-full p-8">

                      <p
                        className={`text-xs font-semibold tracking-[0.3em] ${
                          isPremiumAustralian
                            ? "text-orange-300"
                            : "text-orange-400"
                        }`}
                      >
                        {isPremiumAustralian
                          ? "PREMIUM AUSTRALIAN"
                          : "AUSTRALIAN BEEF"}
                      </p>

                      <h3 className="mt-3 text-3xl font-bold">
                        {item.name}
                      </h3>

                      <p className="mt-3 max-w-sm text-sm leading-6 text-gray-300">
                        {item.description}
                      </p>

                      <div className="mt-5 h-px w-16 bg-orange-500 transition-all duration-500 group-hover:w-full" />

                    </div>

                  </article>
                );
              }
            )}

          </div>

          {/* NAVIGATION */}

          <div className="mt-8 flex items-center justify-center gap-8">

            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Previous Australian beef"
              className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 text-xl transition hover:border-orange-500 hover:bg-orange-500"
            >
              ←
            </button>

            <div className="flex items-center gap-3 text-sm tracking-widest">

              <span className="font-bold text-orange-400">
                {String(
                  active + 1
                ).padStart(2, "0")}
              </span>

              <span className="h-px w-12 bg-white/30" />

              <span className="text-gray-500">
                {String(
                  items.length
                ).padStart(2, "0")}
              </span>

            </div>

            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Next Australian beef"
              className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 text-xl transition hover:border-orange-500 hover:bg-orange-500"
            >
              →
            </button>

          </div>

        </div>

        <p className="mt-10 text-center text-xs uppercase tracking-[0.35em] text-gray-500">
          Choose • Taste • Enjoy
        </p>

      </section>
    </main>
  );
}