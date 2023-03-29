import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import ElectrolessImg from '../../img/progvins-electroless2.jpeg'
import ElectrolessImg1 from '../../img/progvins-electroless1.jpeg'
const ElectrolessPlating = () => {
  return (
    <div className='electroless-page'>
        <Navbar />
        <div class="back-img-electro">
            <h2 class="sub-heading">Plating Methods <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>Electroless Plating</h2>
        </div>
        <div class="main-content">
            <p class="main-initial">    
        We are engaged in service providing and supplying a comprehensive collection of Electroless Plating and Electroplating, etc. Our product range includes a wide range of Electroless Gold ,Silver, Palladium, Platinum & Rhodium.
        Progvins is proficient at plating a wide range of parts with both electroless and traditional electroplating methods. We work with all industries and a variety of precious and non-precious metals for coating your parts. We can go over the key benefits of electroplating and electroless plating as well as the various metal coating options to help you maximize the advantages plating can provide.
            </p>
        </div>
        <div class="main">
    <div>
        <h1 class="inner-heading">Electroless Plating</h1>
        <p class="content">
            Electroless plating, also known as chemical plating or autocatalytic plating, is a class of industrial chemical processes that create metal coatings on various materials by autocatalytic chemical reduction of metal cations in a liquid bath. 
            Typically, when you are interested in metal plating for your parts, you will opt for electroplating as the most common method. However, there is another method. You may wish to use electroless plating techniques as an alternative to electroplating in certain cases. In fact, there are many advantages to electroless plating, and many industries are exploring electroless plating more and more as a cost-effective, simple alternative to traditional electroplating techniques for coating their parts with metal.
        </p>
        <div style={{display: 'flex'}}>
            <img style={{height: '460px', width: '300px'}} class="infrastructure" src={ElectrolessImg} alt="" />
            <img style={{height: "460px" ,width: '300px'}} class="infrastructure" src={ElectrolessImg1} alt="" />
        </div>
    </div>
</div>
<div class="main  main-one-col">
    <div>
        <h1 class="inner-heading ">Electroless Plating Process</h1>
        <p class="content">
            Electroless plating, also known as autocatalytic plating, or conversion coating, is a way of plating your part without using an external power source. The process involves placing the part in an aqueous solution and depositing nickel, creating a catalytic reduction of nickel ions to plate the part without any electrical energy dispersal.
            Unlike electroplating, this is a purely chemical process, with no extra machines or electrical power necessary.
        </p>
    </div>
</div>
<div class="main  main-one-col">
    <div>
        <h1 class="inner-heading ">Advantages/Benefits Electroless Plating</h1>
        <p class="content">
            What are the advantages of electroless plating over electroplating?
            If your primary goal in plating your parts is to generate corrosion resistance rather than, for example, to beautify the product, electroless plating methods are often a better choice because the resulting plated part tends to be very hard and less porous, thereby more resistant to corrosion. For this reason, electroless plating techniques are very popular in industries where parts are vulnerable to wear and corrosion, such as in oil fields or marine applications.   
            You will often find electroless plating techniques used on parts like pumps and valves, which are frequently subjected to corrosive agents. You also tend to get very uniform metal deposits with electroless plating, with consistent thickness all around the part.
            <br /><br />    
            Thus, if you have parts with complex shapes where uniform plating might be difficult to achieve using conventional electroplating methods, electroless plating may be a much better alternative
        </p>
    </div>
</div>
<div class="main-content">
    <p class="main-initial">    
        For more information about our Electroless Plating Service, call Progvins today on
        7208010008 / 7506588896 to discuss your requirements and get the Latest Price Quote.<br/><br/>
        <a style={{margin: '1rem'}} href="tel: 08048361318"><button class="btn btn-light">Call Us</button></a>
        <a href="mailto:progvins@progvins.com"><button class="btn btn-light">Mail Us</button></a>
    </p>
</div>
        <Footer />
    </div>
  )
}

export default ElectrolessPlating