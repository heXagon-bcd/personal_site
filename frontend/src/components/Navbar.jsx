import React from "react";
import '../output.css'

const navigation = [
  {name: 'About',
  id: 1},
  {name: 'Experience',
  id: 2},
  {name: 'Work',
  id: 3},
  {name: 'Contact',
  id: 4},
]

export const Navbar = () => {
  return (
<div className="flex flex-col">
      <div className=""><img className="h-8" src="../../public/images/shawn_logo.svg" alt="logo" /></div>
      <div className="font-spaceMono h-16 flex flex-row justify-end items-center text-sm ">
      {navigation.map((item) => (
        <button className="mr-4 ">
          <span className=" text-fuchsia-300">{`${item.id}.  `}</span>
          <span className="text-slate-100 hover:text-fuchsia-300">{item.name}</span>
        </button>
      ))}
      <button className="btn-border-drawing">Resume</button>
      </div>
</div>
  )
}