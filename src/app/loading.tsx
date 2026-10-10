
export default function Loading() {
  return (
    <main className="fixed inset-0 z-[9999] flex min-h-screen flex-col items-center justify-center bg-white px-4 text-center">
      <div className="relative flex h-20 w-20 items-center justify-center">
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-green-100 border-t-green-700" />
        <span className="text-3xl">🛒</span>
      </div>

      <h2 className="mt-6 text-2xl font-bold text-green-800">
        বাজার দর
      </h2>

      <p className="mt-2 text-gray-500">
        আপনার তথ্য লোড হচ্ছে...
      </p>

      <div className="mt-4 flex gap-2">
        <span className="h-2 w-2 animate-bounce rounded-full bg-green-700" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-green-700 [animation-delay:150ms]" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-green-700 [animation-delay:300ms]" />
      </div>
    </main>
  );
}
