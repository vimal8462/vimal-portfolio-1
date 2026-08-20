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
  // metadataBase: new URL("https://vimal-portfolio.vercel.app"),
  metadataBase: new URL("https://vimal.itdivine.com"),
  title: {
    default:
      "Vimal Kumar | Senior .NET Engineer & Software Development Manager",
    template: "%s | Vimal Kumar",
  },
  description:
    "Vimal Kumar is a Senior .NET Engineer and Software Development Manager with 10+ years of experience in enterprise software, .NET, API engineering, ERP, LMS, solution architecture, technical leadership, and AI-assisted development",
  keywords: [
    "Vimal Kumar",
    "Vimal Kumar .NET Engineer",
    "Vimal Kumar Software Development Manager",
    "Senior .NET Engineer",
    "Software Development Manager",
    ".NET Engineer India",
    ".NET 8",
    "ASP.NET Core",
    "Web API",
    "REST API",
    "Blazor",
    "Microservices",
    "Enterprise Software",
    "Solution Architecture",
    "Technical Leadership",
    "AI-Assisted Development",
    "ERP Software",
    "LMS Software",
  ],
  authors: [{ name: "Vimal Kumar", url: "https://vimal.itdivine.com" }],
  creator: "Vimal Kumar",
  publisher: "Vimal Kumar",
  alternates: {
    canonical: "https://vimal.itdivine.com",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    // url: "https://vimal-portfolio.vercel.app",
    url: "https://vimal.itdivine.com",
    siteName: "Vimal Kumar | Software Engineering Portfolio",
    title: "Vimal Kumar | Senior .NET Engineer & Software Development Manager",
    description:
      "Portfolio of Vimal Kumar — Senior .NET Engineer and Software Development Manager specializing in enterprise .NET, API engineering, ERP, LMS, solution architecture, technical leadership, and AI-assisted development.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vimal Kumar — Senior .NET Engineer & Software Development Manager",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vimal Kumar | Senior .NET Engineer & Software Development Manager",
    description:
      "Senior .NET Engineer and Software Development Manager specializing in enterprise software, APIs, architecture, ERP, LMS, and AI-assisted development.",
    images: ["/og-image.jpg"],
  },
  category: "technology",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
