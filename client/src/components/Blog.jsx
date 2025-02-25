import React from "react";

// FIXME: idea for screen-shots of friend that will write reviews about the guide
const testimonials = [
  {
    body: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
    author: {
      name: "Leslie Alexander",
      handle: "lesliealexander",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },

  // More testimonials...
];

const posts = [
  {
    id: 1,
    title: "חוויותיי בשביל ישראל",
    href: "/blog/1",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      // "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
      "https://images1.ynet.co.il/PicServer5/2018/03/12/8400250/8400223099097980717no.jpg",

    date: "אוג' 31 2024",
    // datetime: "2020-03-16",
    author: {
      name: "יוסף סירומיאטניקוב",
      imageUrl:
        "https://lh3.googleusercontent.com/pw/AP1GczPnTEjq9anN2UYmw3VOK2P-blp5iho7J79SVEYqK2PI6WWssJxg0pKn6SFJIsHPrte2_gx76CuLBPAuFBJEjtSgzdvRmt178tbNS4EUm7cAlCvGBiwQ_13JhrPDG9JoQQCRsXO_2Iz8S43PCtXt7xEM=w651-h869-s-no-gm?authuser=0",
      // "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  // More posts...
];
function Blog() {
  return (
    <>
      {/* <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base/7 font-semibold text-indigo-600">
              Testimonials
            </h2>
            <p className="mt-2 text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              We have worked with thousands of amazing people
            </p>
          </div>
          <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
            <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.author.handle}
                  className="pt-8 sm:inline-block sm:w-full sm:px-4"
                >
                  <figure className="rounded-2xl bg-gray-50 p-8 text-sm/6">
                    <blockquote className="text-gray-900">
                      <p>{`“${testimonial.body}”`}</p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4">
                      <img
                        alt=""
                        src={testimonial.author.imageUrl}
                        className="size-10 rounded-full bg-gray-50"
                      />
                      <div>
                        <div className="font-semibold text-gray-900">
                          {testimonial.author.name}
                        </div>
                        <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div dir="rtl" className="text-right">
            <h2 className="text-balance text-4xl font-semibold text-gray-900 sm:text-5xl">
              מהבלוג שלנו
            </h2>
            <p className="mt-2 text-lg leading-relaxed text-gray-600">
              הצטרפו למסעות הבלוג שלנו וגלו את החוויות הייחודיות מכל טיול
              והמלצות למסלולים בלתי נשכחים.
            </p>
          </div>
          <div
            className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
            dir="rtl"
          >
            {posts.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                <img
                  alt=""
                  src={post.imageUrl}
                  className="absolute inset-0 -z-10 size-full object-cover"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300">
                  <time dateTime={post.datetime} className="mr-8">
                    {post.date}
                  </time>
                  <div className="-ml-4 flex items-center gap-x-4">
                    <svg
                      viewBox="0 0 2 2"
                      className="-ml-0.5 size-0.5 flex-none fill-white/50"
                    >
                      <circle r={1} cx={1} cy={1} />
                    </svg>
                    <div className="flex gap-x-2.5">
                      <img
                        alt=""
                        src={post.author.imageUrl}
                        className="size-6 flex-none rounded-full bg-white/10"
                      />
                      {post.author.name}
                    </div>
                  </div>
                </div>
                <h3 className="mt-3 text-lg/6 font-semibold text-white">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
