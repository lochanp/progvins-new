import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import plating1 from '../../img/progvins-electroless3.jpeg'
const PlatingMethods = () => {
  return (
    <div className='plating-methods'>
        <Navbar />
        <div class="back-img-plating">
            <h2 class="sub-heading sub">PLATING METHODS</h2>
        </div>
        <div class="main-content">
            <p class="main-initial">
                    We are engaged in Service providing and supplying a comprehensive collection of Electroless Plating and Electroplating, etc. All our products are widely acclaimed by the customers due to their longer functional life, corrosion & abrasion resistance, dimensional accuracy, high performance and sturdy construction. We procure our raw material from the reliable and authorized vendors of the market. By following Total Quality Management (TQM) principles, we are maintaining international quality standards through inspection and stringent quality testing of each and every product at our unit. Also, offering services of Precious Metal Deposition, Plastic Plating Service, etc.
            </p>
        </div>
        <div class="main">
            <div>
                <p class="content">
                    Plating is a surface covering in which a metal is deposited on a conductive surface. 
                Plating is used to decorate objects, for corrosion inhibition, to improve solderability, to harden, to improve wearability, to reduce friction, to improve paint adhesion, to alter conductivity, to improve IR reflectivity, for radiation shielding, and for other purposes.
                There are several plating methods, and many variations. In one method, a solid surface is covered with a metal sheet, and then heat and pressure are applied to fuse them. Other plating techniques include electroplating, vapor deposition under vacuum and sputter deposition.
                </p>
                <div>
                    <img class="plating-img" src={plating1} alt="" />
                </div>
            </div>
        </div>
        <h1 class="inner-heading">These are the different methods of plating services we offer:</h1>
        <div class="row">
            <div class="col-sm-6">
            <div class="card">
                <div class="card-body">
                <h5 class="card-title">Electroless Plating</h5>
                <p class="card-text">Electroless plating, also known as chemical or auto-catalytic plating, is a non-galvanic plating method that involves several simultaneous reactions in an aqueous solution, which occur without the use of external electrical power.
                    The most common electroless plating method is electroless nickel plating, although silver, gold and copper layers can also be applied in this manner, as in the technique of angel gilding.</p>
                <a href="electroless-method"><button class="btn btn-dark">Read More</button></a>
                </div>
            </div>
            </div>
            <div class="col-sm-6">
            <div class="card">
                <div class="card-body">
                <h5 class="card-title">Electroplating</h5>
                <p class="card-text">In electroplating, an ionic metal is supplied with electrons to form a non-ionic coating on a substrate. A common system involves a chemical solution with the ionic form of the metal, an anode (positively charged) which may consist of the metal being plated (a soluble anode) or an insoluble anode (usually carbon, platinum, titanium, lead, or steel), and finally, a cathode (negatively charged) where electrons are supplied to produce a film of non-ionic metal.</p>
                <a href="electroplating-method"><button class="btn btn-dark">Read More</button></a>
                </div>
            </div>
            </div>
        </div>
        <div class="main-content">
            <p class="main-initial">    
                For more information about our Electroless & Electroplating Services, call Progvins today on
                7208010008 / 7506588896 to discuss your requirements and get the Latest Price Quote.<br /><br />
                <a style={{margin: '1rem'}} href="tel:7506588896"><button class="btn btn-light">Call Us</button></a>
                <a href="mailto:progvins@progvins.com"><button class="btn btn-light">Mail Us</button></a>
            </p>
        </div>
        <Footer />
    </div>
  )
}

export default PlatingMethods;