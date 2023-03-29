import React from 'react'
import Logo from '../img/logo.jpg'

const Navbar = () => {
  return (
    <div classNameName='navbar'>
      {/* <img classNameName='logo' src={Logo} alt='logo'></img>
      <nav classNameName='nav-links'>
        <a classNameName='link' href='/'>Home</a>
        <a classNameName='link' href='/'>Services</a>
        <a classNameName='link' href='/'>Plating Methods</a>
        <a classNameName='link' href='/'>About Us</a>
        <a classNameName='link' href='/'>Contact Us</a>
      </nav>
      <div classNameName='contact-num'><a href="tel:7715089653">7715089653</a>/<a href="tel:77715090583">7715090583</a></div> */}
      <section className="header-section">
      <nav className="navbar navbar-expand-lg">
        <p className="head-contact">
          <i className="fas fa-phone-alt"></i>
          <a
            href="tel: 7506588896"
            // style="text-decoration: underline"
            >7506588896</a
          ><a
            href="tel:7208010008"
            // style="text-decoration: underline"
          >
            / 7208010008</a
          >
        </p>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={Logo} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"
              ><i className="fas fa-bars"></i
            ></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarNav"
          >
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle dropbtn"
                  href="services-processes"
                  role="button"
                  aria-expanded="false"
                  >Services</a
                >
                <ul className="dropdown-menu dropdown-content">
                  <li>
                    <a
                      className="dropdown-item"
                      href="gold-service"
                      >Gold Plating</a
                    >
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="silver-service"
                      >Sliver Plating</a
                    >
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="platinum-service"
                      >Platinum Plating</a
                    >
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="palladium-service"
                      >Palladium Plating</a
                    >
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="rhodium-service"
                      >Rhodium Plating</a
                    >
                  </li>
                </ul>
              </li>
           
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle dropbtn"
                  href="plating-methods"
                  role="button"
                  aria-expanded="false"
                  >Plating Methods</a
                >
                <ul className="dropdown-menu dropdown-content">
                  <li>
                    <a
                      className="dropdown-item"
                      href="electroless-method"
                      >Electroless Plating</a
                    >
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="electroplating-method"
                      >Electroplating</a
                    >
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle dropbtn"
                  href="about"
                  role="button"
                  aria-expanded="false"
                  >About Us</a
                >
                <ul className="dropdown-menu dropdown-content">
                  <li>
                    <a
                      className="dropdown-item"
                      href="/about-company"
                      >Company History</a
                    >
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="/about-infrastructure"
                      >Infrastructure & Facilities</a
                    >
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="/about-quality"
                      >Quality Policy</a
                    >
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact"
                  >Contact Us</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
    </div>
  )
}

export default Navbar