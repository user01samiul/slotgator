"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import { FaExclamationCircle } from "react-icons/fa";
import Link from "next/link";

export default function ResetPasswordForm() {
  const params = useSearchParams();
  const email = params.get("email") || "";
  const token = params.get("token") || "";

  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState("");

  const hasMinLength = password.length >= 6;
  const hasLetter = /[A-Za-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const isValidPassword = hasMinLength && hasLetter && hasNumber;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsPending(true);
    setError("");
    setMessage("");

    try {
      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        body: JSON.stringify({ email, token, password }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      if (res.ok) {
        setMessage(data.message);
      } else {
        setError(data.message || "Failed to reset password. Please try again.");
      }
    } catch {
      setError("Failed to reset password. Please check your connection.");
    } finally {
      setIsPending(false);
    }
  }

  const Check = ({ condition, label }: { condition: boolean; label: string }) => (
    <div className="flex items-center gap-2 text-sm">
      <span className={condition ? "text-green-600" : "text-gray-400"}>
        {condition ? "✅" : "⬜️"}
      </span>
      <span className={condition ? "text-green-600" : "text-gray-500"}>
        {label}
      </span>
    </div>
  );

  return (
    <div className="z-2001 w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Reset Password
        </h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          Enter your new password below
        </p>
      </div>

      {error && (
        <div className="bg-red-50 dark:bg-red-900/50 border border-red-200 dark:border-red-700 rounded-md p-3 flex items-center gap-2 text-red-600 dark:text-red-300 text-sm">
          <FaExclamationCircle />
          <span>{error}</span>
        </div>
      )}

      {message && (
        <div className="bg-green-50 dark:bg-green-900/50 border border-green-200 dark:border-green-700 rounded-md p-3 flex items-center gap-2 text-green-600 dark:text-green-300 text-sm">
          <span>✅</span>
          <span>{message}</span>
        </div>
      )}

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <Label
            htmlFor="password"
            className="text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            New Password
          </Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
          <div className="mt-2 space-y-1 ml-1">
            <Check condition={hasMinLength} label="At least 6 characters" />
            <Check condition={hasLetter} label="Includes a letter (a–z)" />
            <Check condition={hasNumber} label="Includes a number (0–9)" />
          </div>
        </div>

        <button
          type="submit"
          disabled={!isValidPassword || isPending}
          className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-medium rounded-md py-2 px-4 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending ? (
            <CgSpinnerTwoAlt className="animate-spin text-lg" />
          ) : (
            "Reset Password"
          )}
        </button>

        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Back to{" "}
          <Link
            href="/login"
            className="text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
}