import React from 'react'
import "./cs.css"
import {BiRightArrow} from "react-icons/bi"
import {AiOutlineArrowLeft} from "react-icons/ai"
import { useNavigate } from 'react-router'

const MobCustomerSupport = () => {
    const navigate = useNavigate();
  return (
    <div className='customer-support-wrapper'>
    <div className="customer-support-cont">
        <div className='customer-support-header'>
            <div className='CUSTOMER-SUPPORT'>
                <AiOutlineArrowLeft onClick={()=>navigate('/appointment')} />
            <h1>CUSTOMER SUPPORT</h1>
            </div>
            <hr></hr>
            <p>Customer support is a range of customer services to assist customers in making cost effective and correct use of a product. It includes assistance in planning, installation, training, troubleshooting, maintenance,upgrading, and disposal of a product.</p>
            <img src='/assets/customersupport.svg' alt='customersupport'></img>
        </div>
        <div className='support-options'>
            <div className='support-option'>
                <h1>Popular Solutions</h1>
                <BiRightArrow className="right-icon" />
            </div>
            <div className='support-option'>
                <h1>Account Settings</h1>
                <BiRightArrow className="right-icon" />
            </div>
            <div className='support-option'>
                <h1>Safety & Covid 19 Querries</h1>
                <BiRightArrow className="right-icon"/>
            </div>
            <div className='support-option'>
                <h1>F.A.Q</h1>
                <BiRightArrow className="right-icon"/>
            </div>
            <div className='support-option'>
                <h1>Services</h1>
                <BiRightArrow className="right-icon"/>
            </div>
            <div className='support-option'>
                <h1>Payment Options</h1>
                <BiRightArrow className="right-icon"/>
            </div>
            <div className='support-option'>
                <h1>A Guide To Our Company</h1>
                <BiRightArrow className="right-icon"/>
            </div>
        </div>
    </div>
  </div>
  )
}

export default MobCustomerSupport
