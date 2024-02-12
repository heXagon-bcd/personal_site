import React from "react";
import '../../src/output.css'


export const CodeBlock = () => {
return(
  <>
    <table className="bg-gray-800 min-w-60p ">
      <tbody className="block">
        <code className="text-stone-100">
          <span className="block">
            <span className="text-pink-400">const</span> 
            <span className="text-purple-400"> Shawn</span>
            {" = { "}
          </span>
          <span className="block">
            {"      currently: ["}
          </span>
        </code>
      </tbody>
    </table>
  </>
)
}