import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import platinum from '../../img/platinum.png'
const PlatinumPlating = () => {
  return (
    <div className='silver-page'>
        <Navbar />
        <div className="back-img">
    <h2 className="sub-heading">Services <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg> Platinum Plating</h2>
</div>
<div className="main-content">
    <p className="main-initial">
        At Progvins, We offer many plating capabilities with this Platinum, including means of customizing your order based on Thickness of the coating.
        Like other precious metals, platinum (Pt) offers durability, longevity and value to products that use it for plating.
        With a finish of platinum on the exterior of a part, it gains the benefits of the metal without the cost of creating a solid part using this material.
    </p>
</div>
<div className="main main-one-col">
    <h1 className="inner-heading">What is Platinum Plating ?
    </h1>
    <p className="content">Platinum plating occurs through electroplating, which uses electricity and an electrolyte
        solution to deposit the ions of this metal onto the surface of the targeted base. The thickness of the 
        deposit depends on the solution used and its processing time. The electrical and electronics industries use
         platinum plating for low voltage and low energy contacts. In electroplating, platinum is often used to coat
          titanium, niobium, or stainless steel anodes. It is also used in the jewelry industry.
    </p>    
</div>
<div className="main">
    <div>
        <h1 className="inner-heading">Platinum Plating Process</h1>
        <p className="content">
            The process for electroplating with this metal depends on whether your parts need a rack or barrel/vat plating. While the setups for these methods differ, the electroplating process follows the same steps.

For rack plating, we affix large or delicate parts onto racks or build customized units to hold them. These racks keep the parts in place during the electroplating process while exposing the greatest surface area to the solution.

When barrel/vat plating, we can coat large or small quantities of durable parts by rotating them in a barrel in the electroplating solution.
        </p>
        <div>
            <img height="350vh" style={{margin: '1rem', marginLeft: '8rem'}} src={platinum} alt='' />
        </div>
    </div>
</div>
<div className="main-content">
    <p className="main-initial">    
        For more information about Platinum Plating Service, call Progvins today on
        7208010008 / 7506588896 to discuss your requirements and get the Latest Price Quote.<br /><br />
        <a style={{margin: '1rem'}} href="tel:7506588896"><button className="btn btn-light">Call Us</button></a>
        <a href="mailto:progvins@progvins.com"><button className="btn btn-light">Mail Us</button></a>
    </p>
</div>
        <Footer />
    </div>
  )
}

export default PlatinumPlating