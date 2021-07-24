import React, { useState, useEffect } from 'react'
import Navbar from "./Navbar.jsx"
import BannerCarousel from '../Carousels/BannerCarousel.jsx';

export default function Home() {

    const [scrollHeingt, setscrollHeingt] = useState (0);

    const handleScroll = () => {
      const position = window.pageYOffset;
      setscrollHeingt(position)
    };
  
    useEffect(() =>{
      window.addEventListener ("scroll", handleScroll);
    },[scrollHeingt])
  
  
    return (
      <div className="App">
        <Navbar isScrolling = {scrollHeingt}/>
        <BannerCarousel/>
      </div>
    )
  
  };
