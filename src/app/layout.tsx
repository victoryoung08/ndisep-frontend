import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

const inter = Inter_Tight({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "NDIS Exercise Physiology Liverpool | Mobile NDIS Exercise & Personal Training",
  description:
    "University Quailified and No Out of Pocket Charges. We come to you with NDIS Exercise Physiology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
