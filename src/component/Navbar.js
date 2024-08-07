import React, { useState, useEffect } from 'react';
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='nav-section'>
            <nav className={`main-nav ${scrolling ? 'scrolling' : ''}`}>
                <div className='logo'>
                    <h2>
                        <span>H</span>errington.
                    </h2>
                </div>

                <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
                    <ul>
                        <li><a href='#'>Demos.</a></li>
                        <li><a href='#'>Innerpages.</a></li>
                        <li><a href='#'>Features.</a></li>
                        <li><a href='#'>FAQs.</a></li>
                        <li><a href='#'>Support.</a></li>
                        <li><a href='#'>Documentation.</a></li>
                    </ul>
                </div>

                <div className='nav-button'>
                    <button className='btn1'>Purchase Herrington</button>

                    <div className='hamburger-menu'>
                        <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons) }>
                            <GiHamburgerMenu/>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
