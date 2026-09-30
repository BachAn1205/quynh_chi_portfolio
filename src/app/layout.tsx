import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";
import { ProjectImageProvider } from "@/lib/project-images-context";

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
  themeColor: "#F6F6EE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-[#F6F6EE] text-[#2C2E2B] font-sans antialiased selection:bg-[#335C33] selection:text-[#F6F6EE]">
        <LanguageProvider>
          <ProjectImageProvider>
            {children}
          </ProjectImageProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
