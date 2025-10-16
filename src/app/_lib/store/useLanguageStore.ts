"use client";

import { create } from "zustand";
import { CookieValueTypes, getCookie } from "cookies-next";

interface LanguageState {
  lang: string | Promise<CookieValueTypes>;
  setLang: (lang: "ar" | "en") => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  lang: getCookie("NEXT_LOCALE") || "en",
  setLang: (lang: LanguageState["lang"]) => {
    set({ lang });
  },
}));
