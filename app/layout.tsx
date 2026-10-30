import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ImageGuard } from "@/components/ImageGuard";
import { Preloader } from "@/components/Preloader";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-poppins" });
const jb = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jb" });

const title = "Stephen Mathenge Kisangi | Technologist & Founder";
export const metadata: Metadata = {
  metadataBase: new URL("https://crowndus.vercel.app"),
  title,
  description: "Technologist and founder of Edurown. First-Class Honours in Information Technology. Building across applied AI, data, education, and community impact.",
  openGraph: { title, description: "Technologist and founder. First-Class Honours in Information Technology.", url: "https://crowndus.vercel.app", siteName: "Stephen Kisangi", locale: "en_US", type: "website" },
  twitter: { card: "summary_large_image", creator: "@crowndus" },
};
export const viewport: Viewport = { themeColor: "#f5f6fb", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${poppins.variable} ${inter.variable} ${jb.variable}`}>
      <head><script dangerouslySetInnerHTML={{ __html: `try{if(localStorage.getItem("theme")==="dark")document.documentElement.classList.add("dark")}catch(e){}` }} /></head>
      <body><ImageGuard /><Preloader />{children}<Analytics /><SpeedInsights /></body>
    </html>
  );
}
