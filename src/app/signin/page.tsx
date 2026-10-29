
"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const SignInPage = () => {
  const router = useRouter();

  const onSubmit = async (
    e: React.SubmitEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const user = {
      email: String(formData.get("email") ?? ""),
      password: String(formData.get("password") ?? ""),
    };

    try {
      const result = await authClient.signIn.email({
        ...user,
        callbackURL: "/",
      });

      if (result.error) {
        toast.error(
          "সাইন ইন ব্যর্থ হয়েছে! ইমেইল অথবা পাসওয়ার্ড সঠিক নয়।"
        );
        return;
      }

      if (result.data) {
        toast.success("সফলভাবে সাইন ইন হয়েছে! স্বাগতম।");
        router.push("/");
      }
    } catch (error) {
      console.error("সাইন ইন করতে সমস্যা হয়েছে:", error);
      toast.error("দুঃখিত! সাইন ইন করা যায়নি। আবার চেষ্টা করুন।");
    }
  };

 
  return (
    <div className="min-h-screen bg-[#f1f5f0] px-4 py-8">
      <div className="mx-auto w-full max-w-[360px]">
        <div className="mb-5 text-center">
          <h1 className="text-xl font-bold text-[#25352b]">
            সাইন ইন
          </h1>
          <p className="mt-1 text-[16px] text-gray-500">
            বিস্তারিত দাম, বাজার মূল্য ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="w-full rounded-xl border border-[#e1e8e1] bg-[#fbfcfb] p-4"
        >
          <label htmlFor="email" className="block text-[15px] font-medium text-[#26352b]">
            ইমেইল
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-1 h-9 w-full rounded-md border border-[#e2e9e2] bg-transparent px-3 text-sm focus:border-green-600 focus:outline-none"
            placeholder="you@example.com"
          />

          <label htmlFor="password" className="mt-3 block text-[15px] font-medium text-[#26352b]">
            পাসওয়ার্ড
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="current-password"
            className="mt-1 h-9 w-full rounded-md border border-[#e2e9e2] bg-transparent px-3 text-sm focus:border-green-600 focus:outline-none"
            placeholder="আপনার পাসওয়ার্ড লিখুন"
          />

          <button
            type="submit"
            className="btn mt-4 h-10 w-full cursor-pointer rounded-md bg-[#078b43] text-[16px] font-semibold text-white shadow-sm hover:bg-[#067638]"
          >
            সাইন ইন
          </button>

          <div className="my-3 text-center text-sm text-gray-500">
            অথবা
          </div>

          <div className="grid grid-cols-1 gap-2 min-[360px]:grid-cols-2">
            <button
              type="button"
              onClick={() => authClient.signIn.social({ provider: "google", callbackURL: "/" })}
              className=" cursor-pointer rounded-md border border-[#e2e9e2] px-2 py-2 text-xs text-[#26352b] hover:bg-gray-100"
            >
              <span className="font-bold text-blue-500">G</span>{" "}
              Google দিয়ে লগিন হন
            </button>

            <button
              type="button"
              onClick={() => authClient.signIn.social({ provider: "github", callbackURL: "/" })}
              className="cursor-pointer rounded-md border border-[#e2e9e2] px-2 py-2 text-xs text-[#26352b] hover:bg-gray-100"
            >
              GitHub দিয়ে লগিন হন
            </button>
          </div>

          <p className="mt-3 text-center text-sm text-gray-500">
            অ্যাকাউন্ট নেই?{" "}
            <Link
              href="/signup"
              className="font-medium text-green-600 hover:underline"
            >
              সাইন আপ করুন
            </Link>
          </p>
        </form>

        <Link href="/">
          <p className="mt-4 text-center text-[15px] text-gray-400">
            ← হোম পেজে ফিরে যান
          </p>
        </Link>
      </div>
    </div>
  );
};

export default SignInPage;
