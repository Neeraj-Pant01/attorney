import React from 'react'
import "./cs.css";
import Topbar from "../lawers/Topbar"
import Sidebar from "../lawers/Sidebar"
import {BiRightArrow} from "react-icons/bi"
import MobCustomerSupport from './MobCustomerSupport';

const CustomerSupport = () => {
  return (
    <>
    <div className='customer-support'>
      <Topbar />
      <Sidebar />
      <div className='customer-support-wrapper'>
        <div className="customer-support-cont">
            <div className='customer-support-header'>
                <h1 style={{marginTop:"2rem"}}>CUSTOMER SUPPORT</h1>
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
    </div>
    <div className='MOB-MobCustomerSupport'>
        <MobCustomerSupport />
    </div>
    </>
  )
}

export default CustomerSupport
