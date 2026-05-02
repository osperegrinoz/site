import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Peregrinoz — Um movimento bíblico",
  description:
    "App, livro e comunidade para quem quer conhecer Jesus de verdade. Uma jornada pelo Evangelho de João. Lançamento: 29 de julho de 2026.",
  openGraph: {
    title: "Peregrinoz — Um movimento bíblico",
    description:
      "Caminhando com Jesus pela Palavra. Um movimento que serve a Igreja sem substituí-la.",
    type: "website",
    locale: "pt_BR",
  },
  metadataBase: new URL("https://peregrinoz.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${cinzel.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
