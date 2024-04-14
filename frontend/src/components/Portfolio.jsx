import React from "react";
import '../../src/output.css'

const data = [
  {image:"/images/portfolio_images/flyboy.png",
  title: "Flyboy Travel Itinerary",
  description: `If you love travelling, you’ll know planning for a memorable trip is the worst part. 
I created this travel app to deal with that headache. Flyboy allows you to plan a trip’s itinerary with Yelp’s API to recommend top-rated spots and the booking.com API for the best accommodation deals.`,
  url:"https://github.com/heXagon-bcd/lhlfinal_flyboy",
  technology:["React", "Nodejs", "VanillaCSS", "YelpAPI", "BookingsAPI"]
  },
  {image:"/images/portfolio_images/taskbotics.png",
  title: "Taskbotics",
  description: `Task tracking app built from Open AI. Allows you to smartly categorize your tasks and track which tasks you are looking for. I’m a productivity geek and love hacking productivity along the way.`,
  url:"https://github.com/heXagon-bcd/lhlmidterm",
  technology:["EJS", "Nodejs", "CSS", "OpenAI", "jQuery"]
  },
  {image:"/images/portfolio_images/yogibands.png",
  title: "YogiBands",
  description: `Fitness ecom store selling fitness gear and strength bands. Started as a passion project when I wanted to design a more female-centric fitness gear brand for my fiancé now wife to help with her workouts. This turned into a full fledged business crossing over $5M in sales in 3 years and eventually selling it off in 2021. `,
  url:"https://www.theyogibands.com",
  technology:["Shopify", "Liquid", "jQuery"]
  },
  {image:"/images/portfolio_images/xnmcreations.png",
  title: "XNM Creations",
  description: `My holdco. This is my own personal blackbox. This is where all my assets and projects resides. Where I can tinker around with whatever I’m working on or building something in stealth mode. `,
  url:"https://www.xnmcreations.com",
  technology:["Shopify", "Liquid", "jQuery"]
  }
]


export const Portfolio = () => {

  data.map((item,index) => (
    console.log(item.image)
  ))
  return (
    <div className="grid grid-cols-1 font-semibold text-white md:grid-cols-2 ">
      {
        data.map((item,index) => (
          <div className="flex">
            <div index={index} className="flex flex-col p-3 mb-12 border-2 rounded-md h-96 md:h-72 md:mr-3 md:w-11/12 md:flex-row font-colfax hover:border-fuchsia-300 hover:shadow-fuchsia-300 hover:shadow-md hover:bg-white/5 backdrop-blur-3xl">
                <div className=" md:w-5/6">
                  <div href={item.url} className="flex justify-center mb-4 text-2xl text-slate-100">{item.title}</div>
                  <div className="flex mb-2 text-sm text-center md:h-32 md:text-left text-slate-300">{item.description}</div>
                  <div className="flex flex-row flex-wrap justify-center md:justify-normal">{item.technology.map((tech, index) => (
                    <div key={index} className="mx-1 w-1.65"><span className="px-3 py-1 text-xs font-semibold text-purple-400 bg-purple-400 rounded-full bg-opacity-20">{tech}</span></div>
                    ))}
                  </div>
                </div>  
                <div className="flex items-center justify-center order-first h-48 m-5 mb-4 md:w-1/6 md:m-0 md:order-last"><img className="h-20" src={item.image} alt={item.title}/></div>         
            </div>
          </div>
        ))
      }
    </div>
  );

}