import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import SmoothScroll from "@/components/layout/SmoothScroll";
import PageLoader from "@/components/animations/PageLoader";
import { ErrorBoundary } from "@/components/layout/ErrorBoundary";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Alex Johnson - Full Stack Developer",
    template: "%s | Alex Johnson",
  },
  description:
    "Personal portfolio showcasing projects and experience in full stack development, React, Next.js, and modern web technologies.",
  keywords: [
    "portfolio",
    "developer",
    "react",
    "nextjs",
    "web development",
    "full stack",
  ],
  authors: [{ name: "Alex Johnson" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Alex Johnson - Full Stack Developer",
    description:
      "Personal portfolio showcasing projects and experience in full stack development",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <SmoothScroll>
            <ErrorBoundary>
              <PageLoader />
              {children}
            </ErrorBoundary>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
