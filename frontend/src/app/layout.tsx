import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import { AuthProvider } from "@/context/AuthContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Amusement Hub - Your Ultimate Entertainment Guide",
  description: "Discover the best    amusement parks, attractions, and entertainment venues near you.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <AuthProvider>
          <Header />
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            {children}
          </div>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
