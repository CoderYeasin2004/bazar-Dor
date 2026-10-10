import type { Metadata } from "next";
import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import { Suspense } from "react";
import NavLinks from "@/components/NavLinks";
import Marquee from "@/components/Marquee";
import Footer from "@/components/Footer";
import HeaderSkeleton from "@/components/skeletons/HeaderSkeleton";
import MarqueeSkeleton from "@/components/skeletons/MarqueeSkeleton";

const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["latin", "bengali"],
});

export const metadata: Metadata = {
  title: "Bazar Dor",
  description: "বাংলাদেশের নিত্যপ্রয়োজনীয় পণ্যের দৈনিক বাজারদর জানুন।",
  icons: "/logo-icon.png",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="bn"
      data-theme="light"
      className={`${notoSerifBengali.className} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Suspense fallback={<HeaderSkeleton/>}>
          <Header />
        </Suspense>

        <Suspense fallback={null}>
          <NavLinks />
        </Suspense>

       <Suspense
  fallback={
    <>
      <div className="h-8 w-full" />
      <MarqueeSkeleton />
    </>
  }
>
  <Marquee />
</Suspense>

        <main className="w-full flex-1">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
