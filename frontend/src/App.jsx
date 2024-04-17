import React, {useEffect, useState} from "react"
import { CodeBlock } from "./components/CodeBlock";
import { CodeRow } from "./utils/CodeRow";
import { Experiences } from "./components/Experiences";
import { Portfolio } from "./components/Portfolio";
import { AboutMe } from "./components/AboutMe";

import './output.css'

function App({gradientStyle}) {

  useEffect(() => {
    // Add the Tailwind class to the body element
    document.body.classList.add('bg-sky-950');

    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove('bg-sky-950');
    };
  }, []);


  return (
    <>
    <div className="flex items-center justify-center min-h-screen">
        <div className="w-screen px-4 md:px-16 lg:px-24 xl:px-48 2xl:px-72 max-w-screen-2xl">
                <div className="text-white h-svh xl:h-screen">
                  <p className="mt-24 mb-8 text-lg xl:mt-32 md: font-spaceMono text-fuchsia-300">Hello My Name Is</p>
                  <h1 className="mb-2 text-5xl font-medium font-colfax text-slate-50">Shawn He</h1>
                  <p className="mb-8 text-3xl font-medium font-colfax text-slate-300">Letting my curious mind wander through the web and creating fascinating projects from it. </p>
                  <p className="mb-12 text-lg font-colfax text-slate-300">As the passionate founder of <span className="text-fuchsia-300">Black Compass Digital</span> and its lead developer, I specialize in creating engaging websites and driving brand growth, helping them reach millions with creativity and meticulousness.
</p>
                    <div className="flex flex-row overflow-auto shrink-0 grow-0 h-max">
                      <CodeRow gradientStyle={gradientStyle}/>
                      <CodeBlock gradientStyle={gradientStyle}/>
                    </div>
                </div>
                <div className="mt-64 font-medium text-slate-100 mb-72">
                  <h1 className="text-6xl md:text-3xl" id="about">About Me</h1>
                    <div className="flex flex-col md:flex-row">
                      <div className="mt-8 text-lg font-normal md:text-base text-slate-300 font-colfax">
                        <div className="min-w-0 text-lg md:pr-8 shrink md:text-base">
                            <p className="mb-2">"A jack of all trades is a master of none, but oftentimes better than a master of one."</p>
                            <p className="mb-2">With a background in sales, supply chain, and e-commerce, I've leveraged my experiences to establish a successful digital marketing agency. My journey has equipped me with unique insights into customer engagement and innovation, which I apply to create standout strategies for our clients. My entrepreneurial drive fuels our agency's growth, turning challenges into opportunities. </p>
                            <p>I now add web development to my foray of skills to always keep challenging myself and taking greater leaps in my personal and career development. </p>
                            {/* <li>Present - Founder & Lead Developer, Black Compass Digital.</li>
                            <li>Ecom - I started a brand in 2017 and solid it for just over 7 figures in 2021. </li>
                            <li>Retail Technology - I transformed & modernized an entire replenishment and demand system, using Blue Yonder. I wore multiple hats, and became an expert on retail systems.  </li>
                            <li>Sales - B2B sales in the telco industry and B2C sales in Banking - Lending/Investments</li> */}
                        </div>
                      </div>
                      <div className="order-first mt-8 md:order-last md:shrink-0 snap-x"><img src="/images/shawnhe.png" className="object-contain border rounded-lg md:w-full hover:shadow-md hover:shadow-fuchsia-300"/></div>
                    </div>
                </div>
                <div className="text-3xl font-medium md:text-3xl text-slate-100">
                    <h1 id="experience"  className="mt-24">Experiences</h1>
                    <div className="mt-8 mb-72"><Experiences gradientStyle={gradientStyle}/></div>    
                </div>
                <div className="text-3xl font-medium md:text-3xl text-slate-100">
                  <h1 id="portfolio" className="mt-24 mb-8">Portfolio</h1>
                  <Portfolio/>
                </div>
                <div id="contact" className="mb-24 mt-72"><AboutMe/></div>
        </div>
    </div>
    </>
  )
}

export default App