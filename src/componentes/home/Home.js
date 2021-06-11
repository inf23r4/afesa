import React, { useState, useEffect }from "react"
import "./Home.css"
import Navbar from './Navbar'
import DataProducto from "../productos/DataProducto"
import { ModalAdd } from "../productos/AddProducto";


function Home() {

    const [showModalAdd, setShowModalAdd] = useState (false);

    const openModalAdd = () => {
      setShowModalAdd(prev => !prev)
    };

    const [scrollHeingt, setscrollHeingt] = useState (0);

    const handleScroll = () => {
      const position = window.pageYOffset;
      setscrollHeingt(position)
    };
  
    useEffect(() =>{
      window.addEventListener ("scroll", handleScroll);
    },[scrollHeingt])
  
    
    return (
      <>
                <div className="Home">
                <Navbar isScrolling = {scrollHeingt}/>
                
                <DataProducto/>

                <button className="btn btn-dark" type="button" onClick={openModalAdd}>Add</button>
                <ModalAdd showModalAdd={showModalAdd} setShowModalAdd={setShowModalAdd}/>
            </div>

      </>
            
  
    )
}

export default Home;
