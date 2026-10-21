import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#FF5500",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "FreedConn Venezuela 🇻🇪 | Intercomunicadores Bluetooth Oficiales para Cascos",
  description: "Tienda Oficial de Intercomunicadores FreedConn en Venezuela impulsada por @kounahk650. Resistentes a lluvias torrenciales (IP65/IP67), batería de 28h y cancelación de ruido. Envíos rápidos por Zoom, MRW y Tealca.",
  keywords: [
    "intercomunicadores moto venezuela",
    "freedconn venezuela",
    "kounahk650",
    "intercomunicador casco bluetooth caracas",
    "freedconn fx pro venezuela",
    "freedconn r3 camara 2k",
    "freedconn t-com sc venezuela",
    "intercomunicadores maracaibo valencia mrw zoom"
  ],
  authors: [{ name: "FreedConn Venezuela & @kounahk650" }],
  openGraph: {
    title: "FreedConn Venezuela 🇻🇪 | Domina cada ruta sin perder la conexión",
    description: "Intercomunicadores Bluetooth oficiales para cascos de motociclistas. Probados en las rutas más extremas por @kounahk650. Envíos nacionales en 24h.",
    url: "https://freedconn.ve",
    siteName: "FreedConn Venezuela",
    locale: "es_VE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FreedConn Venezuela | Intercomunicadores para Motociclistas",
    description: "Intercomunicadores Bluetooth oficiales con garantía directa en Venezuela.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}>
      <body className="min-h-screen bg-freedconn-black text-zinc-100 flex flex-col selection:bg-freedconn-orange selection:text-white">
        {children}
      </body>
    </html>
  );
}
