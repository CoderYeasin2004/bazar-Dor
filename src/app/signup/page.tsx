"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const SignUpPage = () => {
  const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      image: string;
      password: string;
    };

    const { data, error } = await authClient.signUp.email({
      ...user,
      callbackURL: "/",
    });

    if (data) {
      console.log("অ্যাকাউন্ট সফলভাবে তৈরি হয়েছে:", data);

      toast.success("আপনার অ্যাকাউন্ট সফলভাবে তৈরি হয়েছে!");
      redirect("/");
    }

    if (error) {
      toast.error(
        "এই ইমেইলটি ইতিমধ্যে ব্যবহার করা হয়েছে। অন্য একটি ইমেইল ব্যবহার করুন!",
      );
    }

   

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (password.length < 6) {
      toast.error("পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে।");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("দুটি পাসওয়ার্ড মিলছে না।");
      return;
    }
  
    console.log({ name, email, password });
  };
   const handleGoogleSignin = async() => {
      const data = await authClient.signIn.social({
        provider: "google",
      });
      console.log(data)
    };
   const handleGithubSignin = async() => {
      const data = await authClient.signIn.social({
        provider: "github",
      });
      console.log(data)
    };

  return (
    <div className="min-h-screen bg-[#f1f5f0] px-4 py-8">
      <div className="mx-auto w-full max-w-90">
        {/* Heading */}
        <div className="mb-5 text-center">
          <h1 className="text-xl font-bold text-[#25352b]">
            অ্যাকাউন্ট তৈরি করুন
          </h1>
          <p className="mt-1 text-[16px] text-gray-500">
            বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
          </p>
        </div>

        {/* Registration Form */}
        <form
          onSubmit={onSubmit}
          className="fieldset w-full rounded-xl border border-[#e1e8e1] bg-[#fbfcfb] p-4"
        >
          <label
            htmlFor="name"
            className="label text-[15px] font-medium text-[#26352b]"
          >
            নাম
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="input h-8 w-full border-[#e2e9e2] bg-transparent text-xs focus:border-green-600 focus:outline-none"
            placeholder="যেমন: রহিম উদ্দিন"
          />

          <label
            htmlFor="email"
            className="label mt-2 text-[15px] font-medium text-[#26352b]"
          >
            ইমেইল
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="input h-8 w-full border-[#e2e9e2] bg-transparent text-xs focus:border-green-600 focus:outline-none"
            placeholder="you@example.com"
          />

          <label
            htmlFor="password"
            className="label mt-2 text-[15px] font-medium text-[#26352b]"
          >
            পাসওয়ার্ড
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            minLength={6}
            autoComplete="new-password"
            className="input h-8 w-full border-[#e2e9e2] bg-transparent text-xs focus:border-green-600 focus:outline-none"
            placeholder="কমপক্ষে ৬ অক্ষর"
          />

          <label
            htmlFor="confirmPassword"
            className="label mt-2 text-[15px] font-medium text-[#26352b]"
          >
            পাসওয়ার্ড নিশ্চিত করুন
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            required
            minLength={6}
            autoComplete="new-password"
            className="input h-8 w-full border-[#e2e9e2] bg-transparent text-xs focus:border-green-600 focus:outline-none"
            placeholder="আবার লিখুন"
          />

          <button
            type="submit"
            className="btn mt-3 h-9 min-h-0 w-full border-none bg-[#078b43] text-[16px] font-semibold text-white shadow-sm hover:bg-[#067638]"
          >
            অ্যাকাউন্ট তৈরি করুন
          </button>

          {/* Divider */}
          <div className="divider my-2 text-[14px] text-gray-500">অথবা</div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-2">
            <button onClick={handleGoogleSignin}
              type="button"
              className="btn h-8 min-h-0 border-[#e2e9e2] bg-transparent px-2 text-[12px] font-medium text-[#26352b] hover:bg-gray-100"
            >
              <span className="font-bold text-blue-500">G</span>
              Google দিয়ে লগিন হন
            </button>

            <button
            onClick={handleGithubSignin}
              type="button"
              className="btn h-8 min-h-0 border-[#e2e9e2] bg-transparent px-2 text-[12px] font-medium text-[#26352b] hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.62 1.22 3.26.93.1-.72.39-1.22.71-1.5-2.5-.29-5.13-1.25-5.13-5.56 0-1.23.44-2.23 1.16-3.02-.12-.29-.5-1.43.11-2.98 0 0 .95-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.08-1.15 3.08-1.15.62 1.55.23 2.69.12 2.98.72.79 1.15 1.79 1.15 3.02 0 4.32-2.64 5.27-5.15 5.55.4.35.76 1.03.76 2.08v3.11c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8Z" />
              </svg>
              GitHub দিয়ে লগিন হন
            </button>
          </div>

          <p className="mt-3 text-center text-[14px] text-gray-500">
            অ্যাকাউন্ট আছে?{" "}
            <Link
              href="/signin"
              className="font-medium text-green-600 hover:underline"
            >
              সাইন ইন করুন
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

export default SignUpPage;
