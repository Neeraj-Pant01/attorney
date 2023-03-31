// import React, { useState } from 'react'
import "./css/card.css"
import {BsFillInfoCircleFill} from "react-icons/bs"
import {AiOutlineCheck} from "react-icons/ai"
import { useEffect, useState } from "react"
import axios from "axios"

const Card = ({info, setInfo, testFunc, accept, setUserinfo, request}) => {

    const ShowUserProfileInfo = () =>{
        setInfo(!info)
    }

  return (
    <>
                    <div className='card-wrapper'>
                <div className='card-top'>
                <b className='ap-req' style={{fontSize:"12px"}}>Appointment Request</b>
                <span>10 oct 2021, 9:30 am</span>
                <div className='charge'>
                    <p>charge</p>
                    <b className='money'>$100/min</b>
                    
                </div>
            </div>
            <div className='card-desc'>
                <div className="card-img">
                    <img src='assets/lawerImg.svg'alt='lawerimg'></img>
                </div>
                <div className='card-details'>
                    <b style={{fontSize:"13px"}}>Priyakhi Saikia Priyakhi Saikia</b>
                    <p className='lawers-city'>New Delhi,<span className='lawers-country'> India</span></p>
                    <p><BsFillInfoCircleFill className='BsFillInfoCircleFill' onClick={ShowUserProfileInfo}/></p>
                    <p><BsFillInfoCircleFill className='mob-bs' onClick={()=>setUserinfo(false)}/></p>
                </div>
                
            </div>
            {!accept ?
            <div className='card-navigation'>
                <button className='accept' onClick={testFunc}>Accept</button>
                <button className='decline' >Decline</button>
            </div> 
            :
            <div className="REQ-ACCEPTED">
                <button className='ACCEPTED'><AiOutlineCheck  className="AiOutlineCheck"/> Accepted</button>
            </div>
}
        </div>
</>
  )
}

export default Card
