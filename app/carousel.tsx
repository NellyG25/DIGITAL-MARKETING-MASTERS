'use client'
import { motion } from "framer-motion";
import { CarouselDemo } from "./snippets/carousel-snippet";

const Carousel = () => {
  return (
    <div className="relative w-full pt-20 md:pt-32 px-4 mx-auto z-10">
      {/* Title Section */}
      <h1 className="text-4xl md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
        Struggling to Get Customers? Fix It Before It&apos;s Too Late!!
      </h1>

      {/* Subtitle Section */}
      <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto">
        Every day you wait, you&apos;re losing potential revenue. We help businesses like yours dominate Google, social media, and email marketing. Start winning today!
      </p>

      {/* Carousel Section */}
      <div className="flex justify-center md:space-x-10 mt-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full md:w-auto"
        >
          <CarouselDemo />
        </motion.div>
      </div>
    </div>
  );
};

export default Carousel;
