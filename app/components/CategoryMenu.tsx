import Navbar from "./Navbar";
import Link from "next/link";
import type { MenuCategory } from "../data/menuCategories";
import SoupBase from "./category/SoupBase";
import RiceNoodlesEgg from "./category/RiceNoodlesEgg";
import VeggieMushroom from "./category/VeggieMushroom";
import Bebola from "./category/Bebola";
import SteamboatAlaCarte from "./category/SteamboatAlaCarte";
import WagyuBeef from "./category/WagyuBeef";
import AustralianBeef from "./category/AustralianBeef";
import LambChicken from "./category/LambChicken";
import GrillComboSet from "./category/GrillComboSet";
import SteamboatComboSet from "./category/SteamboatComboSet";
import FriedFood from "./category/FriedFood";
import Drinks from "./category/Drinks";

type Props = {
  category: MenuCategory;
  menuType: "alacarte" | "buffet";
};

export default function CategoryMenu({
  category,
  menuType,
}: Props) {
  const backUrl = `/menu/${menuType}`;

  const menuLabel =
    menuType === "alacarte" ? "À La Carte" : "Buffet";

  const isStirFry = category.slug === "stir-fry";
  if (category.slug === "soup-base") {
  return (
    <SoupBase
      category={category}
      menuType={menuType}
    />
  );
}
if (category.slug === "rice-noodles-egg") {
  return (
    <RiceNoodlesEgg
      category={category}
      menuType={menuType}
    />
  );
}
if (category.slug === "veggie-and-mushroom") {
  return (
    <VeggieMushroom
      category={category}
      menuType={menuType}
    />
  );
}
if (category.slug === "bebola") {
  return (
    <Bebola
      category={category}
      menuType={menuType}
    />
  );
}
if (category.slug === "Steamboat-ala-carte") {
  return (
    <SteamboatAlaCarte
      category={category}
      menuType={menuType}
    />
  );
}
if (category.slug === "wagyu-beef") {
  return (
    <WagyuBeef
      category={category}
      menuType={menuType}
    />
  );
}
if (category.slug === "australian-beef") {
  return (
    <AustralianBeef
      category={category}
      menuType={menuType}
    />
  );
}
if (category.slug === "lamb-chicken") {
  return (
    <LambChicken
      category={category}
      menuType={menuType}
    />
  );
}
if (category.slug === "grill-combo-set") {
  return (
    <GrillComboSet
      category={category}
      menuType={menuType}
    />
  );
}
if (category.slug === "steamboat-combo-set") {
  return (
    <SteamboatComboSet
      category={category}
      menuType={menuType}
    />
  );
}
if (category.slug === "fried-food") {
  return (
    <FriedFood
      category={category}
      menuType={menuType}
    />
  );
}
if (category.slug === "beverages") {
  return (
    <Drinks
      category={category}
      menuType={menuType}
    />
  );
}
  /*
  ============================================
  SPECIAL LAYOUT - STIR FRY
  ============================================
  */

  if (isStirFry) {
    const teriyakiItems = category.items.filter((item) =>
      item.name.toLowerCase().startsWith("teriyaki")
    );

    const barbequeItems = category.items.filter((item) =>
      item.name.toLowerCase().startsWith("barbeque")
    );

    return (
      <main className="min-h-screen bg-[#111111] text-white">
        <Navbar />

        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="relative h-[520px] w-full md:h-[620px]">

            {/* 3 BACKGROUND IMAGES */}
            <div className="grid h-full grid-cols-3">
              {category.backgrounds?.map((image, index) => (
                <div
                  key={`${image}-${index}`}
                  className="relative h-full overflow-hidden"
                >
                  <img
                    src={image}
                    alt={`${category.name} ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/10" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/20 to-black/40" />

            {/* HERO TEXT */}
            <div className="absolute inset-0 z-10 flex items-end">
              <div className="mx-auto w-full max-w-7xl px-6 pb-16">

                <Link
                  href={backUrl}
                  className="text-sm font-medium text-orange-400 hover:text-orange-300"
                >
                  ← Back to {menuLabel}
                </Link>

                <p className="mt-12 text-sm font-semibold uppercase tracking-[0.4em] text-orange-400">
                  Fun2 Steamboat & Grill
                </p>

                <h1 className="mt-4 text-5xl font-bold md:text-7xl">
                  {category.name}
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
                  {category.description}
                </p>

              </div>
            </div>
          </div>
        </section>

        {/* STIR FRY MENU */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-5xl">

            {/* TERIYAKI */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
                Teriyaki
              </p>

              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Teriyaki Selection
              </h2>

              <div className="mt-6 h-px w-full bg-white/10" />

              <div className="mt-8 grid gap-4 md:grid-cols-2">

                {teriyakiItems.map((item, index) => (
                  <article
                    key={`${item.name}-${index}`}
                    className="rounded-2xl border border-white/10 bg-[#1d1d1d] p-6 transition duration-300 hover:border-orange-500/50 hover:bg-[#242424]"
                  >
                    <h3 className="text-xl font-bold">
                      {item.name}
                    </h3>

                    <p className="mt-3 leading-7 text-gray-400">
                      {item.description}
                    </p>
                  </article>
                ))}

              </div>
            </div>

            {/* BARBEQUE */}
            <div className="mt-20">

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
                Barbeque
              </p>

              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Barbeque Selection
              </h2>

              <div className="mt-6 h-px w-full bg-white/10" />

              <div className="mt-8 grid gap-4 md:grid-cols-2">

                {barbequeItems.map((item, index) => (
                  <article
                    key={`${item.name}-${index}`}
                    className="rounded-2xl border border-white/10 bg-[#1d1d1d] p-6 transition duration-300 hover:border-orange-500/50 hover:bg-[#242424]"
                  >
                    <h3 className="text-xl font-bold">
                      {item.name}
                    </h3>

                    <p className="mt-3 leading-7 text-gray-400">
                      {item.description}
                    </p>
                  </article>
                ))}

              </div>
            </div>

            {/* BACK BUTTON */}
            <div className="mt-16 text-center">
              <Link
                href={backUrl}
                className="inline-flex rounded-full border border-white/30 px-8 py-4 font-semibold transition hover:border-orange-400 hover:text-orange-400"
              >
                ← View All Categories
              </Link>
            </div>

          </div>
        </section>
      </main>
    );
  }

  /*
  ============================================
  NORMAL CATEGORY LAYOUT
  ============================================
  */

  return (
    <main className="min-h-screen bg-[#111111] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative flex min-h-[470px] items-end overflow-hidden">

        {/* IF CATEGORY HAS BACKGROUNDS */}
        {category.backgrounds &&
        category.backgrounds.length > 0 ? (
          <div className="absolute inset-0 grid grid-cols-3">

            {category.backgrounds.map((image, index) => (
              <div
                key={`${image}-${index}`}
                className="relative h-full overflow-hidden"
              >
                <img
                  src={image}
                  alt={`${category.name} ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}

          </div>
        ) : (
          /* NORMAL CATEGORY IMAGE */
          category.image && (
            <img
              src={category.image}
              alt={category.name}
              className="absolute inset-0 h-full w-full object-cover"
            />
          )
        )}

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/20 to-black/50" />

        {/* HERO CONTENT */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-50">

          <Link
            href={backUrl}
            className="text-sm font-medium text-orange-400 hover:text-orange-300"
          >
            ← Back to {menuLabel}
          </Link>

          <p className="mt-12 text-sm font-semibold uppercase tracking-[0.4em] text-orange-400">
            Fun2 Steamboat & Grill
          </p>

          <h1 className="mt-4 text-5xl font-bold md:text-7xl">
            {category.name}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            {category.description}
          </p>

        </div>
      </section>

      {/* FOOD LIST */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">

          {/* TITLE */}
          <div className="mb-12">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
              Explore Our Selection
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Available Menu
            </h2>

            <div className="mt-6 h-px w-full bg-white/10" />

          </div>

          {/* MENU CARDS */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {category.items.map((item, index) => (

              <article
                key={`${item.name}-${index}`}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-[#1d1d1d] transition duration-300 hover:-translate-y-2 hover:border-orange-500/50"
              >

                {/* ITEM IMAGE */}
                {item.image && (
                  <div className="relative h-72 overflow-hidden bg-[#292929]">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  </div>
                )}

                {/* ITEM CONTENT */}
                <div className="p-7">

                  <h3 className="text-2xl font-bold">
                    {item.name}
                  </h3>

                  <p className="mt-4 min-h-16 leading-7 text-gray-400">
                    {item.description}
                  </p>

                  {item.price && (
                    <p className="mt-5 text-xl font-bold text-orange-400">
                      {item.price}
                    </p>
                  )}

                  <div className="mt-7 h-px w-12 bg-orange-500 transition-all duration-500 group-hover:w-full" />

                </div>

              </article>

            ))}

          </div>

          {/* BACK BUTTON */}
          <div className="mt-16 text-center">

            <Link
              href={backUrl}
              className="inline-flex rounded-full border border-white/30 px-8 py-4 font-semibold transition hover:border-orange-400 hover:text-orange-400"
            >
              ← View All Categories
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}