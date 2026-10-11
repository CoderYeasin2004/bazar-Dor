
"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { toast } from "react-toastify";

const UserInfo = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    try {
      const result = await authClient.signOut();

      if (result.error) {
        toast.error("লগ আউট করা যায়নি! আবার চেষ্টা করুন।");
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
      <div className="h-10 w-10 animate-pulse rounded-full bg-gray-200" />
    );
  }

  return (
    <div>
      {user ? (
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Google Profile Image */}
          <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-primary ring-offset-2 ring-offset-base-100">
          <Link href='/profile'>
            <img
              src={user.image || "/default-avatar.png"}
              alt={user.name || "User avatar"}
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/default-avatar.png";
              }}
            />
            </Link>
          </div>
          

          {/* User Name */}
          <h2 className="hidden text-sm font-medium text-black sm:block">
            {user.name}
          </h2>

          {/* Sign Out */}
          <button
            onClick={handleSignOut}
            className="btn btn-error btn-sm sm:btn-md"
          >
            লগ আউট
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-1 sm:gap-2">
          <Link
            href="/signin"
            className="rounded-lg px-2 py-2 text-xs font-medium hover:bg-gray-200 sm:px-3 sm:text-sm"
          >
            সাইন ইন
          </Link>

          <Link
            href="/signup"
            className="rounded-lg bg-green-700 px-2 py-2 text-xs font-medium text-white hover:bg-green-600 sm:px-3 sm:text-sm"
          >
            সাইন আপ
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
