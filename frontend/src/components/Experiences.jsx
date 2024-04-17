import React, { useState } from "react";
import '../../src/output.css'

const data = [
  {
    time: "2021 - PRESENT",
    company: "Black Compass Digital",
    title:  "Founder",
    title2: "Lead Developer",
    technolgy: ["Javascript", "HTML", "Tailwindcss", "React", "nodejs"],
    description:"As the founder of a cutting-edge web design agency, I blend art and technology to craft unique digital experiences that elevate brands and engage users.",
    image: '/images/bcd_logo.png'
                          },
                            {
    time: "2022 - PRESENT",
    company: "Ifabric Corp",
    title:  "Ecom & Supply Chain Consultant",
    title2: "Advisor",
    technolgy: ["Javascript", "HTML", "Shopify", "Liquid", "nodejs"],
    description:"As an e-commerce consultant for a tech apparel brand, I leverage the latest digital strategies to amplify online presence, optimize sales channels, and drive sustainable growth in the competitive fashion-tech landscape.",
    image: '/images/ifab_logo.webp'
                          },
  {
    time: "2019 - 2022",
    company: "Pet Valu",
    title:  "Replenishment Lead",
    title2: "Project Manager",
    technolgy: ["Javascript", "HTML", "Shopify", "Liquid", "nodejs"],
    description:"As a replenishment lead, I fine-tune our logistics and inventory management to guarantee smooth product delivery, maximizing operational efficiency and delighting pets and their owners.",
    image: '/images/pv.png'
                          }
]


export const Experiences = ({gradientStyle}) => {

  const [width, setWidth] = useState(window.innerWidth)
  const breakpoint = 768

  React.useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  

  
console.log("width",window.innerHeight)  
  return (
    <>
      <div className="">
        {
          data.map((item,index) => (
          <div className="mb-4">
            <div className="flex flex-col text-white border-2 rounded md:mb-8 md:pt-8 md:p-6 font-colfax bf hover:border-fuchsia-300 hover:shadow-md hover:shadow-fuchsia-300 hover:bg-white/10 backdrop-blur-3xl" key={index}>
              <div className="p-4 md:flex md:flex-row">
                    <div className="flex justify-center">
                      <div className="flex justify-center w-28 md:flex-none">
                        <img className="object-contain" src={item.image} alt="black-compass-image" />
                      </div>
                    </div>
                    <div className="flex justify-center h-10 md:h-auto md:flex-none md:w-40">
                      <div className="content-center pt-8 pb-8 text-xs font-semibold md:text-center md:pr-3 md:pt-1 md:p-3 text-slate-300">{item.time}</div>
                    </div>  
                    <div className="flex flex-col mb-4 text-lg lg:text-3xl md:w-3/5 md:flex-none">
                      <div className="flex flex-col text-slate-100 md:flex-row">
                        <div className="flex justify-center text-2xl md:text-lg">{item.title2}</div>
                        {width >= breakpoint ? <div className="flex justify-center mx-3 text-lg">·</div> : null}
                        <div className="flex justify-center text-xl md:text-lg">{item.company}</div>
                      </div>
                      <div className="flex justify-center mb-2 text-md lg:text-lg xl:text-2xl text-slate-300 md:justify-start">{item.title}</div>
                      <div className="flex justify-center text-sm text-center md:text-left md:justify-start text-slate-300 ">{item.description}</div>
                      <div className="flex flex-row flex-wrap justify-center mt-3 mr-3 md:justify-normal">{item.technolgy.map((element) => (
                      <div className="px-1 py-1 w-min"><span className="px-3 py-1 text-xs font-semibold text-purple-400 bg-purple-400 rounded-full bg-opacity-20">{element}</span></div>
                    ))}
                      </div>
                    </div>       
              </div>

            </div>
          </div>
          ))
        }
      </div>
    </>
  )
}