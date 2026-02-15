import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Abdelhadi Kamal | Full Stack Software Engineer",
  description: "Full Stack Software Engineer specializing in API integration, clean architecture, and modern web applications. Expert in React, Next.js, Spring Boot, and system design.",
  keywords: ["Full Stack Developer", "Software Engineer", "React", "Next.js", "Spring Boot", "API Integration", "Web Development"],
  authors: [{ name: "Abdelhadi Kamal" }],
  creator: "Abdelhadi Kamal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abdelhadikamal.dev",
    title: "Abdelhadi Kamal | Full Stack Software Engineer",
    description: "Full Stack Software Engineer specializing in API integration, clean architecture, and modern web applications.",
    siteName: "Abdelhadi Kamal Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdelhadi Kamal | Full Stack Software Engineer",
    description: "Full Stack Software Engineer specializing in API integration, clean architecture, and modern web applications.",
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
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://abdelhadikamal.dev" />
      </head>
      <body className="min-h-screen antialiased transition-colors duration-300">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
