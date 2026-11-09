
"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/Lib/Supabase";

type Feedback = {
  id: number;
  created_at: string;
  branch: string;
  customer_name: string;
  email: string;
  phone: string;
  service_rating: number;
  food_rating: number;
  cleanliness_rating: number;
  comments: string | null;
  status: "pending" | "approved" | "rejected";
  is_featured: boolean;
  allow_testimonial: boolean;
  approved_at: string | null;
};

export default function AdminFeedbackPage() {
  const router = useRouter();

  const [feedback, setFeedback] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<number | null>(null);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [selectedFeedback, setSelectedFeedback] =
    useState<Feedback | null>(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const loadFeedback = useCallback(async () => {
    const { data: userData, error: userError } =
      await supabase.auth.getUser();

    if (userError || !userData.user) {
      router.replace("/admin/login");
      return;
    }

    const { data: admin, error: adminError } = await supabase
      .from("admin_users")
      .select("user_id")
      .eq("user_id", userData.user.id)
      .maybeSingle();

    if (adminError || !admin) {
      await supabase.auth.signOut();
      router.replace("/admin/login");
      return;
    }

    const { data, error: feedbackError } = await supabase
      .from("feedback")
      .select("*")
      .order("created_at", { ascending: false });

    if (feedbackError) {
      setError(feedbackError.message);
    } else {
      setFeedback((data ?? []) as Feedback[]);
    }

    setLoading(false);
  }, [router]);

  useEffect(() => {
    loadFeedback();
  }, [loadFeedback]);

  async function updateFeedback(
    id: number,
    changes: Partial<Feedback>,
    message: string
  ) {
    setError("");
    setSuccess("");
    setUpdatingId(id);

    const { error: updateError } = await supabase
      .from("feedback")
      .update(changes)
      .eq("id", id);

    if (updateError) {
      setError(updateError.message);
      setUpdatingId(null);
      return;
    }

    setFeedback((previous) =>
      previous.map((item) =>
        item.id === id ? { ...item, ...changes } : item
      )
    );

    setSelectedFeedback((previous) =>
      previous?.id === id ? { ...previous, ...changes } : previous
    );

    setSuccess(message);
    setUpdatingId(null);
  }

  async function handleApprove(item: Feedback) {
    await updateFeedback(
      item.id,
      {
        status: "approved",
        approved_at: new Date().toISOString(),
        is_featured: false,
      },
      "Feedback berhasil disetujui."
    );
  }

  async function handleReject(item: Feedback) {
    await updateFeedback(
      item.id,
      {
        status: "rejected",
        approved_at: null,
        is_featured: false,
      },
      "Feedback berhasil ditolak."
    );
  }

  async function handleFeature(item: Feedback) {
    if (item.status !== "approved") return;

    if (!item.allow_testimonial) {
      setError(
        "Pelanggan belum memberikan izin untuk menggunakan komentarnya sebagai testimonial."
      );
      return;
    }

    await updateFeedback(
      item.id,
      { is_featured: !item.is_featured },
      item.is_featured
        ? "Testimonial berhasil dihapus dari pilihan unggulan."
        : "Feedback berhasil dipilih sebagai testimonial unggulan."
    );
  }

  async function handleDelete(item: Feedback) {
    const confirmed = window.confirm(
      `Are you sure you want to permanently delete feedback from ${item.customer_name}? This action cannot be undone.`
    );

    if (!confirmed) return;

    setError("");
    setSuccess("");
    setDeletingId(item.id);

    const { data, error: deleteError } = await supabase
      .from("feedback")
      .delete()
      .eq("id", item.id)
      .select("id")
      .maybeSingle();

    if (deleteError) {
      setError(deleteError.message);
      setDeletingId(null);
      return;
    }

    if (!data) {
      setError(
        "Feedback was not deleted. Please check the Supabase DELETE permission (RLS policy) for admin users."
      );
      setDeletingId(null);
      return;
    }

    setFeedback((previous) =>
      previous.filter((feedbackItem) => feedbackItem.id !== item.id)
    );

    setSelectedFeedback((previous) =>
      previous?.id === item.id ? null : previous
    );

    setSuccess("Feedback berhasil dihapus.");
    setDeletingId(null);
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    router.replace("/admin/login");
  }

  const pendingCount = feedback.filter(
    (item) => item.status === "pending"
  ).length;

  const approvedCount = feedback.filter(
    (item) => item.status === "approved"
  ).length;

  const rejectedCount = feedback.filter(
    (item) => item.status === "rejected"
  ).length;

  const featuredCount = feedback.filter(
    (item) => item.is_featured
  ).length;

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#090909] text-gray-400">
        Loading dashboard...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#090909] px-4 py-7 text-white sm:px-6 md:px-10">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
              FUN2 STEAMBOAT & GRILL
            </p>
            <h1 className="mt-2 text-2xl font-bold sm:text-3xl">
              Feedback Dashboard
            </h1>
            <p className="mt-1 text-sm text-gray-400">
              Manage and review customer feedback.
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="rounded-lg border border-white/20 px-5 py-2.5 text-sm transition hover:bg-white/10"
          >
            Logout
          </button>
        </header>

        {/* NOTIFICATIONS */}
        {error && (
          <div className="mt-6 rounded-lg border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-400">
            {error}
            <button
              onClick={() => setError("")}
              className="ml-3 underline"
            >
              Tutup
            </button>
          </div>
        )}

        {success && (
          <div className="mt-6 rounded-lg border border-green-500/20 bg-green-500/10 p-4 text-sm text-green-400">
            {success}
          </div>
        )}

        {/* STATISTICS */}
        <section className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {[
            { label: "Total Feedback", value: feedback.length, color: "text-white" },
            { label: "Pending Review", value: pendingCount, color: "text-yellow-400" },
            { label: "Approved", value: approvedCount, color: "text-green-400" },
            { label: "Featured", value: featuredCount, color: "text-orange-400" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/10 bg-[#171717] p-5"
            >
              <p className="text-sm text-gray-400">{stat.label}</p>
              <p className={`mt-2 text-3xl font-bold ${stat.color}`}>
                {stat.value}
              </p>
            </div>
          ))}
        </section>

        {/* FEEDBACK LIST */}
        <section className="mt-10">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-xl font-semibold">
                Customer Feedback
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Review customer experiences and manage testimonials.
              </p>
            </div>

            <button
              onClick={() => loadFeedback()}
              className="rounded-lg border border-white/10 px-4 py-2 text-sm text-gray-300 hover:bg-white/10"
            >
              Refresh
            </button>
          </div>

          {feedback.length === 0 ? (
            <div className="rounded-xl border border-white/10 bg-[#171717] p-10 text-center text-gray-400">
              No feedback received yet.
            </div>
          ) : (
            <div className="space-y-5">
              {feedback.map((item) => (
                <article
                  key={item.id}
                  className="rounded-xl border border-white/10 bg-[#171717] p-5 sm:p-6"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-semibold text-white">
                        {item.customer_name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-400">
                        {item.branch}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <span
                        className={`rounded-full px-3 py-1 text-xs capitalize ${
                          item.status === "pending"
                            ? "bg-yellow-500/10 text-yellow-400"
                            : item.status === "approved"
                            ? "bg-green-500/10 text-green-400"
                            : "bg-red-500/10 text-red-400"
                        }`}
                      >
                        {item.status}
                      </span>

                      {item.is_featured && (
                        <span className="rounded-full bg-orange-500/10 px-3 py-1 text-xs text-orange-400">
                          Featured
                        </span>
                      )}
                    </div>
                  </div>

                  {/* RATINGS */}
                  <div className="mt-5 grid grid-cols-1 gap-3 text-sm text-gray-300 sm:grid-cols-3">
                    <p>
                      Service: <strong>{item.service_rating}/5</strong>
                    </p>
                    <p>
                      Food: <strong>{item.food_rating}/5</strong>
                    </p>
                    <p>
                      Cleanliness: <strong>{item.cleanliness_rating}/5</strong>
                    </p>
                  </div>

                  {/* COMMENTS */}
                  {item.comments && (
                    <div className="mt-5 border-t border-white/10 pt-4">
                      <p className="text-sm leading-6 text-gray-300">
                        {item.comments}
                      </p>
                    </div>
                  )}

                  <p className="mt-4 text-xs text-gray-500">
                    {new Date(item.created_at).toLocaleString()}
                  </p>

                  {/* ACTIONS */}
                  <div className="mt-5 flex flex-wrap gap-2 border-t border-white/10 pt-4">
                    <button
                      onClick={() => setSelectedFeedback(item)}
                      className="rounded-lg border border-white/20 px-4 py-2 text-sm hover:bg-white/10"
                    >
                      View Details
                    </button>

                    {item.status === "pending" && (
                      <>
                        <button
                          onClick={() => handleApprove(item)}
                          disabled={updatingId === item.id}
                          className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium hover:bg-green-500 disabled:opacity-50"
                        >
                          {updatingId === item.id ? "Saving..." : "Approve"}
                        </button>

                        <button
                          onClick={() => handleReject(item)}
                          disabled={updatingId === item.id}
                          className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium hover:bg-red-500 disabled:opacity-50"
                        >
                          Reject
                        </button>
                      </>
                    )}

                    {item.status === "approved" && (
                      <button
                        onClick={() => handleFeature(item)}
                        disabled={
                          updatingId === item.id ||
                          !item.allow_testimonial
                        }
                        title={
                          !item.allow_testimonial
                            ? "Pelanggan belum memberikan izin testimonial"
                            : ""
                        }
                        className="rounded-lg bg-orange-600 px-4 py-2 text-sm font-medium hover:bg-orange-500 disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        {item.is_featured ? "Unfeature" : "Feature"}
                      </button>
                    )}

                    <button
                      onClick={() => handleDelete(item)}
                      disabled={deletingId === item.id || updatingId === item.id}
                      className="rounded-lg border border-red-500/40 px-4 py-2 text-sm font-medium text-red-400 transition hover:bg-red-500/10 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {deletingId === item.id ? "Deleting..." : "Delete"}
                    </button>
                  </div>

                  {item.status === "approved" &&
                    !item.allow_testimonial && (
                      <p className="mt-3 text-xs text-yellow-500">
                        Pelanggan belum memberikan izin untuk testimonial publik.
                      </p>
                    )}
                </article>
              ))}
            </div>
          )}
        </section>

        {/* REJECTED SUMMARY */}
        <p className="mt-8 text-sm text-gray-500">
          Rejected feedback: {rejectedCount}
        </p>
      </div>

      {/* CUSTOMER DETAILS MODAL */}
      {selectedFeedback && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedFeedback(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="feedback-details-title"
            className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-white/10 bg-[#171717] p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">
                  FUN2 Customer Feedback
                </p>
                <h2
                  id="feedback-details-title"
                  className="mt-2 text-xl font-bold"
                >
                  Customer Details
                </h2>
              </div>

              <button
                onClick={() => setSelectedFeedback(null)}
                aria-label="Close details"
                className="rounded-lg px-3 py-1 text-xl text-gray-400 hover:bg-white/10"
              >
                ×
              </button>
            </div>

            <div className="mt-6 space-y-4 text-sm">
              <div>
                <p className="text-gray-500">Full Name</p>
                <p className="mt-1 font-medium">
                  {selectedFeedback.customer_name}
                </p>
              </div>

              <div>
                <p className="text-gray-500">Email Address</p>
                <p className="mt-1 break-all font-medium">
                  {selectedFeedback.email}
                </p>
              </div>

              <div>
                <p className="text-gray-500">Phone Number</p>
                <p className="mt-1 font-medium">
                  {selectedFeedback.phone}
                </p>
              </div>

              <div>
                <p className="text-gray-500">Branch</p>
                <p className="mt-1 font-medium">
                  {selectedFeedback.branch}
                </p>
              </div>

              <div>
                <p className="text-gray-500">Testimonial Permission</p>
                <p className="mt-1 font-medium">
                  {selectedFeedback.allow_testimonial
                    ? "Customer has given permission"
                    : "Customer has not given permission"}
                </p>
              </div>

              <div>
                <p className="text-gray-500">Feedback Date</p>
                <p className="mt-1 font-medium">
                  {new Date(selectedFeedback.created_at).toLocaleString()}
                </p>
              </div>

              <div>
                <p className="text-gray-500">Current Status</p>
                <p className="mt-1 font-medium capitalize">
                  {selectedFeedback.status}
                </p>
              </div>
            </div>

            <button
              onClick={() => setSelectedFeedback(null)}
              className="mt-7 w-full rounded-lg bg-orange-600 py-3 font-semibold hover:bg-orange-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
