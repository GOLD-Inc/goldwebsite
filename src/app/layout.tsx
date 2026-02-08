import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavbarComponent } from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gold Health — Your Health, Reimagined",
  description:
    "Clinical-grade health monitoring meets beautiful design. Track vitals, get AI insights, and integrate seamlessly with Apple Health.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased suppressHydrationWarning bg-[#fafafa]`}
      >
        <ThemeProvider
            defaultTheme="light"
          >

            <NavbarComponent />
            {children}
            <Footer />
            <Analytics />
            <SpeedInsights />

          </ThemeProvider>
      </body>
    </html>
  );
}
