import React from 'react'
import "../service.css"
import "../myservice.css"
import ServiceSidebar from '../ServiceSidebar'
import { useState } from 'react'

const MobYourServices = () => {
        const [comp1, setComp1] = useState(true);
        const [comp2, setComp2] = useState(true);
        const [comp3, setComp3] = useState(true);
        const [comp4, setComp4] = useState(true);
        const [comp5, setComp5] = useState(true);
        const [comp6, setComp6] = useState(true);
        const [comp7, setComp7] = useState(true);
        const[showbar, setShowbar] = useState(true);
      return (
        <div className='a-bg'>
        <div className={showbar ? 'your-service-cont' : 'your-service-cont-FULL'}>
        <div className='your-services-top'>
                    <p className='YOUR-SERVICES'>YOUR SERVICES</p>
                    <hr></hr>
                    <p>Our past cases prove the practical and effective results in successfully defending and negotiatingcriminal charges. We will provide you with a step-by-step plan to defend your charges and ideallyresolve before trial</p>
                </div>
                <div className={showbar ? 'your-service-options' : 'your-service-options-FULL'}>


                    <div className='service-option'>
                    <img src='/assets/crimes/offence.svg' alt='internet-crimes' className='internet-crimes'></img>
                    <p>Sexual Offence</p>
                    </div>
                    <div className='service-option'>
                    <img src='/assets/crimes/bail2.svg' alt='internet-crimes' className='internet-crimes'></img>
                    <p>Bail</p>
                    </div>
                    <div className='service-option'>
                    <img src='/assets/crimes/hacking.svg' alt='internet-crimes' className='internet-crimes'></img>
                    <p>Internet Crimes</p>
                    </div>
                    <div className={comp1 ? 'HIDE-SERVICE-OPTION' : 'service-option'}>
                    <img src='/assets/crimes/sexualOffence.svg' alt='internet-crimes' className='internet-crimes'></img>
                    <p>Domestic Voilence</p>
                    </div>


                </div>
                <div className='your-addidtinal-services-title'>
                    <div className='your-title-box'>
                        <span>YOUR ADDITIONAL SERVICES</span>
                        <hr></hr>
                    </div>
                </div>
                <div className='added-service-options'>
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
        <div className={showbar ? 'additional-service-cont' : 'HIDE-SERVICE-OPTION'}>
            <ServiceSidebar comp1={comp1} setComp1={setComp1}
            comp2={comp2} setComp2={setComp2}
            comp3={comp3} setComp3={setComp3}
            comp4={comp4} setComp4={setComp4}
            comp5={comp5} setComp5={setComp5}
            comp6={comp6} setComp6={setComp6}
            comp7={comp7} setComp7={setComp7}
            setShowbar={setShowbar}
             />
        </div>
      </div>
      )
    }

export default MobYourServices
