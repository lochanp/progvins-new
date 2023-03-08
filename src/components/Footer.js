import React from 'react'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='all-footer-links'>
            <div className='footer-link'>Home</div>
            <hr />
            <div className='footer-link'>Services</div>
            <hr />
            <div className='footer-link'>Plating Methods</div>
            <hr />
            <div className='footer-link'>About Us</div>
            <hr />
            <div className='footer-link'>Contact Us</div>
        </div>
        <div className='contact-info-container'>
            <div className='title'>Reach Us</div>
            <div className='address-container'>

            </div>
            <div className='directions'>
                Get Directions
            </div>
            <div className='mail'>
                <span className=''>Mail Us :</span>
                <a href='mailto:lochan.potdar1998@gmail.com'>progvins@progvins.com</a>
            </div>
            <div className='call'>
                <span className=''>Call Us :</span>
                <a href='/'>7715089653</a>
            </div> 
        </div>
    </div>
  )
}

export default Footer