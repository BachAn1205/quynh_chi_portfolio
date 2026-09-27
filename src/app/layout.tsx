import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://quynhchi-portfolio.vercel.app"),
  title: "Phan Hoàng Quỳnh Chi | Economics, Data Science & Circular Innovation",
  description:
    "Curious by nature. Strategic by thought. Driven to create. Bridging the cultural heartbeat of Vietnam's Central Highlands with predictive analytics, economic systems, and circular innovation.",
  keywords: [
    "Phan Hoàng Quỳnh Chi",
    "Quynh Chi",
    "High School for The Gifted VNUHCM",
    "Economics Olympiad",
    "Data Science",
    "CAFLOOP",
    "Central Highlands",
    "Dak Lak",
    "T'rưng",
    "Circular Economy",
    "SPSS Econometrics",
  ],
  icons: {
    icon: "/images/quynhchi/avatar.jpg",
    apple: "/images/quynhchi/avatar.jpg",
  },
  openGraph: {
    title: "Phan Hoàng Quỳnh Chi | Economics, Data Science & Circular Innovation",
    description:
      "Bridging the cultural heartbeat of Vietnam's Central Highlands with predictive analytics, economic systems, and circular innovation.",
    images: ["/images/quynhchi/hero-coffee-farm.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Phan Hoàng Quỳnh Chi | Economics, Data Science & Circular Innovation",
    description:
      "Bridging the cultural heartbeat of Vietnam's Central Highlands with predictive analytics, economic systems, and circular innovation.",
    images: ["/images/quynhchi/hero-coffee-farm.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#ebe6dd",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-[#ebe6dd] text-[#1c1510] font-sans antialiased selection:bg-[#183e2b] selection:text-white">
        {children}
      </body>
    </html>
  );
}
