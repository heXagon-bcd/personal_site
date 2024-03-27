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
      <div className="w-screen px-4 md:px-16 lg:px-24 xl:px-48 2xl:px-72 ">
              <div className="text-white h-svh xl:h-screen">
                <p className="mt-24 mb-8 text-lg xl:mt-32 md: font-spaceMono text-fuchsia-300">Hello My Name Is</p>
                <h1 className="mb-2 text-5xl font-medium font-colfax text-slate-50">Shawn He</h1>
                <p className="mb-8 text-5xl font-medium font-colfax text-slate-300">I Deliver Value For The Web</p>
                <p className="mb-12 text-lg font-colfax text-slate-300">I am  the founder of <span className="text-fuchsia-300">Black Compass Digital</span> and Lead Developer.  I develop websites and help brands make scale to the millions</p>
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
                          <p className="mb-2">I take pride in xhaving worked in different industries because it led to my passion - the web. I started my career in finance, and while running my ecom store, wanted to learn about the full omni experience in retail. I was always part of many pilot technology programs, and knew that technology was a field. With a bit of luck and hard work, those experiences helped me start a private label brand and exit for just over 7 figures. After starting a Digital Marketing Agency with my co-founder Phil, we realized how important it was for one of us to become a technical founder.  Given that I was raised in a family of software engineers, it was a very natural transition.</p>
                          <p>My strategic vision is </p>
                          <p>To unwind, I do enjoy reading books about inspiration people, play some video games, and spending time with my daughter.</p>
                          {/* <li>Present - Founder & Lead Developer, Black Compass Digital.</li>
                          <li>Ecom - I started a brand in 2017 and solid it for just over 7 figures in 2021. </li>
                          <li>Retail Technology - I transformed & modernized an entire replenishment and demand system, using Blue Yonder. I wore multiple hats, and became an expert on retail systems.  </li>
                          <li>Sales - B2B sales in the telco industry and B2C sales in Banking - Lending/Investments</li> */}
                      </div>
                    </div>
                    <div className="order-first mt-8 md:order-last md:shrink-0 snap-x"><img src="../public/images/shawnhe.png" className="object-contain border rounded-lg md:w-full hover:shadow-md hover:shadow-fuchsia-300"/></div>
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
    </>
  )
}

export default App