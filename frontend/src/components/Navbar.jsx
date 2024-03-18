import React from "react";
import { Link } from "react-scroll"
import '../output.css'

const navigation = [
  {name: 'About',
  id: 1,
  section:'about'},
  {name: 'Experience',
  id: 2,
  section:'experience'},
  {name: 'Portfolio',
  id: 3,
  section:'portfolio'},
  {name: 'Contact',
  id: 4,
  section:'contact'},
]

export const Navbar = () => {
  return (
<div className="flex h-16 items-center justify-between">
      <div className="h-10 w-28 pl-16"><img className="inline-block h-8 align-middle" src="../../public/images/shawn_logo.png" alt="logo" /></div>
      <div className="font-spaceMono h-16 flex flex-row justify-end items-center text-sm">
      {navigation.map((item) => (
      <Link
      key={item.section}
      to={item.section}
      smooth={true}
      duration={500}
      className="cursor-pointer mr-4"
      activeClass="text-fuchsia-300">
        <button className="mr-4 ">
          <span className=" text-fuchsia-300">{`${item.id}.  `}</span>
          <span className="text-slate-100 hover:text-fuchsia-300">{item.name}</span>
        </button>
        </Link>
      ))}
      <button className="btn-border-drawing">Book Call</button>
      </div>
</div>
  )
}