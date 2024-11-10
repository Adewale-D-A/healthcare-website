import type { Metadata } from "next";
import { Inter, Jost, Albert_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import FooterMenu from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const jost = Jost({
  // weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: {
    template: "%s | 7thCare",
    default: "7thCare",
  },
  description:
    "Streamline operations, enhance patient care, and maximise efficiency with our custom healthcare automation solutions and personalised guidance from expert advisors.",
  applicationName: "7thCare",
  referrer: "origin-when-cross-origin",
  keywords: ["tekemedicine", "medical app", "health care app", "health"],
  manifest: "https://7thcare.com/manifest.json",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${jost.variable}`}>
        <NavBar />
        {children}
        <FooterMenu />
      </body>
    </html>
  );
}
