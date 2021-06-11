import React from "react"
import "./Navbar.css"


const Navbar =({isScrolling})=>{
    return (
    <nav className={`Navbar ${isScrolling > 20 ? "scrolling": null}`}>
        <div className="Navbar-logo">
            <p>E-commerce</p>
            
        </div>
    </nav>
    );
};

export default Navbar;