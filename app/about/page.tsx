import Navbar from "../components/Navbar";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">

      <Navbar />

      {/* HERO */}
      <section className="px-6 pb-20 pt-40">

        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-orange-400">
            About Fun2
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
            More Than Just
            <span className="text-orange-400"> Steamboat & Grill</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            Fun2 SteamboatandGrill hadir untuk memberikan pengalaman makan
            yang nyaman, premium, dan menyenangkan bersama keluarga,
            teman, maupun orang-orang terdekat.
          </p>

        </div>

      </section>

      {/* STORY */}
      <section className="border-t border-white/10 bg-[#111111] px-6 py-24">

        <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-2 md:items-center">

          {/* IMAGE */}
          <div className="overflow-hidden rounded-3xl border border-white/10">

            <img
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80"
              alt="Fun2 restaurant"
              className="h-[500px] w-full object-cover transition duration-700 hover:scale-105"
            />

          </div>

          {/* TEXT */}
          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-orange-400">
              Our Story
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              A Place To Eat,
              <br />
              Connect & Enjoy
            </h2>

            <p className="mt-8 leading-8 text-gray-400">
              Kami percaya bahwa makanan bukan hanya tentang rasa.
              Momen makan bersama juga menjadi bagian penting dari
              pengalaman yang ingin kami berikan kepada setiap pelanggan.
            </p>

            <p className="mt-5 leading-8 text-gray-400">
              Karena itu, Fun2 menggabungkan bahan pilihan, konsep
              steamboat dan grill, serta suasana yang nyaman untuk
              menciptakan pengalaman makan yang memorable.
            </p>

          </div>

        </div>

      </section>

      {/* VALUES */}
      <section className="px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-orange-400">
              Why Fun2
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              What We Care About
            </h2>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <div className="text-3xl">🥩</div>

              <h3 className="mt-6 text-2xl font-bold">
                Premium Ingredients
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                Mengutamakan bahan berkualitas untuk memberikan rasa
                dan pengalaman terbaik.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <div className="text-3xl">🔥</div>

              <h3 className="mt-6 text-2xl font-bold">
                Grill & Steamboat
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                Nikmati pengalaman memasak dan menikmati makanan
                langsung bersama orang-orang terdekat.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <div className="text-3xl">❤️</div>

              <h3 className="mt-6 text-2xl font-bold">
                Great Experience
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                Kami ingin setiap kunjungan menjadi pengalaman yang
                menyenangkan dan berkesan.
              </p>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}