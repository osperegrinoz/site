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
  title: "Peregrinoz · Um movimento bíblico",
  description:
    "Conhecer Jesus de verdade não precisa ser uma caminhada solitária. Um livro, encontros toda quarta e um app pra caminhar pela Palavra, um capítulo por vez. Bora?",
  keywords: [
    "Jesus",
    "Palavra",
    "Bíblia",
    "movimento bíblico",
    "Peregrinoz",
    "Evangelho de João",
    "estudo bíblico",
    "comunidade cristã",
    "discipulado",
    "Thiago Pastana",
  ],
  openGraph: {
    title: "Peregrinoz · Um movimento bíblico",
    description:
      "Conhecer Jesus de verdade não precisa ser uma caminhada solitária. Um livro, encontros toda quarta e um app. Bora?",
    type: "website",
    locale: "pt_BR",
    siteName: "Peregrinoz",
  },
  twitter: {
    card: "summary_large_image",
    title: "Peregrinoz · Um movimento bíblico",
    description:
      "Conhecer Jesus de verdade não precisa ser uma caminhada solitária. Bora?",
  },
  metadataBase: new URL("https://osperegrinoz.com.br"),
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
