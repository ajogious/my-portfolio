import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import SmoothScroll from "@/components/layout/SmoothScroll";
import PageLoader from "@/components/animations/PageLoader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Your Name - Portfolio",
  description: "Personal portfolio showcasing projects and experience",
  keywords: ["portfolio", "developer", "react", "nextjs", "web development"],
  authors: [{ name: "Your Name" }],
  viewport: "width=device-width, initial-scale=1",
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
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <SmoothScroll>
            <PageLoader />
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
