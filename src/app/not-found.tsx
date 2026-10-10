
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] w-full flex-col items-center justify-center px-4 py-10 text-center sm:min-h-[75vh] sm:px-6">
      {/* Search Icon */}
      <div
        className="flex h-20 w-20 items-center justify-center rounded-full bg-green-50 text-4xl sm:h-24 sm:w-24 sm:text-5xl"
        aria-hidden="true"
      >
        🔍
      </div>

      {/* Error Code */}
      <h1 className="mt-5 text-6xl font-extrabold tracking-tight text-green-700 sm:text-7xl md:text-8xl">
        404
      </h1>

      {/* Error Message */}
      <h2 className="mt-4 max-w-xl text-xl font-bold leading-relaxed text-gray-800 sm:text-2xl md:text-3xl">
        দুঃখিত! পেজটি খুঁজে পাওয়া যায়নি।
      </h2>

      {/* Description */}
      <p className="mt-3 max-w-md text-sm leading-7 text-gray-500 sm:text-base">
        আপনি যে পেজটি খুঁজছেন সেটি সরানো হয়েছে,
        ঠিকানা পরিবর্তন হয়েছে অথবা পেজটি নেই।
      </p>

      {/* Home Button */}
      <Link
        href="/"
        className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg bg-green-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-700 sm:px-6 sm:text-base"
      >
        🏠 হোম পেজে ফিরে যান
      </Link>
    </main>
  );
}
