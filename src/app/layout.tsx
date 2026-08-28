import type { Metadata, Viewport } from "next";
import { Fraunces, Archivo } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { brandConfig } from "@/lib/data/brand";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(brandConfig.siteUrl),
  title: {
    default: `${brandConfig.titleBase} | ${brandConfig.name}`,
    template: `%s | ${brandConfig.name}`,
  },
  description: brandConfig.metaDescription,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: brandConfig.name,
    title: brandConfig.ogTitle,
    description: brandConfig.ogDescription,
    url: brandConfig.siteUrl,
    images: [{ url: brandConfig.ogImage }],
  },
  twitter: {
    card: "summary_large_image",
    title: brandConfig.ogTitle,
    description: brandConfig.ogDescription,
  },
  alternates: {
    canonical: brandConfig.siteUrl,
  },
};

export const viewport: Viewport = {
  themeColor: "#191713",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-AU"
      className={`${fraunces.variable} ${archivo.variable} h-full`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js');`,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-ivory font-sans text-ink antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}