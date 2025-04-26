import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QuoteCard - Crie cards de citações personalizados",
  description:
    "Crie cards personalizados para suas citações favoritas e compartilhe em suas redes sociais, portfólio ou blog.",
  keywords: [
    "quote card",
    "quote",
    "quote card generator",
    "quote card maker",
    "quote card creator",
    "quote card design",
    "quote card template",
    "quote card app",
    "quote card tool",
    "quote card online",
    "quote card free",
    "quote card share",
    "quote card social media",
    "quote card website",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
