import { SITE_NAME } from "@/constants";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { Sidebar } from "@/components";

const font = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  title: {
    absolute: SITE_NAME,
    template: "%s | " + SITE_NAME,
  },
  description: "Best task app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${font.variable}  antialiased grid grid-cols-[250px_1fr] h-screen`}
      >
        <Sidebar />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
