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
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
          </svg>
          <a  href="tel: 7506588896">7506588896</a>
          <a href="tel:7208010008"> / 7208010008</a>
        </p>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={Logo} alt='logo'/>
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