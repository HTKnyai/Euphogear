import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

export const metadata: Metadata = {
  title: "Euphogear",
  description: "人々を幸せにするシステムを作る",
  metadataBase: new URL("https://euphogear.web.app"),
  openGraph: {
    title: "Euphogear",
    description: "人々を幸せにするシステムを作る",
    url: "https://euphogear.web.app",
    siteName: "Euphogear",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Euphogear",
    description: "人々を幸せにするシステムを作る",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-dvh bg-white text-gray-900 antialiased">
        <SiteHeader />
        <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}