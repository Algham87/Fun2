
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/Lib/Supabase";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError("Email atau password salah.");
      return;
    }

    router.push("/admin/feedback");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#090909] px-5 text-white">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md rounded-2xl border border-white/10 bg-[#171717] p-8"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
          FUN2 Steamboat & Grill
        </p>

        <h1 className="mt-4 text-3xl font-bold">Admin Login</h1>

        <p className="mt-2 text-sm text-gray-400">
          Sign in to manage customer feedback.
        </p>

        <label className="mt-8 block text-sm">Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-2 w-full rounded-lg border border-white/10 bg-[#222] px-4 py-3 outline-none focus:border-orange-500"
          placeholder="Admin email"
        />

        <label className="mt-5 block text-sm">Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-2 w-full rounded-lg border border-white/10 bg-[#222] px-4 py-3 outline-none focus:border-orange-500"
          placeholder="Password"
        />

        {error && (
          <p className="mt-4 text-sm text-red-400">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="mt-7 w-full rounded-lg bg-orange-600 py-3 font-semibold transition hover:bg-orange-500 disabled:opacity-50"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </main>
  );
}
