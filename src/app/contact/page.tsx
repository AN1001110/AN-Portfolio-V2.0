import { GoogleAnalytics } from "@next/third-parties/google";
import ContactHome from "../_pages/contact/ContactHome";
import ContactLinks from "../_pages/contact/ContactLinks";
import ContactForm from "./ContactForm";

export default function page() {
  return (
    <>
      <GoogleAnalytics gaId="G-2Z643GT8EF" />
      <div className="mx-auto w-full max-w-6xl px-4 py-5 sm:px-6 lg:px-8">
        <main className="mt-16 px-4 md:px-10">
          <ContactHome />
          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
            <ContactLinks />
            <ContactForm />
          </div>
        </main>
      </div>
    </>
  );
}
