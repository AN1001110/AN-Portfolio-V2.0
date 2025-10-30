import { Cairo, Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { Analytics } from "@vercel/analytics/next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import "./globals.css";
import Header from "./_components/common/Header";
import Footer from "./_components/common/Footer";
import { Suspense } from "react";
import Spinner from "./_components/common/Spinner";
import { cookies } from "next/headers";
import { Viewport } from "next";

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export async function generateMetadata() {
  const store = await cookies();
  const theme = store.get("NEXT_THEME")?.value || "dark";

  return {
    title: { default: "AN", template: "%s | Portfolio" },

    description: "",
    icons: icons.map((icon) => ({
      ...icon,
      url: `/favicon/${theme || "light"}/${icon.url}`,
    })),
  };
}

const cairo = Cairo({
  subsets: ["arabic"],
  display: "block",
  variable: "--cairo",
});
const inter = Inter({
  subsets: ["latin"],
  display: "block",
  variable: "--inter",
});
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const store = await cookies();
  const theme = store.get("NEXT_THEME")?.value || "dark";
  const lang = store.get("NEXT_LOCALE")?.value || "ar";
  const fontDisplayed =
    lang === "ar"
      ? { fontFamily: cairo.style.fontFamily, lineHight: 1.8 }
      : { fontFamily: inter.style.fontFamily, lineHight: 1.6 };
  return (
    <html
      className={`${theme} ${cairo.variable} ${inter.variable} `}
      suppressHydrationWarning
      lang={lang}
      dir={lang === "ar" ? "rtl" : "ltr"}
      style={fontDisplayed}
    >
      <body
        className={`selection:bg-primary dark:selection:bg-primary-dark bg-background dark:bg-background-dark lea flex min-h-screen flex-col selection:text-white`}
      >
        <NextIntlClientProvider>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <Header />
            <Suspense fallback={<Spinner />}>
              {children}
              <Analytics />
            </Suspense>
          </AppRouterCacheProvider>
        </NextIntlClientProvider>
        <Footer />
      </body>
    </html>
  );
}
