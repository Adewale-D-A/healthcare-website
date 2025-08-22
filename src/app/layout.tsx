import type { Metadata } from "next";
import { Space_Grotesk, Caveat } from "next/font/google";
import "./globals.css";
import FooterMenu from "@/components/layout/footer";
import StructuredMetaData from "@/components/meta-data/json-led";

const spaceGrostesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-space_grostesk",
});

const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-caveat",
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
  keywords: [
    "healthcare automation",
    "patient care solutions",
    "medical software",
    "healthcare efficiency",
    "7thCare",
  ],
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
      <body
        className={`${spaceGrostesk.className} ${caveat.variable} font-space_grostesk text-sm leading-5 lg:leading-6 text-gray_text-800`}
      >
        <StructuredMetaData />
        {children}
        <FooterMenu />
      </body>
    </html>
  );
}
