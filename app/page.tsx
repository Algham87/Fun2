"use client";

import { useLayoutEffect, useRef, useState } from "react";

import Navbar from "./components/Navbar";
import branches from "./data/branches";
import BranchCard from "./components/branchcard";
import wagyubeef from "./data/wagyubeef";
import australianbeef from "./data/australianbeef";
import limitedmenu from "./data/limitedmenu";
import Link from "next/link";
import { title } from "process";

// ============================================================
// REUSABLE COMPONENTS
// ============================================================

type BeefItem = {
  name: string;
  image: string;
  description: string;
};

function BeefCard({ item }: { item: BeefItem }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-[#D4AF37]/20 bg-[#0D0D0D] transition duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/60">
      <div className="overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h4 className="text-2xl font-semibold">
          {item.name}
        </h4>
        <p className="mt-3 leading-7 text-gray-400">
          {item.description}
        </p>
        <div className="mt-5 h-px w-10 bg-[#D4AF37] transition-all duration-500 group-hover:w-full" />
      </div>
    </div>
  );
}

type LimitedMenuItem = {
  name: string;
  image: string;
  label: string;
  description: string;
};

function LimitedMenuCard({
  item,
  onClick,
}: {
  item: (typeof limitedmenu)[number];
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative h-[400px] w-full overflow-hidden rounded-2xl text-left"
    >
      <img
        src={item.image}
        alt={item.name}
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/5" />

      <div className="absolute bottom-0 left-0 w-full p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
          {item.label}
        </p>

        <h3 className="mt-2 text-2xl font-bold text-white">
          {item.name}
        </h3>

        <div className="mt-5 flex items-center gap-3">
          <div className="h-px w-12 bg-[#D4AF37] transition-all duration-500 group-hover:w-20" />

          <span className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] opacity-0 transition duration-300 group-hover:opacity-100">
            View Details →
          </span>
        </div>
      </div>
    </button>
  );
}
// ============================================================


