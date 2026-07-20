import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MotionProvider } from "@/components/animations/motion-provider";
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
  metadataBase: new URL("https://vimal-portfolio.vercel.app"),
  title: {
    default: "Vimal Kumar | Manager - Software Development",
    template: "%s | Vimal Kumar",
  },
  description:
    "Premium engineering portfolio for Vimal Kumar, a Manager - Software Development and Senior .NET Engineering Professional with 11+ years building .NET 8, API, ERP, LMS, dashboards, workflows, and AI-assisted software delivery.",
  keywords: [
    "Vimal Kumar",
    "Manager Software Development",
    "Senior .NET Engineer",
    ".NET 8",
    "Blazor",
    "Next.js portfolio",
    "Enterprise software",
    "AI-assisted development",
  ],
  authors: [{ name: "Vimal Kumar" }],
  openGraph: {
    title: "Vimal Kumar | Manager - Software Development",
    description:
      "Enterprise .NET software, API architecture, ERP, LMS, dashboards, workflow platforms, and AI-assisted engineering.",
    url: "https://vimal-portfolio.vercel.app",
    siteName: "Vimal Kumar Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
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
      <body className="min-h-full bg-[#050816] text-slate-50 selection:bg-sky-300 selection:text-slate-950">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
