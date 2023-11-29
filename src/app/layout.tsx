import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigate from "@/components/Navigate";
import Footer from "@/components/Footer";
import Head from "@/components/Head";
import Background from "@/components/Background";
import AvatarButton from "@/components/AvatarButton";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Head />
        <Navigate />
        {children}
        <AvatarButton />
        <Background />
        <div className="custom"></div>
        <Footer />
      </body>
    </html>
  );
}
