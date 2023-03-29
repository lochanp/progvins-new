import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Electro1 from '../../img/progvins-electroless3.jpeg'
const ElectroPlating = () => {
  return (
    <div className='electroplating-page'>
        <Navbar />
        <div class="back-img-plating">
    <h2 class="sub-heading">Plating Methods <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg> Electroplating</h2>
</div>
<div class="main-content">
    <p class="main-initial">    
We are engaged in manufacturing and supplying a comprehensive collection of Electroless Plating and Electroplating, etc. Pioneers in the industry, we offer Tamra Cyanide - Free Copper Plating, Hard Chrome Plating, Precious Metal Deposition, Sulphamate Nickel Plating and Plating on Plastics (POP) from India.
Progvins is proficient at plating a wide range of parts with both electroless and traditional electroplating methods.
    </p>
</div>
<div class="main">
    <div>
        <h1 class="inner-heading">Electroplating</h1>
        <p class="content">
            Electroplating is a general name for processes that create a metal coating on a solid substrate 
            through the reduction of cations of that metal by means of a direct electric current. 
            The part to be coated acts as the cathode of an electrolytic cell; the electrolyte is a solution of a salt of the metal to be coated; and the anode is usually either a block of that metal, or of some inert conductive material.
            Electroplating is widely used in industry and decorative arts to improve the surface qualities of objects—such as resistance to abrasion and corrosion, lubricity, reflectivity, electrical conductivity, or appearance.
            The term "electroplating" may also be used occasionally for processes that use an electric current to achieve oxidation of anions on to a solid substrate
        </p>
        <div>
            <img class="infrastructure" src={Electro1} alt="" />
        </div>
    </div>
</div>
<div class="main  main-one-col">
    <div>
        <h1 class="inner-heading ">Electroplating Process</h1>
        <p class="content">
            In this process the electrolyte should contain positive ions of the metal to be deposited. These cations are reduced at the cathode to the metal in the zero valence state.
            When the anode is made of the coating metal, the opposite reaction may occur there, turning it into dissolved cations.
            The anode may instead be made of a material that resists electrochemical oxidation, such as lead or carbon. Oxygen, hydrogen peroxide, or some other byproducts are then produced at the anode instead. 
            The plating is most commonly a single metallic element, not an alloy. However, some alloys can be electrodeposited, notably brass and solder. <br /><br/>
            These are some types of Electroplating process:<br />
            <small><i class="fas fa-dot-circle"></i></small> Strike<br />
            <small><i class="fas fa-dot-circle"></i></small> Electrochemical deposition<br />
            <small><i class="fas fa-dot-circle"></i></small> Pulse electroplating<br />
            <small><i class="fas fa-dot-circle"></i></small> Brush/Selective electroplating<br />
            <small><i class="fas fa-dot-circle"></i></small> Barrel/Vat plating<br />
        </p>
    </div>
</div>
<div class="main main-one-col">
    <h1 class="inner-heading">Brush/Selective Electroplating Gold/Sliver</h1>
    <iframe class='vid' width="600" height="325" src="https://www.youtube-nocookie.com/embed/4wfAiGkdGnU?&" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<div class="main-content-plating">
    <p class="main-initial">    
        For more information about our Electroplating Service, call Progvins today on
        7208010008 / 7506588896 to discuss your requirements and get the Latest Price Quote.<br /><br />
        <a style={{margin: '1rem'}} href="tel: 08048361318"><button class="btn btn-light">Call Us</button></a>
        <a href="mailto:progvins@progvins.com"><button class="btn btn-light">Mail Us</button></a>
    </p>
</div>
        <Footer />
    </div>
  )
}

export default ElectroPlating