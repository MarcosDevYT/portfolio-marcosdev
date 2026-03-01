import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";
import ReactLenis from "lenis/react";
import { CursorProvider } from "@/lib/hooks/useCursorProvider";
import { inter, satoshi, satoshiVariable } from "@/lib/fonts";
import { PageRevealer } from "@/components/animate-components/PageRevealer";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-marcosdev.vercel.app"),
  title: {
    default: "Marcos Morua | Desarrollador Full Stack",
    template: "%s | Marcos Morua",
  },
  description:
    "Desarrollador Full Stack especializado en aplicaciones web modernas y construcción de MVPs con JavaScript, React y Next.js. Más de 3 años de experiencia creando soluciones digitales.",
  keywords: [
    "Marcos Morua",
    "Marcos Morua Pino",
    "Desarrollador Full Stack",
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "MVP Builder",
    "Desarrollo Web",
    "Argentina",
  ],
  authors: [
    { name: "Marcos Morua", url: "https://portfolio-marcosdev.vercel.app" },
  ],
  creator: "Marcos Morua",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://portfolio-marcosdev.vercel.app",
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
              <PageRevealer />

              <div>{children}</div>
            </body>
          </CursorProvider>
        </ReactLenis>
      </html>
    </ViewTransitions>
  );
}
