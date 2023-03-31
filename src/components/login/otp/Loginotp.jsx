import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./otp.css"
import "../../documents/docsOtp.css"
import { useDispatch } from 'react-redux'
import { userActions } from '../../redux/actions/actions'

 const Loginotp = ({setLogin}) => {
  const dispatch = useDispatch()

  const[otpActive, setOtpActive] = useState(false)
  const  [logindetails, setLogindetails] = useState({
    mobile:'',
    used_for:'login',
    is_agents:'1'
  })
  const val1 = useRef()
  const val2 = useRef()
  const val3 = useRef()
  const val4 = useRef()
const navigate = useNavigate()

const[userDetails, setUserDetails] = useState()

  const[value, setValue] = useState(false)

  const close = () =>{
    setValue(!value)
    setOtpActive(false)
  }

  const handleNext = () =>{
    val1.current.value &&
      val2.current.focus()
      ||
      val2.current.value &&
      val3.current.focus()
      ||
      val3.current.value &&
      val4.current.focus()
  }

  const handleLogin = async () =>{
    try{
      const response = await axios.post('https://api.theonlineattorney.in/api/v1/validate-phoneno/',logindetails)
      alert(response.data.message)
      console.log(response.data.status)
      if(response.data.status === true){
        setOtpActive(true)
      }
    }catch(err){
      console.log(err)
    }
  }

  const handleClick = async() =>{
    logindetails.otp_sent = `${val1.current.value}${val2.current.value}${val3.current.value}${val4.current.value}`
    if(logindetails.otp_sent === ''){
      alert('fill the otp !')
    }
    try{
      const response = await axios.post('https://api.theonlineattorney.in/api/v1/validate-otp-phoneno/',logindetails)
      localStorage.setItem("Logintoken",JSON.stringify(response.data.token.access))
      alert(response.data.msg)
      await loadUserDetails()
      navigate('/appointment')
    }catch(err){
      console.log(err)
    }
  }

  const loadUserDetails = async (setUserDetails) =>{
    try{
        const response = await axios.get('https://api.theonlineattorney.in/api/v1/profile/',{
            headers :{
                "Authorization" : `Bearer ${JSON.parse(localStorage.getItem('Logintoken'))}`
            }
        })
        dispatch(userActions(response.data))
        setUserDetails(response.data)
    }catch(err){
        console.log("error occured")
    }
}

  
  return (
    <>
{
  !otpActive ?
  <div className={'send-otp'}>
    <div className="opt-img">
      <button className='L-BTN-C' onClick={()=>setLogin(false)}>X</button>
        <img src="/assets/loginLogo.svg" alt="login"></img>
        <h1 className="otp-info">Consult lawers online instantly with the online atterny</h1>
      </div>
      <div className="otp-details">
        <div className="enter-otp" >
          <div className="enter-otp-info">
          <h2 className='ENTER-OTP'>Login</h2>
          </div>
        </div>
        <div className="fill-otp">
          <div className="otp-fields" style={{display:"flex",flexDirection:"column"}}>
            <input type="text" value={logindetails.mobile} onChange={(e)=>setLogindetails({...logindetails, mobile:e.target.value})} style={{borderRadius:"0%",width:"90%"}} placeholder="enter your mobile number "></input>
          </div>
          <button className="verify-otp"onClick={handleLogin} >send-OTP</button>
        </div>
      </div>
    </div>
    :
    <div className='otp-cont' style={{width:"50vw",height:"50vh",display:"block",margin:"auto",position:"relative",}}>
        {/* <div className='otp-img-cont'>
            <img src='/assets/logo2.svg' alt='logo'></img> */}
        {/* </div> */}
        <button className='close' onClick={close}>x</button>

        <div className='doc-otp-title'>
            <h1>Enter OTP</h1>
            <span style={{width:"100%",textAlign:"center"}}>Verify otp to Login</span>
        </div>
        <div className='doc-otp-enter'>
            <div className='doc-otp-input' style={{height:"auto"}}>
                <input ref={val1} style={{borderRadius:"0px"}} type="text" maxLength="1" onChange={handleNext}></input>
                <input ref={val2} style={{borderRadius:"0px"}} type="text" maxLength="1" onChange={handleNext}></input>
                <input ref={val3} style={{borderRadius:"0px"}} type="text" maxLength="1" onChange={handleNext}></input>
                <input ref={val4} style={{borderRadius:"0px"}} type="text" maxLength="1"></input>
            </div>
            <button className='doc-otp-btn' onClick={handleClick}><Link to="/appointment">verify OTP</Link></button>
        </div>
    </div>}
    </>
  )
}

export default Loginotp
