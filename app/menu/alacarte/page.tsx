import Navbar from "../../components/Navbar";
import Link from "next/link";
import { alacarteCategories } from "../../data/menuCategories";

export default function AlacartePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080808] text-white">
      <Navbar />
      {/* CATEGORIES */}
      <section
        id="categories"
        className="scroll-mt-20 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.07),transparent_55%)] px-5 py-16 sm:px-8 sm:py-20 md:px-12 md:py-24 lg:px-6"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#D4AF37] sm:text-xs sm:tracking-[0.45em]">
              Discover Our Selection
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Explore Our Categories
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:mt-5 sm:text-base sm:leading-8">
              Discover a variety of carefully selected ingredients and
              delicious dishes at Fun2.
            </p>

            <div className="mx-auto mt-6 h-px w-14 bg-[#D4AF37]" />
          </div>

          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
            {alacarteCategories.map((item, index) => (
              <Link
                key={item.slug}
                href={`/menu/alacarte/${item.slug}`}
                className="group relative block overflow-hidden rounded-2xl border border-white/[0.09] bg-[#101010] transition duration-500 hover:-translate-y-1 hover:border-[#D4AF37]/50 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              >
                <div className="relative h-64 overflow-hidden sm:h-72 lg:h-80">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.06]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-black/5" />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />

                  <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/45 px-3 py-1.5 text-[10px] font-semibold tracking-[0.2em] text-white backdrop-blur-md sm:left-5 sm:top-5">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/35 text-lg text-white backdrop-blur-sm transition duration-300 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black sm:bottom-5 sm:right-5">
                    <span aria-hidden="true">↗</span>
                  </span>
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="text-xl font-semibold tracking-tight text-white transition-colors group-hover:text-[#F3D675] sm:text-2xl">
                    {item.name}
                  </h3>

                  <p className="mt-3 min-h-[3.5rem] text-sm leading-6 text-gray-400 sm:leading-7">
                    {item.description}
                  </p>

                  <div className="mt-5 flex items-center gap-3">
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D4AF37]">
                      Explore Category
                    </span>
                    <span className="h-px w-8 bg-[#D4AF37]/70 transition-all duration-500 group-hover:w-14" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center sm:mt-16">
            <Link
              href="/menu"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/20 px-7 py-3 text-sm font-medium text-gray-200 transition duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-[#080808] sm:px-8"
            >
              <span aria-hidden="true">←</span>
              Back to Menu Selection
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
