import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import FooterMenu from "@/components/layout/footer";

const spaceGrostesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-space_grostesk",
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
      <body className={`${spaceGrostesk.className} font- font-space_grostesk`}>
        {children}
        <FooterMenu />
      </body>
    </html>
  );
}
