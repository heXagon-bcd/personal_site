import React from "react";
import '../../src/output.css'

const data = [
  {image:"../../public/images/portfolio_images/flyboy.png",
  title: "Flyboy Travel Itinerary",
  description: `This project is a Travel App Itinerary that plans your accomodation and areas of interest by day.
  It ensures that young adults are able to find the most cost effective trip.  The app leverages Yelp API, Booking COM API to query data.  The app uses react front end and node js ba`,
  url:"https://github.com/heXagon-bcd/lhlfinal_flyboy",
  technology:["React", "Nodejs", "VanillaCSS", "YelpAPI", "BookingsAPI"]
  },
  {image:"../../public/images/portfolio_images/flyboy.png",
  title: "Taskbotics",
  description: `This project is a Open Ai task tracking app.  It leverages open api to smartly categorize whatever task you want to track.  The tech stack is EJS, Nodejs, jQuery and SASS,`,
  url:"https://github.com/heXagon-bcd/lhlmidterm",
  technology:["EJS", "Nodejs", "CSS", "OpenAI", "jQuery"]
  },
  {image:"../../public/images/portfolio_images/flyboy.png",
  title: "YogiBands",
  description: `This ecom store was desiged and created by myself using Shopify. This private label brand sold $1 million dollars in sales before being sold in 2021. I used liquid, jquery to customize certain aspects of Store, such as product cards.`,
  url:"https://www.theyogibands.com",
  technology:["Shopify", "Liquid", "jQuery"]
  },
  {image:"../../public/images/portfolio_images/flyboy.png",
  title: "XNM Creations",
  description: `This is the first website i built using shopify.  It generated 2 million dollars in overall sales.`,
  url:"https://www.xnmcreations.com",
  technology:["Shopify", "Liquid", "jQuery"]
  }
]


export const Portfolio = () => {
  
  return (
    <div className="text-white font-semibold grid grid-cols-2 ">
      {
        data.map((item,index) => (
          <div>
            <div index={index} className=" border-2 font-colfax flex flex-row p-3 mr-3 mb-12 w-11/12 rounded rounded-md hover:border-fuchsia-300 hover:shadow-fuchsia-300 hover:shadow-md hover:bg-white/5 backdrop-blur-3xl">
              <div className="w-5/6">
                <a href={item.url} className="text-slate-100">{item.title}</a>
                <div className="text-slate-300 text-sm h-20">{item.description}</div>
                <div className="flex flex-row">{item.technology.map((tech, index) => (
                  <div className="mx-1 my-1 w-1.65"><span className="rounded-full text-xs font-semibold text-purple-400 bg-purple-400 bg-opacity-20 px-3 py-1">{tech}</span></div>
                  ))}
                </div>
              </div>  
              <div className=""><img className="h-20" src={item.image} alt={item.title}/></div>         
            </div>
          </div>
        ))
      }
    </div>
  );

}