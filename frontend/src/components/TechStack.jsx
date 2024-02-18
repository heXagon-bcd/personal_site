import React from "react";
import "../../src/output.css"
import { useReactTable } from "@tanstack/react-table";

const data = [
  {
    "Languages" : ["Javascript", "Ruby", "Python", "CSS", "HTML"],
    "Frameworks" : ["React", "Tailwindcss", "Sass", "JQuery"]
  }
]

export const TechStack = (data) => {
  const table = useReactTable(data)
}

// export const TechStack = () => {
//   return (
//     <div className= "text-black flex flex-row">
//       <table>
//               <thead ></thead>
//               <tr className="text-xl font-medium"> 
//                 <th>
//                   TechStack
//                 </th>
//                 <th>
//                   Frameworks
//                 </th>
//               </tr>  
//               <tbody>
//                  <tr>
//                     <td>
//                     Javascript
//                     </td>
//                     <td>
//                     Javascript
//                     </td>
//                     <td>
//                     Javascript
//                     </td>
//                     <td>
//                     Javascript
//                     </td>
//                     <td>
//                     Javascript
//                     </td>
//                     <td>
//                     Javascript
//                     </td>

//                  </tr>
//               </tbody>      
//               <div className="text-base font-normal">
//                 <ul>Javascript</ul>
//                 <ul>NodeJS</ul>
//                 <ul>Ruby</ul>
//                 <ul>Python</ul>
//                 <ul>CSS</ul>
//                 <ul>HTML</ul>
//               </div>

//               <div className="text-base font-normal">
//                 <ul>React</ul>
//                 <ul>Tailwindcss</ul>
//                 <ul>React</ul>
//                 <ul>Sass</ul>
//                 <ul>JQuery</ul>
//                 <ul>Ajax</ul>
//               </div>
//       </table>
//     </div>
//   )
// }