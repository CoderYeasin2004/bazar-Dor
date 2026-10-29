"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { toast } from "react-toastify";

const UserMenu = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const [show, setShow] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSignOut = async () => {
    try {
      const result = await authClient.signOut();

      if (result.error) {
        toast.error("লগ আউট করা যায়নি!");
        return;
      }

      setShow(false);
      toast.success("সফলভাবে লগ আউট হয়েছে!");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("লগ আউট করতে সমস্যা হয়েছে!");
    }
  };

  if (isPending) {
    return <div className="h-9 w-20 animate-pulse rounded-lg bg-gray-100" />;
  }

  if (!user) {
    return (
      <div className="flex items-center gap-2">
        <Link
          href="/signin"
          className="rounded-lg px-3 py-2 text-sm hover:bg-gray-100"
        >
          সাইন ইন
        </Link>

        <Link
          href="/signup"
          className="rounded-lg bg-green-700 px-3 py-2 text-sm text-white hover:bg-green-800"
        >
          সাইন আপ
        </Link>
      </div>
    );
  }

  return (
    <div className="relative" ref={menuRef}>
      <button
        type="button"
        onClick={() => setShow((prev) => !prev)}
        aria-expanded={show}
        aria-label="Open user menu"
        className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-gray-100"
      >
        <img
          src={user.image || "/default-avatar.png"}
          alt={user.name || "User avatar"}
          className="h-8 w-8 rounded-full object-cover"
          referrerPolicy="no-referrer"
          onError={(e) => {
            const img = e.currentTarget;
            if (!img.src.endsWith("/default-avatar.png")) {
              img.src = "/default-avatar.png";
            }
          }}
        />

        <span className="max-w-24 truncate text-sm text-gray-800">
          {user.name?.split(" ")[0] || "ব্যবহারকারী"}
        </span>

        <span className="text-xs text-gray-500">{show ? "▴" : "▾"}</span>
      </button>

      {show && (
        <div className="absolute right-0 top-full z-50 mt-2 w-64 rounded-xl border border-gray-200 bg-white p-2 shadow-lg">
          <div className="border-b border-gray-100 px-3 py-3">
            <p className="truncate text-sm font-semibold text-gray-800">
              {user.name}
            </p>
            <p className="truncate text-xs text-gray-500">{user.email}</p>
          </div>

          <Link
            href="/profile"
            onClick={() => setShow(false)}
            className="mt-1 flex cursor-pointer items-center gap-3 rounded-lg border border-transparent px-3 py-2.5 text-sm text-gray-700 transition-all duration-200 hover:border-green-600 hover:bg-green-50 hover:outline hover:outline-1 hover:outline-green-600"
          >
            <span>👤</span>
            <span>আমার প্রোফাইল</span>
          </Link>

          <button
            type="button"
            onClick={handleSignOut}
            className="flex w-full cursor-pointer items-center gap-3 rounded-lg border border-transparent px-3 py-2.5 text-left text-sm text-red-600 transition-all duration-200 hover:border-red-500 hover:bg-red-50 hover:outline hover:outline-1 hover:outline-red-500"
          >
            <span>↪</span>
            <span>সাইন আউট</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