function BeefCarousel({
  items,
  categoryLabel,
}: {
  items: BeefItem[];
  categoryLabel: string;
}) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const movingRef = useRef(false);
  const buttonTimerRef = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const repeatedItems = [...items, ...items, ...items];
  const getCardStep = () => {
    const slider = sliderRef.current;
    if (!slider || slider.children.length < 2) return 0;
    const first = slider.children[0] as HTMLElement;
    const second = slider.children[1] as HTMLElement;
    return second.offsetLeft - first.offsetLeft;
  };
  useLayoutEffect(() => {
    const slider = sliderRef.current;
    if (!slider || items.length === 0) return;
    const placeAtMiddle = () => {
      const step = getCardStep();
      if (step > 0) slider.scrollLeft = step * items.length;
    };
    placeAtMiddle();
    window.addEventListener("resize", placeAtMiddle);
    return () => {
      window.removeEventListener("resize", placeAtMiddle);
      if (buttonTimerRef.current) window.clearTimeout(buttonTimerRef.current);
    };
  }, [items.length]);
  // Match Limited Menu: normalize immediately during manual scrolling,
  // rather than waiting for a debounce that can fight the user's gesture.
  const handleScroll = () => {
    const slider = sliderRef.current;
    if (!slider || movingRef.current || items.length === 0) return;
    const cardStep = getCardStep();
    const oneSetWidth = cardStep * items.length;
    if (!oneSetWidth || !cardStep) return;
    if (slider.scrollLeft >= oneSetWidth * 2) {
      slider.scrollLeft -= oneSetWidth;
    } else if (slider.scrollLeft < oneSetWidth) {
      slider.scrollLeft += oneSetWidth;
    }
    const index = Math.round((slider.scrollLeft - oneSetWidth) / cardStep);
    const normalizedIndex = ((index % items.length) + items.length) % items.length;
    setActiveIndex((current) => current === normalizedIndex ? current : normalizedIndex);
  };
  const scrollCarousel = (direction: "left" | "right") => {
    const slider = sliderRef.current;
    const cardStep = getCardStep();
    if (!slider || !cardStep || movingRef.current || items.length < 2) return;
    movingRef.current = true;
    if (buttonTimerRef.current) window.clearTimeout(buttonTimerRef.current);
    slider.scrollTo({
      left: slider.scrollLeft + (direction === "right" ? cardStep : -cardStep),
      behavior: "smooth",
    });
    // Same timing and wrap behavior as the Limited Menu arrow controls.
    buttonTimerRef.current = window.setTimeout(() => {
      const currentSlider = sliderRef.current;
      const currentStep = getCardStep();
      if (currentSlider && currentStep > 0) {
        const oneSetWidth = currentStep * items.length;
        if (currentSlider.scrollLeft >= oneSetWidth * 2) {
          currentSlider.scrollLeft -= oneSetWidth;
        } else if (currentSlider.scrollLeft < oneSetWidth) {
          currentSlider.scrollLeft += oneSetWidth;
        }
        const index = Math.round((currentSlider.scrollLeft - oneSetWidth) / currentStep);
        const normalizedIndex = ((index % items.length) + items.length) % items.length;
        setActiveIndex(normalizedIndex);
      }
      movingRef.current = false;
    }, 720);
  };
  return (
    <div>
      <div className="mb-6 flex items-end justify-between gap-4 md:mb-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            Premium Selection
          </p>
          <h3 className="mt-2 text-2xl font-bold md:text-3xl">
            {categoryLabel.split(" ")[0]}{" "}
            <span className="text-[#D4AF37]">{categoryLabel.split(" ").slice(1).join(" ")}</span>
          </h3>
        </div>
        <span className="shrink-0 text-xs uppercase tracking-wider text-gray-500">
          {String(items.length).padStart(2, "0")} Selections
        </span>
      </div>
      <div
        ref={sliderRef}
        onScroll={handleScroll}
        className="flex gap-4 overflow-x-auto px-6 pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:gap-5"
      >
        {repeatedItems.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="group relative h-[360px] w-[78vw] max-w-[300px] flex-none overflow-hidden rounded-2xl border border-white/10 bg-[#171717] transition duration-500 hover:border-[#D4AF37]/60 sm:h-[420px] sm:w-[300px] md:h-[460px] md:w-[320px]"
          >
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              draggable={false}
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/5" />
            <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/40 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
              {categoryLabel} Selection
            </div>
            <div className="absolute bottom-0 left-0 w-full p-5 sm:p-6">
              <span className="text-xs font-semibold tracking-[0.2em] text-[#D4AF37]">
                {String((index % items.length) + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
              </span>
              <h4 className="mt-2 text-2xl font-bold text-white">{item.name}</h4>
              <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-300">{item.description}</p>
              <div className="mt-5 h-px w-12 bg-[#D4AF37] transition-all duration-500 group-hover:w-20" />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 flex items-center justify-center gap-6">
        <button
          type="button"
          aria-label={`Previous ${categoryLabel}`}
          onClick={() => scrollCarousel("left")}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-xl transition hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
        >
          ←
        </button>
        <span className="text-xs uppercase tracking-[0.25em] text-gray-500">Swipe to explore</span>
        <button
          type="button"
          aria-label={`Next ${categoryLabel}`}
          onClick={() => scrollCarousel("right")}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-xl transition hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
        >
          →
        </button>
      </div>
    </div>
  );
}

// ============================================================
// HOMEPAGE
// ============================================================

export default function Home() {
  const [selectedMenu, setSelectedMenu] = useState<(typeof limitedmenu)[number] | null>(null);
  const limitedSliderRef = useRef<HTMLDivElement>(null);
  const limitedMovingRef = useRef(false);
  const [limitedActive, setLimitedActive] = useState(0);
  const limitedItems = limitedmenu;
  const repeatedLimitedItems = [...limitedItems, ...limitedItems, ...limitedItems];
  const getLimitedCardWidth = () => {
    const slider = limitedSliderRef.current;
    if (!slider || slider.children.length < 2) return 0;
    const first = slider.children[0] as HTMLElement;
    const second = slider.children[1] as HTMLElement;
    return second.offsetLeft - first.offsetLeft;
  };
  useLayoutEffect(() => {
    const slider = limitedSliderRef.current;
    if (!slider || limitedItems.length === 0) return;
    slider.scrollLeft = getLimitedCardWidth() * limitedItems.length;
  }, []);
  const scrollLimited = (direction: "left" | "right") => {
    const slider = limitedSliderRef.current;
    if (!slider || limitedMovingRef.current || limitedItems.length < 2) return;
    const step = getLimitedCardWidth();
    if (!step) return;
    limitedMovingRef.current = true;
    const count = limitedItems.length;
    const next = direction === "right"
      ? (limitedActive + 1) % count
      : (limitedActive - 1 + count) % count;
    slider.scrollTo({
      left: slider.scrollLeft + (direction === "right" ? step : -step),
      behavior: "smooth",
    });
    setLimitedActive(next);
    // Tunggu animasi selesai sebelum menormalkan posisi agar tidak bertabrakan.
    window.setTimeout(() => {
      const currentSlider = limitedSliderRef.current;
      if (currentSlider) {
        const currentStep = getLimitedCardWidth();
        const oneSetWidth = currentStep * count;
        if (oneSetWidth > 0) {
          if (currentSlider.scrollLeft >= oneSetWidth * 2) {
            currentSlider.scrollLeft -= oneSetWidth;
          } else if (currentSlider.scrollLeft < oneSetWidth) {
            currentSlider.scrollLeft += oneSetWidth;
          }
        }
      }
      limitedMovingRef.current = false;
    }, 720);
  };
  return (
    <main
      id="home"
      className="min-h-screen bg-[#050505] text-white"
    >
      <Navbar />
      {/* ======================================================
              HERO
          ====================================================== */}
      <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pb-16 pt-15 sm:min-h-screen sm:py-0">
      <div
        className="absolute inset-0 bg-cover bg-[28%_center] sm:hidden"
        style={{
          backgroundImage: "url('/images/tomahawkhp.jpg')", 
        }}
      />
      <div
        className="absolute inset-0 hidden bg-cover bg-center sm:block"
        style={{
          backgroundImage: "url('/images/tomahawk.jpeg')", 
        }}
      />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.87)_0%,rgba(5,5,5,0.64)_42%,rgba(8,8,8,0.35)_75%,rgba(0,0,0,0.28)_100%)]" />

        {/* Content Container */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-16 sm:px-8 sm:pt-20">
          {/* Di mobile dibuat flex-col + h-[calc(100svh-220px)] + justify-between agar Atas & Bawah terpisah jauh */}
          <div className="flex h-[calc(100svh-220px)] max-w-3xl flex-col justify-between sm:h-auto sm:block">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] sm:mb-4 sm:text-sm sm:tracking-[0.4em]">
                Steamboat • Grill • Wagyu
              </p>
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
                Fun2
                <br />
                Steamboat &amp; Grill
              </h1>
            </div>

            <div className="sm:mt-6">
              <div className="space-y-3 text-xs leading-relaxed text-gray-200 sm:space-y-4 sm:text-lg sm:leading-relaxed">
                <p>
                  We believe that dining should be an experience, not just a meal. Our
                  unique concept centers on the joy of interactive dining, where
                  every moment is designed to be engaging and memorable.
                </p>
                <p>
                  We create a warm and inviting atmosphere, making it the perfect
                  place for families, friends, and food lovers to gather, connect, and
                  share meaningful experiences over great food.
                </p>
              </div>

              <div className="mt-5 sm:mt-8">
                <Link
                  href="/menu"
                  className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#D4AF37] px-8 py-3 text-sm font-semibold text-black transition hover:brightness-110 sm:w-fit sm:text-base">
                  Explore Menu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          FEATURED MENU
      ====================================================== */}
      <section
        id="menu"
        className="relative scroll-mt-20 overflow-hidden border-t border-white/[0.08] bg-[#090909] px-0 py-16 text-white md:py-20"
      >
        <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[120px]" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-white/[0.02] blur-[120px]" />
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center md:mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#D4AF37]">
              Premium Beef Selection
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              Featured Menu
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
              Discover our premium Wagyu and Australian beef selections,
              prepared for an unforgettable Steamboat &amp; Grill experience.
            </p>
          </div>
          <div className="mb-16 md:mb-20">
            <BeefCarousel items={wagyubeef} categoryLabel="Wagyu Beef" />
          </div>
          <BeefCarousel items={australianbeef} categoryLabel="Australian Beef" />
          <div className="mt-12 text-center md:mt-16">
            <Link
              href="/menu"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#D4AF37] px-8 py-3.5 text-sm font-semibold text-black transition duration-300 hover:scale-105 hover:bg-[#F3D675] md:px-10 md:py-4 md:text-base"
            >
              View Full Menu
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ======================================================
          LIMITED MENU
      \\====================================================== */}
      {/* LIMITED MENU */}
      <section
        id="limited-menu"
        className="overflow-hidden border-t border-white/[0.08] bg-[#090909] px-0 py-16 text-white md:py-20"
      >
        <div className="mx-auto max-w-7xl px-6">
          {/* SECTION HEADER */}
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#D4AF37]">
                Exclusive at Fun2
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
                Limited Menu
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-gray-400 md:text-base">
                Discover our exclusive selections, available for a limited
                time.
              </p>
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
              <span className="text-[#D4AF37]">05</span> Signature Selections
            </p>
          </div>
        </div>
  {/* HORIZONTAL MENU CAROUSEL */}
  <div className="mx-auto mt-10 max-w-7xl md:mt-12">
    <div
  id="limited-menu-carousel"
  ref={limitedSliderRef}
  onScroll={() => {
    const slider = limitedSliderRef.current;
    if (!slider || limitedMovingRef.current || limitedItems.length === 0) return;
    const cardWidth = getLimitedCardWidth();
    const oneSetWidth = cardWidth * limitedItems.length;
    if (!oneSetWidth || !cardWidth) return;
    // Geser posisi secara instan hanya setelah masuk ke salinan pertama/terakhir.
    // Ini membuat swipe manual tetap terasa mulus tanpa bentrok dengan CSS scroll-snap.
    if (slider.scrollLeft >= oneSetWidth * 2) {
      slider.scrollLeft -= oneSetWidth;
    } else if (slider.scrollLeft < oneSetWidth) {
      slider.scrollLeft += oneSetWidth;
    }
    const index = Math.round((slider.scrollLeft - oneSetWidth) / cardWidth);
    const normalizedIndex = ((index % limitedItems.length) + limitedItems.length) % limitedItems.length;
    setLimitedActive((current) => current === normalizedIndex ? current : normalizedIndex);
  }}
  className="flex gap-5 overflow-x-auto px-6 pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
