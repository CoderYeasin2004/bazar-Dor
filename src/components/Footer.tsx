
const Footer = () => {
  return (
    <footer className="mt-auto w-full border-t border-gray-200 bg-[#eef3ee]">
      <div className="w-full">
        <div className="flex min-h-14 w-full flex-col items-center justify-between bg-[#fafbfa] px-4 py-3 text-center sm:flex-row sm:px-6 sm:text-left">
          <p className="text-[15px] text-gray-600">
            বাজার দর — প্রতিদিনের সঠিক দামের বিশ্বস্ত ঠিকানা।
          </p>

          <p className="text-[15px] text-gray-600">
            সকল তথ্য যাচাই, বাজার অবস্থা এবং দামের পরিবর্তন দেখুন।
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;