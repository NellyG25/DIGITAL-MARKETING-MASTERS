"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { AlignJustify, X } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import DropDownMenu from "./drop-down-menu";

interface NavbarProps {
  scrollToWebsiteDesign: () => void;
  scrollToGraphicDesign: () => void;
  scrollToShopifyStores: () => void;
  scrollToBrands: () => void;
  scrollToServices: () => void; // Define scrollToServices function
}

const Navbar = ({
  scrollToWebsiteDesign,
  scrollToGraphicDesign,
  scrollToShopifyStores,
  scrollToBrands,
  scrollToServices, // Add scrollToServices to props
}: NavbarProps) => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const toggleDropDown = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };

  const closeDropDown = () => {
    setIsDropDownVisible(false);
  };

  return (
    <div>
      <div className="p-2 md:p-4 flex items-center justify-between z-50 sticky top-0">
        <div>
          <Link className="cursor-pointer" href="/">
            <Image
              priority
              src="/logo/dmmlogo.svg"
              alt="Logo"
              width={128}
              height={128}
              className="w-24 h-24 md:w-28 md:h-28 rounded-full"
            />
          </Link>
        </div>
        <div
          className="cursor-pointer hidden 
            md:flex space-x-10 items-center
             text-slate-300 text-center 
             bg-clip-text text-transparent 
             bg-gradient-to-b from-neutral-50
              to bg-neutral-400 bg-opacity-50"
        >
          <div onClick={scrollToShopifyStores} className="hover:text-gray-50">
            ABOUT
          </div>
{/* <div onClick={scrollToServices} className="hover:text-gray-50">
    SERVICES
</div> */}


          <div onClick={scrollToWebsiteDesign} className="hover:text-gray-50">
            PACKAGES
          </div>
          {/*<div onClick={scrollToBrands} className="hover:text-gray-50">
            EXPERTISE
          </div>*/}
        </div>

        <div className="flex md:hidden">
          {isDropDownVisible ? (
            // display an x icon when the drop is visible
            <div
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            >
              <X />
              <DropDownMenu
                onClose={closeDropDown}
                scrollToServices={scrollToServices} // Pass scrollToServices
              />
            </div>
          ) : (
            <AlignJustify
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            />
          )}
        </div>
        <div className="hidden md:flex space-x-8">
  <Link
    href="/"
    className="
      translate-x-6 inline-flex h-12 animate-shimmer items-center justify-center 
      rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
      bg-[length:200%_100%] px-8 py-3 font-medium text-slate-400 transition-colors
      focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
      focus:ring-offset-slate-50
    "
  >
    Sign In
  </Link>

  <Link
    href="/contact"
    className="
      inline-flex h-12 animate-shimmer items-center justify-center 
      rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
      bg-[length:200%_100%] px-8 py-3 font-medium text-slate-400 transition-colors
      focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
      focus:ring-offset-slate-50
    "
  >
    Contact
  </Link>
</div>

      </div>
    </div>
  );
};

export default Navbar;
