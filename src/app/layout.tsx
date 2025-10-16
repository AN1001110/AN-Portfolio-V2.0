import { Cairo, Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import "./globals.css";
import Header from "./_components/common/Header";
import Footer from "./_components/common/Footer";
import { Suspense } from "react";
import Spinner from "./_components/common/Spinner";
import { cookies } from "next/headers";

const cairo = Cairo({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-cairo",
});
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const icons = [
  {
    url: "/favicon.ico",
    rel: "icon",
  },
  {
    url: "/favicon-16x16.png",
    sizes: "16x16",
    type: "image/png",
  },
  {
    url: "/favicon-32x32.png",
    sizes: "32x32",
    type: "image/png",
  },
  {
    url: "/android-chrome-192x192.png",
    sizes: "192x192",
    type: "image/png",
  },
  {
    url: "/android-chrome-512x512.png",
    sizes: "512x512",
    type: "image/png",
  },

  {
    url: "/apple-touch-icon.png",
    sizes: "180x180",
  },
];

export async function generateMetadata() {
  const store = await cookies();
  const theme = store.get("NEXT_THEME")?.value === "dark" ? "dark" : "";

  return {
    title: { default: "AN", template: "%s | Portfolio" },
    description: "",
    icons: icons.map((icon) => ({
      ...icon,
      url: `/favicon/${theme || "light"}/${icon.url}`,
    })),
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const store = await cookies();
  const theme = store.get("NEXT_THEME")?.value === "dark" ? "dark" : "";
  const lang = store.get("NEXT_LOCALE")?.value || "en";
  const fontDisplayed =
    lang === "ar"
      ? { fontFamily: cairo.style.fontFamily, lineHeight: 1.8 }
      : { fontFamily: inter.style.fontFamily, lineHeight: 1.6 };
  return (
    <html
      className={`${theme}  ${cairo.variable} ${inter.variable}`}
      suppressHydrationWarning
      lang={lang}
      dir={lang === "ar" ? "rtl" : "ltr"}
      style={fontDisplayed}
    >
      <body
        className={`font-base flex flex-col min-h-screen bg-background dark:bg-background-dark
        `}
      >
        <NextIntlClientProvider>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <Header />
            <Suspense fallback={<Spinner />}>{children}</Suspense>
          </AppRouterCacheProvider>
        </NextIntlClientProvider>
        <Footer />
      </body>
    </html>
  );
}
