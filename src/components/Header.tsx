"use client";

import Image from "next/image";
import NavLinks from "./NavLinks";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="w-full">
      {/* Top Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between mt-5">
        
        {/* Logo + Text */}
        <div className="flex items-center gap-2">
          <Image
            className="w-10 h-10 bg-green-500 rounded-lg"
            height={40}
            width={40}
            src="/logo-icon.png"
            alt="বাজার দর"
          />

          <div>
            <h2 className="font-extrabold text-lg">বাজার দর</h2>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-2">
          <button className="btn bg-base-100 hover:bg-gray-200 rounded-lg border-0">
            সাইন ইন
          </button>

          <button className="btn bg-green-700 hover:bg-green-400 text-white rounded-lg">
            সাইন আপ
          </button>
        </div>
      </div>

      {/* Navigation */}
      <NavLinks />
    </header>
  );
};

export default Header;