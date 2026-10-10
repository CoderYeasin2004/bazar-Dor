import React from 'react';

const SignUpPage = () => {
    return (
    <div className="min-h-screen bg-[#f1f5f0] px-4 py-8">
      <div className="mx-auto w-full max-w-[360px]">
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
        <fieldset className="fieldset w-full rounded-xl border border-[#e1e8e1] bg-[#fbfcfb] p-4">
          <label className="label text-[15px] font-medium text-[#26352b]">
            নাম
          </label>
          <input
            type="text"
            className="input h-8 w-full border-[#e2e9e2] bg-transparent text-xs focus:border-green-600 focus:outline-none"
            placeholder="যেমন: রহিম উদ্দিন"
          />

          <label className="label mt-2 text-[15px] font-medium text-[#26352b]">
            ইমেইল
          </label>
          <input
            type="email"
            className="input h-8 w-full border-[#e2e9e2] bg-transparent text-xs focus:border-green-600 focus:outline-none"
            placeholder="you@example.com"
          />

          <label className="label mt-2 text-[15px] font-medium text-[#26352b]">
            পাসওয়ার্ড
          </label>
          <input
            type="password"
            className="input h-8 w-full border-[#e2e9e2] bg-transparent text-xs focus:border-green-600 focus:outline-none"
            placeholder="কমপক্ষে ৬ অক্ষর"
          />

          <label className="label mt-2 text-[15px] font-medium text-[#26352b]">
            পাসওয়ার্ড নিশ্চিত করুন
          </label>
          <input
            type="password"
            className="input h-8 w-full border-[#e2e9e2] bg-transparent text-xs focus:border-green-600 focus:outline-none"
            placeholder="আবার লিখুন"
          />

          <button className="btn mt-3 h-9 min-h-0 w-full border-none bg-[#078b43] text-[16px] font-semibold text-white shadow-sm hover:bg-[#067638]">
            অ্যাকাউন্ট তৈরি করুন
          </button>

          {/* Divider */}
          <div className="divider my-2 text-[14px] text-gray-500">
            অথবা
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-2">
            <button className="btn h-8 min-h-0 border-[#e2e9e2] bg-transparent px-2 text-[12px] font-medium text-[#26352b] hover:bg-gray-100">
              <span className="font-bold text-blue-500">G</span>
              Google দিয়ে লগিন হন
            </button>

            <button className="btn h-8 min-h-0 border-[#e2e9e2] bg-transparent px-2 text-[12px] font-medium text-[#26352b] hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.62 1.22 3.26.93.1-.72.39-1.22.71-1.5-2.5-.29-5.13-1.25-5.13-5.56 0-1.23.44-2.23 1.16-3.02-.12-.29-.5-1.43.11-2.98 0 0 .95-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.08-1.15 3.08-1.15.62 1.55.23 2.69.12 2.98.72.79 1.15 1.79 1.15 3.02 0 4.32-2.64 5.27-5.15 5.55.4.35.76 1.03.76 2.08v3.11c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8Z" />
              </svg>
              GitHub দিয়ে লগিন হন
            </button>
          </div>

          <p className="mt-3 text-center text-[14px] text-gray-500">
            অ্যাকাউন্ট আছে?{" "}
            <a
              href="/signin"
              className="font-medium text-green-600 hover:underline"
            >
              সাইন ইন করুন
            </a>
          </p>
        </fieldset>

        <p className="mt-4 text-center text-[15px] text-gray-400">
          ← হোম পেজে ফিরে যান
        </p>
      </div>
    </div>
  );
}

export default SignUpPage;