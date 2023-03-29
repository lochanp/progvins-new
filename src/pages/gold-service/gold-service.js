import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import goldItem from  '../../img/gold-item.jpeg'
import goldBrush from '../../img/goldbrush.png'
import semiconductor from '../../img/semiconductors.jpg'
const GoldService = () => {
  return (
    <div className='services-page'> 
        <Navbar />
        <div class="back-img">
            <h2 class="sub-heading">Services <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg> Gold Plating</h2>
        </div>
        <div class="main-content">
            <p class="main-initial">
                Progvins has developed in-house the process for electroplating of gold for industrial and decorative applications such as electronics, jewellery, cutlery etc. The baths have high efficiencies and the deposited
                gold layer is lustrous, pore free and with excellent bonding properties.<br /><br />
                The electronics industry employs electroless gold plating because of the unique properties of gold, such as conductivity, zero tarnishing etc. Our electroless gold plating process is non-porous, uniform in thickness and of the highest purity. 
                Our electroless gold plating meets the specifications of the electronics and semiconductor industry. Our electroless palladium plating also finds several industrial applications.
            </p>
        </div> 
        <div class="main">
            <div>
                <h1 class="inner-heading">What is Gold Plating ?</h1>
                <p class="content">
                    Gold is known for its glitter and glamour, but it also has significant value from an electroplating perspective. 
                Gold plating describes any of several distinct techniques designed to fuse a thin layer of gold onto another base metal. 
                There are a number of processes that can be utilised to do so, some of which involve electroplating and others that do not. 
                Where ever gold becomes too expensive our palladium alloy plating becomes relevant. We have developed the processes for palladium
                alloy plating in-house. In addition we synthesize our own palladium salts in order to ensure consistency and quality.
                </p>
                <div>
                    <img class="middle-img" style={{height: "400px", width: "380px", marginLeft: "140px"}} alt='gold' src={goldItem} />
                </div>
            </div>   
        </div>
        <div class="main">
            <div>
                <h1 class="inner-heading">Gold Brush/Selective Plating</h1>
                <p class="content">
                    Electronics companies use gold plating to enhance the conductivity of the circuit board and
                    protect it from corrosion. Keeping a reliable connection within the circuit board is crucial to the 
                    reliable operation of any device. 
                </p>
                <div>
                    <img style={{margin:'2rem 0'}} src={goldBrush} alt='gold' />
                </div>
            </div>
        </div>
        <div class="main main-one-col">
            <h1 class="inner-heading">Electroless Gold Plating
            </h1>
            <p class="content">
                The electronics industry employs electroless gold plating because of the unique properties of gold,
                such as conductivity, zero tarnishing etc. Our electroless gold plating process is non-porous, uniform
                in thickness and of the highest purity. Our electroless gold plating meets the specifications of the 
                electronics and semiconductor industry. Our electroless palladium plating also finds several industrial applications.
            </p>    
        </div>
        <div class="main">
            <div>
                <h1 class="inner-heading">Advantages/Benefits of Gold Plating</h1>
                <p class="content">
                    Gold doesn’t just look nice it has many practical properties that make it one of the most versatile and 
                    beneficial metals that we use on a regular basis. It is one of the metals that is least susceptible to the
                    oxidation process. In other words, it is almost wholly-resistant to the problem of rusting and corrosion
                    Since oxidation also inhibits a metal’s ability to conduct electricity, gold’s natural resistance to this
                    process make it a great conductive material for use in electronics, as does the smooth finish gold creates,
                    allowed for flush connection plates.
                </p>
                <div>
                    <img class="middle-img" style={{marginTop: '4rem'}} alt='' src={semiconductor} />
                </div>
            </div>
        </div>
        <div class="main  main-one-col">
            <div>
                <h2 class="inner-heading">Methods of Gold plating</h2>
                <p class="content" style={{marginBottom: "1rem"}}>
                    On an industrial level, the main application of Gold Plating is in electronics. Like the other noble metals, gold does not corrode, making it resistant to rusting over time.
        Also, it is highly conductive for electricity, making it the perfect solution for many electronic applications.<br /><br />
                    These are some Gold Plating Methods:<br />
                    <small><i class="fas fa-dot-circle"></i></small> Gold Brush/Selective Plating<br />
                    <small><i class="fas fa-dot-circle"></i></small> Barrel/Vat Plating<br />
                    <small><i class="fas fa-dot-circle"></i></small> Rack Plating<br />
                </p>
            </div>
        </div>
        <div class="main-content">
            <p class="main-initial">    
                For more information about Gold Plating Service, call Progvins today on
                7208010008 / 7506588896 to discuss your requirements and get the Latest Price Quote.<br /><br />
                <a style={{margin: "1rem"}} href="tel:7506588896"><button class="btn btn-light">Call Us</button></a>
                <a href="mailto:progvins@progvins.com"><button class="btn btn-light">Mail Us</button></a>
            </p>
        </div>
        <Footer />
    </div>
  )
}

export default GoldService;