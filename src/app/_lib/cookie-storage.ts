// import { StateStorage } from "zustand/middleware";
// import { getCookie, setCookie, deleteCookie } from "cookies-next";

// // تحديد شكل الكائن الذي سيتعامل معه middleware التخزين
// export const cookieStorage: StateStorage<void> = {
//   getItem: (name: string): string | Promise<string | null> | null => {
//     const value = getCookie(name);
//     if (typeof value === "string") {
//       return value;
//     }
//     return null;
//   },
//   setItem: (name: string, value: string): void => {
//     setCookie(name, value);
//   },
//   removeItem: (name: string): void => {
//     deleteCookie(name);
//   },
// };
