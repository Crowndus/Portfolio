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

const title = "Stephen Mathenge Kisangi | AI Engineer & Founder";
export const metadata: Metadata = {
  metadataBase: new URL("https://stephenkisangi.vercel.app"),
  title,
  description: "AI Engineer, founder of Edurown, and CMU Africa MSEAI '26. Building at the intersection of AI, education, and applied data.",
  openGraph: { title, description: "Founder of Edurown. CMU Africa-bound. First-Class Honours in IT.", url: "https://stephenkisangi.vercel.app", siteName: "Stephen Kisangi", locale: "en_US", type: "website" },
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
