import { GoogleAnalytics } from "@next/third-parties/google";

export default function page() {
  return (
    <>
      <GoogleAnalytics gaId="G-2Z643GT8EF" />
      <div className="mx-auto w-full max-w-6xl px-4 py-5 sm:px-6 lg:px-8">
        <main className="mt-16 px-4 md:px-10">
          <div className="flex flex-wrap justify-between gap-4">
            <div className="flex min-w-72 flex-col gap-3">
              <h1 className="text-primary dark:text-primary-dark text-4xl leading-tight font-bold tracking-[-0.033em] sm:text-5xl">
                تواصل معي
              </h1>
              <p className="text-card-foreground dark:text-card-foreground-dark text-base leading-normal font-normal">
                لا تتردد في التواصل. أنا دائماً متاح للحديث عن مشاريع جديدة أو
                فرص إبداعية.
              </p>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="col-span-1 flex flex-col gap-10 lg:col-span-2">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="bg-surface-dark text-primary flex size-12 shrink-0 items-center justify-center rounded-lg">
                    <span className="material-symbols-outlined text-3xl">
                      mail
                    </span>
                  </div>
                  <p className="text-card-foreground dark:text-card-foreground-dark flex-1 truncate text-base leading-normal font-normal">
                    abdulrahman.nashaat@email.com
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-surface-dark text-primary flex size-12 shrink-0 items-center justify-center rounded-lg">
                    <span className="material-symbols-outlined text-3xl">
                      phone
                    </span>
                  </div>
                  <p className="text-card-foreground dark:text-card-foreground-dark flex-1 truncate text-base leading-normal font-normal">
                    +20 123 456 7890
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-surface-dark text-primary flex size-12 shrink-0 items-center justify-center rounded-lg">
                    <span className="material-symbols-outlined text-3xl">
                      location_on
                    </span>
                  </div>
                  <p className="text-card-foreground dark:text-card-foreground-dark flex-1 truncate text-base leading-normal font-normal">
                    القاهرة، مصر
                  </p>
                </div>
              </div>
              <div className="bg-surface-dark h-px w-full"></div>
              <div className="flex items-center gap-4">
                <a
                  className="bg-surface-dark text-text-light/70 hover:bg-primary hover:text-text-dark flex size-12 items-center justify-center rounded-lg transition-colors"
                  href="#"
                ></a>
                <a
                  className="bg-surface-dark text-text-light/70 hover:bg-primary hover:text-text-dark flex size-12 items-center justify-center rounded-lg transition-colors"
                  href="#"
                ></a>
                <a
                  className="bg-surface-dark text-text-light/70 hover:bg-primary hover:text-text-dark flex size-12 items-center justify-center rounded-lg transition-colors"
                  href="#"
                ></a>
              </div>
            </div>
            <div className="col-span-1 lg:col-span-3">
              <form action="#" className="space-y-6" method="POST">
                <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label
                      className="text-text-light/80 block text-sm leading-6 font-medium"
                      htmlFor="name"
                    >
                      الاسم الكامل
                    </label>
                    <div className="mt-2">
                      <input
                        className="bg-muted dark:bg-muted-dark bg-surface-dark text-card-foreground dark:text-card-foreground-dark placeholder:text-text-light/40 focus:ring-primary block w-full rounded-lg border-0 px-4 py-3 shadow-sm ring-1 ring-transparent ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                        id="name"
                        name="name"
                        placeholder="مثال: عبدالرحمن نشأت"
                        type="text"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      className="text-text-light/80 block text-sm leading-6 font-medium"
                      htmlFor="email"
                    >
                      البريد الإلكتروني
                    </label>
                    <div className="mt-2">
                      <input
                        className="bg-muted dark:bg-muted-dark bg-surface-dark text-card-foreground dark:text-card-foreground-dark placeholder:text-text-light/40 focus:ring-primary block w-full rounded-lg border-0 px-4 py-3 shadow-sm ring-1 ring-transparent ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                        id="email"
                        name="email"
                        placeholder="email@example.com"
                        type="email"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    className="text-text-light/80 block text-sm leading-6 font-medium"
                    htmlFor="subject"
                  >
                    الموضوع
                  </label>
                  <div className="mt-2">
                    <input
                      className="bg-surface-dark text-card-foreground dark:text-card-foreground-dark placeholder:text-text-light/40 focus:ring-primary block w-full rounded-lg border-0 px-4 py-3 shadow-sm ring-1 ring-transparent ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                      id="subject"
                      name="subject"
                      placeholder="بخصوص فرصة عمل"
                      type="text"
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="text-text-light/80 block text-sm leading-6 font-medium"
                    htmlFor="message"
                  >
                    الرسالة
                  </label>
                  <div className="mt-2">
                    <textarea
                      className="bg-surface-dark text-card-foreground dark:text-card-foreground-dark placeholder:text-text-light/40 focus:ring-primary block w-full rounded-lg border-0 px-4 py-3 shadow-sm ring-1 ring-transparent ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                      id="message"
                      name="message"
                      placeholder="اكتب رسالتك هنا..."
                    ></textarea>
                  </div>
                </div>
                <div className="flex justify-start">
                  <button
                    className="bg-primary text-text-dark flex h-12 max-w-[480px] min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg px-6 text-base leading-normal font-bold tracking-[0.015em] transition-transform hover:scale-105"
                    type="submit"
                  >
                    <span className="truncate">إرسال الرسالة</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
      {/* 
      <div classNameName="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <div classNameName="layout-container flex h-full grow flex-col">
          <div classNameName="mx-auto w-full max-w-6xl px-4 py-5 sm:px-6 lg:px-8">
            <main classNameName="mt-16 px-4 md:px-10">
              <div classNameName="flex flex-wrap justify-between gap-4">
                <div classNameName="flex min-w-72 flex-col gap-3">
                  <h1 classNameName=" text-primary text-4xl leading-tight font-bold tracking-[-0.033em] sm:text-5xl">
                    تواصل معي
                  </h1>
                  <p classNameName=" text-text-light/70 text-base leading-normal font-normal">
                    لا تتردد في التواصل. أنا دائماً متاح للحديث عن مشاريع جديدة
                    أو فرص إبداعية.
                  </p>
                </div>
              </div>
              <div classNameName="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
                <div classNameName="col-span-1 flex flex-col gap-10 lg:col-span-2">
                  <div classNameName="flex flex-col gap-6">
                    <div classNameName="flex items-center gap-4">
                      <div classNameName="bg-surface-dark text-primary flex size-12 shrink-0 items-center justify-center rounded-lg">
                        <span classNameName="material-symbols-outlined text-3xl">
                          mail
                        </span>
                      </div>
                      <p classNameName=" text-card-foreground dark:text-card-foreground-dark flex-1 truncate text-base leading-normal font-normal">
                        abdulrahman.nashaat@email.com
                      </p>
                    </div>
                    <div classNameName="flex items-center gap-4">
                      <div classNameName="bg-surface-dark text-primary flex size-12 shrink-0 items-center justify-center rounded-lg">
                        <span classNameName="material-symbols-outlined text-3xl">
                          phone
                        </span>
                      </div>
                      <p classNameName=" text-card-foreground dark:text-card-foreground-dark flex-1 truncate text-base leading-normal font-normal">
                        +20 123 456 7890
                      </p>
                    </div>
                    <div classNameName="flex items-center gap-4">
                      <div classNameName="bg-surface-dark text-primary flex size-12 shrink-0 items-center justify-center rounded-lg">
                        <span classNameName="material-symbols-outlined text-3xl">
                          location_on
                        </span>
                      </div>
                      <p classNameName=" text-card-foreground dark:text-card-foreground-dark flex-1 truncate text-base leading-normal font-normal">
                        القاهرة، مصر
                      </p>
                    </div>
                  </div>
                  <div classNameName="bg-surface-dark h-px w-full"></div>
                  <div classNameName="flex items-center gap-4">
                    <a
                      classNameName="bg-surface-dark text-text-light/70 hover:bg-primary hover:text-text-dark flex size-12 items-center justify-center rounded-lg transition-colors"
                      href="#"
                    >
                      <svg
                        aria-hidden="true"
                        classNameName="h-6 w-6"
                        fill="currentColor"
                      >
                        <path
                          clipRule="evenodd"
                          d="M12.624 2.622a.75.75 0 01.376.652v17.452a.75.75 0 01-1.126.652L2.5 12.314a.75.75 0 010-1.303l9.374-9.041a.75.75 0 01.75 0zm-1.148 16.17L3.4 12.313a.25.25 0 010-.434l8.076-7.792v15.01zM14.25 5.51v12.336l7.008-5.719a.75.75 0 000-1.28l-7.008-5.337z"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                    <a
                      classNameName="bg-surface-dark text-text-light/70 hover:bg-primary hover:text-text-dark flex size-12 items-center justify-center rounded-lg transition-colors"
                      href="#"
                    >
                      
                    </a>
                    <a
                      classNameName="bg-surface-dark text-text-light/70 hover:bg-primary hover:text-text-dark flex size-12 items-center justify-center rounded-lg transition-colors"
                      href="#"
                    >
                      <svg
                        aria-hidden="true"
                        classNameName="h-6 w-6"
                        fill="currentColor"
                      >
                        <path d="M21.75 6.75a.75.75 0 00-1.5 0v10.5a.75.75 0 001.5 0V6.75zM16.5 6.75a.75.75 0 00-1.5 0v10.5a.75.75 0 001.5 0V6.75zM12 6.75a.75.75 0 00-1.5 0v10.5a.75.75 0 001.5 0V6.75zM3 6.75a.75.75 0 00-1.5 0v10.5a.75.75 0 001.5 0V6.75zM8.25 6.75a.75.75 0 00-1.5 0v10.5a.75.75 0 001.5 0V6.75z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div classNameName="col-span-1 lg:col-span-3">
                  <form action="#" classNameName="space-y-6" method="POST">
                    <div classNameName="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                      <div>
                        <label
                          classNameName="text-text-light/80 block text-sm leading-6 font-medium"
                          htmlFor="name"
                        >
                          الاسم الكامل
                        </label>
                        <div classNameName="mt-2">
                          <input
                            classNameName="bg-surface-dark text-card-foreground dark:text-card-foreground-dark placeholder:text-text-light/40 focus:ring-primary block w-full rounded-lg border-0 px-4 py-3 shadow-sm ring-1 ring-transparent ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                            id="name"
                            name="name"
                            placeholder="مثال: عبدالرحمن نشأت"
                            type="text"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          classNameName="text-text-light/80 block text-sm leading-6 font-medium"
                          htmlFor="email"
                        >
                          البريد الإلكتروني
                        </label>
                        <div classNameName="mt-2">
                          <input
                            classNameName="bg-surface-dark text-card-foreground dark:text-card-foreground-dark placeholder:text-text-light/40 focus:ring-primary block w-full rounded-lg border-0 px-4 py-3 shadow-sm ring-1 ring-transparent ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                            id="email"
                            name="email"
                            placeholder="email@example.com"
                            type="email"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label
                        classNameName="text-text-light/80 block text-sm leading-6 font-medium"
                        htmlFor="subject"
                      >
                        الموضوع
                      </label>
                      <div classNameName="mt-2">
                        <input
                          classNameName="bg-surface-dark text-card-foreground dark:text-card-foreground-dark placeholder:text-text-light/40 focus:ring-primary block w-full rounded-lg border-0 px-4 py-3 shadow-sm ring-1 ring-transparent ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                          id="subject"
                          name="subject"
                          placeholder="بخصوص فرصة عمل"
                          type="text"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        classNameName="text-text-light/80 block text-sm leading-6 font-medium"
                        htmlFor="message"
                      >
                        الرسالة
                      </label>
                      <div classNameName="mt-2">
                        <textarea
                          classNameName="bg-surface-dark text-card-foreground dark:text-card-foreground-dark placeholder:text-text-light/40 focus:ring-primary block w-full rounded-lg border-0 px-4 py-3 shadow-sm ring-1 ring-transparent ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                          id="message"
                          name="message"
                          placeholder="اكتب رسالتك هنا..."
                        ></textarea>
                      </div>
                    </div>
                    <div classNameName="flex justify-start">
                      <button
                        classNameName="bg-primary text-text-dark flex h-12 max-w-[480px] min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg px-6 text-base leading-normal font-bold tracking-[0.015em] transition-transform hover:scale-105"
                        type="submit"
                      >
                        <span classNameName="truncate">إرسال الرسالة</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </main>
            <footer classNameName="border-surface-dark mt-20 border-t border-solid px-4 py-8 text-center md:px-10">
              <p classNameName=" text-text-light/50 text-sm">
                © 2024 Abdulrahman Nashaat. All Rights Reserved.
              </p>
            </footer>
          </div>
        </div>
      </div> */}
    </>
  );
}
