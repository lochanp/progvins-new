import React from 'react'
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const AboutQuality = () => {
  return (
    <div className='about-quality'>
        <Navbar />
        <div class="back-img-lab">
            <h2 class="sub-heading">About <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg> Quality Policy</h2>
        </div>
        <div class="main-content">
            <p class="main-initial">
                Progvins has its own laboratory with dedicated and full time chemists, who carry out all the tests on raw materials,
                formulations, compounds, additives, chemicals and most importantly plated components with an array of sophisticated, regularly calibrated instruments. 
                This help us generate accurate certification of quality and tolerance adherence.
            </p>
        </div>
        <div className=''>
            <div class="row">
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Stringent implementation of process parameters:</h5>
                            <p class="card-text">At Progvins we are aware that establishing process sequences and parameters isn’t enough. Equally important is the stringent implementation of these process sequences and parameters, in order to avoid compounding losses in quality and cost efficiency of the process. Hence the focus while carrying out plating jobs is not just on the process chemicals, but also on the adherence to the process parameters and the continuous education of the operators.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                        <h5 class="card-title">Pre / Post-treatments:</h5>
                        <p class="card-text">“Prevention is better than cure”, it’s evident in the plating industry. Accurate pre treatment of the substrate, gives the desired finish quality and functional features. In addition,an appropriate post-treatment helps the object to retain its finish quality and functional properties. Progvins uses its years of research and vast know-how to choose the most appropriate pre and post-treatments, for its job work. This helps us achieve an uniform finish quality and increase the plating’s functional properties.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6">
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">Thickness Testing:</h5>
                    <p class="card-text">Progvins as a company policy provides accurate coating thickness in the prescribed tolerances. We at Progvins regularly carry out random sample thickness testing. We continuously monitor bath efficiency to provide desired coating thickness.The thickness testing and bath efficiency calculation are carried out by laboratory division, where the chemists continually evaluate and modify bath chemistry to deliver on our Promise</p>
                    </div>
                </div>
                </div>
                <div class="col-sm-6">
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">Hardness Testing:</h5>
                    <p class="card-text">Progvins realizes that hardness or ductility is among the most important functional properties of the coatings. Over the years Progvins has mastered its custom additives to provide desired hardness or ductility to the coated layer on a plethora of substrates.This is followed by regular inspections to reduce component failures or rejections.
                    </p>
                    </div>
                </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Adhesion Testing:</h5>
                            <p class="card-text">We at Progvins have over the years refined our processes to not just meet but exceed industry standards. Adhesion is among the primary requirements in plating. We carry out adhesion tests online on our job floor to guarantee desired adhesion. We regularly partake and generate reports of our non destructive as well as destructive adhesion tests.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">CASS / Neutral Salt Spray Testing:</h5>
                            <p class="card-text">Progvins has in house CASS and neutral salt spray testing facilities.  We change or modify our chemistry and process parameter to match and surpass the desired level of resistance. We periodically carry out CASS or neutral salt spray tests to validate our assurances and component tolerances.
                            </p>
                        </div>
                    </div>
            </div>
        </div>
    </div>
        <Footer />
    </div>
  )
}

export default AboutQuality;