"use client";

import { useState } from "react";

import Link from "next/link";

import { PiCheckCircleFill } from "react-icons/pi";



const plans = [
  {
    index: 0,
    name: "Basic Digital Marketing Package",
    features: [
      "Social Media Management (2-3 posts per week on platforms like Facebook & Instagram)",

      "Basic SEO optimization (Google My Business setup and optimization, local search, basic keyword optimization)",

      "Google Analytics and performance monitoring",
      "Monthly performance report, Basic website updates (if necessary)",
    ],
    style:
      " rounded-3xl  py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "This package typically includes essential services like social media management, basic SEO, and basic website maintenance. It’s ideal for small to medium-sized restaurants looking to establish an online presence.",
    button: "Buy Now",
  },
  {
    index: 1,
    name: "Standard Digital Marketing Package",
   
    features: [
      "Social Media Management (4-5 posts per week, including graphics/videos)",
      "Paid Social Media Campaigns (Facebook and Instagram Ads)",
      "Google Ads (if applicable) + Development",
      "Full Website SEO optimization (on-page, local SEO, content updates)",
      "Reputation management (monitoring and responding to reviews)",
      "Monthly performance report & strategy review",
    ],
    style:
      " rounded-3xl  py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "This package is for companies that are more established and want to drive more sales, increase brand awareness, and optimize their online operations (including ads and advanced SEO).",
    button: "Buy Now",
  },
  {
    index: 2,
    name: "Advanced Digital Marketing Package",
    features: [
      " Social Media Management (5-7 posts per week, including Stories, Reels, and Videos)",
      "Extensive Paid Media Campaigns (Facebook Ads, Instagram Ads, Google Ads, Retargeting campaigns)",
      "Advanced SEO (keyword research, on-page, off-page, backlink building, Google My Business optimization)",
      "Video Production (monthly videos for promotions, events, food showcases)",
      "Influencer Marketing (collaborations with food influencers and bloggers)",
      "Email Marketing (segmented, personalized campaigns, and promotions)",
      "Monthly Performance Reporting (Google Analytics, social media insights, ROI from ads)",
      "Dedicated Account Manager for strategy consultation",
    ],
    style:
      " rounded-3xl  py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50 ",
    description:
      "This package is for high-end companies or larger hospitality businesses that need a comprehensive digital strategy, including advanced campaigns, influencer partnerships, video content, and more.",
    button: "Buy Now",
  },
  {
    index: 3,
    name: " Premium Package (Full-service)",
    feature: "Contact Us",
    price: "Let's Talk!",
    features: [
      "Social Media Management (Daily posts, cross-platform campaigns, video content, Stories, engagement with influencers)",
      "High-budget Paid Media Campaigns (Facebook, Instagram, Google Ads, YouTube Ads, Display Network)",
      "Comprehensive SEO (extensive on-page & off-page, backlinking strategy, local SEO, blog/content creation)",
      "Full Website Development & Maintenance (website redesigns, booking systems, online ordering systems, regular updates)",
      "Advanced Video Production (high-quality video for promotion, ads, website content)",
      "Influencer Marketing & Partnerships (long-term partnerships with top influencers)",
      "Email Marketing (advanced campaigns, segmented lists, automation)",
      "Reputation Management (actively monitoring reviews, responding to customer feedback)",
    ],
    style:
      " h-full rounded-3xl py-10 flex flex-col  bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50  ",
    description:
      "This is the highest level of service, often required by larger companies chains, franchises, or luxury hotels that need an extensive, highly tailored marketing strategy.",
    button: "Contact Us",
  },
];

const Pricing = () => {
  return ( 
    <div className="w-full  md:items-center md:justify-center
     bg-black/[0.96] antialiased 
     bg-grid-white/[0.02] relative overflow-hidden">


<div className="flex items-center justify-center flex-col   ">
          <div className="text-5xl pb-10 md:pb-20 text-slate-300 px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500 bg-opacity-50">
            Simple Pricing <br /> Choose your plan
          </div>
          <div className="grid md:grid-cols-3 gap-6 px-6 md:w-4/5 2xl:w-3/4 cursor-pointer pb-20  items-start ">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className="h-full flex flex-col justify-between border rounded-3xl px-6  "
              >
                <div className={plan.style}>
                  <div className="text-4xl flex  items-center font-medium">
                    {plan.name}
                    {/* render feature tag only for enterprise tab*/}
                    {plan.feature === "Contact Us" && (
                      <div className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full ml-4 items-center ">
                        Contact Us
                      </div>
                    )}
                  </div>
                  <div className="text-3xl pt-6 ">{plan.price}</div>
                  <div className="py-6">{plan.description}</div>

                  <ul>
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-lg  py-2 flex space-x-2 items-center"
                      >
                        {/* render checkmark only for enterprise tab*/}
                        {plan.feature === "Contact Us" ? (
                          <PiCheckCircleFill className="text-blue-400 mr-2 text-xl" />
                        ) : (
                          <PiCheckCircleFill className="text-green-600 mr-2 text-xl" />
                        )}

                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={plan.button}>
                  {index === 0 && (
                    <Link
                      href=""
                      className="rounded-3xl my-4  py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-emerald-500 to-blue-300"
                    >
                      Contact us
                    </Link>
                  )}
                    {index === 1 && (
                      <Link
                        
                        href="/"  
                        className="rounded-3xl my-4  py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-emerald-500 to-blue-300" 
                      >
                        Contact Us
                        </Link>
                    )}
                    {index === 2 && (

                          <Link
                          href="/contact"
                          className="rounded-3xl my-4  py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-purple-500 to-blue-300"
                        >
                          Contact Us
                        </Link>
                    )}  
                </div>
              </div>
            ))}
          </div>
        </div>

  </div>
  )
};

export default Pricing;
