import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const contact = () => {
  return (
    <div>
      <Navbar />
      <div className="back-img">
        <h2 className="sub-heading sub">CONTACT US</h2>
      </div>
      <div className="main-content">
        <p className="main-initial">
          When you are ready for the absolute best, contact us for the plating services. Stop by Progvins where
          quality craftsmanship is a matter of personal pride and tailored to each individual job .
          Give us a call any time, we will call back within twenty-four hours. In addition, we offer custom
          competitive quotes to fit every company or individual needs. If you have a dead line or a unique 
          order we make it our mission every day to fit the needs with our competitive rates.
        </p>
      </div>
      <div className='main'>
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Full Name</label>
            <input type="name" className="form-control" id="exampleInputName" />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email Address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Requirement Details</label>
            <textarea type="textarea" className="form-control" id="exampleInputPassword1"></textarea>
          </div>
          <button type="submit" className="btn btn-dark">Submit</button>
        </form>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Reach Us</h5>
            <p className="card-text">
              <i className="fas fa-map-marker-alt"></i> RRR House, Plot 80, Sector- 23,CIDCO Industrial Area,<br /> Near Bank Of India, Navi Mumbai, Thane-400705, Maharashtra, India
              <br /><i className="fas fa-directions"></i>  <a href="https://www.google.com/maps/place/80,+Sector+23,+Turbhe,+Navi+Mumbai,+Maharashtra+400703/@19.0707833,73.0140574,17z/data=!3m1!4b1!4m5!3m4!1s0x3be7c141e7c7a0eb:0x2da7ccd23d977295!8m2!3d19.0707782!4d73.0162461" rel='noreferrer' target="_blank" className="card-link" style={{textDecoration:'underline'}}><small>Get Directions</small></a>
              <br /><br /><i className="fas fa-envelope"></i> Mail Us : <a href="mailto:progvins@progvins.com" target="_blank" rel='noreferrer'>progvins@progvins.com</a> / <a href="mailto:s.rane@rrrlabs.com" rel='noreferrer' target="_blank">s.rane@rrrlabs.com</a>
              <br /><br /><i className="fas fa-phone-alt"></i>  Call Us: <a href="tel: 7208010008" style={{textDecoration:'underline'}}> 7208010008</a> <a href="tel: 7506588896" style={{textDecoration:'underline'}}> ,7506588896</a>
            </p>
          </div>
      </div>
      </div>
      {/* <div className="mapouter"><div className="gmap_canvas"><iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=plot  80,%20sector%2023,%20turbhe,navi%20mumbai%20400703,maharastra,india&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org">123movies</a><br /> */}
      {/* <style>.mapouter{{position:'relative',textAlign:'right',height:'500px',width:'100%'}}</style> */}
      {/* <a href="https://www.embedgooglemap.net">embedgooglemap.net</a> */}
      {/* <style>.gmap_canvas {{overflow:'hidden',background:'none',height:'500px',width:'100%'}}</style> */}
      {/* </div> */}
      {/* </div> */}
      <Footer />
    </div>
  )
}

export default contact