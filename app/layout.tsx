import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";
import ReactLenis from "lenis/react";
import { CursorProvider } from "@/lib/hooks/useCursorProvider";
import { inter, satoshi, satoshiVariable } from "@/lib/fonts";
import { PageRevealer } from "@/components/animate-components/PageRevealer";
import { JsonLd } from "@/components/JsonLd";
import { PERSON, SITE_URL, personJsonLd, websiteJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Marcos Morua | Desarrollador Full Stack",
    template: "%s | Marcos Morua",
  },
  description:
    "Marcos Adrián Morua Pino (Marcos Morua) es Desarrollador Full Stack especializado en aplicaciones web modernas y construcción de MVPs con JavaScript, React y Next.js. Más de 3 años de experiencia creando soluciones digitales.",
  keywords: [
    "Marcos Morua",
    "Marcos Adrián Morua Pino",
    "Marcos Adrian Morua Pino",
    "Marcos Morua Pino",
    "Portafolio Marcos Morua",
    "Desarrollador Full Stack",
    "Desarrollador Full Stack Argentina",
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "MVP Builder",
    "Desarrollo Web",
    "Puerto Madryn",
    "Argentina",
  ],
  authors: [{ name: PERSON.name, url: SITE_URL }],
  creator: PERSON.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: SITE_URL,
    siteName: "MarcosMorua Portfolio",
    title: "Marcos Morua | Desarrollador Full Stack",
    description:
      "Desarrollador Full Stack especializado en aplicaciones web modernas y construcción de MVPs con JavaScript, React y Next.js.",
    images: [
      {
        url: "/seo-image.jpeg",
        width: 1920,
        height: 1280,
        alt: "Marcos Morua - Desarrollador Full Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcos Morua | Desarrollador Full Stack",
    description:
      "Especialista en Next.js, React y la construcción de productos digitales escalables.",
    images: ["/seo-image.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="es">
        <ReactLenis root>
          <CursorProvider>
            <body
              className={`${inter.variable} ${satoshi.variable} ${satoshiVariable.variable} font-inter bg-background text-foreground antialiased`}
            >
              <JsonLd data={personJsonLd()} />
              <JsonLd data={websiteJsonLd()} />

              <PageRevealer />

              <div>{children}</div>
            </body>
          </CursorProvider>
        </ReactLenis>
      </html>
    </ViewTransitions>
  );
}
