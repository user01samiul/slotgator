"use client";
import {  userLogin } from "@/actions/userLogin";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useActionState } from "react";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import { FaExclamationCircle } from "react-icons/fa";

export const LoginClient = () => {
  const [state, formAction, isPending] = useActionState(userLogin, undefined);

  if (state?.success === true) {
    redirect("/dashboard/customer-messages");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4">
      <div className="z-50 w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Sign in to your account
          </p>
        </div>

        {/* Display general error message if no field-specific errors */}
        {state?.errors?.email && !state.errors.password && (
          <div className="bg-red-50 dark:bg-red-900/50 border border-red-200 dark:border-red-700 rounded-md p-3 flex items-center gap-2 text-red-600 dark:text-red-300 text-sm">
            <FaExclamationCircle />
            <span>{state.errors.email[0]}</span>
          </div>
        )}

        <form className="space-y-6" action={formAction}>
          <div>
            <Label
              htmlFor="email"
              className="text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Email Address
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              className="mt-1 w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
            />
            {state?.errors?.email && state.errors.password && (
              <div className="mt-1 flex items-center gap-1 text-red-600 dark:text-red-300 text-sm">
                <FaExclamationCircle />
                <span>{state.errors.email[0]}</span>
              </div>
            )}
          </div>

          <div>
            <Label
              htmlFor="password"
              className="text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Password
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              className="mt-1 w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
            />
            <p className="text-right text-sm text-gray-600 dark:text-gray-300">
              <Link
                href="/forgot-password"
                className="text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                Forgot Password?
              </Link>
            </p>
            {state?.errors?.password && (
              <div className="mt-1 text-red-600 dark:text-red-300 text-sm">
                <ul className="list-disc list-inside">
                  {state.errors.password.map((error) => (
                    <li key={error} className="flex items-center gap-1">
                      <FaExclamationCircle />
                      {error}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-medium rounded-md py-2 px-4 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPending ? (
              <CgSpinnerTwoAlt className="animate-spin text-lg" />
            ) : (
              "Sign In"
            )}
          </button>

          {/* <p className="text-center text-sm text-gray-600 dark:text-gray-300">
            {`Don't have an account?`}{" "}
            <Link
              href="/register"
              className="text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              Register
            </Link>
          </p> */}
        </form>


  
      </div>
    </div>
  );
};
