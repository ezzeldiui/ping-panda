import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@components/providers";
import { cn } from "@lib/utils";

import "@styles/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Ping Panda",
  description: "realtime saas insights",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(inter.variable)}>
      <body className="bg-brand-50 font-sans text-brand-950 antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
