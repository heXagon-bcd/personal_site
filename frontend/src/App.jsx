import React, {useEffect} from "react"
import './output.css'


function App() {

  useEffect(() => {
    // Add the Tailwind class to the body element
    document.body.classList.add('bg-sky-950');

    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove('bg-sky-950');
    };
  }, []);

  return (
    <>
      <div className="text-white">
        <p className=" text-fuchsia-300">Hello My Name is</p>
        <h1 className="font-colfax text-5xl">Shawn He</h1>
        <p>I Deliver Value For The Web</p>
        <p>Founder for Black Compass Digital and Coder.  I develop websites and help brands make scale to the millions</p>
      </div>
    </>
  )
}

export default App