>
  {repeatedLimitedItems.map((item, index) => (
    <button
      key={`${item.name}-${index}`}
      type="button"
      onClick={() => setSelectedMenu(item)}
      className="group relative h-[420px] w-[300px] flex-none overflow-hidden rounded-2xl border border-white/10 bg-[#171717] text-left transition duration-500 hover:border-[#D4AF37]/60 sm:h-[470px] sm:w-[340px] md:h-[500px] md:w-[370px]"
    >
      <img
        src={item.image}
        alt={item.name}
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/5" />
      <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/40 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
        {item.label}
      </div>
      <div className="absolute bottom-0 left-0 w-full p-6">
        <h3 className="text-2xl font-bold text-white">{item.name}</h3>
        {/* <p className="mt-3 text-sm leading-6 text-gray-300">{item.description}</p> */}
        <div className="mt-5 h-px w-12 bg-[#D4AF37] transition-all duration-500 group-hover:w-20" />
        <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-wider text-[#D4AF37] transition duration-300">
          View Details →
        </span>
      </div>
    </button>
  ))}
</div>
    {/* CAROUSEL NAVIGATION */}
    <div className="mt-5 flex items-center justify-center gap-6">
      <button
        type="button"
        aria-label="Previous limited menu"
        onClick={() => scrollLimited("left")}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-xl transition hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
      >
        ←
      </button>
      <span className="text-xs uppercase tracking-[0.25em] text-gray-500">
        Swipe to explore
      </span>
      <button
        type="button"
        aria-label="Next limited menu"
        onClick={() => scrollLimited("right")}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-xl transition hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
      >
        →
      </button>
    </div>
  </div>
</section>
      {/* LIMITED MENU DETAILS MODAL */}
      {selectedMenu && (
        <div
          className="menu-modal-overlay fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-sm"
          onClick={() => setSelectedMenu(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="limited-menu-modal-title"
            className="menu-modal relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-white/10 bg-[#0B0B0B] shadow-[0_25px_100px_rgba(0,0,0,0.8)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedMenu(null)}
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/60 text-2xl text-white backdrop-blur-md transition hover:border-[#D4AF37]/50 hover:bg-[#D4AF37] hover:text-black"
              aria-label="Close menu details"
            >
              ×
            </button>
            <div className="grid md:grid-cols-2">
              <div className="relative h-[260px] sm:h-[340px] md:h-[520px]">
                <img
                  src={selectedMenu.image}
                  alt={selectedMenu.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-gradient-to-r" />
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8 md:p-12">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
                  {selectedMenu.label}
                </p>
                <h2
                  id="limited-menu-modal-title"
                  className="mt-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl"
                >
                  {selectedMenu.name}
                </h2>
                <div className="mt-5 h-px w-16 bg-[#D4AF37]" />
                <p className="mt-6 text-sm leading-7 text-gray-300 sm:text-base sm:leading-8">
                  {selectedMenu.description}
                </p>
                {/* <p className="mt-5 text-sm leading-7 text-gray-500">
                  Experience carefully selected ingredients and premium flavors
                  prepared especially for our Fun2 guests.
                </p> */}
                <button
                  type="button"
                  onClick={() => setSelectedMenu(null)}
                  className="mt-8 w-fit rounded-full border border-[#D4AF37]/50 px-7 py-3 text-sm font-semibold text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* ======================================================
          BRANCHES
      \====================================================== */}
      <section id="branches"
        className="relative scroll-mt-20 overflow-hidden border-0 bg-[linear-gradient(to_bottom,#0D0D0D_0%,#101010_50%,#0B0B0B_100%)] px-6 py-24 md:py-32">
          <div className="mx-auto max-w-7xl">
            {/* HEADER */}
            <div className="mb-16 text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.45em] text-[#D4AF37]">
              Find Us
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Our Branches
            </h2>
          <div className="mx-auto mt-5 h-px w-14 bg-[#D4AF37]" />
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-400">
            Visit us at one of our Fun2 locations and enjoy
            an unforgettable Steamboat & Grill experience.
          </p>
        </div>
            {/* BRANCH CARDS */}
            <div className="grid gap-5 lg:grid-cols-2">
          {branches.map((branch, index) => (
          <BranchCard
            key={`${branch.location}-${index}`}
            branch={branch}
          />
        ))}
        </div>
        </div>
     </section>
      {/* ======================================================
          FOOTER
      \\====================================================== */}
      <footer className=" bg-[linear-gradient(to_bottom,#050505_0%,#030303_100%)] px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* BRAND */}
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold tracking-wider">
                FUN
                <span className="text-[#D4AF37]">
                  2
                </span>
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-gray-400">
                Steamboat & Grill experience with premium ingredients,
                bold flavors, and unforgettable moments.
              </p>
              <p className="mt-6 text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
                Good Food. Great Moments.
              </p>
            </div>
            {/* EXPLORE */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-white">
                Explore
              </h3>
              <div className="mt-5 flex flex-col gap-3 text-gray-400">
                <Link
                  href="/"
                  className="transition hover:text-[#D4AF37]"
                >
                  Home
                </Link>
                <Link
                  href="/menu"
                  className="transition hover:text-[#D4AF37]"
                >
                  Menu
                </Link>
                <Link
                  href="/menu/alacarte"
                  className="transition hover:text-[#D4AF37]"
                >
                  À La Carte
                </Link>
                <Link
                  href="/menu/buffet"
                  className="transition hover:text-[#D4AF37]"
                >
                  Buffet
                </Link>
                <Link
                  href="/#reservation"
                  className="transition hover:text-[#D4AF37]"
                >
                  Reservation
                </Link>
              </div>
            </div>
            {/* CONTACT */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-white">
                Contact
              </h3>
              <div className="mt-5 space-y-3 text-gray-400">
                <p>
                  Fun2 Steamboat & Grill
                </p>
                <p>
                  11:00 AM — 10:00 PM
                </p>
                <Link
                  href="/contact"
                  className="inline-block text-[#D4AF37] transition hover:text-[#F3D675]"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          <div className="my-12" />
          <div className="flex flex-col gap-4 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
            <p>
              © 2026 Fun2 Steamboat & Grill. All rights reserved.
            </p>
            <p>
              Crafted with passion for great food.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}