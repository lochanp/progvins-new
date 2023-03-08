import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

const home = () => {
  return (
    <div className='landing-page'>
      <Navbar />
        <div className='main-content'>
            <section className='top-container'>
              <div className='inner-container'>
                <p className='hero-text'>
                  Expertise in highly specialized job work of Precious Metal plating
                </p>
                <p className='info-text'>
                  PROGVINS INDUSTRIES was established as a partnership firm by highly qualified and experienced technocrats in Navi Mumbai in 1980.
                </p>
                <p className='contact-info'>
                For more information about our services, and to discuss your requirements call us on 7208010008 / 750658896 or Send us a mail at progvins@progvins.com / s.rane@rrrlabs.com
                </p>
              </div>
            </section>
            <section className='home-middle'>
              <p className='comp-info'>PROGVINS INDUSTRIES was established as a partnership
                firm by highly qualified and experienced technocrats in
                Navi Mumbai in 1980. The firm carries out highly
                specialized job work of electroplating and of metal
                finishing at its plant in Navi Mumbai. In addition, it
                develops for customers tailor made process sequences
                depending on the type of components, quantity to be
                plated, quality of the components etc.
              </p>
              <p className='read-more'>Read More</p>
              <div className='company-features'>
                <div className='feature'>
                  <img src=''></img>
                  <p>Nature of Business :</p>
                  <p>Serice Provider</p>
                </div>
                <div className='feature'>
                  <img src=''></img>
                  <p>Total Number of Employees :</p>
                  <p>11 to 25</p>
                </div>
                <div className='feature'>
                  <img src=''></img>
                  <p>Year of Establishment :</p>
                  <p>1980</p>
                </div>
                <div className='feature'>
                  <img src=''></img>
                  <p>Legal Status of Firm : </p>
                  <p>Partnership Firm</p>
                </div><div className='feature'>
                  <img src=''></img>
                  <p>GST Number :</p>
                  <p>27AAHFP7988D1ZP</p>
                </div>
                <div className='feature'>
                  <img src=''></img>
                  <p>Nature of Business :</p>
                  <p>Serice Provider</p>
                </div>
              </div>
            </section>
            <section className='services-container'>
              <p className='heading'>SERVICES WE PROVIDE</p>
              <div className='all-services-container'>
                <div className='service gold'>
                  <div className='bg-opaque'>
                    <div className='service-body'>
                      <p className='title'>Gold Plating</p>
                      <p className='service-info'>
                        Electroless gold plating at progvins meets the
                        specifications of the electronics and
                        semiconductor industry. Palladium plating also
                        finds several industrial applications.
                      </p>
                      <button className='read-more-btn'>
                        Read More
                      </button>
                    </div>
                    </div>
                </div>
                <div className='service silver'>
                <div className='bg-opaque'>
                  <div className='service-body '>
                    <p className='title'>Silver Plating</p>
                    <p className='service-info'>
                    Silver electroplating is an age-old and
                    well-established process. The classical silver
                    electroplating bath chemistry depends on silver
                    potassium cyanide in water.
                    </p>
                    <button className='read-more-btn'>
                      Read More
                    </button>
                  </div>
                  </div>
                </div>
                <div className='service platinum'>
                <div className='bg-opaque'>
                  <div className='service-body '>
                    <p className='title'>Platinum Plating</p>
                    <p className='service-info'>
                    Platinum offers durability, longevity and value to
                    products that use it for plating. With a finish of
                    platinum on the exterior of a part, it gains the
                    benefits of the metal.
                    </p>
                    <button className='read-more-btn'>
                      Read More
                    </button>
                  </div>
                  </div>
                </div>
                <div className='service palladium'>
                <div className='bg-opaque'>
                  <div className='service-body '>
                    <p className='title'>Palladium Plating</p>
                    <p className='service-info'>
                    Progvins has developed in-house the process for
                    electroplating as well as brush/selective plating of gold
                    for industrial and decorative applications.
                    </p>
                    <button className='read-more-btn'>
                      Read More
                    </button>
                  </div>
                  </div>
                </div>
                <div className='service rhodium'>
                <div className='bg-opaque'>
                  <div className='service-body '>
                    <p className='title'>Rhodium Plating</p>
                    <p className='service-info'>
                    Rhodium plating, is used to increase the
                    durability, luster and light reflection , because
                    it is a hard metal, a rhodium plated piece of
                    metal will be more scratch resistant.
                    </p>
                    <button className='read-more-btn'>
                      Read More
                    </button>
                  </div>
                  </div> 
                </div>
                <div className='service metal'>
                <div className='bg-opaque'>
                  <div className='service-body'>
                    <p className='title'>Precious Metal Deposition</p>
                    <p className='service-info'>
                    The major precious metals that are deposited by
                    electroplating in our plant include silver, gold
                    of 14 to 24 karats and palladium.
                    </p>
                    <button className='read-more-btn'>
                      Read More
                    </button>
                  </div>
                  </div>
                </div>
              </div>
            </section>
        </div>
      <Footer />
    </div> 
  )
}

export default home