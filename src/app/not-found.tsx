import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="pt-40 pb-28 min-h-[75vh] flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="rounded-3xl border border-[#d6d6d6] bg-[#f5f2eb] blueprint-grid p-12 sm:p-20 shadow-sm">
            <span className="font-mono text-sm font-semibold text-[#d9531e] uppercase tracking-wider block mb-2">
              {"// Error 404"}
            </span>
            <h1 className="font-anton text-7xl sm:text-9xl uppercase tracking-tight text-black mb-6 leading-none">
              404
            </h1>
            <p className="text-lg sm:text-xl text-[#555555] mb-8 leading-relaxed max-w-md mx-auto">
              The page you are looking for doesn’t exist, has been removed, or is temporarily unavailable.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-base font-semibold bg-[#e74723] text-white hover:bg-[#d13a18] transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <Home className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
