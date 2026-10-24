import Navbar from "../components/Navbar";

const instagramUrl =
  "https://www.instagram.com/fun2steamboatandgrill/";

const tiktokUrl =
  "https://www.tiktok.com/@fun2steamboatandgrill";

const branches = [
  {
    name: "Fun2 Steamboat & Grill Baburaja",
    location: "MAIN BRANCH",
    address: "Unit 6 & 7, Ground Floor, Block A, Simpang 188, Jalan Pengiran Babu Raja, Kampung Kiarong BE1318 Brunei Darussalam",
    mapsUrl: "https://maps.app.goo.gl/r3fWLq7n4pVnCNBu5",
    whatsapp: "6738131668",
  },
  {
    name: "Fun2 Steamboat & Grill Berakas",
    location: "SECOND BRANCH",
    address: "Unit 3 & 4, Ground Floor, Block C, Simpang 58, Jalan Utama Berakas, Kg Serusop BB2313 Brunei Darussalam",
    mapsUrl: "https://maps.app.goo.gl/2znvuRhPyTgE6xoT9",
    whatsapp: "6738191668",
  },
];

function getWhatsAppUrl(number: string, branchName: string) {
  const message = encodeURIComponent(
    `Hello ${branchName}! I would like to make a reservation. Could you please assist me?`
  );

  return `https://wa.me/${number}?text=${message}`;
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F5F3ED]">
      <Navbar />
      {/* CONTACT HEADER */}
<section className="px-6 pb-10 pt-24 md:pb-6 md:pt-28">
  <div className="mx-auto max-w-7xl">
    <div className="flex items-center gap-3">
      <span className="h-px w-10 bg-[#C6A45C]" />
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A45C]">
        Get In Touch
      </p>
    </div>

    <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
      Contact <span className="text-[#C6A45C]">Fun2</span>
    </h1>

    <p className="mt-4 max-w-xl text-sm leading-7 text-[#A5A39D] md:text-base">
      Find our branches, check our opening hours, or contact us
      to plan your next Steamboat &amp; Grill experience.
    </p>
  </div>
</section>

      {/* CONTACT DETAILS */}
      <section
        id="branches"
        className="border-t border-white/[0.07] bg-[#0E0E0E] px-6 py-16 md:py-6"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-3 md:mb-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C6A45C]">
              Find Us
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
              Visit Our Branches
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-[#96948E] md:text-base">
              Choose your preferred location and contact the branch
              directly for reservations.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {/* BRANCH CARDS */}
            {branches.map((branch, index) => (
              <article
                key={branch.name}
                className="group flex h-full flex-col rounded-2xl border border-white/[0.08] bg-[#151515] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#C6A45C]/40 hover:bg-[#191919] md:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium tracking-[0.2em] text-[#C6A45C]">
                    {branch.location}
                  </span>

                  <span
                    aria-hidden="true"
                    className="text-sm text-[#77756F] transition group-hover:text-[#C6A45C]"
                  >
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-semibold tracking-tight">
                  {branch.name}
                </h3>

                <p className="mt-3 min-h-[72px] text-sm leading-6 text-[#96948E]">
                  {branch.address}
                </p>

                <div className="mt-auto border-t border-white/[0.08] pt-5">
                  <a
                    href={branch.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#C6A45C] transition hover:text-[#E5CB8A]"
                  >
                    View on Google Maps
                    <span aria-hidden="true">↗</span>
                  </a>

                  <p className="mt-5 text-xs uppercase tracking-[0.15em] text-[#77756F]">
                    WhatsApp Reservations
                  </p>

                  <p className="mt-2 text-sm font-medium text-[#F5F3ED]">
                    +673 {branch.whatsapp.slice(3, 7)}{" "}
                    {branch.whatsapp.slice(7)}
                  </p>

                  <a
                    href={getWhatsAppUrl(branch.whatsapp, branch.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#C6A45C] px-4 py-3 text-sm font-semibold text-[#111111] transition duration-300 hover:bg-[#E0C47F]"
                  >
                    Contact This Branch
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            ))}

            {/* OPENING HOURS */}
            <article className="rounded-2xl border border-white/[0.08] bg-[#151515] p-6 md:p-7">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#C6A45C]/20 bg-[#C6A45C]/[0.08] text-[#C6A45C]"
                >
                  ◷
                </span>

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A45C]">
                  Opening Hours
                </p>
              </div>

              <h3 className="mt-7 text-xl font-semibold">
                Plan Your Visit
              </h3>

              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-sm text-[#96948E]">
                    Monday – Thursday
                  </p>
                  <p className="mt-1 text-sm font-medium text-[#F5F3ED]">
                    11:00 AM – 10:00 PM
                  </p>
                </div>

                <div>
                  <p className="text-sm text-[#96948E]">
                    Friday – Sunday
                  </p>
                  <p className="mt-1 text-sm font-medium text-[#F5F3ED]">
                    2:00 PM – 10:00 PM
                  </p>
                </div>
              </div>

              <p className="mt-6 border-t border-white/[0.08] pt-4 text-xs leading-6 text-[#77756F]">
                Public holiday hours may vary. Please contact your
                preferred branch before visiting.
              </p>
            </article>

            {/* SOCIAL MEDIA */}
            <article className="rounded-2xl border border-white/[0.08] bg-[#151515] p-6 md:p-7">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#C6A45C]/20 bg-[#C6A45C]/[0.08] text-lg text-[#C6A45C]"
                >
                  ✳
                </span>

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A45C]">
                  Follow Us
                </p>
              </div>

              <h3 className="mt-7 text-xl font-semibold">
                Stay Connected
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#96948E]">
                Discover our food highlights, special menus, and
                latest updates on social media.
              </p>

              <div className="mt-6 space-y-3">
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-white/[0.08] px-4 py-3.5 text-sm transition duration-300 hover:border-[#C6A45C]/40 hover:bg-white/[0.03]"
                >
                  <span>Instagram</span>
                  <span className="text-[#C6A45C]" aria-hidden="true">
                    ↗
                  </span>
                </a>

                <a
                  href={tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-white/[0.08] px-4 py-3.5 text-sm transition duration-300 hover:border-[#C6A45C]/40 hover:bg-white/[0.03]"
                >
                  <span>TikTok</span>
                  <span className="text-[#C6A45C]" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* MINIMAL RESERVATION FOOTER */}
      <section className="px-6 py-14 md:py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 border-t border-white/[0.08] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-wide text-[#F5F3ED]">
              Fun2 Steamboat &amp; Grill
            </p>

            <p className="mt-2 text-xs leading-6 text-[#77756F]">
              Bringing people together, one great meal at a time.
            </p>
          </div>

          <p className="text-xs tracking-wide text-[#77756F]">
            Steamboat <span className="text-[#C6A45C]">·</span> Grill{" "}
            <span className="text-[#C6A45C]">·</span> Wagyu
          </p>
        </div>
      </section>
    </main>
  );
}