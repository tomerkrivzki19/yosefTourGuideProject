import React from "react";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/20/solid";
import Hero from "./subComponents/Hero";
import AboutMe from "./subComponents/AboutMe";
import Reviews from "./subComponents/Reviews";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];
const features = [
  {
    name: "Push to deploy",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    icon: LockClosedIcon,
  },
  {
    name: "Simple queues",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    icon: ArrowPathIcon,
  },
  {
    name: "Advanced security",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: FingerPrintIcon,
  },
];
const tiers = [
  {
    name: "Freelancer",
    id: "tier-freelancer",
    href: "#",
    priceMonthly: "$19",
    description: "The essentials to provide your best work for clients.",
    features: [
      "5 products",
      "Up to 1,000 subscribers",
      "Basic analytics",
      "48-hour support response time",
    ],
    mostPopular: false,
  },
  {
    name: "Startup",
    id: "tier-startup",
    href: "#",
    priceMonthly: "$49",
    description: "A plan that scales with your rapidly growing business.",
    features: [
      "25 products",
      "Up to 10,000 subscribers",
      "Advanced analytics",
      "24-hour support response time",
      "Marketing automations",
    ],
    mostPopular: true,
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    href: "#",
    priceMonthly: "$99",
    description: "Dedicated support and infrastructure for your company.",
    features: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "1-hour, dedicated support response time",
      "Marketing automations",
    ],
    mostPopular: false,
  },
];
const faqs = [
  {
    id: 1,
    question: "מה הייחודיות של הטיולים שאתם מציעים?",
    answer:
      "הטיולים שלנו מתוכננים בקפידה כדי להעניק חוויה אותנטית ומעמיקה, עם מדריכים מקצועיים ויעדים ייחודיים.",
  },
  {
    id: 2,
    question: "מה כלול במחיר הטיול?",
    answer:
      "המחיר כולל לינה, ארוחות מסוימות, תחבורה, כניסה לאתרים מרכזיים וליווי של מדריך מוסמך לאורך כל הדרך.",
  },
  {
    id: 3,
    question: "האם ניתן להתאים את המסלול לפי העדפות אישיות?",
    answer:
      "בהחלט! אנו מציעים אפשרות להתאים את המסלול לפי רצונות המטיילים, כולל עצירות נוספות, פעילויות מיוחדות והתאמות אישיות.",
  },
  {
    id: 4,
    question: "האם הטיולים מתאימים לכל הגילאים?",
    answer:
      "כן! יש לנו טיולים שמתאימים למשפחות, זוגות, קבוצות ויחידים. ניתן לבחור בטיולים בדרגות קושי שונות בהתאם להעדפות האישיות.",
  },
  {
    id: 5,
    question: "איך מבוצעת ההרשמה לטיול?",
    answer:
      "ההרשמה מתבצעת דרך האתר שלנו. ניתן לבחור את תאריך היציאה הרצוי, למלא את הפרטים ולבצע תשלום מאובטח.",
  },
  {
    id: 6,
    question: "מה קורה במקרה של ביטול?",
    answer:
      "ניתן לבטל טיול בהתאם למדיניות הביטולים שלנו. במקרה של ביטול מראש, ניתן לקבל החזר חלקי או מלא בהתאם לזמן הביטול.",
  },
  {
    id: 7,
    question: "האם יש צורך בניסיון קודם בטיולים מאורגנים?",
    answer:
      "לא חובה! המדריכים שלנו דואגים להנחות וללוות את כל המשתתפים כך שגם מי שאין לו ניסיון קודם יוכל ליהנות מהחוויה.",
  },
  {
    id: 8,
    question: "איזו ציוד צריך להביא לטיול?",
    answer:
      "הציוד משתנה בהתאם למסלול. אנו מספקים רשימת ציוד מומלצת לכל טיול כדי להבטיח שתגיעו מוכנים בצורה הטובה ביותר.",
  },
  {
    id: 9,
    question: "האם יש ביטוח בטיולים?",
    answer:
      "המחיר אינו כולל ביטוח אישי, ולכן אנו ממליצים לרכוש ביטוח נסיעות מתאים לפני היציאה לטיול.",
  },
];

