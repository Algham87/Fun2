import Navbar from "../components/Navbar";
import Link from "next/link";

const menuOptions = [
  {
    href: "/menu/alacarte",
    eyebrow: "CURATED INDIVIDUAL DISHES",
    title: "À La Carte",
    description:
      "Discover premium Wagyu, Australian beef, and signature selections crafted for your own dining experience.",
    image: "/images/alacarte.png",
    imageAlt: "Premium Wagyu beef for the Fun2 À La Carte menu",
    number: "01",
    action: "Explore ÀLa Carte",
  },
  {
    href: "/menu/buffet",
    eyebrow: "A FEAST TO SHARE",
    title: "Buffet Experience",
    description:
      "Gather around the table for a generous Steamboat & Grill experience, made for sharing with family and friends.",
    image: "/images/buffet.png",
    imageAlt: "Fun2 Steamboat and Grill buffet experience",
    number: "02",
    action: "Explore Buffet",
  },
];

export default function MenuPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080808] text-white">
      <Navbar />

      <section className="relative isolate px-5 pb-12 pt-32 sm:px-8 sm:pb-16 sm:pt-36 lg:px-10 lg:pb-20 lg:pt-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.12),transparent_55%)]"
        />

        <div className="mx-auto max-w-7xl text-center">
          <div className="mx-auto mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#D4AF37]/70 sm:w-12" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#D4AF37] sm:text-xs sm:tracking-[0.45em]">
              Fun2 Steamboat &amp; Grill
            </p>
            <span className="h-px w-8 bg-[#D4AF37]/70 sm:w-12" />
          </div>

          <h1 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl">
            A Taste of <span className="text-[#D4AF37]">Something Special</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/55 sm:mt-6 sm:text-base sm:leading-8">
            Choose your way to dine. From carefully selected individual dishes
            to a table full of Steamboat &amp; Grill favourites, your Fun2
            experience begins here.
          </p>

          <div className="mx-auto mt-8 h-px w-20 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent sm:mt-10" />
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-10 lg:pb-28">
        <div className="mx-auto grid max-w-7xl gap-5 sm:gap-7 lg:grid-cols-2 lg:gap-8">
          {menuOptions.map((menu) => (
            <Link
              key={menu.href}
              href={menu.href}
              className="group relative isolate flex min-h-[430px] overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#111] shadow-[0_18px_60px_rgba(0,0,0,0.35)] outline-none transition duration-500 hover:-translate-y-1 hover:border-[#D4AF37]/50 hover:shadow-[0_28px_80px_rgba(0,0,0,0.55)] focus-visible:ring-2 focus-visible:ring-[#D4AF37] sm:min-h-[500px] lg:min-h-[590px]"
            >
              <img
                src={menu.image}
                alt={menu.imageAlt}
                loading="lazy"
                className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.06]"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/65 to-black/5 transition-colors duration-500 group-hover:via-black/55"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-transparent opacity-70"
              />

              <div className="flex w-full flex-col justify-between p-6 sm:p-8 lg:p-10">
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-full border border-white/20 bg-black/25 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.22em] text-white/85 backdrop-blur-md sm:text-[10px]">
                    {menu.eyebrow}
                  </span>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 bg-black/20 text-sm text-white/90 backdrop-blur-md transition duration-500 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black sm:h-12 sm:w-12">
                    <span aria-hidden="true" className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                  </span>
                </div>

                <div className="max-w-xl pt-16 sm:pt-20">
                  <p className="mb-3 text-[10px] font-semibold tracking-[0.3em] text-[#E7C85A] sm:text-xs">
                    MENU {menu.number}
                  </p>
                  <h2 className="text-4xl font-semibold tracking-[-0.035em] sm:text-5xl lg:text-6xl">
                    {menu.title}
                  </h2>
                  <p className="mt-4 max-w-lg text-sm leading-7 text-white/70 sm:mt-5 sm:text-base sm:leading-8">
                    {menu.description}
                  </p>

                  <div className="mt-7 inline-flex items-center gap-4 sm:mt-9">
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#E7C85A] sm:text-sm">
                      {menu.action}
                    </span>
                    <span className="h-px w-9 bg-[#D4AF37] transition-all duration-500 group-hover:w-16" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <p className="mt-9 text-center text-[9px] font-medium uppercase tracking-[0.32em] text-white/30 sm:mt-12 sm:text-[10px] sm:tracking-[0.4em]">
          Choose · Gather · Savour
        </p>
      </section>
    </main>
  );
}
