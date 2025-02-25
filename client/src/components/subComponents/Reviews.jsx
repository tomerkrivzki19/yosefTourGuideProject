import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/swiper-bundle.css";

const reviews = [
  {
    text: "הטיול בשביל ישראל היה חוויה בלתי נשכחת! הנופים עוצרי נשימה והמדריך היה מקצועי וסבלני.",
    name: "יעל כהן",
    title: "מטיילת חובבת",
    img: "https://loremflickr.com/g/200/200/girl",
  },
  {
    text: "מדריך מדהים עם ידע עצום על המסלול! דאג לכל פרט קטן וגרם לנו להרגיש בטוחים לכל אורך הדרך.",
    name: "דוד לוי",
    title: "מטייל מנוסה",
    img: "https://loremflickr.com/g/200/200/boy",
  },
  {
    text: "חוויה מושלמת! המסלול היה מתוכנן היטב, הנופים קסומים וההדרכה מעולה.",
    name: "עדי מזרחי",
    title: "חובבת טבע",
    img: "https://loremflickr.com/g/200/200/woman",
  },
  {
    text: "שביל ישראל הוא מסלול חובה לכל מי שאוהב טבע. המדריך עשה עבודה נהדרת והפך את הטיול לחוויה מיוחדת.",
    name: "רוני ברק",
    title: "מעצב גרפי",
    img: "https://loremflickr.com/g/200/200/man",
  },
  {
    text: "יצאנו לטיול קבוצתי והיה פשוט מושלם! המדריך היה ידידותי וסיפק המון מידע מעניין על המקומות שעברנו בהם.",
    name: "נועה פרידמן",
    title: "בלוגרית טיולים",
    img: "https://loremflickr.com/g/200/200/girl2",
  },
  {
    text: "המסלול היה מרתק, השירות מצוין והאווירה הייתה מדהימה. ממליץ לכל מי שרוצה לחוות את ישראל בדרך שונה!",
    name: "איתי גל",
    title: "יזם בתחום התיירות",
    img: "https://loremflickr.com/g/200/200/boy2",
  },
  {
    text: "הטיול בשביל ישראל היה אחת החוויות הכי טובות שהיו לי! המדריך היה סבלני ודאג שהכול יהיה מושלם.",
    name: "מאיה דניאל",
    title: "צלמת טבע",
    img: "https://loremflickr.com/g/200/200/woman2",
  },
];

function Reviews() {
  return (
    <>
      <h3 className="text-center py-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
        ביקורות של מטיילים{" "}
      </h3>

      <div className="flex w-full max-w-7xl mx-auto px-4" dir="rtl">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1} // Default for extra small screens
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 }, // ✅ Shows 2 reviews per slide on small screens
            768: { slidesPerView: 2 }, // ✅ Keeps 2 per slide on tablets
            1024: { slidesPerView: 3 }, // ✅ Shows 3 per slide on large screens
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <blockquote className="flex flex-col items-center justify-between p-6 bg-white shadow-lg rounded-lg w-full min-h-[350px] ">
                <p className="max-w-2xl text-xl font-medium text-center flex-grow ">
                  "{review.text}"
                </p>
                <footer className="flex items-center gap-3 mt-6">
                  <img
                    className="w-12 h-12 rounded-full border border-black/10"
                    src={review.img}
                    alt={review.name}
                    loading="lazy"
                  />
                  <div>
                    <p className="font-bold">{review.name}</p>
                    <p className="text-black/60">{review.title}</p>
                  </div>
                </footer>
              </blockquote>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Reviews;
