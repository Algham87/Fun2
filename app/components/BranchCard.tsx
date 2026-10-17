"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import branches from "../data/branches";

type Branch = (typeof branches)[number];

export default function BranchCard({ branch }: { branch: Branch }) {
  const [activeImage, setActiveImage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const imageCount = branch.images.length;
  const activePhoto = branch.images[activeImage];

  const changeImage = (nextIndex: number) => {
    if (imageCount <= 1) return;
    setActiveImage((nextIndex + imageCount) % imageCount);
  };

  const nextImage = () => changeImage(activeImage + 1);
  const previousImage = () => changeImage(activeImage - 1);

  useEffect(() => {
    if (!isAutoPlaying || imageCount <= 1) return;

    const timer = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % imageCount);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [imageCount, isAutoPlaying]);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!touchStart.current) return;

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStart.current.x;
    const deltaY = touch.clientY - touchStart.current.y;
    touchStart.current = null;

    // Only treat a clear horizontal swipe as a gallery gesture.
    // Vertical movement remains available for normal page scrolling.
    if (Math.abs(deltaX) < 45 || Math.abs(deltaX) < Math.abs(deltaY) * 1.2) {
      return;
    }

    setIsAutoPlaying(false);
    if (deltaX < 0) nextImage();
    else previousImage();
  };

  if (!activePhoto) return null;

  return (
    <article
      className="group overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0D0D0D] shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-1 hover:border-[#D4AF37]/40 hover:shadow-[0_30px_70px_rgba(0,0,0,0.45)]"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <style>{`
        @keyframes branchImageIn {
          from { opacity: 0.7; transform: scale(1.018); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes branchContentIn {
          from { opacity: 0; transform: translateY(7px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .branch-image-in {
          animation: branchImageIn 0.4s ease-out both;
        }
        .branch-content-in {
          animation: branchContentIn 0.3s ease-out both;
        }
        @media (prefers-reduced-motion: reduce) {
          .branch-image-in,
          .branch-content-in {
            animation: none !important;
          }
        }
      `}</style>

      {/* MAIN IMAGE — swipe horizontally on mobile */}
      <div
        className="relative h-[280px] overflow-hidden bg-black sm:h-[340px] lg:h-[380px]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          key={activePhoto.src}
          src={activePhoto.src}
          alt={`${branch.name}: ${
            "title" in activePhoto && activePhoto.title
              ? activePhoto.title
              : `Photo ${activeImage + 1}`
          }`}
          className="branch-image-in h-full w-full object-cover"
          loading="lazy"
          decoding="async"
          draggable={false}
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        <div className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/50 px-3 py-1.5 text-[10px] font-semibold tracking-[0.2em] text-white backdrop-blur-md sm:left-5 sm:top-5 sm:px-4 sm:py-2 sm:text-xs">
          {String(activeImage + 1).padStart(2, "0")} /{" "}
          {String(imageCount).padStart(2, "0")}
        </div>

        <div className="absolute right-3 top-3 flex items-center gap-2 rounded-full border border-white/15 bg-black/50 px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur-md sm:right-5 sm:top-5 sm:px-3 sm:py-2 sm:text-[10px]">
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              isAutoPlaying ? "bg-[#D4AF37] animate-pulse" : "bg-white/40"
            }`}
          />
          {isAutoPlaying ? "Auto" : "Paused"}
        </div>

        {imageCount > 1 && (
          <>
            <button
              type="button"
              onClick={() => {
                setIsAutoPlaying(false);
                previousImage();
              }}
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/55 text-2xl text-white backdrop-blur-md transition hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37] sm:left-5 sm:h-11 sm:w-11 sm:opacity-0 sm:group-hover:opacity-100"
              aria-label="Previous branch photo"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => {
                setIsAutoPlaying(false);
                nextImage();
              }}
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/55 text-2xl text-white backdrop-blur-md transition hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37] sm:right-5 sm:h-11 sm:w-11 sm:opacity-0 sm:group-hover:opacity-100"
              aria-label="Next branch photo"
            >
              ›
            </button>
          </>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
          <div key={`${activePhoto.src}-title`} className="branch-content-in">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37] sm:text-xs sm:tracking-[0.35em]">
              {branch.location}
            </p>
            <h3 className="mt-2 text-2xl font-bold text-white sm:mt-3 sm:text-3xl md:text-4xl">
              {branch.name}
            </h3>
            <div className="mt-3 h-px w-12 bg-[#D4AF37] transition-all duration-500 group-hover:w-20" />
          </div>
        </div>
      </div>

      {/* ACTIVE PHOTO DESCRIPTION — updates with the main image */}
      <div className="p-4 sm:p-5">
        <div
          key={`${activePhoto.src}-description`}
          className="branch-content-in min-h-[112px] rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 sm:min-h-[124px] sm:p-5"
          aria-live="polite"
        >
          <div className="flex items-center justify-between gap-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37] sm:text-[11px] sm:tracking-[0.25em]">
              {"title" in activePhoto && activePhoto.title
                ? activePhoto.title
                : `Photo ${activeImage + 1}`}
            </p>
            <span className="shrink-0 text-[9px] uppercase tracking-[0.12em] text-gray-500 sm:text-[10px] sm:tracking-[0.18em]">
              {isAutoPlaying ? "Changing automatically" : "Swipe or use arrows"}
            </span>
          </div>
          <p className="mt-2 text-sm leading-6 text-gray-300 sm:mt-3 sm:text-base sm:leading-7">
            {activePhoto.description}
          </p>
        </div>

        {/* Small, unobtrusive progress indicators replace the thumbnails */}
        {imageCount > 1 && (
          <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5" aria-label="Photo position">
            {branch.images.map((photo, imageIndex) => (
              <button
                key={`dot-${photo.src}-${imageIndex}`}
                type="button"
                onClick={() => {
                  setIsAutoPlaying(false);
                  changeImage(imageIndex);
                }}
                aria-label={`Go to photo ${imageIndex + 1}`}
                aria-pressed={activeImage === imageIndex}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeImage === imageIndex
                    ? "w-7 bg-[#D4AF37]"
                    : "w-1.5 bg-white/25 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        )}

        <div className="mt-5 grid gap-4 border-t border-white/[0.06] pt-5 sm:mt-6 sm:grid-cols-2 sm:gap-5 sm:pt-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-500">
              Location
            </p>
            <p className="mt-2 text-sm leading-6 text-gray-200">
              {branch.address}
            </p>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-500">
              Opening Hours
            </p>
            <p className="mt-2 text-sm leading-6 text-gray-200">
              {branch.hours}
            </p>
          </div>
        </div>

        <Link
          href="/contact"
          className="mt-5 inline-flex items-center gap-3 text-sm font-semibold text-[#D4AF37] transition-all duration-300 hover:gap-4 hover:text-[#F3D675] sm:mt-6"
        >
          Contact This Branch
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
