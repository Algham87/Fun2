import Navbar from "../../components/Navbar";
import Link from "next/link";
import { buffetCategories } from "../../data/menuCategories";

const buffetTerms = [
  {
    title: "Children",
    detail: "Children aged 5–12 years old.",
  },
  {
    title: "Senior",
    detail: "Senior guests aged 65 years old and above.",
  },
  {
    title: "Food wastage",
    detail: "Food wastage will be charged at $5 per 100g.",
    highlight: "$5 / 100g",
  },
  {
    title: "Reservations",
    detail: "Reservations will be held for 15 minutes only.",
    highlight: "15 minutes only",
  },
  {
    title: "Buffet packages",
    detail: "No sharing of buffet packages.",
  },
];

export default function BuffetPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080808] text-white">
      <Navbar />

      {/* MENU INTRO */}
      <section className="border-b border-white/[0.08] bg-[#090909] px-5 pb-4 pt-20 sm:px-8 sm:pb-5 md:px-12 md:pt-22 lg:px-6">
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
            Fun2 Steamboat &amp; Grill
          </p>
          <h1 className="mt-1.5 text-2xl font-semibold tracking-tight sm:text-3xl">
            Buffet <span className="text-[#D4AF37]">Menu</span>
          </h1>
          <p className="mt-1.5 max-w-xl text-xs leading-5 text-gray-400 sm:text-sm">
            Choose your buffet experience and review our dining terms below.
          </p>
        </div>
      </section>

      {/* TERMS & CONDITIONS */}
      <section
        id="terms-and-conditions"
        className="border-y border-white/[0.08] bg-[#0B0B0B] px-5 py-5 sm:px-8 sm:py-6 md:px-12 lg:px-6"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
                Buffet Information
              </p>
              <h2 className="mt-1 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                Terms &amp; Conditions
              </h2>
            </div>
            <p className="text-xs text-gray-500">
              Please review before dining.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {buffetTerms.map((term, index) => (
              <div key={term.title} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/35 text-[9px] font-semibold text-[#D4AF37]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold leading-5 text-white">
                    {term.title}
                  </h3>
                  <p className="mt-0.5 text-xs leading-5 text-gray-400">
                    {term.highlight ? (
                      <>
                        {term.detail.split(term.highlight)[0]}
                        <span className="font-semibold text-[#D4AF37]">
                          {term.highlight}
                        </span>
                        {term.detail.split(term.highlight).slice(1).join(term.highlight)}
                      </>
                    ) : (
                      term.detail
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUFFET CATEGORIES */}
      <section
        id="buffet-categories"
        className="scroll-mt-16 px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12 lg:px-6"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 text-center sm:mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#D4AF37]">
              Explore The Experience
            </p>

            <h1 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
              Buffet Categories
            </h1>

            <p className="mx-auto mt-3 max-w-2xl text-xs leading-5 text-gray-400 sm:text-sm sm:leading-6">
              Explore the selections that make your buffet experience memorable.
            </p>

            <div className="mx-auto mt-4 h-px w-12 bg-[#D4AF37]" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {buffetCategories.map((item, index) => (
              <Link
                key={item.slug}
                href={`/menu/buffet/${item.slug}`}
                className="group block overflow-hidden rounded-2xl border border-white/[0.09] bg-[#101010] transition duration-500 hover:-translate-y-1 hover:border-[#D4AF37]/50 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              >
                <div className="relative h-52 overflow-hidden sm:h-60 lg:h-72">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.06]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-black/5" />

                  <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/45 px-3 py-1.5 text-[10px] font-semibold tracking-[0.2em] text-white backdrop-blur-md sm:left-5 sm:top-5">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/35 text-lg text-white backdrop-blur-sm transition duration-300 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black sm:bottom-5 sm:right-5">
                    <span aria-hidden="true">↗</span>
                  </span>
                </div>

                <div className="p-4 sm:p-5">
                  <h2 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-[#F3D675] sm:text-2xl">
                    {item.name}
                  </h2>

                  <p className="mt-3 min-h-[3.5rem] text-sm leading-6 text-gray-400 sm:leading-7">
                    {item.description}
                  </p>

                  <div className="mt-3 flex items-center gap-3">
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D4AF37]">
                      Explore Category
                    </span>
                    <span className="h-px w-8 bg-[#D4AF37]/70 transition-all duration-500 group-hover:w-14" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


    </main>
  );
}
