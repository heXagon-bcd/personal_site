import React from "react";
import '../../src/output.css'

const data = [
  {
    time: "2021 - PRESENT",
    company: "Black Compass Digital",
    title:  "Founder",
    technolgy: ["Javascript", "HTML", "Tailwindcss", "React", "nodejs"],
    description:"Design, style, and deploy high-quality websites and digital experiences to deliver millions of dollars of sales to digital and phyiscal products.",
    image: '../../public/images/bcd_logo.png'
                          }
]


export const Experiences = () => {
  return (
    <>
      <div>
        {
          data.map((item,index) => (
          <div className=" text-white font-colfax flex " key={index}>
              <div className="mr-10 shrink-0">
                <img src={item.image} alt="black-compass-image" />
              </div>
              <div className="w-1/5">
                <div className="text-slate-500 font-semibold text-xs p-4 pr-8 pt-1 text-right">{item.time}</div>
              </div>
              <div className="w-4/5 mb-4">
                <div className="text-slate-200"><span>Founder, Lead Developer · </span>{item.company}</div>
                <div className="text-slate-500 mb-2">{item.title}</div>
                <div className="text-slate-500 text-sm">{item.description}</div>
                <div className="mr-3 mt-3">{item.technolgy.map((element) => (
                  <span className="px-1 py-1 w-min"><span className="rounded-full text-xs font-semibold text-purple-400 bg-purple-400 bg-opacity-20 px-3 py-1">{element}</span></span>
                ))}
                </div>
              </div>
          </div>
          ))
        }
      </div>
    </>
  )
}