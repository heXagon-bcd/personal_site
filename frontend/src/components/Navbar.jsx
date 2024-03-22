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
<div className="flex md:justify-between md:items-center md:h-16">
      <div className="md:pl-16 md:h-10 md:w-28"><img className="inline-block h-2 align-middle md:h-8" src="../../public/images/shawn_logo.png" alt="logo" /></div>
      <div className="flex flex-row items-center justify-end h-16 text-sm font-spaceMono">
      {navigation.map((item) => (
      <Link
      key={item.section}
      to={item.section}
      smooth={true}
      duration={500}
      className="mr-4 cursor-pointer"
      activeClass="text-fuchsia-300">
        <button className=" md:mr-4">
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