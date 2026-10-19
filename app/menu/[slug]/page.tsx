import Link from "next/link";
import Navbar from "../../components/Navbar";

type MenuPageProps = {
  params: Promise<{ slug: string }>;
};

const menuItems = {
  "premium-wagyu": {
    name: "Premium Wagyu",
    category: "Wagyu",
    price: "$28",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    description:
      "Premium Wagyu dengan kualitas terbaik, cocok untuk dipanggang hingga mendapatkan tekstur lembut dan rasa yang kaya.",
  },

  "grilled-beef": {
    name: "Grilled Beef",
    category: "Beef",
    price: "$22",
    image:
      "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1200&q=80",
    description:
      "Potongan beef pilihan yang dipanggang dengan sempurna untuk menghasilkan rasa smoky dan juicy.",
  },

  "fresh-seafood": {
    name: "Fresh Seafood",
    category: "Seafood",
    price: "$24",
    image:
      "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?auto=format&fit=crop&w=1200&q=80",
    description:
      "Pilihan seafood segar yang cocok dinikmati bersama kuah steamboat favorit Anda.",
  },

  "signature-steamboat": {
    name: "Signature Steamboat",
    category: "Steamboat",
    price: "$25",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80",
    description:
      "Signature Steamboat dengan kombinasi bahan pilihan dan kuah yang cocok untuk dinikmati bersama.",
  },
};

export function generateStaticParams() {
  return Object.keys(menuItems).map((slug) => ({
    slug,
  }));
}

export default async function MenuDetailPage({
  params,
}: MenuPageProps) {
  const { slug } = await params;

  const item = menuItems[slug as keyof typeof menuItems];

  if (!item) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0a0a0a] text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Menu tidak ditemukan</h1>

          <Link
            href="/menu"
            className="mt-6 inline-block rounded-full bg-orange-500 px-6 py-3 font-semibold hover:bg-orange-600"
          >
            Kembali ke Menu
          </Link>
        </div>
      </main>
    );
  }

  return (
  <main className="min-h-screen bg-[#0a0a0a] text-white">

    <Navbar />

    {/* BACK BUTTON */}
    <div className="mx-auto max-w-7xl px-6 pt-32">
      <Link
        href="/menu"
        className="text-sm text-gray-400 transition hover:text-orange-400"
      >
        ← Back to Menu
      </Link>
    </div>

    {/* MENU DETAIL */}
    <section className="mx-auto grid max-w-7xl gap-12 px-6 py-12 md:grid-cols-2">

      {/* IMAGE */}
      <div className="group relative overflow-hidden rounded-3xl border border-white/10">

        <img
          src={item.image}
          alt={item.name}
          className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-105 md:h-[650px]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className="absolute bottom-6 left-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
            {item.category}
          </p>
        </div>

      </div>

      {/* INFORMATION */}
      <div className="flex flex-col justify-center">

        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-orange-400">
          Fun2 SteamboatandGrill
        </p>

        <h1 className="mt-5 text-5xl font-bold leading-tight md:text-7xl">
          {item.name}
        </h1>

        <div className="mt-6 h-px w-20 bg-orange-500" />

        <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
          {item.description}
        </p>

        {/* PRICE */}
        <div className="mt-10">
          <p className="text-sm uppercase tracking-widest text-gray-500">
            Starting From
          </p>

          <p className="mt-2 text-4xl font-bold text-orange-400">
            {item.price}
          </p>
        </div>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-wrap gap-4">

          <Link
            href="/#reservation"
            className="rounded-full bg-orange-500 px-8 py-4 font-semibold transition hover:bg-orange-600"
          >
            Book a Table
          </Link>

          <Link
            href="/menu"
            className="rounded-full border border-white/15 px-8 py-4 font-semibold text-gray-300 transition hover:border-orange-500 hover:text-orange-400"
          >
            View Other Menu
          </Link>

        </div>

        {/* INFO */}
        <div className="mt-12 grid max-w-xl grid-cols-3 border-t border-white/10 pt-8">

          <div>
            <p className="text-sm text-gray-500">
              Category
            </p>
            <p className="mt-2 font-semibold">
              {item.category}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Experience
            </p>
            <p className="mt-2 font-semibold">
              Premium
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Style
            </p>
            <p className="mt-2 font-semibold">
              Steamboat
            </p>
          </div>

        </div>

      </div>

    </section>

    {/* EXPERIENCE SECTION */}
    <section className="border-t border-white/10 bg-[#111111] px-6 py-20">

      <div className="mx-auto max-w-7xl text-center">

        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-orange-400">
          The Fun2 Experience
        </p>

        <h2 className="mt-4 text-3xl font-bold md:text-5xl">
          More Than Just a Meal
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-400">
          Nikmati pengalaman steamboat dan grill dengan bahan pilihan,
          suasana nyaman, dan momen yang menyenangkan bersama orang-orang
          terdekat.
        </p>

      </div>

    </section>

  </main>
  );
}