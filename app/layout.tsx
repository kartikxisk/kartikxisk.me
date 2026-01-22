import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kartik Kumar | Frontend Developer",
  description:
    "Frontend Developer with 3+ years of experience in building scalable web applications, LMS solutions, and e-learning platforms. Specializing in React.js, Next.js, and TypeScript.",
  keywords: [
    "Frontend Developer",
    "React.js",
    "Next.js",
    "TypeScript",
    "LMS Developer",
    "Web Developer",
    "Kartik Kumar",
  ],
  authors: [{ name: "Kartik Kumar" }],
  openGraph: {
    title: "Kartik Kumar | Frontend Developer",
    description:
      "Frontend Developer with 3+ years of experience building scalable web applications and LMS solutions.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kartik Kumar | Frontend Developer",
    description:
      "Frontend Developer with 3+ years of experience building scalable web applications and LMS solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