const footerNavigation = {
  solutions: [
    { name: "Hosting", href: "#" },
    { name: "Data services", href: "#" },
    { name: "Uptime monitoring", href: "#" },
    { name: "Enterprise services", href: "#" },
    { name: "Analytics", href: "#" },
  ],
  support: [
    { name: "Submit ticket", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Guides", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
  ],
  legal: [
    { name: "Terms of service", href: "#" },
    { name: "Privacy policy", href: "#" },
    { name: "License", href: "#" },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function MainPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Header */}
      {/* <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm/6 font-semibold text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm/6 font-semibold text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header> */}

      <main className="isolate">
        {/* whatapp icon  */}
        <a
          href="https://wa.me/+972585555513?text=שלום!%20אני%20מעוניין%20במוצרים%20שלכם."
          target="_blank"
          className="z-40 fixed bottom-10 right-2 sm:right-5"
        >
          <button class="w-10 h-10 flex items-center relative overflow-hidden justify-center rounded-full bg-white shadow-md shadow-gray-200 group transition-all duration-300">
            <svg
              class="fill-gray-900 relative z-10 transition-all duration-300 group-hover:fill-white"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 71 72"
              fill="none"
            >
              <path
                d="M12.5762 56.8405L15.8608 44.6381C13.2118 39.8847 12.3702 34.3378 13.4904 29.0154C14.6106 23.693 17.6176 18.952 21.9594 15.6624C26.3012 12.3729 31.6867 10.7554 37.1276 11.1068C42.5685 11.4582 47.6999 13.755 51.5802 17.5756C55.4604 21.3962 57.8292 26.4844 58.2519 31.9065C58.6746 37.3286 57.1228 42.7208 53.8813 47.0938C50.6399 51.4668 45.9261 54.5271 40.605 55.7133C35.284 56.8994 29.7125 56.1318 24.9131 53.5513L12.5762 56.8405ZM25.508 48.985L26.2709 49.4365C29.7473 51.4918 33.8076 52.3423 37.8191 51.8555C41.8306 51.3687 45.5681 49.5719 48.4489 46.7452C51.3298 43.9185 53.1923 40.2206 53.7463 36.2279C54.3002 32.2351 53.5143 28.1717 51.5113 24.6709C49.5082 21.1701 46.4003 18.4285 42.6721 16.8734C38.9438 15.3184 34.8045 15.0372 30.8993 16.0736C26.994 17.11 23.5422 19.4059 21.0817 22.6035C18.6212 25.801 17.2903 29.7206 17.2963 33.7514C17.293 37.0937 18.2197 40.3712 19.9732 43.2192L20.4516 44.0061L18.6153 50.8167L25.508 48.985Z"
                fill=""
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M44.0259 36.8847C43.5787 36.5249 43.0549 36.2716 42.4947 36.1442C41.9344 36.0168 41.3524 36.0186 40.793 36.1495C39.9524 36.4977 39.4093 37.8134 38.8661 38.4713C38.7516 38.629 38.5833 38.7396 38.3928 38.7823C38.2024 38.8251 38.0028 38.797 37.8316 38.7034C34.7543 37.5012 32.1748 35.2965 30.5122 32.4475C30.3704 32.2697 30.3033 32.044 30.325 31.8178C30.3467 31.5916 30.4555 31.3827 30.6286 31.235C31.2344 30.6368 31.6791 29.8959 31.9218 29.0809C31.9756 28.1818 31.7691 27.2863 31.3269 26.5011C30.985 25.4002 30.3344 24.42 29.4518 23.6762C28.9966 23.472 28.4919 23.4036 27.9985 23.4791C27.5052 23.5546 27.0443 23.7709 26.6715 24.1019C26.0242 24.6589 25.5104 25.3537 25.168 26.135C24.8256 26.9163 24.6632 27.7643 24.6929 28.6165C24.6949 29.0951 24.7557 29.5716 24.8739 30.0354C25.1742 31.1497 25.636 32.2144 26.2447 33.1956C26.6839 33.9473 27.163 34.6749 27.6801 35.3755C29.3607 37.6767 31.4732 39.6305 33.9003 41.1284C35.1183 41.8897 36.42 42.5086 37.7799 42.973C39.1924 43.6117 40.752 43.8568 42.2931 43.6824C43.1711 43.5499 44.003 43.2041 44.7156 42.6755C45.4281 42.1469 45.9995 41.4518 46.3795 40.6512C46.6028 40.1675 46.6705 39.6269 46.5735 39.1033C46.3407 38.0327 44.9053 37.4007 44.0259 36.8847Z"
                fill=""
              />
            </svg>
            <div
              class="absolute top-full left-0 w-full h-full rounded-full
              bg-green-400 z-0 transition-all duration-500 group-hover:top-0"
            ></div>
          </button>
        </a>

        {/* Hero section */}
        {/* <div className="relative pt-14">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div className="py-24 sm:py-32 lg:pb-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl ">
                  Deploy to the cloud with confidence
                </h1>
                <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get started
                  </a>
                  <a href="#" className="text-sm/6 font-semibold text-gray-900">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
              <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <img
                    alt="App screenshot"
                    // src="https://tailwindui.com/plus-assets/img/component-images/project-app-screenshot.png"
                    src="https://lh3.googleusercontent.com/pw/AP1GczONv_50wSAQOxpVSPFCpoAabaNHXssMMlD7Tl0ghpn2Z3OH9dLkot0GF5QhaIZhkeN_v_UwCUQIdCNRCW6OxjDE0NtvOAvvW82BDi5ocSqP24DNaRPhEoO7cxUvFzBvetkYw43dR1h2gniviJVFhQmqag=w1171-h869-s-no-gm?authuser=0"
                    width={2432}
                    height={1442}
                    className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div> */}
        <Hero />

        {/* about me */}
        <AboutMe />
        {/* reviews section */}
        <Reviews />
        {/* <div className="flex ">
          <blockquote class="flex flex-col items-center p-4">
            <p class="max-w-4xl text-xl font-medium text-center md:text-2xl lg:text-3xl">
              "I recently used this website for a purchase and I was extremely
              satisfied with the ease of use and the variety of options
              available. The checkout process was seamless and the delivery was
              prompt. "
            </p>
            <footer class="flex items-center gap-3 mt-6 md:mt-12">
              <img
                class="flex-shrink-0 w-12 h-12 border rounded-full border-black/10"
                src="https://loremflickr.com/g/200/200/girl"
                alt="Sebastiaan Kloos"
                loading="lazy"
              />
              <a
                href=""
                target="_blank"
                class="inline-block font-bold tracking-tight"
              >
                <p>Jane Doe</p>
                <p class="font-medium text-black/60">Founder of XYZ</p>
              </a>
            </footer>
          </blockquote>
          <blockquote class="flex flex-col items-center p-4">
            <p class="max-w-4xl text-xl font-medium text-center md:text-2xl lg:text-3xl">
              "I recently used this website for a purchase and I was extremely
              satisfied with the ease of use and the variety of options
              available. The checkout process was seamless and the delivery was
              prompt. "
            </p>
            <footer class="flex items-center gap-3 mt-6 md:mt-12">
              <img
                class="flex-shrink-0 w-12 h-12 border rounded-full border-black/10"
                src="https://loremflickr.com/g/200/200/girl"
                alt="Sebastiaan Kloos"
                loading="lazy"
              />
              <a
                href=""
                target="_blank"
                class="inline-block font-bold tracking-tight"
              >
                <p>Jane Doe</p>
                <p class="font-medium text-black/60">Founder of XYZ</p>
              </a>
            </footer>
          </blockquote>
          <blockquote class="flex flex-col items-center p-4">
            <p class="max-w-4xl text-xl font-medium text-center md:text-2xl lg:text-3xl">
              "I recently used this website for a purchase and I was extremely
              satisfied with the ease of use and the variety of options
              available. The checkout process was seamless and the delivery was
              prompt. "
            </p>
            <footer class="flex items-center gap-3 mt-6 md:mt-12">
              <img
                class="flex-shrink-0 w-12 h-12 border rounded-full border-black/10"
                src="https://loremflickr.com/g/200/200/girl"
                alt="Sebastiaan Kloos"
                loading="lazy"
              />
              <a
                href=""
                target="_blank"
                class="inline-block font-bold tracking-tight"
              >
                <p>Jane Doe</p>
                <p class="font-medium text-black/60">Founder of XYZ</p>
              </a>
            </footer>
          </blockquote>
        </div> */}

        {/* Logo cloud */}
        {/* <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              alt="Transistor"
              src="https://tailwindui.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <img
              alt="Reform"
              src="https://tailwindui.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <img
              alt="Tuple"
              src="https://tailwindui.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <img
              alt="SavvyCal"
              src="https://tailwindui.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            />
            <img
              alt="Statamic"
              src="https://tailwindui.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            />
          </div>
          <div className="mt-16 flex justify-center">
            <p className="relative rounded-full px-4 py-1.5 text-sm/6 text-gray-600 ring-1 ring-inset ring-gray-900/10 hover:ring-gray-900/20">
              <span className="hidden md:inline">
                Transistor saves up to $40,000 per year, per employee by working
                with us.
              </span>
              <a href="#" className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" /> Read
                our case study <span aria-hidden="true">&rarr;</span>
              </a>
            </p>
          </div>
        </div> */}

        {/* Feature section */}
        {/* <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-indigo-600">
              Deploy faster
            </h2>
            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
              Everything you need to deploy your app
            </p>
            <p className="mt-6 text-pretty text-lg/8 text-gray-600">
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
              Suspendisse eget egestas a elementum pulvinar et feugiat blandit
              at. In mi viverra elit nunc.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base/7 font-semibold text-gray-900">
                    <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon
                        aria-hidden="true"
                        className="size-6 text-white"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base/7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div> */}

        {/* Testimonial section */}
        {/* <div className="mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gray-900 px-6 py-20 shadow-xl sm:rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-20">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1601381718415-a05fb0a261f3?ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8ODl8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1216&q=80"
              className="absolute inset-0 size-full object-cover brightness-150 saturate-0"
            />
            <div className="absolute inset-0 bg-gray-900/90 mix-blend-multiply" />
            <div
              aria-hidden="true"
              className="absolute -left-80 -top-56 transform-gpu blur-3xl"
            >
              <div
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-[0.45]"
              />
            </div>
            <div
              aria-hidden="true"
              className="hidden md:absolute md:bottom-16 md:left-[50rem] md:block md:transform-gpu md:blur-3xl"
            >
              <div
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-25"
              />
            </div>
            <div className="relative mx-auto max-w-2xl lg:mx-0">
              <img
                alt=""
                src="https://tailwindui.com/plus-assets/img/logos/workcation-logo-white.svg"
                className="h-12 w-auto"
              />
              <figure>
                <blockquote className="mt-6 text-lg font-semibold text-white sm:text-xl/8">
                  <p>
                    “Amet amet eget scelerisque tellus sit neque faucibus non
                    eleifend. Integer eu praesent at a. Ornare arcu gravida
                    natoque erat et cursus tortor consequat at. Vulputate
                    gravida sociis enim nullam ultricies habitant malesuada
                    lorem ac.”
                  </p>
                </blockquote>
                <figcaption className="mt-6 text-base text-white">
                  <div className="font-semibold">Judith Black</div>
                  <div className="mt-1">CEO of Tuple</div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div> */}

        {/* Pricing section */}
        {/* <div className="py-24 sm:pt-48" id="pricing" dir="rtl">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base/7 font-semibold text-indigo-600">
                Pricing
              </h2>
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
                Pricing that grows with you
              </p>
              <p className="mt-6 text-pretty text-lg/8 text-gray-600">
                Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
                Suspendisse eget egestas a elementum pulvinar et feugiat blandit
                at. In mi viverra elit nunc.
              </p>
            </div>
            <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {tiers.map((tier, tierIdx) => (
                <div
                  key={tier.id}
                  className={classNames(
                    tier.mostPopular ? "lg:z-10 lg:rounded-b-none" : "lg:mt-8",
                    tierIdx === 0 ? "lg:rounded-r-none" : "",
                    tierIdx === tiers.length - 1 ? "lg:rounded-l-none" : "",
                    "flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10"
                  )}
                >
                  <div>
                    <div className="flex items-center justify-between gap-x-4">
                      <h3
                        id={tier.id}
                        className={classNames(
                          tier.mostPopular
                            ? "text-indigo-600"
                            : "text-gray-900",
                          "text-lg/8 font-semibold"
                        )}
                      >
                        {tier.name}
                      </h3>
                      {tier.mostPopular ? (
                        <p className="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs/5 font-semibold text-indigo-600">
                          Most popular
                        </p>
                      ) : null}
                    </div>
                    <p className="mt-4 text-sm/6 text-gray-600">
                      {tier.description}
                    </p>
                    <p className="mt-6 flex items-baseline gap-x-1">
                      <span className="text-4xl font-semibold tracking-tight text-gray-900">
                        {tier.priceMonthly}
                      </span>
                      <span className="text-sm/6 font-semibold text-gray-600">
                        /month
                      </span>
                    </p>
                    <ul
                      role="list"
                      className="mt-8 space-y-3 text-sm/6 text-gray-600"
                    >
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          <CheckIcon
                            aria-hidden="true"
                            className="h-6 w-5 flex-none text-indigo-600"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={tier.href}
                    aria-describedby={tier.id}
                    className={classNames(
                      tier.mostPopular
                        ? "bg-indigo-600 text-white shadow-sm hover:bg-indigo-500"
                        : "text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300",
                      "mt-8 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    )}
                  >
                    Buy plan
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div> */}
        <div className="py-24 sm:pt-48" id="pricing" dir="rtl">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base/7 font-semibold text-indigo-600">
                מחירים
              </h2>
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
                מסלולי טיול מותאמים אישית
              </p>
              <p className="mt-6 text-pretty text-lg/8 text-gray-600">
                בחרו את מסלול הטיול שמתאים לכם ותיהנו מחוויה בלתי נשכחת עם מדריך
                מקצועי.
              </p>
            </div>
            <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  id: "trip-3-days",
                  name: "טיול של 3 ימים",
                  description:
                    "טיול מודרך בן שלושה ימים הכולל אתרים היסטוריים, טבע קסום וחוויות קולינריות.",
                  price: "₪2,500",
                  features: [
                    "סיורים באתרים היסטוריים",
                    "טיולי טבע ונוף",
                    "הסעה נוחה ממקום למקום",
                    "ארוחות מקומיות אותנטיות",
                  ],
                },
                {
                  id: "trip-5-days",
                  name: "טיול של 5 ימים",
                  description:
                    "חמישה ימים מלאים של חוויות, היסטוריה ותרבות עם מדריך מקצועי.",
                  price: "₪4,000",
                  mostPopular: true,
                  features: [
                    "סיורים באתרים היסטוריים ומוזיאונים",
                    "טיולים רגליים ונופים מרהיבים",
                    "שיט בסירה באגם",
                    "ארוחות אותנטיות וחוויות קולינריות",
                  ],
                },
                {
                  id: "trip-7-days",
                  name: "טיול של 7 ימים",
                  description:
                    "שבוע שלם של הרפתקאות ונופים מדהימים עם מדריך אישי.",
                  price: "₪5,800",
                  features: [
                    "סיורים מיוחדים במקומות נסתרים",
                    "מפגש עם תושבים מקומיים",
                    "חוויות קולינריות מגוונות",
                    "פעילויות אקסטרים כמו רכיבה על גמלים ושיט קיאקים",
                  ],
                },
              ].map((tier, tierIdx) => (
                <div
                  key={tier.id}
                  className={classNames(
                    tier.mostPopular ? "lg:z-10 lg:rounded-b-none" : "lg:mt-8",
                    tierIdx === 0 ? "lg:rounded-r-none" : "",
                    tierIdx === 2 ? "lg:rounded-l-none" : "",
                    "flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10"
                  )}
                >
                  <div>
                    <div className="flex items-center justify-between gap-x-4">
                      <h3
                        id={tier.id}
                        className={classNames(
                          tier.mostPopular
                            ? "text-indigo-600"
                            : "text-gray-900",
                          "text-lg/8 font-semibold"
                        )}
                      >
                        {tier.name}
                      </h3>
                      {tier.mostPopular ? (
                        <p className="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs/5 font-semibold text-indigo-600">
                          המסלול הפופולרי ביותר
                        </p>
                      ) : null}
                    </div>
                    <p className="mt-4 text-sm/6 text-gray-600">
                      {tier.description}
                    </p>
                    <p className="mt-6 flex items-baseline gap-x-1">
                      <span className="text-4xl font-semibold tracking-tight text-gray-900">
                        {tier.price}
                      </span>
                      {/* <span className="text-sm/6 font-semibold text-gray-600">
                        ₪
                      </span> */}
                    </p>
                    <ul
                      role="list"
                      className="mt-8 space-y-3 text-sm/6 text-gray-600"
                    >
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          <CheckIcon
                            aria-hidden="true"
                            className="h-6 w-5 flex-none text-indigo-600"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href="#contact"
                    aria-describedby={tier.id}
                    className={classNames(
                      tier.mostPopular
                        ? "bg-indigo-600 text-white shadow-sm hover:bg-indigo-500"
                        : "text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300",
                      "mt-8 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    )}
                  >
                    הזמן עכשיו
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div
          className="mx-auto max-w-2xl px-6 pb-8 sm:pb-24 sm:pt-12 lg:max-w-7xl lg:px-8 lg:pb-32"
          dir="rtl"
        >
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            כל מה שצריך לדעת לפני היציאה לטיול
          </h2>
          <dl className="mt-20 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="py-8 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-8"
              >
                <dt className="text-base/7 font-semibold text-gray-900 lg:col-span-5">
                  {faq.question}
                </dt>
                <dd className="mt-4 lg:col-span-7 lg:mt-0">
                  <p className="text-base/7 text-gray-600">{faq.answer}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* CTA section */}
        {/* <div className="relative -z-10 mt-32 px-6 lg:px-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 transform-gpu justify-center overflow-hidden blur-3xl sm:bottom-0 sm:right-[calc(50%-6rem)] sm:top-auto sm:translate-y-0 sm:transform-gpu sm:justify-end"
          >
            <div
              style={{
                clipPath:
                  "polygon(73.6% 48.6%, 91.7% 88.5%, 100% 53.9%, 97.4% 18.1%, 92.5% 15.4%, 75.7% 36.3%, 55.3% 52.8%, 46.5% 50.9%, 45% 37.4%, 50.3% 13.1%, 21.3% 36.2%, 0.1% 0.1%, 5.4% 49.1%, 21.4% 36.4%, 58.9% 100%, 73.6% 48.6%)",
              }}
              className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-25"
            />
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Boost your productivity. Start using our app today.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-gray-600">
              Incididunt sint fugiat pariatur cupidatat consectetur sit cillum
              anim id veniam aliqua proident excepteur commodo do ea.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm/6 font-semibold text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute left-1/2 right-0 top-full -z-10 hidden -translate-y-1/2 transform-gpu overflow-hidden blur-3xl sm:block"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            />
          </div>
        </div> */}
        {/* new cta section  */}
        {/* <div className="bg-indigo-100">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
            <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Ready to dive in? <br />
              Start your free trial today.
            </h2>
            <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:shrink-0">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm/6 font-semibold text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div> */}
        <div className="bg-indigo-100" dir="rtl">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
            <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              מוכן לצאת להרפתקה? <br />
              הזמינו את הסיור שלכם עם יוסף היום.
            </h2>
            <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:shrink-0">
              <a
                href="#pricing"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                הזמינו סיור
              </a>
              <a href="/blog" className="text-sm/6 font-semibold text-gray-900">
                לקרוא על המקומות בבלוג <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        {/*images section  */}
        {/* <div className="bg-indigo-200/25"> */}
        <div className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              {/* <h2 className="mx-auto max-w-md text-pretty text-center text-3xl font-bold tracking-tight text-indigo-900 lg:max-w-xl lg:text-left">
                Trusted by the world’s most innovative teams
              </h2> */}
              <h2 className="mx-auto max-w-md text-pretty text-center text-3xl font-bold tracking-tight text-indigo-900 lg:max-w-xl lg:text-left">
                הצטרפו למטיילים המרוצים שלנו שחוו את הטיולים הכי מיוחדים
              </h2>
              <div className="mt-0 flow-root self-center lg:mt-0">
                {/* LOGO SECTIONS  */}
                {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
                  <div className="flex justify-center">
                    <img
                      alt="Image 1"
                      src="https://lh3.googleusercontent.com/pw/AP1GczOlx8z7qGvOGZBAJ3m-ScUm2UeassJXUYdXN3i4xx19y0h-q2ofs6FURj9dTVDxYF4PYriWTeIFjwWxolR61Y5F4gT_PLPsZdVPfFPsLOm88i_T8QaYRigPTZ4L8H00FkA0w8Bv3ZCaJidZjUOa3E5Y=w654-h869-s-no-gm?authuser=0"
                      className="rounded-lg shadow-lg object-cover w-full md:w-80 lg:w-96 h-64"
                    />
                  </div>
                  <div className="flex justify-center">
                    <img
                      alt="Image 2"
                      src="https://lh3.googleusercontent.com/pw/AP1GczM1hfMjNaSGRpyWdKbpEU_R2EeYfSyGQaMUsz1TQObXsIEyNc32qM1OKy62HsXtQriy9gY8DJazFTOiWRMWN3QZZQ8Z0BMJUQ1CTCTAmihpjQ-mLRWFRePLK4MHC93GNBpNU6PEkiBDDNWq1Mc1qWYm=w651-h869-s-no-gm?authuser=0"
                      className="rounded-lg shadow-lg object-cover w-full md:w-80 lg:w-96 h-64"
                    />
                  </div>
                  <div className="flex justify-center">
                    <img
                      alt="Image 3"
                      src="https://tailwindui.com/plus-assets/img/logos/level-logo-indigo-900.svg"
                      className="rounded-lg shadow-lg object-cover w-full md:w-80 lg:w-96 h-64"
                    />
                  </div>
                  <div className="flex justify-center">
                    <img
                      alt="Image 4"
                      src="https://tailwindui.com/plus-assets/img/logos/level-logo-indigo-900.svg"
                      className="rounded-lg shadow-lg object-cover w-full md:w-80 lg:w-96 h-64"
                    />
                  </div>
                </div> */}
              </div>
            </div>
            <div className="pt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      {/* <footer className="relative mx-auto mt-32 max-w-7xl px-6 lg:px-8">
        <div className="border-t border-gray-900/10 py-16 sm:py-24 lg:py-32">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <img
              alt="Company name"
              src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              className="h-9"
            />
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm/6 font-semibold text-gray-900">
                    Solutions
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.solutions.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm/6 text-gray-600 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm/6 font-semibold text-gray-900">
                    Support
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.support.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm/6 text-gray-600 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm/6 font-semibold text-gray-900">
                    Company
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.company.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm/6 text-gray-600 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm/6 font-semibold text-gray-900">
                    Legal
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.legal.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm/6 text-gray-600 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
}

export default MainPage;
