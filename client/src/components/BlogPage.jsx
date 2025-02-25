import React, { useState } from "react";
import {
  FaceFrownIcon,
  FaceSmileIcon,
  FireIcon,
  HandThumbUpIcon,
  HeartIcon,
  PaperClipIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";

const moods = [
  {
    name: "Excited",
    value: "excited",
    icon: FireIcon,
    iconColor: "text-white",
    bgColor: "bg-red-500",
  },
  {
    name: "Loved",
    value: "loved",
    icon: HeartIcon,
    iconColor: "text-white",
    bgColor: "bg-pink-400",
  },
  {
    name: "Happy",
    value: "happy",
    icon: FaceSmileIcon,
    iconColor: "text-white",
    bgColor: "bg-green-400",
  },
  {
    name: "Sad",
    value: "sad",
    icon: FaceFrownIcon,
    iconColor: "text-white",
    bgColor: "bg-yellow-400",
  },
  {
    name: "Thumbsy",
    value: "thumbsy",
    icon: HandThumbUpIcon,
    iconColor: "text-white",
    bgColor: "bg-blue-500",
  },
  {
    name: "I feel nothing",
    value: null,
    icon: XMarkIcon,
    iconColor: "text-gray-400",
    bgColor: "bg-transparent",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function BlogPage() {
  const [selected, setSelected] = useState(moods[5]);

  return (
    // <></>

    <div
      className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white  px-6 py-24 sm:py-32 lg:px-8"
      //   shadow
      dir="rtl"
    >
      <div className="px-4 py-5 sm:px-6">
        {/* Blog header */}
        <h1 className="text-3xl font-semibold text-gray-900">
          חוויותיי בשביל ישראל
        </h1>
        <p className="text-gray-500 mt-2">אוג׳ 31, 2024</p>
      </div>
      <div className="px-4 py-5 sm:p-6">
        {/* Blog image */}
        <img
          src="https://images1.ynet.co.il/PicServer5/2018/03/12/8400250/8400223099097980717no.jpg"
          alt="תמונה של טבע"
          className="w-full h-auto rounded-md shadow-lg"
        />
        {/* Blog content */}
        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
          בשביל ישראל, מסלול הליכה הממוקם בלב הטבע של מדינת ישראל, מציע חוויה
          ייחודית ומאתגרת למי שמעוניין להתחבר לטבע, להיסטוריה ולתרבות המקומית.
          כל תחנה בדרך מציעה משהו חדש – ממסלולים במדבר ועד לטיולים ביערות הגליל.
          במהלך המסלול פגשתי אנשים מקסימים, הרגשתי את השקט של הטבע ובעיקר –
          חוויתי את הקסם של הארץ הזאת.
        </p>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          המסלול עצמו כולל את כל סוגי הטבע – משדות פורחים ועד למדבריות מרהיבות.
          הוא מתאים למטיילים בכל גיל, ומאפשר לנצל את הזמן כדי להתחבר אל עצמנו
          ואל הסביבה. יש משהו מאוד מיוחד בהליכה על השביל הזה – כל צעד הוא חיבור
          מחדש לטבע ואל עצמך.
        </p>

        <div className="mt-8">
          {/* Add a list of recommendations */}
          <h2 className="text-2xl font-semibold text-gray-900">
            המלצות למטיילים בשביל ישראל
          </h2>
          <ul className="mt-4 list-disc pl-6">
            <li>הצטיידו בנעליים נוחות וציוד מתאים להליכה ארוכה.</li>
            <li>הביאו מים וכובעים, במיוחד בעונות החמות.</li>
            <li>אל תשכחו לקחת תמונות – כל פינה בשביל מרהיבה ומרשימה.</li>
            <li>הכירו את הטבע המקומי ואל תפספסו את כל החוויות הקטנות בדרך.</li>
          </ul>
        </div>

        {/* Add a section for comments */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-900">
            מה אתם חושבים?
          </h3>
          <form className="mt-4">
            <textarea
              className="w-full p-4 border border-gray-300 rounded-lg"
              placeholder="כתוב את התגובה שלך כאן"
              rows="4"
            />
            <button
              type="submit"
              className="mt-4 inline-block px-6 py-2 text-white bg-indigo-600 hover:bg-indigo-500 rounded-md"
            >
              שלח תגובה
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
