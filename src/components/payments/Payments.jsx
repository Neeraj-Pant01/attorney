import React, { useState } from 'react'
import "./payments.css"
import Topbar from "../lawers/Topbar"
import Sidebar from "../lawers/Sidebar"
import BankDetails from './BankDetails'
import PaymentsHistory from './PaymentsHistory'
import {AiOutlineArrowLeft} from "react-icons/ai"
import { useNavigate } from 'react-router'

const Payments = () => {
    const [showtransac, setShowTransc] = useState(true)
    const navigate = useNavigate();
    // const handleClick = (e) =>{
    //     const id = e.target.id;
    //     setShowTransc(!showtransac);
    //     alert("ram ram")
    // }
  return (
    <>
    <div className='payments-wrapper'>
        <Topbar />
        <Sidebar />
        <div className="payments-cont">
            <PaymentsHistory />
            <div className="bank-details">
                <BankDetails />
            </div>
        </div>
    </div>
    <div className='mob-bankdetails'>
        <div className='mob-top-bankdetails'>
            <div className='mob-p-topbar'>
                <div className='mob-p-back'><AiOutlineArrowLeft onClick={()=>navigate('/appointment')}/></div>
                <div className='mob-p-title'>PAYMENTS</div>
            </div>
            <div className='mob-bottom-bankdetails'>
                <div id="1" className={!showtransac ? 'mob-bank-details' : 'mob-active'} onClick={()=>setShowTransc(true)}>BANK DETAILS</div>
                <div id='2' className={showtransac ? 'mob-transactions' : 'mob-active'} onClick={()=>setShowTransc(false)}>TRANSACTIONS</div>
            </div>
        </div>
        {
            showtransac ? <BankDetails /> :<PaymentsHistory />
        }
    </div>
    </>
  )
  }
export default Payments
