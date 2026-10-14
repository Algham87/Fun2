
"use client";

import Navbar from "../components/Navbar";
import BranchCard from "../components/branchcard";
import branches from "../data/branches";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <section className="scroll-mt-20 bg-[#050505] px-5 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center md:mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#D4AF37]">
              Visit Us
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Our Branches
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
              Explore our dining areas, complimentary facilities,
              and comfortable spaces for family and friends.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {branches.map((branch, index) => (
              <BranchCard
                key={`${branch.location}-${index}`}
                branch={branch}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
