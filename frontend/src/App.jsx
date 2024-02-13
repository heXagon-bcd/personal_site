import React, {useEffect} from "react"
import { CodeBlock } from "./components/CodeBlock";
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
<div className="px-40">
        <div className="text-white h-screen">
          <p className="font-spaceMono text-fuchsia-300 mt-32 mb-8">Hello My Name Is</p>
          <h1 className="font-colfax font-medium text-5xl text-slate-100 mb-2">Shawn He</h1>
          <p className="font-colfax font-medium text-5xl text-slate-400 mb-8">I Deliver Value For The Web</p>
          <p className="font-colfax text-slate-400 mb-20">I am  the founder of <span className="text-fuchsia-300">Black Compass Digital</span> and Lead Developer.  I develop websites and help brands make scale to the millions</p>
          <CodeBlock/>
        </div>
        <div className=" text-slate-100 text-3xl font-medium">
          <h1>About Me</h1>
          <div className="text-slate-400 font-colfax text-base font-normal mt-8">
            <p className="mb-2">"A jack of all trades is a master of none, but oftentimes better than a master of one."</p>
            <p> I take pride in learning many industires because it led to my passion - the web.</p>
            <li>Present - Founder & Lead Developer, Black Compass Digital.</li>
            <li>Ecom - I started a brand in 2017 and solid it for just over 7 figures in 2021. </li>
            <li>Retail Technology - I transformed & modernized an entire replenishment and demand system, using Blue Yonder. I wore multiple hats, and became an expert on retail systems.  </li>
            <li>Sales - B2B sales in the telco industry and B2C sales in Banking - Lending/Investments</li>
          </div>
 
          
        </div>
</div>
    </>
  )
}

export default App