import React from 'react'
import Navbar  from '../../components/Navbar'
import Footer from '../../components/Footer'
import comp1 from '../../img/comp2.jpeg'
import comp2 from '../../img/about-infra.jpeg'
const AboutInfrastructure = () => {
  return (
    <div>
        <Navbar /> 
        <div className="back-img">
    <h2 className="sub-heading">About <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path></svg>
   Infrastructure & Facilities</h2>
</div>
<div className="main">
    <div>
        <h1 className="inner-heading">Our Facilities</h1>
        <p className="content">
            We have an ultra-modern infrastructure setup which is managed by our highly qualified team of professionals that are highly knowledgeable and skilled as per their respective domains. All our products are regularly lubricated and upgraded so as to ensure the hassle-free functioning and timely completion of all the tasks retaining the excellent production rate. Our various departments are helpful in providing excellent quality of products to our esteem clients. All our products are stringently monitored under the close supervision of quality auditors.
        </p>
        <div style={{display: 'flex'}}>
            <img className="infrastructure" style={{height: '400px', width: '320px' ,margin: '0px', paddingLeft: '0px'}} src={comp1} alt="" />
            <img className="infrastructure" style={{height: '400px', width: '320px', margin:'0px', paddingLeft: '0px'}} src={comp2} alt="" />
        </div>
    </div>
</div>
        <Footer />
    </div>
  )
}

export default AboutInfrastructure