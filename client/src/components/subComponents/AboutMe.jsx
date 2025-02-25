import React from "react";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

function AboutMe() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white" dir="rtl">
      <div className="relative isolate pt-14">
        <svg
          aria-hidden="true"
          className="absolute inset-0 -z-10 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <h1 className="mt-10 text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
              היכרות עם המדריך - יוסף
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
              אני יוסף, מדריך טיולים בן 25, ואני אוהב לגלות עולמות חדשים וליצור
              חוויות בלתי נשכחות ללקוחות שלי. כל סיור שאני מארגן מתוכנן בקפידה
              כדי שתרגישו לא רק תיירים, אלא חלק מהסיפור של המקום. אני מאמין שכל
              סיור הוא לא רק טיול, אלא חוויה שמותירה זיכרון לעד. אני שואף להפוך
              את כל חוויה לטיול אישי ומיוחד שיתאים לכם, עם מקומות קסומים שלא
              תמצאו בשום מדריך תיירים רגיל.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#pricing"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                הזמינו סיור
              </a>
              <a href="/blog" className="text-sm/6 font-semibold text-gray-900">
                לבלוג האישי שלי <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow">
            <img
              alt="Yosef Guide"
              src="https://lh3.googleusercontent.com/pw/AP1GczPnTEjq9anN2UYmw3VOK2P-blp5iho7J79SVEYqK2PI6WWssJxg0pKn6SFJIsHPrte2_gx76CuLBPAuFBJEjtSgzdvRmt178tbNS4EUm7cAlCvGBiwQ_13JhrPDG9JoQQCRsXO_2Iz8S43PCtXt7xEM=w651-h869-s-no-gm?authuser=0"
              className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
