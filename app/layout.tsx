import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; 
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppWidget } from "@/components/WhatsAppWidget"; // ← NUEVO
import { CartProvider } from "@/lib/CartContext"; // ← NUEVO

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Farma Rebajas - Salud a tu alcance",
  description: "Tu farmacia en línea con las mejores rebajas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-gray-100`}>
        <CartProvider> {/* ← NUEVO: Envuelve todo */}
          <Header /> 
          {children} 
          <Footer /> 
          <WhatsAppWidget />
        </CartProvider>
      </body>
    </html>
  );
}