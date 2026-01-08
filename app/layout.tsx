import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import LayoutContent from "@/components/layout-content";
import { notFound } from "next/navigation";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Nolte Kuchen Ottenthaler - Ihr offizieller Monostore & Fachhandler",
  description:
    "Willkommen bei Ottenthaler, dem autorisierten Nolte Monostore. Wir bieten exklusive Nolte Küchen, personliche Beratung & professionelle Montage. Ihr Kuchenspezialist - jetzt Inspiration holen & Termin vereinbaren!",
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={`${montserrat.variable} antialiased`}>
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  );
}
