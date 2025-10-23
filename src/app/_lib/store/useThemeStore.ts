// import { createJSONStorage, persist } from "zustand/middleware";
// import { cookieStorage } from "../cookie-storage";
import { create } from "zustand";
import { CookieValueTypes, getCookie } from "cookies-next";

interface ThemeState {
  theme: string | Promise<CookieValueTypes>;
  setTheme: (theme: string) => void;
}
const getDefaultTheme = () => {
  const theme = getCookie("NEXT_THEME");
  if (theme) return theme;
  return "dark"; // Default fallback for SSR
};

export const useThemeStore = create<ThemeState>()((set) => ({
  theme: getDefaultTheme(),
  setTheme: (theme) => {
    set(() => ({
      theme,
    }));
  },
}));
// export const useThemeStore = create<ThemeState>()(
//   persist(
//     (set) => ({
//       theme: getDefaultTheme(),
//       setTheme: (theme) => {
//         set(() => ({
//           theme,
//         }));
//       },
//     }),
//     {
//       name: "NEXT_THEME",
//       storage: createJSONStorage(() => cookieStorage),
//     }
//   )
// );
