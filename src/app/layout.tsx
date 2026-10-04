import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://zong1781.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ZONG — 1781",
    template: "%s · ZONG — 1781",
  },
  description:
    "A serious historical drama in production about the Zong voyage, massacre, and aftermath (1781). They counted cargo. History remembers people.",
  openGraph: {
    type: "website",
    locale: "en",
    title: "ZONG — 1781",
    description:
      "A serious historical drama in production about the Zong voyage, massacre, and aftermath. They counted cargo. History remembers people.",
    url: SITE_URL,
    siteName: "ZONG 1781",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "ZONG · 1781 — a serious historical drama in production.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZONG — 1781",
    description:
      "A serious historical drama in production about the Zong voyage, massacre, and aftermath. They counted cargo. History remembers people.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
