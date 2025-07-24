
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState(null);
  const [justLoggedIn, setJustLoggedIn] = useState(false); // NEW
  const { login, loading, error, setError, user } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    try {
      await login(email, password);
      setSuccessMessage("Login successful! Redirecting...");
      setJustLoggedIn(true); // Trigger redirect
    } catch (err) {
      console.error("Login error:", err);
      setError("Invalid login credentials");
    }
  };

  useEffect(() => {
    if (justLoggedIn && user) {
      if (user.role === "admin") {
        router.push("/admin/dashboard");
      } else {
        router.push("/pages/ReservationTable");
      }
    }
  }, [user, justLoggedIn, router]);

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundImage: "url('/gallery/f1.jpg')" }}
    >
      <div className="relative bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <button
          onClick={() => router.back()}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-semibold mb-6 text-center text-black">Sign In</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-950"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-50"
            required
          />

          {error && <p className="text-red-600 text-sm">{error}</p>}
          {successMessage && <p className="text-green-600 text-sm">{successMessage}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-2 border border-black rounded-xl bg-amber-400 text-white hover:bg-amber-800 transition"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>

          <p className="text-sm text-center mt-2">Don't have an account?</p>
          <div className="text-center text-amber-500">
            <Link href="/pages/register">Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;

