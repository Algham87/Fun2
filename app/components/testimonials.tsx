
"use client";

import { useEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { supabase } from "@/Lib/Supabase";

type Testimonial = {
  customer_name: string;
  comments: string;
  branch: string;
  service_rating: number;
  food_rating: number;
  cleanliness_rating: number;
  created_at: string;
};

function getAverageRating(item: Testimonial) {
  return (
    item.service_rating +
    item.food_rating +
    item.cleanliness_rating
  ) / 3;
}

function getRatingMood(rating: number) {
  if (rating >= 4.5) return { emoji: "😍", label: "Very satisfied" };
  if (rating >= 3.5) return { emoji: "😊", label: "Satisfied" };
  if (rating >= 2.5) return { emoji: "😐", label: "Neutral" };
  return { emoji: "😢", label: "Not satisfied" };
}

function formatCommentDate(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return "";

  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Brunei",
  }).format(date);
}

function StarRating({ rating }: { rating: number }) {
  const roundedRating = Math.round(rating);

  return (
    <div
      className="mt-5 flex items-center justify-center gap-1.5"
      aria-label={`${rating.toFixed(1)} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          className={`text-xl leading-none sm:text-2xl ${
            index < roundedRating
              ? "text-[#E7CB45]"
              : "text-white/20"
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function RatingBreakdown({
  service,
  food,
  cleanliness,
}: {
  service: number;
  food: number;
  cleanliness: number;
}) {
  const ratings = [
    { label: "Service", value: service },
    { label: "Food", value: food },
    { label: "Cleanliness", value: cleanliness },
  ];

  return (
    <div className="mt-6 grid w-full grid-cols-3 gap-2">
      {ratings.map((rating) => {
        const value = Math.max(0, Math.min(5, rating.value));

        return (
          <div
            key={rating.label}
            className="rounded-xl border border-white/10 bg-[#252525] px-2 py-3"
          >
            <p className="text-[10px] text-gray-400 sm:text-xs">
              {rating.label}
            </p>

            <p className="mt-1 text-sm font-semibold text-white">
              {rating.value}/5
            </p>

            <div
              className="mt-1 text-[10px] tracking-tight text-[#E7CB45]"
              aria-label={`${rating.label}: ${rating.value} out of 5`}
            >
              {"★".repeat(value)}
              <span className="text-white/20">
                {"★".repeat(5 - value)}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Testimonials() {
  const [items, setItems] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  const sliderRef = useRef<HTMLDivElement>(null);
  const isPaused = useRef(false);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartScroll = useRef(0);

  useEffect(() => {
    async function loadTestimonials() {
      const { data, error } = await supabase
        .from("featured_testimonials")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Failed to load testimonials:", error.message);
      } else {
        setItems((data ?? []) as Testimonial[]);
      }

      setLoading(false);
    }

    loadTestimonials();
  }, []);

  // Infinite scroll: use three copies and keep the slider
  // positioned in the middle copy.
  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider || items.length === 0) return;

    let animationFrame = 0;
    let previousTime = 0;

    const speed = 30;

    const getCycleWidth = () => slider.scrollWidth / 3;

    const normalizePosition = () => {
      const cycleWidth = getCycleWidth();

      if (cycleWidth <= 0) return;

      if (slider.scrollLeft < cycleWidth * 0.5) {
        slider.scrollLeft += cycleWidth;
      } else if (slider.scrollLeft >= cycleWidth * 1.5) {
        slider.scrollLeft -= cycleWidth;
      }
    };

    const initialize = () => {
      slider.scrollLeft = getCycleWidth();
    };

    const animate = (time: number) => {
      if (!slider.isConnected) return;

      if (previousTime !== 0 && !isPaused.current && !isDragging.current) {
        const delta = Math.min((time - previousTime) / 1000, 0.05);

        slider.scrollLeft += speed * delta;
        normalizePosition();
      }

      previousTime = time;
      animationFrame = requestAnimationFrame(animate);
    };

    const timer = window.setTimeout(initialize, 100);

    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.clearTimeout(timer);
      cancelAnimationFrame(animationFrame);
    };
  }, [items]);

  // Move carousel left or right
  const moveSlider = (direction: "left" | "right") => {
    const slider = sliderRef.current;

    if (!slider) return;

    isPaused.current = true;

    const distance = Math.min(slider.clientWidth * 0.75, 380);

    slider.scrollBy({
      left: direction === "left" ? -distance : distance,
      behavior: "smooth",
    });

    window.setTimeout(() => {
      isPaused.current = false;
    }, 800);
  };

  // Pointer drag support for desktop mouse and mobile touch.
  const activePointerId = useRef<number | null>(null);

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;

    const slider = sliderRef.current;
    if (!slider) return;

    isDragging.current = true;
    isPaused.current = true;
    activePointerId.current = event.pointerId;
    dragStartX.current = event.clientX;
    dragStartScroll.current = slider.scrollLeft;

    slider.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const slider = sliderRef.current;
    if (!slider || !isDragging.current) return;

    event.preventDefault();
    slider.scrollLeft =
      dragStartScroll.current - (event.clientX - dragStartX.current);
  };

  const handlePointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    const slider = sliderRef.current;
    if (!isDragging.current) return;

    isDragging.current = false;

    if (
      slider &&
      activePointerId.current !== null &&
      slider.hasPointerCapture(activePointerId.current)
    ) {
      slider.releasePointerCapture(activePointerId.current);
    }

    activePointerId.current = null;
    isPaused.current = false;
  };

  if (loading || items.length === 0) return null;

  // Three copies make the carousel loop in both directions
  const infiniteItems = [...items, ...items, ...items];

  return (
    <section
      id="testimonials"
      className="relative isolate overflow-hidden bg-[#101010] py-16 text-white sm:py-20 lg:py-24"
    >
      <style jsx>{`
        .testimonial-slider {
          scrollbar-width: none;
          -ms-overflow-style: none;
          cursor: grab;
          scroll-behavior: auto;
          -webkit-overflow-scrolling: touch;
          user-select: none;
          -webkit-user-select: none;
          touch-action: pan-x;
        }

        .testimonial-slider::-webkit-scrollbar {
          display: none;
        }

        .testimonial-slider:active {
          cursor: grabbing;
        }

        .testimonial-card {
          animation: testimonialFadeUp 420ms ease-out both;
        }

        @keyframes testimonialFadeUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .testimonial-card {
            animation: none;
            transition: none;
          }
        }
      `}</style>

      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.11]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.16) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.16) 1px, transparent 1px)",
          backgroundSize: "88px 88px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)",
        }}
      />

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <header className="mx-auto mb-10 max-w-3xl px-4 text-center sm:mb-14 lg:mb-16">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#E7CB45] sm:text-xs">
            Guest Experiences
          </p>

          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
            What Our Guests Are{" "}
            <span className="text-[#E7CB45]">Saying</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-xs leading-6 text-gray-400 sm:mt-5 sm:text-sm sm:leading-7 md:text-base">
            Real experiences from guests who have dined at FUN2
            Steamboat & Grill. Your feedback inspires us to make
            every visit better.
          </p>
        </header>

        {/* Horizontal carousel */}
        <div
          ref={sliderRef}
          className="testimonial-slider flex gap-5 overflow-x-auto px-4 pb-5 sm:gap-6 sm:px-6 lg:gap-7"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onLostPointerCapture={() => {
            isDragging.current = false;
            activePointerId.current = null;
            isPaused.current = false;
          }}
        >
          {infiniteItems.map((item, index) => {
            const averageRating = getAverageRating(item);
            const mood = getRatingMood(averageRating);

            return (
              <article
                key={`${item.customer_name}-${item.created_at}-${index}`}
                draggable={false}
                className="testimonial-card group flex min-h-[430px] w-[300px] shrink-0 flex-col items-center rounded-2xl border border-white/[0.10] bg-[#1c1c1c]/90 px-5 py-7 text-center shadow-[0_12px_35px_rgba(0,0,0,0.22)] backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#E7CB45]/30 hover:bg-[#222222] hover:shadow-[0_18px_45px_rgba(0,0,0,0.38)] sm:min-h-[460px] sm:w-[350px] sm:rounded-[24px] sm:px-6 sm:py-8 lg:w-[380px] lg:px-7 lg:py-9"
              >
                {/* Mood emoji */}
                <div
                  className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-full border-2 border-white/20 bg-gradient-to-br from-[#343434] to-[#171717] text-[38px] shadow-[0_0_0_5px_rgba(255,255,255,0.025)] transition-transform duration-300 group-hover:scale-105 sm:h-[76px] sm:w-[76px] sm:text-[42px]"
                  role="img"
                  aria-label={mood.label}
                  title={mood.label}
                >
                  {mood.emoji}
                </div>

                <h3 className="mt-5 text-base font-semibold text-white sm:mt-6 sm:text-lg">
                  {item.customer_name}
                </h3>

                <p className="mt-1 text-xs text-gray-400 sm:text-sm">
                  {item.branch}
                </p>

                {/* Comment date */}
                <p className="mt-2 text-[11px] text-gray-500 sm:text-xs">
                  {formatCommentDate(item.created_at)}
                </p>

                <div className="my-5 h-px w-10 bg-white/10 sm:my-6" />

                <blockquote className="w-full flex-1 text-[13px] leading-6 text-gray-300 sm:text-sm sm:leading-7">
                  “{item.comments}”
                </blockquote>

                {/* Individual ratings */}
                <RatingBreakdown
                  service={item.service_rating}
                  food={item.food_rating}
                  cleanliness={item.cleanliness_rating}
                />

                {/* Overall rating */}
                <StarRating rating={averageRating} />

                <p className="mt-2 text-[11px] text-gray-500 sm:text-xs">
                  Overall rating: {averageRating.toFixed(1)} / 5
                </p>
              </article>
            );
          })}
        </div>

        {/* Left and right navigation buttons */}
        <div className="mt-5 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => moveSlider("left")}
            aria-label="Scroll testimonials left"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-xl text-white transition-all duration-300 hover:border-[#E7CB45]/60 hover:bg-[#E7CB45]/10 hover:text-[#E7CB45] active:scale-95"
          >
            ←
          </button>

          <button
            type="button"
            onClick={() => moveSlider("right")}
            aria-label="Scroll testimonials right"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-xl text-white transition-all duration-300 hover:border-[#E7CB45]/60 hover:bg-[#E7CB45]/10 hover:text-[#E7CB45] active:scale-95"
          >
            →
          </button>
        </div>

        <p className="mt-4 px-4 text-center text-[11px] tracking-wide text-gray-500 sm:text-xs">
          <span className="text-[#E7CB45]">←</span>
          {" "}Drag, swipe or use arrows to explore guest experiences{" "}
          <span className="text-[#E7CB45]">→</span>
        </p>
      </div>
    </section>
  );
}
