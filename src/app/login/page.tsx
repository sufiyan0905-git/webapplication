"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormValues, loginSchema } from "@/schema/loginSchema";
import { login } from "@/services/auth.service";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useSetAtom } from "jotai";
import { authUserAtom } from "@/store/authAtoms";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const setAuthUser = useSetAtom(authUserAtom);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      const result = await login(data);

      setAuthUser({
        userId: result.userId,
        email: result.email,
        role: result.role,
      });
      router.push("/dashboard");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(
          error.response?.data?.message ?? "Login failed"
        );
      } else {
        console.error("An unexpected error occurred");
      }
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="mb-2 text-center text-3xl font-bold text-gray-900">
          Welcome Back
        </h1>

        <p className="mb-8 text-center text-gray-500">
          Sign in to your account
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>

            <input
              id="email"
              type="email"
              autoComplete="username"
              placeholder="you@example.com"
              {...register("email")}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Password
            </label>

            <div className="flex rounded-lg border border-gray-300 focus-within:border-blue-500">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder="Enter your password"
                {...register("password")}
                className="w-full rounded-lg px-4 py-3 outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword((value) => !value)}
                className="px-3 text-sm text-blue-600"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {errors.password && (
              <p className="mt-1 text-sm text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </main>
  );
}
