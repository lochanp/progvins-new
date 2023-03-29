import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import gold from '../../img/gold.png'
import silver from '../../img/Silver-Plated-Process.jpg'
import platinum from '../../img/platinum.png'
import palladium from '../../img/palladium.png'
import rhodium from '../../img/rhodium.png'
const Services = () => {
  return (
    <div className='services-page'>
        <Navbar />
        <div class="back-img">
            <h2 class="sub-heading sub">Our Services</h2>
        </div>
<div class="main-content">
    <p class="main-initial">
        We are engaged in service providing and supplying a comprehensive collection of Electroless Plating 
        and Electroplating, etc. All our products are widely acclaimed by the customers due to their longer
        functional life, corrosion & abrasion resistance, dimensional accuracy, high performance and sturdy 
        construction. We procure our raw material from the reliable and authorized vendors of the market. 
        By following Total Quality Management (TQM) principles, we are maintaining international quality standards through inspection and stringent quality testing of each and every product at our unit. Also, offering services of Precious Metal Deposition, Plastic Plating Service, etc.
    </p>
</div>
<div class="inner-main">
    <h1 class="inner-heading">Services We Provide</h1>
    <div class="inner-content">
        Progvins provides services such as metal finishing, surface coating, plating electical and electronic components,
        including semiconductors and other electroplating needs. We provide an extensive range of processes, each one performed by our fully-accredited and highly-trained staff.
        Here are some of our most popular processes. Simply click on the button for more detailed information.<br /><br />
    </div>
</div>
<div class="sections">
<h1 class="inner-heading">Gold Plating</h1>
<div class="row">
    <div class="col-sm-7">
    <div class="inner-content para">
        We have a number of different techniques for plating with gold, all of which produce impeccable results.
         Hugely popular in the electronics industry, thanks to its conductive qualities and resistance to both 
         corrosion and heat, gold plating remains one of our most sought-after processes.Gold is one of the
         easiest metals to electroplate, mainly due to the fact that it is almost inert. For this reason it forms an excellent undercoat for plating 
         onto passive metals, for example high chromium-nickel containing alloys such as stainless steel. 
    <a href="gold-service"><button class="btn btn-dark read-btn">Read More</button></a>
</div>
</div>
<div class="col-sm-4">
    <img class="about-img" src={gold} alt="" />
</div>
</div>

<h1 class="inner-heading">Silver Plating</h1>
<div class="row">
    <div class="col-sm-7">
    <div class="inner-content para">
        As one of the most electrically conductive metals on the market, silver is a natural 
        choice for the electronics and connector market. Our silver plating process can produce
         a vast range of thickness from a flash upto 8mm thick.At Progvins, we have a long history of 
         intensive research in the field of Silver Plating. More than two decades ago we carried out the silver plating on aluminum for the electrical and electronic industry. 
    <a href="silver-service"><button class="btn btn-dark read-btn">Read More</button></a>
</div>
</div>
<div class="col-sm-4">
    <img class="" width="129%" height="210vh" src={silver} alt="" />
</div>
</div>
 <h1 class="inner-heading">Platinum Plating</h1>
<div class="row">
    <div class="col-sm-7">
    <div class="inner-content para">
        Like other precious metals, platinum (Pt) offers durability, longevity and value to products 
        that use it for plating. With a finish of platinum on the exterior of a part, it gains the benefits
         of the metal without the cost of creating a solid part using this material. In platinum plating thicknesses of coating ranges
          from 0.125 to 25 microns.
    <a href="platium-service"><button class="btn btn-dark read-btn">Read More</button></a>
</div>
</div>
<div class="col-sm-4">
    <img class="service-img" src={platinum} alt="" />
</div>
</div>
<h1 class="inner-heading">Palladium Plating</h1>
<div class="row">
    <div class="col-sm-7">
    <div class="inner-content para">
        Palladium is a precious metal with numerous properties that make it an excellent choice of plating material,
        especially in the automotive and electronics industries. SPC has developed a palladium plating process that reliably provides a high-quality coating for various components and products. Keep reading to
         learn more about palladium plating, including its characteristics, benefits, drawbacks and applications.
    <a href="palladium-service"><button class="btn btn-dark read-btn">Read More</button></a>
</div>
</div>
<div class="col-sm-4">
    <img class="service-img" src={palladium} alt="" />
</div>
 <h1 class="inner-heading">Rhodium Plating</h1>
<div class="row">
    <div class="col-sm-7">
    <div class="inner-content para">
        Rhodium is one of the rarest metals on earth, which also makes it one of the most expensive.
         It is an extremely durable element that has a gorgeous pure silver-white color that is highly reflective.
         Rhodium plating, also known as rhodium dip or rhodium flashing, is used to increase the durability, luster
          and light reflection , because it is a hard metal, a rhodium plated piece of metal will be more scratch resistant.
    <a href="rhodium-service"><button class="btn btn-dark read-btn">Read More</button></a>
</div>
</div>
<div class="col-sm-4">
    <img class="service-img" src={rhodium} alt="" />
</div>
</div>
<h1 class="inner-heading">Precious Metal Deposition</h1>
<div class="row">
    <div class="col-sm-7">
    <div class="inner-content para">
        The major precious metals that are deposited by electroplating in our plant include silver,
         gold of 14 to 24 karats and palladium.Our white and bright silver electroplating is very popular
          not only for industrial applications (e.g. switch gear components) but also for decorative applications
           (e.g. jewellery & cutlery). Our silver coatings are protected by state of the art anti-tarnish technology. 
    <a href="pmd-service"><button class="btn btn-dark read-btn">Read More</button></a>
</div>
</div>
<div class="col-sm-4">
    <img class="service-img" src="/imgs/precious-metal-deposition.jpg" alt="" />
</div>
</div>
</div>
    <div class="main-content">
        <p class="main-initial">    
            For more information about our Services and Products, call Progvins today on
            7208010008 / 7506588896 to discuss your requirements and get the Latest Price Quote..<br /><br />
            <a style={{margin: '1rem'}} href="tel:7506588896"><button class="btn btn-light">Call Us</button></a>
            <a href="mailto:progvins@progvins.com"><button class="btn btn-light">Mail Us</button></a>
        </p>
    </div> 
    </div>
        <Footer />
    </div>
  )
}

export default Services