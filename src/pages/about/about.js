import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Working1 from '../../img/working2.jpeg'
import Working2 from '../../img/working4.jpeg'

const about = () => {
  return (
    <div className='about-page'>
        <Navbar />
        <div className="back-img">
            <h2 className="sub-heading sub">ABOUT US</h2>
        </div>
        <div className="main-content">
            <p className="main-initial">
                PROGVINS INDUSTRIES was established as a partnership firm by highly qualified and experienced
                technocrats in Navi Mumbai in 1980. The company is owned by Mr. Santosh P. Rane & Dr. Nagaraj N Rao. The firm carries out highly specialized job work of 
                Precious metal plating and metal finishing at its plant in Navi Mumbai.
                In addition, it develops for customers tailor made process sequences depending on the type of components and, quality of the
                components etc.
            </p>
        </div>  
        <div className="main">
        <div>
            <p className="content">
                Progvins Industries has been carrying out specialized processes of Electroplating and Electroless
                plating. We are into Precious Metal Plating services like Gold, Silver, Platinum, Palladium, Rhodium
                for electronics, electrical and semiconductor components. We are also into Precious Metal Deposition.
                The types of electroless platings carried out are high,
                medium and low phosphorous and electroless gold plating.
                Over the years, Progvins Industries has been serving vast range of customers drawn from various
                industries such as, aerospace, electrical, electronics, pharmaceutical machinery, semi conductors,
                automotive, jewellery, hardware, tele-communications etc.
                Progvins Industries is a member of the Metal Finishers Association of India since many years.
            </p>
            <div>
                <img className="working-img1" src={Working1} alt="" />
            </div>
        </div>
    </div>
    <div className="main">
        <p className="content">Progvins’ in-house developments help us in formulating not just our own chemical
            compounds, but also establish the most appropriate plating process sequences to match client needs.
             Before undertaking any job we evaluate and optimize in our pilot plant, all process sequences and 
            parameters, in order to fine-tune the overall processes and method.
            Drawing on its vast industrial experience and continual research, Progvins specializes in plating on 
            difficult- to- plate substrates. We specialize in large scale plating on difficult- to- plate substrates.
            Progvins designs its plants for each customer with economies of scale in mind. This means we have dormant capacity in our plant infrastructure, which helps us quickly scale in proportion to the demand.
        </p>    
        <img src={Working2} className='working-img2' alt='work' />
    </div>
    <table className="Table">
        <tbody>
        <tr>
        <td>Nature of Business</td>
        <td>Service Provider & Manufacturer</td>
        </tr>
        <tr>
        <td>Company Partners</td>
        <td>Santosh P Rane & Dr.Nagaraj N Rao</td>
        </tr>
        <tr>
        <td>Total Number of Employees</td>
        <td>15 to 20 People</td>
        </tr>
        <tr>
        <td>Year of Establishment</td>
        <td>1980</td>
        </tr>
        <tr>
        <td>Legal Status of Firm</td>
        <td>Partnership Firm</td>
        </tr>
        <tr>
        <td>GST No.</td>
        <td>27AAHFP7988D1ZP</td>
        </tr>
        </tbody>
        </table>
        <Footer />
    </div>
  )
}

export default about