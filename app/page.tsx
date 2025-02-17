'use client'

import { useState, useRef,useEffect } from "react";
import Navbar from "@/components/navbar";
import SliderOne from "@/components/ui/slider";
import { Spotlight } from "@/components/ui/spotlight";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

import WebsiteDesign from "./website-design";
import GraphicDesign from "./graphic-design";
import ShopifyStores from "./shopify-stores";
import Brands from "./brands";

import Pricing from "./pricing/page";
import FAQS from "./faq";
import { InfiniteMovingCardsDemo } from "./snippets/infinite-moving-card-snippet";
import Carousel from "./carousel";

export default function Home() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  const websiteDesignRef = useRef<HTMLDivElement>(null);
  const graphicDesignRef = useRef<HTMLDivElement>(null);
  const shopifyStoresRef = useRef<HTMLDivElement>(null);
  const brandsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  


  const sliders = [
    "Is your hotel or restaurant showing up when potential customers search for you online?",
    "Are your beauty services getting the visibility they deserve in a competitive market?",
    "Are you making the most out of online listings to attract home buyers and renters?",
    "How can you stand out in the growing solar energy market and reach more customers?",
    "Is your restaurant's online presence attracting the right customers and increasing foot traffic?",
    "Is your hotel showing up in search results when potential guests are looking for places to stay?",
    "Are your online reviews driving more bookings or hurting your hotel’s reputation?",
    "Wondering how to optimize your website to convert visitors into confirmed reservations?",
    "How can you make sure your property listings stand out in a crowded online market?",
    "How can your hotel stand out from competitors in local search and attract more guests?",
    "Is your social media presence helping to build trust and increase bookings for your property?",
  ];
  
  const messages = [
    "Can customers find you online when they search for services you offer?",
    "Ever wondered why some businesses show up on Google Maps and others don’t? Let’s fix that!",
    "A fully optimized Google My Business profile can 2X your customer inquiries—are you making the most of yours?",
    "If you’re not leveraging SEO, GMB, or email marketing, you're missing out on serious growth",
    "How can you make sure your property listings stand out in a crowded online market?",
    "Wondering how to turn your online reviews into more bookings for your property?",
    "Curious how Google My Business optimization can get your spa noticed by more local clients?",
    "Need a professional online presence that helps you sell more cars faster?",
    "Need a website that not only looks great but converts visitors into home buyers or sellers?",
    "Are your social media campaigns driving more reservations and engaging your local community?",
    "Want to enhance your customer experience with automated email marketing campaigns?",
  ];

    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % Math.max(sliders.length, messages.length)); // Update both sliders and messages
      }, 10000); // Change every 10 seconds
  
      return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);
  

  const scrollToWebsiteDesign = () => {
    websiteDesignRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const scrollToGraphicDesign = () => {
    graphicDesignRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  

  const scrollToShopifyStores = () => {
    shopifyStoresRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBrands = () => {
    brandsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Function to scroll to Services section
  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar
        scrollToWebsiteDesign={scrollToWebsiteDesign}
        scrollToGraphicDesign={scrollToGraphicDesign}
        scrollToShopifyStores={scrollToShopifyStores}
        scrollToBrands={scrollToBrands}
        scrollToServices={scrollToServices}
      />

      <Spotlight className="hidden md:flex md:-top-80 left-80  " fill="white" />
      <div className="p-2 mx-auto relative z-10 w-full pt-2 md:pt-5 px-2">
        <div className="text-4xl pb-5 md:text-7xl px-6 text-center  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
        Your Business Deserves More Visibility. <br/>Let’s Make It Happen!
        </div>
        <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto px-4">
        {sliders[index]}
        </p>
        <h3
  className="mt-4 text-sm font-normal text-neutral-100 max-w-lg text-center mx-auto px-4">

  {messages[index]}
</h3>

      <div className="">
        <Link
          href={"/book"}
          className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2  mx-auto my-6 text-white "
        >
          Book a call
        </Link>
        </div>

        <div className="w-full pt-20">
          <SliderOne />
        </div>
      <Carousel/>
        <div ref={shopifyStoresRef}>
          <ShopifyStores />
        </div>

        <div ref={websiteDesignRef}>
          <Pricing />
        </div>
        <div ref={graphicDesignRef}>
    <WebsiteDesign />
    </div> 
         
        {/* <div ref={graphicDesignRef}>
    <GraphicDesign />
    </div> 

        <div ref={brandsRef}>
          <Brands />
        </div>*/} 

        <FAQS />
      </div>
    </div>
  );
}
