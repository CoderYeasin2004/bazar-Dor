
"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { toast } from "react-toastify";

const ProfileDetails = () => {
  const { data: session, isPending, refetch } = authClient.useSession();
  const user = session?.user;

  const [name, setName] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("নাম লিখুন!");
      return;
    }

    try {
      setIsUpdating(true);

      const result = await authClient.updateUser({
        name: name.trim(),
      });

      if (result.error) {
        toast.error("তথ্য আপডেট করা যায়নি!");
        return;
      }

      toast.success("সফলভাবে তথ্য আপডেট হয়েছে!");
      setName("");
      await refetch();
    } catch (error) {
      console.error("Profile update error:", error);
      toast.error("তথ্য আপডেট করতে সমস্যা হয়েছে!");
    } finally {
      setIsUpdating(false);
    }
  };

  const handleSignOut = async () => {
    try {
      const result = await authClient.signOut();

      if (result.error) {
        toast.error("লগ আউট করা যায়নি!");
        return;
      }

      toast.success("সফলভাবে লগ আউট হয়েছে!");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("লগ আউট করতে সমস্যা হয়েছে!");
    }
  };

  if (isPending) {
    return (
      <div className="min-h-screen animate-pulse bg-[#f0f5f0]" />
    );
  }

  if (!user) {
    return (
      <main className="min-h-screen bg-[#f0f5f0] px-4 py-10">
        <div className="mx-auto max-w-3xl rounded-xl border border-gray-200 bg-white/70 p-6">
          <h2 className="font-bold text-gray-800">
            আমার প্রোফাইল
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            প্রোফাইল দেখতে সাইন ইন করুন।
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f0f5f0] px-4 py-8 sm:py-10">
      <div className="mx-auto max-w-3xl">
        {/* Page Heading */}
        <div className="mb-4">
          <h1 className="text-xl font-bold text-gray-900">
            আমার প্রোফাইল
          </h1>
          <p className="text-xs text-gray-500">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </p>
        </div>

        {/* Profile Card */}
        <section className="mb-3 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white/70 p-4 sm:p-5">
          <div className="flex min-w-0 items-center gap-3">
            <div className="h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-gray-100">
              <img
                src={user.image || "/default-avatar.png"}
                alt={user.name || "User avatar"}
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const img = e.currentTarget;

                  if (!img.src.endsWith("/default-avatar.png")) {
                    img.src = "/default-avatar.png";
                  }
                }}
              />
            </div>

            <div className="min-w-0">
              <h2 className="truncate text-sm font-semibold text-gray-900">
                {user.name}
              </h2>
              <p className="truncate text-xs text-gray-500">
                {user.email}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleSignOut}
            className=" btn rounded-md border border-red-400 px-3 py-2 text-xs font-medium text-red-500 transition hover:bg-red-50 cursor:pointer "
          >
            ↶ লগ আউট
          </button>
        </section>

        {/* Information Card */}
        <section className="rounded-xl border border-gray-200 bg-white/70 p-4 sm:p-5">
          <h2 className="mb-5 text-sm font-semibold text-gray-800">
            তথ্য
          </h2>

          <form onSubmit={handleUpdate} className="space-y-2">
            <label
              htmlFor="profile-name"
              className="block pl-1 text-xs text-gray-600"
            >
              নাম
            </label>

            <input
              id="profile-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={user.name || "আপনার নাম লিখুন"}
              className="w-full rounded-md border border-gray-200 bg-transparent px-3 py-2 text-sm text-gray-800 outline-none transition focus:border-green-600 focus:ring-1 focus:ring-green-600"
            />

            <button
              type="submit"
              disabled={isUpdating || !name.trim()}
              className="w-full rounded-md bg-green-700 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isUpdating ? "আপডেট হচ্ছে..." : "আপডেট"}
            </button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default ProfileDetails;
