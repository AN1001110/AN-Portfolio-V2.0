"use server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
export async function toggleThemeInServer(theme: string) {
  const store = await cookies();
  store.set("NEXT_THEME", theme);
  revalidatePath("/");
}
