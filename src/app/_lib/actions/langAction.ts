"use server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
export async function toggleLanguageInServer(lang: string) {
  const store = await cookies();
  store.set("NEXT_LOCALE", lang);
  revalidatePath("/");
}
