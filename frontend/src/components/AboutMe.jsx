import React from "react";
import '../../src/output.css'

export const AboutMe = () => {

  return(
    <div className="flex flex-col items-center text-slate-300 justify-items-center">
      <h1 className="text-3xl text-slate-100">Let's Chat</h1>
      <p className="p-12">I'm always opening to hear about opportunities, so feel free to reach out.</p>
      <a href="mailto:shawn@blackcompass.digital" className="btn-border-drawing">Contact</a>
    </div>
  )
}