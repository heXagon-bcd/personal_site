import React, {useEffect, useState} from "react"
import App from "../App";
import { Navbar } from "./Navbar";
import '../output.css'


export const MainContainer = () => {
  const [gradientStyle, setGradientStyle] = useState({});

  const handleMouseMove = (e) => {
    const x = e.pageX - e.currentTarget.offsetLeft;
    const y = e.pageY - e.currentTarget.offsetTop;
    const gradient = `radial-gradient(400px circle at ${x}px ${y}px, rgba(56, 189, 248, 0.15), transparent 80%)`;
    setGradientStyle({ background: gradient });
  };

  const handleMouseLeave = () => {
    setGradientStyle({});
  };

  return (
    <div  style={gradientStyle} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <Navbar gradientStyle={gradientStyle}/>
      <App gradientStyle={gradientStyle}/>
    </div>
  );
}