import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

const SilverPlating = () => {
  return (
    <div>
        <Navbar />
        <div class="back-img">
            <h2 class="sub-heading">Services <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg> Silver Plating</h2>
        </div>
        <div class="main-content">
            <p class="main-initial">
                At Progvins, we have a long history of intensive research in the field of Silver Plating. More than 
                two decades ago we carried out the silver plating on aluminum for the electrical and electronic industry.
                We pioneered the partial silver plating on functional areas of components, there by resulting in dramatic saving in material, process time and cost.
            </p>
        </div>
        <div class="main">
            <h1 class="inner-heading">What is Silver Plating ?
            </h1>
            <p class="content">
                At Progvins we have one of the finest chemistries for decorative silver plating. In addition, 
                the latest techniques of tarnish prevention are employed to keep the Progvins silver plated components
                bright and functional for a long duration.Like many electroplating processes, silver plating involves 
                creating a circuit within an electrolytic solution that will transfer microscopic particles of silver 
                from a source to your substrate material. It can be quite a slow process, but one that produces highly
                effective results.
            </p>
            <div>
                <img src="/imgs/silver.png" height="350vh" alt='' style={{margin:"2rem 6rem"}} /> 
            </div>    
        </div>
        <div class="main">
            <h1 class="inner-heading">Silver Electroplating</h1>
            <p class="content">
                Silver electroplating is an age-old and well-established process. The classical silver electroplating bath
                chemistry depends on silver potassium cyanide in water and large amount of free cyanide, usually in the form
                of potassium cyanide. Many cyanide silver plating baths contain strong chelating agents such as EDTA, making 
            effluent treatment difficult. Also, some of the brightening agents are based on toxic metals such as selenium,
                bismuth, antimony and arsenic. However, the greatest disadvantage of such baths is the cyanide. The operators
                have to work with extreme care, taking all safety precautions. Further, the effluent contains free cyanide 
                and must be properly treated to destroy the free cyanide. The occupational hazards of having to handle such
                toxic and poisonous chemicals are obvious. The LD50 for potassium cyanide and hydrogen cyanide are 5 mg/Kg 
                body weight and 1-3 mg/Kg body weight, respectively. Moreover, hydrogen cyanide is rapidly absorbed when 
                inhaled and is fatal. For these reasons, the need for a stable, commercially viable and cyanide-free 
                alternative for silver plating has been developed in-house, with particular reference to electrical and electronic components.
            </p>
            <div>
                <img src="\imgs\ganpati-silver.png" alt='' height="530vh" style={{margin: "2rem" ,marginTop: '3rem'}} /> 
            </div>    
        </div>
        <div class="main">
    <h1 class="inner-heading" style={{fontSize: '2rem'}}>Shubhra Non-Cyanide Selective Stroke Brush Silver Electroplating
    </h1>
    <p class="content">
        The Shubhra ™ non-cyanide silver electroplating process contains absolutely no cyanide in any form. 
        As with the current cyanide-based silver electroplating processes, the SHUBHRA™ process operates at room temperature and the bath is alkaline, but with a milder pH value of 10.0.
    </p>  
        <p class="content">
        Standard equipments are used for the process and standard process sequence is followed. 
        However, no strike silver plating is necessary in the SHUBHRA® process for copper and copper 
        alloys. All organic components of the bath are fully bio-degradable. The process can be carried out 
        both in barrel and in vat mode. The deposits are fine-grained and uniform and have hardness up to 140 HV 
        0.1. The bath has excellent metal distribution and no immersion deposition occurs. The wear resistivity
         of the coating obtained by the Shubra ® process is superior.  Following typical research and development studies over several years, laboratory trials, pilot-plant trials and commercial trials, this cyanide-free process is now available for electroplating of silver in barrel or vat mode.
    </p> 
        <img src='\imgs\silver-non.png' height="620vh"alt='' style={{marginLeft: "3rem", marginTop: "3rem" ,marginBottom: "2rem"}} />
</div>
<div class="main">
    <h1 class="inner-heading">Shubhra Process for Electrical & Electronic Components</h1>
    <p class="content">
        The new process can be used for silver plating of all electrical and electronic components, including 
        toggle and slide switches, contact tips, switchgear components, bus bars, new or worn-out electrical 
        contacts, fasteners, diplexers, antennae parts, bearing surfaces and others. Moreover, the process can 
        conveniently be used in the form of a kit on-site to do brush-plating of bus-bars, without having to 
        dismantle the whole assembly and transporting it. The entire process is non-hazardous and does not require 
        special equipment or procedures for storage, transportation and disposal. A newly developed cyanide-free 
        silver electrolyte has been tested under standard production conditions. It allows technical silver-plating 
        without the use of cyanide. No pre-silver plating is necessary for coating non-ferrous metal materials. The
        properties of the coatings deposited from this solution are at par with known characteristics pertaining to
        cyanide electrolytes. Additional advantages to be gained involve occupational and industrial safety and 
        improved waste-water treatment. 
    </p>   
    <div>
        <img src='imgs/shubhra-elec.png' alt='' />
    </div>
</div>

<div class="main-content">
    <p class="main-initial">    
        For more information about Silver Plating Service, call Progvins today on
        7208010008 / 7506588896 to discuss your requirements and get the Latest Price Quote.<br /><br />
        <a style={{margin: '1rem'}} href="tel:7506588896"><button class="btn btn-light">Call Us</button></a>
        <a href="mailto:progvins@progvins.com"><button class="btn btn-light">Mail Us</button></a>
    </p>
</div>
        <Footer />
    </div>
  )
}

export default SilverPlating