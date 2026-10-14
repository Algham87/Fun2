"use client";

import { useLayoutEffect, useState } from "react";
import Link from "next/link";
import branches from "../data/branches";

type Branch = (typeof branches)[number];

export default function BranchCard({ branch }: { branch: Branch }) {
  const [activeImage, setActiveImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const activePhoto = branch.images[activeImage];
  const changeImage = (nextIndex: number) => {
    if (nextIndex === activeImage) return;
    setIsTransitioning(true);
    setActiveImage(nextIndex);
    window.setTimeout(() => {
      setIsTransitioning(false);
    }, 650);
  };
  const nextImage = () => {
    changeImage((activeImage + 1) % branch.images.length);
  };
  const previousImage = () => {
    changeImage(
      (activeImage - 1 + branch.images.length) % branch.images.length
    );
  };
  useLayoutEffect(() => {
    if (!isAutoPlaying) return;
    const timer = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % branch.images.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [branch.images.length, isAutoPlaying]);
  return (
    <div
      className="group overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0D0D0D] shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-all duration-700 hover:-translate-y-2 hover:border-[#D4AF37]/40 hover:shadow-[0_30px_80px_rgba(0,0,0,0.55)]"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <style>{`
        @keyframes branchImageIn {
          0% {
            opacity: 0;
            transform: scale(1.08);
            filter: blur(5px);
          }
          100% {
            opacity: 1;
            transform: scale(1);
            filter: blur(0);
          }
        }
        @keyframes branchContentIn {
          0% {
            opacity: 0;
            transform: translateY(14px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes branchGlowPulse {
          0%, 100% { opacity: 0.12; }
          50% { opacity: 0.38; }
        }
        .branch-image-in {
          animation: branchImageIn 0.65s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .branch-content-in {
          animation: branchContentIn 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .branch-glow-pulse {
          animation: branchGlowPulse 4s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .branch-image-in,
          .branch-content-in,
          .branch-glow-pulse {
            animation: none !important;
          }
        }
      `}</style>
      {/* MAIN PHOTO */}
      <div className="relative h-[260px] overflow-hidden sm:h-[310px] lg:h-[340px]">
        <img
          key={activePhoto.src}
          src={activePhoto.src}
          alt={`${branch.name} photo ${activeImage + 1}`}
          className={`h-full w-full object-cover transition duration-700 group-hover:scale-[1.025] ${
            isTransitioning ? "branch-image-in" : ""
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
        <div className="branch-glow-pulse pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(212,175,55,0.18),transparent_58%)]" />
        {/* COUNTER */}
        <div className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-[10px] font-semibold tracking-[0.2em] text-white backdrop-blur-md sm:left-5 sm:top-5 sm:px-4 sm:py-2 sm:text-xs">
          {String(activeImage + 1).padStart(2, "0")} /{" "}
          {String(branch.images.length).padStart(2, "0")}
        </div>
        {/* AUTO / PAUSED */}
        <div className="absolute right-3 top-3 flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur-md sm:right-5 sm:top-5 sm:px-3 sm:py-2 sm:text-[10px]">
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              isAutoPlaying ? "bg-[#D4AF37] animate-pulse" : "bg-white/40"
            }`}
          />
          {isAutoPlaying ? "Auto" : "Paused"}
        </div>
        {/* PREVIOUS */}
        <button
          type="button"
          onClick={previousImage}
          className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/35 text-xl text-white opacity-0 backdrop-blur-md transition-all duration-300 hover:border-[#D4AF37]/60 hover:bg-[#D4AF37] hover:text-black group-hover:opacity-100 focus:opacity-100 sm:left-5 sm:h-11 sm:w-11"
          aria-label="Previous branch photo"
        >
          ‹
        </button>
        {/* NEXT */}
        <button
          type="button"
          onClick={nextImage}
          className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/35 text-xl text-white opacity-0 backdrop-blur-md transition-all duration-300 hover:border-[#D4AF37]/60 hover:bg-[#D4AF37] hover:text-black group-hover:opacity-100 focus:opacity-100 sm:right-5 sm:h-11 sm:w-11"
          aria-label="Next branch photo"
        >
          ›
        </button>
        {/* BRANCH TITLE */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
          <div
            key={`${activePhoto.src}-title`}
            className="branch-content-in"
          >
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
      {/* THUMBNAILS */}
      <div className="p-2 sm:p-3">
        <div className="grid grid-cols-4 gap-2">
          {branch.images.map((photo, imageIndex) => (
            <button
              key={`${photo.src}-${imageIndex}`}
              type="button"
              onClick={() => changeImage(imageIndex)}
              className={`group/thumb relative h-14 overflow-hidden rounded-lg border transition-all duration-500 sm:h-16 sm:rounded-xl lg:h-20 ${
                activeImage === imageIndex
                  ? "border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.16)]"
                  : "border-white/10 hover:border-[#D4AF37]/50"
              }`}
              aria-label={`Show ${branch.name} photo ${imageIndex + 1}`}
            >
              <img
                src={photo.src}
                alt={`${branch.name} thumbnail ${imageIndex + 1}`}
                className={`h-full w-full object-cover transition duration-700 group-hover/thumb:scale-110 ${
                  activeImage === imageIndex ? "scale-105" : ""
                }`}
              />
              <div
                className={`absolute inset-0 transition-all duration-500 ${
                  activeImage === imageIndex
                    ? "bg-[#D4AF37]/10"
                    : "bg-black/20 group-hover/thumb:bg-black/0"
                }`}
              />
              {activeImage === imageIndex && (
                <span className="absolute bottom-2 left-1/2 h-0.5 w-8 -translate-x-1/2 rounded-full bg-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.7)]" />
              )}
            </button>
          ))}
        </div>
        {/* DOT INDICATOR */}
        <div className="mt-3 flex items-center justify-center gap-2">
          {branch.images.map((photo, imageIndex) => (
            <button
              key={`dot-${photo.src}-${imageIndex}`}
              type="button"
              onClick={() => changeImage(imageIndex)}
              aria-label={`Go to photo ${imageIndex + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                activeImage === imageIndex
                  ? "w-8 bg-[#D4AF37]"
                  : "w-1.5 bg-white/20 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
      {/* DESCRIPTION OF ACTIVE PHOTO */}
      <div className="px-3 pb-4 sm:px-5 sm:pb-5">
        <div
          key={`${activePhoto.src}-description`}
          className="branch-content-in rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3 sm:p-4"
        >
          <div className="flex items-center justify-between gap-4">
           <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
             {"title" in activePhoto && activePhoto.title
            ? activePhoto.title
            : `Photo ${activeImage + 1}`}
          </p>
            <span className="text-[10px] uppercase tracking-[0.18em] text-gray-600">
              {isAutoPlaying ? "Changing automatically" : "Click a photo"}
            </span>
          </div>
          <p className="mt-2 text-sm leading-6 text-gray-300 sm:mt-3 sm:text-base sm:leading-7">
            {activePhoto.description}
          </p>
        </div>
        {/* BRANCH DETAILS */}
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
    </div>
  );
}