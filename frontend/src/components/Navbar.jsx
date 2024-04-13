import React, { useState } from "react";
import { Link, Element } from "react-scroll"
import { IoMenu, IoClose } from "react-icons/io5";
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

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  
  return (
    // desktop view
<div className="relative flex items-center justify-between h-auto">
      <div className="w-10 h-10 pl-4 md:pl-16 md:h-10 md:w-28"><img className="inline-block align-middle md:h-8" src="/images/shawn_logo.png" alt="logo" /></div>
      <div className="items-center justify-end hidden h-16 text-sm md:flex flmd:ex-row font-spaceMono">
      {navigation.map((item) => (
      <Link
      key={item.section}
      to={item.section}
      smooth={true}
      duration={500}
      className="p-4 cursor-pointer"
      activeClass="text-fuchsia-300">
        <button className=" md:mr-4">
          <span className=" text-fuchsia-300">{`${item.id}.  `}</span>
          <span className="text-slate-100 hover:text-fuchsia-300">{item.name}</span>
        </button>
        </Link>
      ))}
      <button className="btn-border-drawing md:mr-16">Book Call</button>
      </div>

      {/* mobile */}
      <div onClick={handleNav} className="block size-14 md:hidden">
        {nav ? <IoClose color="#F0ABFC" className="fixed z-50 w-12 h-12 pr-2"/> : <IoMenu color="#F0ABFC" className="fixed z-50 w-12 h-12 pr-2"/>}
      </div>

      <ul className={nav ? " fixed bg-sky-950 inset-0 md:hidden ease-in-out duration-500 w-[60%] z-50" : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'}>
        <div className="flex flex-col w-9/12">
          <h1 className="p-4 text-3xl font-bold text-fuchsia-300">Menu</h1>
            {navigation.map((item) => (
              <Link
              key={item.section}
              to={item.section}
              smooth={true}
              duration={500}
              className="p-4 text-xl font-bold hover:border-2 hover:border-fuchsia-300"
              activeClass="text-fuchsia-300">
                <button className="">
                  <span className="text-fuchsia-300">{item.name}</span>
                </button> 
                </Link>
            ))}    
        </div>    
      </ul>
      
</div>
  )
}