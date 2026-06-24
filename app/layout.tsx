import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SwRegister } from "./sw-register";
import { SuiteBar } from "@leader/marketing-ui";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://leaderops.io"),
  title: "LeaderOps — Your MLM command center",
  description: "LeaderOps reads your comp plan, connects your tools, and tells you exactly who to call and what to do — every single morning.",
  applicationName: "LeaderOps",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "LeaderOps",
    statusBarStyle: "default",
  },
  openGraph: {
    type: "website",
    siteName: "LeaderOps",
    title: "LeaderOps — Your MLM command center",
    description: "LeaderOps reads your comp plan, connects your tools, and tells you exactly who to call and what to do — every morning.",
    url: "https://leaderops.io",
  },
  twitter: {
    card: "summary_large_image",
    title: "LeaderOps — Your MLM command center",
    description: "LeaderOps reads your comp plan, connects your tools, and tells you exactly who to call and what to do — every morning.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d1b2e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SuiteBar appUrl="https://ops.leaderhq.io" />
        {children}
        <SwRegister />
      </body>
    </html>
  );
}
