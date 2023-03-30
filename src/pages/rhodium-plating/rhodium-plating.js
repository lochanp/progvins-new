import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import rhodium from '../../img/rhodium.png'

const RhodiumPlating = () => {
  return (
    <div className='silver-page'>
        <Navbar />
        <div className="back-img">
    <h2 className="sub-heading">Services  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg> Rhodium Plating</h2>
</div>
<div className="main-content">
    <p className="main-initial">
        Progvins has developed in-house the process for electroplating of Rhodium for industrial and decorative applications such as electronics, jewellry, cutlery etc. The baths have high efficiencies and the deposited
         Rhodium layer is lustrous, pore free and with excellent bonding properties.<br />
         The electronics industry employs electroless gold plating because of the unique properties of Rhodium, such as conductivity, zero tarnishing etc. Our electroless gold plating process is non-porous, uniform in thickness and of the highest purity. 
    </p>
</div> 
<div className="main main-one-col">
    <h1 className="inner-heading">What is Rhodium Plating ?
    </h1>
    <p className="content">Rhodium is a member of the platinum group of metals and is silver-hued, highly reflective and does not tarnish or corrode. It is harder than gold and is highly durable.
        shiny like chrome but lighter in color. It belongs to a family of noble metals on the periodic table
         that also include platinum and palladium. In general, noble metals are resistant to corrosion and oxidation
        and have historically been used in jewelry because they can withstand wear and tear for generations. Rhodium
         plating, also known as rhodium dip or rhodium flashing, is used to increase the durability, luster and light
         reflection , because it is a hard metal, a rhodium plated piece of metal will be more scratch resistant. Most rhodium plating has a thickness of 0.75 to 1.0 microns.
    </p>    
</div>
<div className="main">
    <div>
        <h1 className="inner-heading">Rhodium Plating Process</h1>
        <p className="content">
            Rhodium is plated using an electroplating process. For a piece of jewelry to be plated, it must first be thoroughly cleaned to remove all contaminants. If there is any dirt on the piece, the plating will not hold.
Distilled water, steam cleaning and electro cleaning are some ways that the item is cleaned before it is dipped into the rhodium solution. A positive electrical charge is then used to fuse the rhodium onto the base metal.
Care must be taken, because if the electric current is too high, the rhodium plating will turn black. The process takes roughly around an hour and a half to be completed.
        </p>
        <div>
            <img className="middle-img" src={rhodium} alt='' />
        </div>
    </div>
</div>
<div className="main-content">
    <p className="main-initial">    
        For more information about Rhodium Plating Service, call Progvins today on
        7208010008 / 7506588896 to discuss your requirements and get the Latest Price Quote.<br/><br />
        <a style={{margin: '1rem'}} href="tel:7506588896"><button className="btn btn-light">Call Us</button></a>
        <a href="mailto:progvins@progvins.com"><button className="btn btn-light">Mail Us</button></a>
    </p>
</div>
        <Footer />
    </div>
  )
}

export default RhodiumPlating