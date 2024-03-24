import React from "react";
import '../../src/output.css'


export const CodeBlock = () => {
return(
  <>
    <table className="text-xs bg-gray-800 md:text-base md:min-w-60p ">
      <tbody className="block md:pr-8 md:py-6 md:pl-9">
        <code className="whitespace-pre-wrap text-stone-100">
          <span className="block">
            <span className="text-pink-400">const</span> 
            <span className="text-purple-400"> Shawn</span>
            {" = { "}
          </span>
          <span className="block pl-12">
            {"currently: ["}
          </span>
          <span className="block">
            <span className="pl-20 text-yellow-200">{"Org"}</span>{":"} <span className="text-yellow-200">{"@black_compass_digital"}</span><span>{","}</span>
          </span>
          <span className="block">
            <span className="pl-20 text-yellow-200">{"Role"}</span><span>{":"}</span> <span>{"["}</span><span className="text-yellow-200">{"@founder, @lead_developer"}</span><span>{"],"}</span>
          </span>
          <span className="block pl-12">
            <span className="">{"industries: ["}</span>
          </span>
          <span className="block">
            <span className="pl-20 text-yellow-200">{"industry_experiences"}</span><span>{":"}</span> <span>{"["}</span><span className="text-yellow-200">{"@webdev,"}</span>
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
          <span className="block pl-20 md:pl-100p">
            <span>{"};"}</span>
          </span>
        </code>
      </tbody>
    </table>
  </>
)
}