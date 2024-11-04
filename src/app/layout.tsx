import type { Metadata } from "next";
import { Inter, Concert_One, Pacifico } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const concert = Concert_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-concert",
});
const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pacifico",
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
      <body
        className={`${inter.className} ${concert.variable} ${pacifico.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
