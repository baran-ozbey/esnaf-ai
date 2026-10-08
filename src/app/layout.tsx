import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Esnaf AI - İşletmen İçin Yapay Zeka",
  description: "Küçük işletmeler için konuşarak mobil uygulama üreten yapay zeka platformu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
