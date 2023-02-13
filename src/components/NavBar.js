import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/icons_assets/Logo.png'
import hamburger from '../assets/icons_assets/hamburger.png'
import close from '../assets/icons_assets/close.png'

import './NavBar.css'


export default function NavBar() {

    window.addEventListener('scroll', function () {
        const header = document.querySelector('nav')
        header.classList.toggle('active', window.scrollY > 0)
    })


    const [showLinks, setShowLinks] = useState(false)
    const linksContainerRef = useRef(null)
    const linksRef = useRef(null)

    const toggleLinks = () => {
        setShowLinks(!showLinks)
    }

    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height
        if (showLinks) {
            linksContainerRef.current.style.height = `${linksHeight}px`
            linksContainerRef.current.style.backgroundColor = 'white'
        } else {
            linksContainerRef.current.style.height = '0px'
            linksContainerRef.current.style.backgroundColor = 'transparent'
        }
    }, [showLinks])

    return (

        <nav id='navbar'>

            <div className='wrapper'>

                <div className='nav-header'>
                    <img src={logo} alt='little lemon' className='logo' />

                    <button className='hamburger-btn' onClick={toggleLinks}>
                        {showLinks? <img src={close} alt="close button"/>: <img src={hamburger} alt="hamburger menu"/>}
                    </button>
                </div>

                <div className='links-container' ref={linksContainerRef}>
                    <ul className='links' ref={linksRef}>
                        <li>
                            <Link to='/' onClick={toggleLinks}>Home</Link>
                        </li>

                        <li>
                            <Link to='/about' onClick={toggleLinks}>About</Link>
                        </li>

                        <li>
                            <Link to='/menu' onClick={toggleLinks}>Menu</Link>
                        </li>

                        <li>
                            <Link to='/booking' onClick={toggleLinks} >Reservations</Link>
                        </li>

                        <li>
                            <Link to='/order-online' onClick={toggleLinks}>order online</Link>
                        </li>

                        <li>
                            <Link to='/login' onClick={toggleLinks}>Login</Link>
                        </li>
                    </ul>
                </div>




            </div>

        </nav>
    )

}