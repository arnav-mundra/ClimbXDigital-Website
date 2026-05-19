import type { Metadata } from "next";
import { Great_Vibes, Inter, Raleway } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/layout/SiteShell";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ClimbXDigital - Performance Digital Marketing Agency | Nagpur",
  description:
    "ClimbXDigital is a results-driven digital marketing agency based in Nagpur, India. We help brands grow through performance marketing, SEO, social media, and brand strategy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${raleway.variable} ${greatVibes.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0A0A0A] text-white">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
