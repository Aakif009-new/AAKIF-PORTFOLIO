import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { ClientShell } from "@/components/ClientShell";
import { themeInitScript } from "@/lib/theme";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aakif.dev"),
  title: {
    default: "S. Mohammed Aakif | Full Stack Developer",
    template: "%s | S. Mohammed Aakif",
  },
  description:
    "Full Stack Developer & BCA Student passionate about building modern web applications with cutting-edge technologies. Specializing in React, Next.js, TypeScript, and Java.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Java",
    "Web Developer",
    "BCA",
    "Portfolio",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: "S. Mohammed Aakif" }],
  creator: "S. Mohammed Aakif",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aakif.dev",
    siteName: "S. Mohammed Aakif Portfolio",
    title: "S. Mohammed Aakif | Full Stack Developer",
    description:
      "Full Stack Developer & BCA Student building modern web applications with React, Next.js, and TypeScript.",
    images: [
      {
        url: "/apple-icon.svg",
        width: 180,
        height: 180,
        alt: "S. Mohammed Aakif",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "S. Mohammed Aakif | Full Stack Developer",
    description:
      "Full Stack Developer & BCA Student building modern web applications.",
    images: ["/apple-icon.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <AnimatedBackground />
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
