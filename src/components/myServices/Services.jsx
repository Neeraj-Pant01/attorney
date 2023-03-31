import React, { useState }  from 'react'
import "./service.css"
import Topbar from "../lawers/Topbar";
import Sidebar from "../lawers/Sidebar"
// import {GiHandcuffs} from 'react-icons/gi'
import { Link } from 'react-router-dom';
import Smob from "./smob/Smob";
import ServiceSidebar from './ServiceSidebar';

const Services = () => {
    const [showSidebar, setShowSidebar] = useState(false)
    const [comp1, setComp1] = useState(null);
    const [comp2, setComp2] = useState(null);
    const [comp3, setComp3] = useState(null);
    const [comp4, setComp4] = useState(null);
    const [comp5, setComp5] = useState(null);
    const [comp6, setComp6] = useState(null);
    const [comp7, setComp7] = useState(null);
  return (
    <>
    <div className='services-wrapper'>
        <Topbar />
        <div className='services-cont'>
        <Sidebar />
        <div className='services'>
                <div className='services-top'>
                {
                    !showSidebar && <button className='edit-btn' onClick={()=>setShowSidebar(true)}>Edit</button>
                }
                    <p className='YOUR_SERVICES'>YOUR SERVICES</p>
                    <hr></hr>
                    <p className='p-desc'>Our past cases prove the practical and effective results in successfully defending and negotiatingcriminal charges. We will provide you with a step-by-step plan to defend your charges and ideallyresolve before trial</p>
                </div>
                <div className='service-options'>
                    <div className='service-option'>
                        <img src="/assets/crimes/offence.svg" alt='sexual-crimes' className='sexual-crimes'></img>
                        <p>Sexual Offences</p>
                    </div>
                    <div className='service-option'>
                    <img src="/assets/crimes/bail2.svg" alt='sexual-crimes' className='sexual-crimes'></img>
                        {/* <GiHandcuffs className='bail'/> */}
                        <p>Bail</p>
                    </div>
                    <div className='service-option'>
                    <img src='/assets/crimes/hacking.svg' alt='internet-crimes' className='internet-crimes'></img>
                    <p>Case File</p>
                    </div>

{ 
                   comp1 &&<div className='service-option'><img src='/assets/crimes/sexualOffence.svg' alt='internet-crimes' className='internet-crimes'></img><p>Domestic Voilence</p></div>
}

{comp2 &&<div className='service-option'>
                    <img src='/assets/crimes/sexualOffence.svg' alt='internet-crimes' className='internet-crimes'></img>
                    <p>Domestic Voilence</p>
                    </div>}

                    { comp3 &&
                    <div className='service-option'>
                    <img src='/assets/crimes/sexualOffence.svg' alt='internet-crimes' className='internet-crimes'></img>
                    <p>Domestic Voilence</p>
                    </div>}

                    { comp4 &&
                    <div className='service-option'>
                    <img src='/assets/crimes/sexualOffence.svg' alt='internet-crimes' className='internet-crimes'></img>
                    <p>Domestic Voilence</p>
                    </div>}

                   { comp5 &&
                    <div className='service-option'>
                    <img src='/assets/crimes/sexualOffence.svg' alt='internet-crimes' className='internet-crimes'></img>
                    <p>Domestic Voilence</p>
                    </div>}

                </div>
                <div className='addidtinal-services-title'>
                    <div className='title-box'>
                        <span className='YOUR-ADDITIONAL-SERVICES'>YOUR ADDITIONAL SERVICES</span>
                        <hr></hr>
                    </div>
                    {!showSidebar && <button className='add-btn'>Edit</button>}
                </div>

                <div className='advanced-service-options'>
                    <div className='service-option'>
                        <img src="/assets/crimes/legalnotice.svg" alt='sexual-crimes' className='sexual-crimes'></img>
                        <p>Legal Notice</p>
                    </div>
                    <div className='service-option'>
                    <img src="/assets/crimes/affidavit.svg" alt='sexual-crimes' className='sexual-crimes'></img>
                        <p>Affidavit</p>
                    </div>
                    <div className='service-option'>
                    <img src='/assets/crimes/caseFile.svg' alt='internet-crimes' className='internet-crimes'></img>
                    <p>Case File</p>
                    </div>
                </div>


            </div>
            {
                showSidebar &&
                <div className='services-sidebar-WRAPPER'>
                <ServiceSidebar setShowSidebar={setShowSidebar}
                comp1={comp1} setComp1={setComp1}
                comp2={comp2} setComp2={setComp2}
                comp3={comp3} setComp3={setComp3}
                comp4={comp4} setComp4={setComp4}
                comp5={comp5} setComp5={setComp5}
                comp6={comp6} setComp6={setComp6}
                comp7={comp7} setComp7={setComp7}
                 />
                    </div>
            }
        </div>          

    </div>
    <div className="SERVICES-MOBILE">
        <Smob />
    </div>
    </>
  )
}

export default Services
