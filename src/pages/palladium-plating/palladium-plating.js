import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

const PalladiumPlating = () => {
  return (
    <div>
        <Navbar />
        <div className="back-img">
    <h2 className="sub-heading">Services <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg> Palladium Plating</h2>
</div>
<div className="main-content">
    <p className="main-initial">
        At Progvins, we provide excellent palladium plating service palladium is often served as a less expensive alternative to gold.
        Palladium is naturally resistant to many corrosive forces. It has about the same level of corrosion resistance as gold.
        Progvins has developed a palladium plating process that reliably provides a high-quality coating for various components and products.
    </p>
</div>
<div className="main main-one-col">
    <h1 className="inner-heading">What is Palladium Plating ?
    </h1>
    <p className="content">
        Palladium is easy to recognize due to its somewhat bright, silver-blue appearance, its low density and its low melting point.
        Progvins has designed the palladium electroplating process to meet the increasing demand for extreme thickness required in 
        the modern manufacturing environment. It is the least dense and has the lowest melting point of the six platinum metals. Palladium is a precious metal with numerous properties that make it an excellent choice of plating material, especially in the automotive and electronics industries.
    </p>    
</div>
<div className="main">
    <h1 className="inner-heading">Palladium Plating Process
    </h1>
    <p className="content">
        Progvins has designed the palladium electroplating process to meet the increasing demand for extreme thickness required in the modern manufacturing environment. 
        We adhere to best practices throughout the palladium electroplating process to ensure the highest possible quality.During the palladium electroplating preparation process, we begin by carefully examining the basis material
        and thoroughly cleaning it via processes such as preheating, polishing and ultrasonic cleaning. As the 
        plating cycles occur, maintaining the proper strikes of palladium and nickel ensures maximum adhesion.
        After the palladium plating process, a heat treatment removes any excess trapped hydrogen from the final 
        product. Additional processes, such as applying a secondary gold plating coating on top of the palladium 
        plating, can also enhance protection.
    </p>
    <div>
        <img src="/imgs/palladium.png" height="350vh" alt='' style={{margin:'5rem 1.5rem 3rem 0rem'}} />  
    </div>    
</div>
<div className="main-content">
    <p className="main-initial">    
        For more information about Palladium Plating Service, call Progvins today on
        7208010008 / 7506588896 to discuss your requirements and get the Latest Price Quote.<br /><br />
        <a style={{margin: '1rem'}} href="tel:7506588896"><button className="btn btn-light">Call Us</button></a>
        <a href="mailto:progvins@progvins.com"><button className="btn btn-light">Mail Us</button></a>
    </p>
</div>
        <Footer />
    </div>
  )
}

export default PalladiumPlating