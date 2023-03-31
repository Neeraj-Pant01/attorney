import React, {useEffect, useRef, useState } from 'react'
import "./otp.css"
import { useNavigate } from 'react-router-dom'
// import { useEffect } from 'react'
import axios from 'axios'

const Otp = ({showOtp, setShowOtp, loginInfo}) => {
  const navigate = useNavigate();
  const [token, setToken] = useState('')
    const val1Ref = useRef()
    const val2Ref = useRef()
    const val3Ref = useRef()
    const val4Ref = useRef()


    const handleFocus = (e) =>{
      if(val1Ref.current.value){
        val2Ref.current.focus()
    }  
  }

  const handleFocus2 = ()=>{
  if(val2Ref.current.value){
    val3Ref.current.focus()
  }
}

const handleFocus3 = ()=>{
  if(val3Ref.current.value){
    val4Ref.current.focus()
  }
}

    //getting the input field values
  const closeOptp = () =>{
    setShowOtp(false)
  }
  const verifyOtp = async () =>{
    loginInfo.otp_sent = `${val1Ref.current.value}${val2Ref.current.value}${val3Ref.current.value}${val4Ref.current.value}`
    try{
      const response = await axios.post('https://api.theonlineattorney.in/api/v1/validate-otp-phoneno/',loginInfo)
      if(response.data.token){
        setToken(response.data.token.access)
        const token = localStorage.setItem("token",JSON.stringify(response.data.token.access))
        navigate("/documents")
      }else{
        alert("enter valid otp")  
      }
    }catch(error){
      console.log(error)
    }
  }


  return (
    <div className={!showOtp ? 'hide' : 'send-otp'}>
    <div className="opt-img">
      <button className='L-BTN-C' onClick={closeOptp}>X</button>
        <img src="/assets/loginLogo.svg" alt="login"></img>
        <h1 className="otp-info">Consult lawers online instantly with the online atterny</h1>
      </div>
      <div className="otp-details">
        <div className="enter-otp" >
          <div className="enter-otp-info">
          <h2 className='ENTER-OTP'>Enter OTP</h2>
          </div>
          <div className="enter-otp-info">
          <p className="desc">OTP has been sent to your mobile number 916754903765 <a href="">edit</a></p>
          </div>
          {/* <div className="enter-otp-info"> */}
            <p className="otp-header">Enter OTP</p>
        </div>
        <div className="fill-otp">
          <div className="otp-fields">
            <input type="text" maxLength="1" name='val1' ref={val1Ref} style={{borderRadius:"0%"}} onChange={handleFocus}></input>
            <input type="text" maxLength="1" name='val2' ref={val2Ref} style={{borderRadius:"0%"}} onChange={handleFocus2}></input>
            <input type="text" maxLength="1" name='val3' ref={val3Ref} style={{borderRadius:"0%"}} onChange={handleFocus3}></input>
            <input type="text" maxLength="1" name='val4' ref={val4Ref} style={{borderRadius:"0%"}}></input>
          </div>
          <button className="verify-otp" onClick={verifyOtp}>verify-OTP</button>
        </div>
      </div>
    </div>
  )
}

export default Otp
