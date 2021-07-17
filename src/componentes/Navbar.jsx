import React from 'react'


const Navbar =({isScrolling})=>{
    return (
    <nav className={`Navbar ${isScrolling > 20 ? "scrolling": null}`}>
        <div className="Navbar-logo">
            <p>🔥</p>
        </div>
    </nav>
    );
};

export default Navbar;
