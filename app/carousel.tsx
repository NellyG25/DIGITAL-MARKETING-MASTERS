'use client'
import {motion} from "framer-motion";
import { CarouselDemo } from "./snippets/carousel-snippet";



const Carousel = () => {
    return (  <div>
         <div className=" p-4   mx-auto relative z-10  w-full pt-20 md:pt-32">
      <div className="text-4xl md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
      Struggling to Get Customers? Fix It Before It’s Too Late!! <br />
      </div>

      <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto">
      Every day you wait, you're losing potential revenue. We help businesses like yours dominate Google, social media, and email marketing.&apos;Start winning today!
      </p>


      <div className="items-center md:flex justify-center md:mx-auto md:space-x-10">
      <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="px-10 md:px-0"
          >
            <CarouselDemo/>
            </motion.div>
      </div>
      </div>
    </div> );
}
 
export default Carousel;