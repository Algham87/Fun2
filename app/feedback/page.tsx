"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import { supabase } from "@/Lib/Supabase";

const ratingQuestions = [
  {
    key: "service_rating",
    title: "How would you rate the service provided by our staff?",
  },
  {
    key: "food_rating",
    title: "How would you rate the food at our restaurant?",
  },
  {
    key: "cleanliness_rating",
    title: "How would you rate the cleanliness and ambience of our restaurant?",
  },
] as const;

const ratingLabels = [
  "Very Poor",
  "Poor",
  "Okay",
  "Good",
  "Excellent",
];

export default function FeedbackPage() {
  const [branch, setBranch] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [ratings, setRatings] = useState({
    service_rating: 0,
    food_rating: 0,
    cleanliness_rating: 0,
  });
  const [comments, setComments] = useState("");
  const [allowTestimonial, setAllowTestimonial] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const allRatingsSelected = Object.values(ratings).every(
    (rating) => rating >= 1 && rating <= 5
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage("");

    if (!branch || !allRatingsSelected) {
      setMessage("Please select your branch and complete all ratings.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.from("feedback").insert({
      branch,
      customer_name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      service_rating: ratings.service_rating,
      food_rating: ratings.food_rating,
      cleanliness_rating: ratings.cleanliness_rating,
      comments: comments.trim() || null,
      allow_testimonial: allowTestimonial,
    });

    setLoading(false);

    if (error) {
      console.error("Feedback submission error:", error);
      setMessage("Sorry, we could not submit your feedback. Please try again.");
      return;
    }

    setMessage("Thank you! Your feedback has been submitted successfully.");

    setBranch("");
    setName("");
    setEmail("");
    setPhone("");
    setRatings({
      service_rating: 0,
      food_rating: 0,
      cleanliness_rating: 0,
    });
    setComments("");
    setAllowTestimonial(false);
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#090909] px-4 pb-10 pt-28 text-white sm:px-6">
        <div className="mx-auto max-w-2xl">
          <header className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
              FUN2 STEAMBOAT & GRILL
            </p>

            <h1 className="mt-4 text-3xl font-bold sm:text-4xl">
              We Value Your Feedback
            </h1>

            <p className="mt-3 text-sm leading-6 text-gray-400">
              Thank you for dining with us. Your feedback helps us improve
              your experience at FUN2.
            </p>
          </header>

          <form
            onSubmit={handleSubmit}
            className="space-y-8 rounded-2xl border border-white/10 bg-[#171717] p-5 sm:p-8"
          >
            <section>
              <h2 className="mb-4 text-lg font-semibold">Your Visit</h2>

              <label className="mb-2 block text-sm text-gray-300">
                Which FUN2 branch are you currently visiting?
              </label>

              <select
                required
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                className="w-full rounded-lg border border-white/10 bg-[#222] px-4 py-3 text-white outline-none focus:border-orange-500"
              >
                <option value="">Select branch</option>
                <option value="Berakas Branch">Berakas Branch</option>
                <option value="Babu Raja Branch">Babu Raja Branch</option>
              </select>
            </section>

            <section className="space-y-7">
              <h2 className="text-lg font-semibold">Rate Your Experience</h2>

              {ratingQuestions.map((question) => (
                <div key={question.key}>
                  <p className="mb-3 text-sm leading-6 text-gray-300">
                    {question.title}
                  </p>

                  <div className="grid grid-cols-5 gap-2">
                    {ratingLabels.map((label, index) => {
                      const value = index + 1;
                      const selected = ratings[question.key] === value;

                      return (
                        <button
                          key={value}
                          type="button"
                          onClick={() =>
                            setRatings((previous) => ({
                              ...previous,
                              [question.key]: value,
                            }))
                          }
                          className={`rounded-lg border px-1 py-3 text-center text-xs transition sm:text-sm ${
                            selected
                              ? "border-orange-500 bg-orange-600 text-white"
                              : "border-white/10 bg-[#222] text-gray-400 hover:border-orange-500"
                          }`}
                        >
                          <span className="block text-lg font-bold">
                            {value}
                          </span>
                          <span className="mt-1 block">{label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </section>

            <section>
              <h2 className="mb-4 text-lg font-semibold">
                Additional Comments
              </h2>

              <textarea
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                rows={4}
                maxLength={1000}
                placeholder="Tell us about your experience (optional)"
                className="w-full rounded-lg border border-white/10 bg-[#222] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-orange-500"
              />
            </section>

            <section>
              <h2 className="mb-4 text-lg font-semibold">
                Your Contact Details
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm text-gray-300">
                    Full Name
                  </label>
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    maxLength={100}
                    autoComplete="name"
                    className="w-full rounded-lg border border-white/10 bg-[#222] px-4 py-3 outline-none focus:border-orange-500"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-gray-300">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    maxLength={254}
                    autoComplete="email"
                    className="w-full rounded-lg border border-white/10 bg-[#222] px-4 py-3 outline-none focus:border-orange-500"
                    placeholder="Your email address"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-gray-300">
                    Phone Number
                  </label>
                  <input
                    required
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    maxLength={30}
                    autoComplete="tel"
                    className="w-full rounded-lg border border-white/10 bg-[#222] px-4 py-3 outline-none focus:border-orange-500"
                    placeholder="Your phone number"
                  />
                </div>
              </div>
            </section>

            <label className="flex items-start gap-3 text-sm leading-6 text-gray-400">
              <input
                type="checkbox"
                checked={allowTestimonial}
                onChange={(e) => setAllowTestimonial(e.target.checked)}
                className="mt-1 accent-orange-500"
              />
              I agree that FUN2 Steamboat & Grill may publish my name and
              comments as a testimonial on its website and social media. My
              email address and phone number will remain private.
            </label>

            {message && (
              <p
                role="status"
                className="rounded-lg bg-white/5 p-4 text-sm text-orange-300"
              >
                {message}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-orange-600 py-4 font-semibold text-white transition hover:bg-orange-500 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit Feedback"}
            </button>

            <p className="text-center text-xs text-gray-500">
              Thank you for helping us make FUN2 better.
            </p>
          </form>
        </div>
      </main>
    </>
  );
}
