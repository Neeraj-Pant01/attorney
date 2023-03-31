import React from 'react'
// import "./docsOtp.css"
import { Link } from 'react-router-dom'


const DocsOtp = ({setValue,value}) => {
    const close = () =>{
        setValue(!value)
    }
  return (
    <>
    <div className='otp-cont'>
        <div className='otp-img-cont'>
            <img src='/assets/logo2.svg' alt='logo'></img>
            <button className='close' onClick={close}>x</button>
        </div>
        <div className='doc-otp-title'>
            <h1>Enter OTP</h1>
            <p>OTP has sent to you om your mobile Number 982038732</p>
            <span>Enter OTP</span>
        </div>
        <div className='doc-otp-enter'>
            <div className='doc-otp-input'>
                <input type="text" maxLength="1"></input>
                <input type="text" maxLength="1"></input>
                <input type="text" maxLength="1"></input>
                <input type="text" maxLength="1"></input>
            </div>
            <button className='doc-otp-btn'><Link to="/appointment">verify OTP</Link></button>
        </div>
    </div>
    </>
  )
}

export default DocsOtp
