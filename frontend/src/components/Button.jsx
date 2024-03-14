import React from "react";
import '../../src/output.css'

export const Button = (text) => {
  return(
    <button className="mr-4 ">
    <span className=" text-fuchsia-300">{text}</span>
  </button>
  )
}