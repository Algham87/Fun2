"use client";

import { useState } from "react";

type IconName =
  | "home"
  | "menu"
  | "about"
  | "contact";

function NavIcon({ name }: { name: IconName }) {
  const common =
    "h-4 w-4 transition-all duration-300";

  if (name === "home") {
    return (
      <svg
        className={common}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M3 10.5 12 3l9 7.5" />
        <path d="M5.5 9.5V21h13V9.5" />
        <path d="M9.5 21v-6h5v6" />
      </svg>
    );
  }

  if (name === "menu") {
    return (
      <svg
        className={common}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M4 6h16" />
        <path d="M4 12h16" />
        <path d="M4 18h16" />
      </svg>
    );
  }

  if (name === "about") {
    return (
      <svg
        className={common}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 10v6" />
        <path d="M12 7h.01" />
      </svg>
    );
  }

  return (
    <svg
      className={common}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M21 15.5a16 16 0 0 1-6.5-6.5L16 6l-3-3-3 3 1.5 3.5a16 16 0 0 1-6.5 6.5L3 17l4 4 1.5-1.5a16 16 0 0 1 6.5-6.5L18 14l3-3-3-3" />
    </svg>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 z-50 w-full">

  {/* PREMIUM GLASS BACKGROUND */}
  <div className="absolute inset-0 border-b border-white/[0.08] bg-black/10 backdrop-blur-2xl backdrop-saturate-300 shadow-[0_10px_40px_rgba(0,0,0,0.85)]" />

  {/* SUBTLE ORANGE GLOW */}
  <div className="pointer-events-none absolute left-1/2 top-0 h-16 w-96 -translate-x-1/2 bg-orange-500/[0.06] blur-3xl" />

  <div className="relative mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6">
        {/* LOGO */}
        <a
          href="/"
          onClick={closeMenu}
          className="group flex items-center"
        >
          <div className="relative">
            {/* Logo glow */}
            <div className="absolute inset-0 scale-75 rounded-full bg-orange-500/20 opacity-0 blur-xl transition duration-500 group-hover:opacity-100" />

            <img
              src="/images/logo.png"
              alt="FUN2 Steamboat & Grill"
              className="relative h-11 w-auto object-contain transition duration-300 group-hover:scale-105"
            />
          </div>
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden items-center gap-2 md:flex">

          <a
            href="/"
            className="group flex items-center gap-2 rounded-full px-4 py-2.5 text-sm text-gray-300 transition-all duration-300 hover:bg-white/[0.06] hover:text-orange-400"
          >
            <NavIcon name="home" />
            <span>Home</span>
          </a>

          <a
            href="/menu"
            className="group flex items-center gap-2 rounded-full px-4 py-2.5 text-sm text-gray-300 transition-all duration-300 hover:bg-white/[0.06] hover:text-orange-400"
          >
            <NavIcon name="menu" />
            <span>Menu</span>
          </a>

          <a
            href="/about"
            className="group flex items-center gap-2 rounded-full px-4 py-2.5 text-sm text-gray-300 transition-all duration-300 hover:bg-white/[0.06] hover:text-orange-400"
          >
            <NavIcon name="about" />
            <span>About</span>
          </a>

          <a
            href="/contact"
            className="group flex items-center gap-2 rounded-full px-4 py-2.5 text-sm text-gray-300 transition-all duration-300 hover:bg-white/[0.06] hover:text-orange-400"
          >
            <NavIcon name="contact" />
            <span>Contact</span>
          </a>

        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-lg text-white shadow-lg transition-all duration-300 hover:border-orange-500/50 hover:bg-orange-500/10 hover:text-orange-400 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="relative border-t border-white/[0.08] bg-[#090909]/95 px-6 py-6 shadow-2xl backdrop-blur-xl md:hidden">

          <div className="flex flex-col gap-2">

            <a
              href="/"
              onClick={closeMenu}
              className="flex items-center gap-3 rounded-xl px-4 py-3.5 text-sm text-gray-300 transition hover:bg-white/[0.06] hover:text-orange-400"
            >
              <NavIcon name="home" />
              Home
            </a>

            <a
              href="/menu"
              onClick={closeMenu}
              className="flex items-center gap-3 rounded-xl px-4 py-3.5 text-sm text-gray-300 transition hover:bg-white/[0.06] hover:text-orange-400"
            >
              <NavIcon name="menu" />
              Menu
            </a>

            <a
              href="/about"
              onClick={closeMenu}
              className="flex items-center gap-3 rounded-xl px-4 py-3.5 text-sm text-gray-300 transition hover:bg-white/[0.06] hover:text-orange-400"
            >
              <NavIcon name="about" />
              About
            </a>
            <a
              href="/contact"
              onClick={closeMenu}
              className="flex items-center gap-3 rounded-xl px-4 py-3.5 text-sm text-gray-300 transition hover:bg-white/[0.06] hover:text-orange-400"
            >
              <NavIcon name="contact" />
              Contact
            </a>
          </div>

        </div>
      )}

    </nav>
  );
}