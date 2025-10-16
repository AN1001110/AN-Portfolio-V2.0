"use client";

import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import { useScreenDimensions } from "../../hooks/useScreenDimensions";
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
import { toggleLanguageInServer } from "../../_lib/actions/langAction";
import { useEffect, useState, useTransition } from "react";
import Spinner from "./Spinner";
import { useThemeStore } from "../../_lib/store/useThemeStore";
import { toggleThemeInServer } from "../../_lib/actions/themeAction";
import Button from "@mui/material/Button";
import { usePathname } from "next/navigation";

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

  const [isOpen, setIsOpen] = useState(false);

  const [isPending, startTransition] = useTransition();

  const { lang, setLang } = useLanguageStore();
  const { theme, setTheme } = useThemeStore();
  const t = useTranslations("navBar");

  const [mounted, setMounted] = useState<boolean>(false);

  const param = usePathname();

  const isDark = theme === "dark";

  useEffect(() => {
    if (isDark) document.documentElement.classList.add();
    else document.documentElement.classList.remove("dark");
  }, [isDark]);

  useEffect(() => {
    setMounted(true);
  }, []);

  async function toggleLang() {
    const newLang = lang === "ar" ? "en" : "ar";
    startTransition(async () => {
      try {
        setLang(newLang);
        await toggleLanguageInServer(newLang);
      } catch (error) {
        console.error("Failed to change language:", error);
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
      }
    });
  }

  if (isPending || !mounted) return <Spinner />;
  return (
    <AppBar
      className="bg-background dark:bg-background-dark relative z-[49] border-b-2 border-b-primary/20 dark:border-b-primary-dark/20"
      position="fixed"
      variant="outlined"
    >
      <Toolbar component={"nav"} variant="regular">
        <Stack
          direction={"row"}
          className="flex-1 flex justify-between items-center"
        >
          <Logo
            src={theme === "dark" ? "/Logo-Dark.png" : "/Logo-Light.png"}
            className="block bg-transparent  w-12 h-12 md:w-15 md:h-15  aspect-square "
          />
          <IconButton
            className="block md:hidden"
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          >
            <Bars3Icon
              className={` w-8 h-8 text-muted-foreground dark:text-muted-foreground-dark font-[600] hover:text-primary dark:hover:text-primary-dark `}
            />
          </IconButton>

          <motion.div
            initial={false}
            animate={isOpen || width >= 900 ? "open" : "close"}
            variants={navVariants}
            className={`absolute md:relative left-0 top-[104%] bg-background /70 dark:bg-background-dark/70 md:left-auto md:top-auto md:flex flex-col md:flex-row items-center justify-between w-full md:w-3/4   `}
          >
            <Stack
              className="flex flex-col md:flex-row  items-center 
            justify-between  w-full "
            >
              {pages.map((page) => (
                <MuiLink
                  underline="none"
                  component={Link}
                  href={page.route}
                  key={page.name}
                  className="flex font-[ inherit] w-full justify-center items-center border-b-2 md:border-b-0 p-4 border-b-primary/20 dark:border-b-primary-dark/20   "
                >
                  <Typography
                    fontFamily={"inherit"}
                    className={` text-muted-foreground dark:text-muted-foreground-dark font-[600] hover:text-primary dark:hover:text-primary-dark text-sm  ${
                      param === page.route &&
                      "text-primary dark:text-primary-dark"
                    }`}
                  >
                    {t(page.name)}
                  </Typography>
                </MuiLink>
              ))}
            </Stack>
            <Stack className="flex flex-row flex-1  justify-center md:justify-end items-center p-4 w-full">
              <IconButton
                className="text-muted-foreground dark:text-muted-foreground-dark  flex justify-center items-center  "
                disabled={isPending}
                onClick={toggleTheme}
              >
                {theme === "light" && mounted ? (
                  <MoonIcon className="w-6 h-6 aspect-square text-muted-foreground dark:text-muted-foreground-dark font-[600] hover:text-primary dark:hover:text-primary-dark " />
                ) : (
                  <SunIcon className=" w-7 h-7  text-muted-foreground dark:text-muted-foreground-dark font-[600] hover:text-primary dark:hover:text-primary-dark" />
                )}
              </IconButton>

              <Button
                className=" text-muted-foreground dark:text-muted-foreground-dark font-[600] hover:text-primary  dark:hover:text-primary-dark
                  hover:bg-transparent  ml-[-1rem] "
                disabled={isPending}
                onClick={toggleLang}
              >
                <GlobeAltIcon className="h-6 w-6 " />
                <Typography
                  className="
                 "
                  variant="body2"
                >
                  {mounted && lang === "ar" ? (
                    <span className="font-inter leading-[1.6]">En</span>
                  ) : (
                    <span className="font-cairo leading-[1.8] ">ع</span>
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
