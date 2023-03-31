import React, { useState } from 'react';
import "../service.css"
import MobYourServices from './MobYourServices';

const Smob = () => {
    const [showsb, setShowsb]= useState(true)
    const handleclick = () =>{
        setShowsb(false)
    }
  return (
    <>
    {
        showsb ?
    <div className='services-cont'>
    <div className='services'>
        <div className='services-top'>
            <p className='YOUR_SERVICES'>YOUR SERVICES</p>
            <hr></hr>
            <p>Our past cases prove the practical and effective results in successfully defending and negotiatingcriminal charges. We will provide you with a step-by-step plan to defend your charges and ideallyresolve before trial</p>
        </div>
        <div className='service-options'>
            <div className='service-option'>
                <img src="/assets/crimes/offence.svg" alt='sexual-crimes' className='sexual-crimes'></img>
                <p className='service-option-title'>Sexual Offences</p>
            </div>
            <div className='service-option'>
            <img src="/assets/crimes/bail2.svg" alt='sexual-crimes' className='sexual-crimes'></img>
                {/* <GiHandcuffs className='bail'/> */}
                <p className='service-option-title'>Bail</p>
            </div>
            <div className='service-option'>
            <img src='/assets/crimes/hacking.svg' alt='internet-crimes' className='internet-crimes'></img>
            <p className='service-option-title'>Internet Crimes</p>
            </div>

        </div>
        <button className='edit-btn' onClick={handleclick}>Edit</button>
        <div className='addidtinal-services-title'>
            <div className='title-box'>
                <span className='YOUR-ADDITIONAL-SERVICES'>YOUR ADDITIONAL SERVICES</span>
                <hr></hr>
            </div>
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
        <button className='add-btn'>Edit</button>
    </div>
</div>
:
<div className= 'MOB-SERVICES-SIDEBAR-SHOW'>
    <MobYourServices />
</div>
}
</>
  )
}

export default Smob
