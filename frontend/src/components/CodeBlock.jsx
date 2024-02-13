import React from "react";
import '../../src/output.css'


export const CodeBlock = () => {
return(
  <>
    <table className="bg-gray-800 min-w-60p ">
      <tbody className="block px-8">
        <code className="text-stone-100 whitespace-pre-wrap">
          <span className="block">
            <span className="text-pink-400">const</span> 
            <span className="text-purple-400"> Shawn</span>
            {" = { "}
          </span>
          <span className="block pl-12">
            {"currently: ["}
          </span>
          <span className="block">
            <span className="text-yellow-200 pl-20">{"Org"}</span>{":"} <span className="text-yellow-200">{"@black_compass_digital"}</span><span>{","}</span>
          </span>
          <span className="block">
            <span className="text-yellow-200 pl-20">{"Role"}</span><span>{":"}</span> <span>{"["}</span><span className="text-yellow-200">{"@founder, @lead_developer"}</span><span>{"],"}</span>
          </span>
          <span className="block pl-12">
            <span className="">{"industries: ["}</span>
          </span>
          <span className="block">
            <span className="text-yellow-200 pl-20">{"industry_experiences"}</span><span>{":"}</span> <span>{"["}</span><span className="text-yellow-200">{"@webdev,"}</span>
          </span>
          <span className="block pl-20">
            <span className="text-yellow-200">{"@ecom, @banking, @retail_tech,"}</span>
          </span>
          <span className="block pl-20">
            <span className="text-yellow-200">{"@demand_allocation, @merchandise_financial_planning"}</span><span>{"],"}</span>
          </span>
          <span className="block pl-12">
              <span>{"interests : ["}</span> <span></span>
          </span>
          <span className="block pl-20">
              <span className="text-yellow-200">{"@amazonFBA, @shopify, @ai, @business,"}</span>
          </span>
          <span className="block pl-20">
              <span className="text-yellow-200">{"@digital_marketing"}</span><span>{"]"}</span>
          </span>
          <span className="block pl-100p">
            <span>{"}"}</span>
          </span>
        </code>
      </tbody>
    </table>
  </>
)
}