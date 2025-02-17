"use client";

import Image from "next/image";

const stores = [
  {
    image: "/images/30.webp",
    quote: " Get found when people search for your services.",
    name: "More visibility means more leads and sales. No need to rely only on paid ads; SEO brings long-term results.",
  },
  {
    image: "/images/5.jpg",
    quote:
      " Reach your audience directly in their inbox.",
    name: "Promote offers, send updates, and drive repeat business. Keep your business top-of-mind for customers.",
  },

  {
    image: "/images/12.png",
    quote:
      "Your Google Business Profile is a powerful tool for attracting new customers. But are you making the most of your 5-star reputation? With a custom Google Review Plaque, you can proudly display your ratings and reviews, build instant trust, and encourage more customers to leave feedback!",
  },
];

const ShopifyStores = () => {
  return (
    <section
      className=" mt-10 md:py-10 bg-[#f6f5f4] w-full
    rounded-3xl
  
  "
    >
      <div className=" p-4   mx-auto relative z-10  w-full ">
        <div className="text-4xl py-10 md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 bg-opacity-50">
               Why Choose Us?<br />
        </div>

        <p className="mt-4 text-lg font-normal  text-neutral-800 max-w-lg text-center mx-auto">
        from hospitality to real estate—reach more customers using proven digital marketing strategies like SEO, social media,Cold calling, email-marketing and targeted ads."
        </p>
        <div className="md:flex items-center justify-center  px-10 ">
          {stores.map((store, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center mt-10 md:w-2/3 mx-auto"
            >
              <div className="flex flex-col items-center justify-center ">
                <Image
                  src={store.image}
                  alt="shopify store"
                  width={400}
                  height={400}
                  className="rounded-lg mx-auto"
                />
                <p className="text-neutral-800 font-bold text-lg mt-4 text-center ">
                  &quot;{store.quote}&quot;
                </p>
                <p className="text-neutral-800 font-bold text-lg mt-4">
                  {" "}
                  - {store.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopifyStores;
