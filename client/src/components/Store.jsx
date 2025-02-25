import React from "react";

function Store() {
  return (
    <main
      className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8"
      dir="rtl"
    >
      <div className="text-center">
        <p className="text-base font-semibold text-indigo-600">בקרוב</p>
        <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
          החנות שלנו תעלה בקרוב!
        </h1>
        <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
          אנחנו עובדים על משהו מיוחד. חזרו לבדוק אותנו בקרוב!
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            חזרה לדף הבית
          </a>
          <a href="/contact" className="text-sm font-semibold text-gray-900">
            צרו קשר <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  );
}

export default Store;
