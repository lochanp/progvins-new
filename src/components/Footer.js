import React from 'react'

const Footer = () => {
  return (
    <footer>
    <div class="bottom-container row">
        <div class="col col-sm-5">
            <div class="navbar-bottom">
                <a class="bottom-links" href="/">Home</a>
                <a class="bottom-links" href="services-processes">Services</a>
                <a class="bottom-links" href="plating-methods">Plating Methods</a>
                <a class="bottom-links" href="about">About Us</a>
                <a class="bottom-links" href="contact">Contact Us</a>
            </div>
        </div>
        <div class="col col-sm-5">
            <div class="card-body" style={{color: "whitesmoke"}}>
              <h5 class="card-title">Reach Us</h5>
              <p class="card-text">
                <i class="fas fa-map-marker-alt"></i> Progvins Industries, RRR,  House, Plot 80, Sector- 23, CIDCO Industrial Area, Near Bank Of India, Navi Mumbai, Thane - 400705, Maharashtra, India
                <br /><i class="fas fa-directions"></i>  <a href="https://www.google.com/maps/place/80,+Sector+23,+Turbhe,+Navi+Mumbai,+Maharashtra+400703/@19.0707833,73.0140574,17z/data=!3m1!4b1!4m5!3m4!1s0x3be7c141e7c7a0eb:0x2da7ccd23d977295!8m2!3d19.0707782!4d73.0162461" style={{textDecoration: "underline",color: "whitesmoke"}} target="_blank" class="card-link" rel='noreferrer'><small>Get Directions</small></a>
                <br /><br /><i class="fas fa-envelope"></i> Mail Us : <a href="mailto:progvins@progvins.com" style={{color: "whitesmoke"}} rel='noreferrer' target="_blank">progvins@progvins.com</a>
                <br/><br/> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
          </svg> Call Us: <a href="tel: 7208010008" style={{textDecoration: "underline", padding: "6px"}}> 7208010008</a> <a class="phone" href="tel: 7506588896" style={{textDecoration: "underline", padding: "6px"}}>,7506588896</a> <a class="phone" href="tel: 02227684646" style={{textDecoration: "underline", padding: "6px"}}>,02227684646</a>
              </p>
            </div>
            </div>
    </div>
    <small class="copyright">&copy; <script>document.write(new Date().getFullYear())</script> 
        Progvins Industries ltd. All Rights Reserved.</small>
</footer>
  )
}

export default Footer