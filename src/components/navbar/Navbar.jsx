import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import './navbar.css'

const Navbar = () =>
{
    const [toggleMenu, setToggleMenu] = useState( false )

    const NavLinks = () => (
        <>
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">What is GPT?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
        </>
    )
    return (
        <div className='navbar'>
            <div className="navbar_links">
                <div className="navbar_links_logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="navbar_links_container">
                    <NavLinks />
                </div>
            </div>
            <div className="navbar_sign">
                <p>Sign In</p>
                <button type="button">Sign Up</button>
            </div>
            <div className="navbar_menu">
                {
                    toggleMenu ?
                        <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu( false )} />
                        :
                        <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu( true )} />
                }
                {toggleMenu && (
                    <div className="navbar_menu_container scale-up-center">
                        <div className="navbar_menu_container_links">
                            <NavLinks />
                        </div>

                        <div className="navbar_menu_container_links_sign">
                            <p>Sign In</p>
                            <button type="button">Sign Up</button>
                        </div>
                    </div>

                )}
            </div>
        </div>
    )
}

export default Navbar
