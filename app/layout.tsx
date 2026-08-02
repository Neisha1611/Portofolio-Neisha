import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Neisha Qonita Nurul Izzah — Portofolio",
  description:
    "Portofolio Neisha Qonita Nurul Izzah, mahasiswa Sistem Informasi Universitas Jember.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${sora.variable} ${inter.variable} scroll-smooth antialiased`}>
      <body>{children}</body>
    </html>
  );
}
