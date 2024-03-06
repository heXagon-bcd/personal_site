import React, {useEffect, useState} from "react"
import { CodeBlock } from "./components/CodeBlock";
import { CodeRow } from "./utils/CodeRow";
import { Experiences } from "./components/Experiences";
import { Portfolio } from "./components/Portfolio";
import './output.css'

function App() {

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
      <div className="px-80">
              <div className="text-white h-screen">
                <p className="font-spaceMono text-fuchsia-300 mt-32 mb-8">Hello My Name Is</p>
                <h1 className="font-colfax font-medium text-5xl text-slate-100 mb-2">Shawn He</h1>
                <p className="font-colfax font-medium text-5xl text-slate-400 mb-8">I Deliver Value For The Web</p>
                <p className="font-colfax text-slate-400 mb-12">I am  the founder of <span className="text-fuchsia-300">Black Compass Digital</span> and Lead Developer.  I develop websites and help brands make scale to the millions</p>
                <div className="flex flex-row">
                  <CodeRow/>
                  <CodeBlock/>
                </div>
              </div>
              <div className=" text-slate-100 text-3xl font-medium mb-48">
                <h1>About Me</h1>
                  <div className="flex flex-row">
                    <div className="text-slate-400 font-colfax text-base font-normal mt-8">
                      <div className="shrink min-w-0 pr-8">
                          <p className="mb-2">"A jack of all trades is a master of none, but oftentimes better than a master of one."</p>
                          <p className="mb-2">I take pride in having worked in different industries because it led to my passion - the web. I started my career in finance, and while running my ecom store, wanted to learn about the full omni experience in retail. I was always part of many pilot technology programs, and knew that technology was a field. With a bit of luck and hard work, those experiences helped me start a private label brand and exit for just over 7 figures. After starting a Digital Marketing Agency with my co-founder Phil, we realized how important it was for one of us to become a technical founder.  Given that I was raised in a family of software engineers, it was a very natural transition.</p>
                          <p>My strategic vision is </p>
                          <p>To unwind, I do enjoy reading books about inspiration people, play some video games, and spending time with my daughter.</p>
                          {/* <li>Present - Founder & Lead Developer, Black Compass Digital.</li>
                          <li>Ecom - I started a brand in 2017 and solid it for just over 7 figures in 2021. </li>
                          <li>Retail Technology - I transformed & modernized an entire replenishment and demand system, using Blue Yonder. I wore multiple hats, and became an expert on retail systems.  </li>
                          <li>Sales - B2B sales in the telco industry and B2C sales in Banking - Lending/Investments</li> */}
                      </div>
                    </div>
                    <div className="shrink-0 mt-8"><img src="../public/images/shawnhe.png" className="w-full object-contain"></img></div>
                  </div>
              </div>
              <div className=" text-slate-100 text-3xl font-medium">
                  <h1 className="mt-24">Experiences</h1>
                  <div className="mt-8 mb-48"><Experiences/></div>    
              </div>
              <div className=" text-slate-100 text-3xl font-medium">
                <h1 className="mt-24">Portfolio</h1>
                <Portfolio/>
              </div>
      </div>
    </>
  )
}

export default App