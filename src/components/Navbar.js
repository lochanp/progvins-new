import React from 'react'
import Logo from '../img/logo.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={Logo} alt='logo'></img>
      <nav className='nav-links'>
        <a className='link' href='/'>Home</a>
        <a className='link' href='/'>Services</a>
        <a className='link' href='/'>Plating Methods</a>
        <a className='link' href='/'>About Us</a>
        <a className='link' href='/'>Contact Us</a>
      </nav>
      <div className='contact-num'><a href="tel:7715089653">7715089653</a>/<a href="tel:77715090583">7715090583</a></div>
    </div>
  )
}

export default Navbar