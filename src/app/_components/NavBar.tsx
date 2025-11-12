"use client";

import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import { useScreenDimensions } from "../hooks/useScreenDimensions";
// import * as motion from "motion/react-client";
import { motion, Variants } from "motion/react";
import {
  GlobeAltIcon,
  MoonIcon,
  SunIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

import Link from "next/link";
import Logo from "./Logo";
import { useTranslations } from "next-intl";
import { useLanguageStore } from "@/src/app/_lib/store/useLanguageStore";
import { toggleLanguageInServer } from "../_lib/actions/langAction";
import { useEffect, useRef, useState, useTransition } from "react";
import Spinner from "./Spinner";
import { useThemeStore } from "../_lib/store/useThemeStore";
import { toggleThemeInServer } from "../_lib/actions/themeAction";
import Button from "@mui/material/Button";
import { usePathname } from "next/navigation";
import useMounted from "../hooks/useMounted";

const pages = [
  { route: "/", name: "home" },
  { route: "/about", name: "about" },
  { route: "/portfolio", name: "portfolio" },
  { route: "/contact", name: "contact" },
];

const navVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    display: "flex",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  close: {
    opacity: 0,
    y: "-20%",
    transition: { duration: 0.3, ease: "easeInOut" },
    transitionEnd: { display: "none" },
  },
};

export default function NavBar() {
  const { width } = useScreenDimensions();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const [isPending, startTransition] = useTransition();

  const { lang, setLang } = useLanguageStore();
  const { theme, setTheme } = useThemeStore();
  const t = useTranslations("navBar");

  const { isMounted } = useMounted();

  const param = usePathname();

  const isDark: boolean = theme === "dark";

  async function toggleLang() {
    const newLang = lang === "ar" ? "en" : "ar";
    startTransition(async () => {
      try {
        setLang(newLang);
        await toggleLanguageInServer(newLang);
      } catch (error) {
        console.error("Failed to change language:", error);
      } finally {
        if (isOpen) setIsOpen(false);
      }
    });
  }

  async function toggleTheme() {
    startTransition(async () => {
      try {
        const newTheme: "dark" | "light" = isDark ? "light" : "dark";
        await toggleThemeInServer(newTheme);
        setTheme(newTheme);
      } catch (error) {
        console.error("Failed to change theme:", error);
      } finally {
        if (isOpen) setIsOpen(false);
      }
    });
  }
  function handleMenuToggle(e: React.MouseEvent<HTMLButtonElement>): void {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  }

  useEffect(() => {
    function handleScroll(): void {
      if (isOpen) {
        setIsOpen(false);
      }
    }

    function handleClickOutside(event: MouseEvent): void {
      if (
        isOpen &&
        menuRef.current &&
        menuButtonRef.current &&
        !menuRef.current.contains(event.target as HTMLElement) &&
        !menuButtonRef.current.contains(event.target as HTMLElement)
      ) {
        setIsOpen(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  if (isPending || !isMounted) return <Spinner />;
  return (
    <AppBar
      className="bg-background dark:bg-background-dark border-b-primary/20 dark:border-b-primary-dark/20 z-[49] border-b-2"
      position="sticky"
      variant="outlined"
    >
      <Toolbar component={"nav"} variant="dense">
        <Stack
          direction={"row"}
          className="flex flex-1 items-center justify-between"
        >
          <Logo
            src={theme === "dark" ? "/Logo-Dark.png" : "/Logo-Light.png"}
            className="linear block aspect-square h-12 w-12 bg-transparent transition-all duration-150 hover:scale-105 hover:opacity-90 md:h-15 md:w-15"
          />
          <IconButton
            className="block md:hidden"
            onClick={handleMenuToggle}
            disabled={isPending}
            ref={menuButtonRef}
          >
            <Bars3Icon
              className={`text-muted-foreground dark:text-muted-foreground-dark hover:text-primary dark:hover:text-primary-dark h-8 w-8 font-bold`}
            />
          </IconButton>

          <motion.div
            ref={menuRef}
            initial={false}
            animate={isOpen || width >= 768 ? "open" : "close"}
            variants={navVariants}
            className={`bg-background/95 dark:bg-background-dark/95 absolute top-[104%] left-0 w-full flex-col items-center justify-between md:relative md:top-auto md:left-auto md:flex md:w-7/10 md:flex-row`}
          >
            <Stack className="flex w-full flex-2 flex-col items-center justify-between md:flex-row">
              {pages.map((page) => (
                <MuiLink
                  underline="none"
                  component={Link}
                  href={page.route}
                  key={page.name}
                  onClick={() => {
                    if (isOpen) setIsOpen(false);
                  }}
                  className="border-b-primary/20 dark:border-b-primary-dark/20 flex w-full items-center justify-center border-b-2 p-4 md:block md:w-auto md:border-b-0 md:p-0"
                >
                  <Typography
                    className={`text-muted-foreground dark:text-muted-foreground-dark hover:text-primary dark:hover:text-primary-dark after:bg-primary/90 dark:after:bg-primary-dark/90 relative font-[_inherit] after:absolute after:bottom-[-4px] after:left-1/2 after:h-[2px] after:w-0 after:translate-x-[-50%] after:transition-[width] after:duration-300 after:ease-in-out after:content-[''] hover:after:w-full ${
                      param === page.route &&
                      "text-primary dark:text-primary-dark after:w-full"
                    }`}
                  >
                    {t(page.name)}
                  </Typography>
                </MuiLink>
              ))}
            </Stack>
            <Stack className="flex w-full flex-1 flex-row items-center justify-center p-4 md:justify-end">
              <IconButton
                className="text-muted-foreground dark:text-muted-foreground-dark flex items-center justify-center"
                disabled={isPending}
                onClick={toggleTheme}
              >
                {theme === "light" && isMounted ? (
                  <MoonIcon className="text-muted-foreground dark:text-muted-foreground-dark hover:text-primary dark:hover:text-primary-dark aspect-square h-6 w-6 font-bold" />
                ) : (
                  <SunIcon className="text-muted-foreground dark:text-muted-foreground-dark hover:text-primary dark:hover:text-primary-dark h-7 w-7 font-bold" />
                )}
              </IconButton>

              <Button
                className="text-muted-foreground dark:text-muted-foreground-dark hover:text-primary dark:hover:text-primary-dark ml-[-1rem] font-bold hover:bg-transparent"
                disabled={isPending}
                onClick={toggleLang}
              >
                <GlobeAltIcon className="h-6 w-6" />
                <Typography variant="body1">
                  {isMounted && lang === "ar" ? (
                    <span className="font-inter leading-[1.6]">En</span>
                  ) : (
                    <span className="font-cairo leading-[1.8]">ع</span>
                  )}
                </Typography>
              </Button>
            </Stack>
          </motion.div>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
