import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";
import { ProjectImageProvider } from "@/lib/project-images-context";
import { ReviewFeedbackSystem } from "@/components/ui/review-feedback-system";

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
  themeColor: "#FAF7F2",
};

import { Anton, Lexend, Fragment_Mono, Fraunces } from "next/font/google";
import { fetchDatabaseImages } from "@/lib/get-db-images";

const anton = Anton({
  weight: "400",
  subsets: ["latin", "vietnamese"],
  variable: "--font-anton",
  display: "swap",
});

const lexend = Lexend({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin", "vietnamese"],
  variable: "--font-lexend",
  display: "swap",
});

const fragmentMono = Fragment_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin", "vietnamese"],
  variable: "--font-heading",
  display: "swap",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialImages = await fetchDatabaseImages();

  return (
    <html
      lang="en"
      className={`scroll-smooth ${anton.variable} ${lexend.variable} ${fragmentMono.variable} ${fraunces.variable}`}
    >
      <body className="min-h-screen bg-[#FAF7F2] text-[#242220] font-sans antialiased selection:bg-[#7B0323] selection:text-[#FFFFFF]">
        <LanguageProvider>
          <ProjectImageProvider initialImages={initialImages}>
            {children}
            <ReviewFeedbackSystem />
          </ProjectImageProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
