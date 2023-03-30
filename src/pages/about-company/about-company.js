import React from 'react'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import history from '../../img/company history.jpeg'
import history1 from '../../img/44.jpeg'
const AboutCompany = () => {
  return (
    <div>
        <Navbar />
        <div className="back-img">
    <h2 className="sub-heading">About  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path></svg> Company History</h2>
</div>
<div className="main main-one-col">
    <div>
        <h1 className="inner-heading">Company History</h1>
        <p className="content">
            PROGVINS INDUSTRIES was established as a partnership firm by highly qualified and experienced
            technocrats in Navi Mumbai in 1980. The firm carries out highly specialized job work of electroplating
            and of metal finishing at its plant in Navi Mumbai.
            In addition, it develops for customers tailor made process sequences depending on the type of components, quantity to be plated, quality of the
            components etc.
            Progvins Industries has been carrying out specialized processes of electroplating and electroless
            plating.The types of plating carried out includes Gold, Silver, Platinum, palladium and Rhodium plating on electronic and semicomductor components. 
            Along with Precious metal deposition. The types of electroless platings carried out are high,
            medium and low phosphorous and Electroless Plating.
            Over the years, Progvins Industries has been serving vast range of customers drawn from various
            industries such as, aerospace, electrical, electronics, pharmaceutical machinery, semi conductors,
            automotive, jewellery, hardware, tele-communications etc.
            Progvins Industries is a member of the Metal Finishers Association of India since many years.
        </p>
        <div style={{display: 'flex'}}>
            <img className="" style={{width: '47%', height: '400px' ,margin: '0 1rem', marginBottom: '30px'}} src={history} alt="" />
            <img className="" style={{width: "48%", height: "400px", margin: "0 0rem", marginBottom: "30px"}} src={history1} alt="" />
        </div>
    </div>
</div>
        <Footer />
    </div>
  )
}

export default AboutCompany;