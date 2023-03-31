import axios from 'axios'
import { useState } from 'react'
import "./login.css"
import LoginFooter from './loginFotter/LoginFooter'
import Loginotp from './otp/Loginotp'
import Otp from './otp/Otp'

const Login = () => {
    const [check,setCheck] = useState('')
    const [userNum, setUserNum] = useState('')
    const [showOtp, setShowOtp] = useState(false);
    const [loginInfo, setLoginInfo] = useState({})
    const [name, setName] = useState('')
    const [login, setLogin] = useState(false)

    const sendOtp = (otp) =>{
        setShowOtp(true)
    }

      //register otp generating
      const RegisterOtp = async () =>{
        if(!userNum && !name){
            return alert("fields missing !")
        }
        else if(userNum.length !== 10){
            return alert("invalid mobile number or invalid username")
        }
        else if(!check){
            return alert("please check the checkbox")
        }
        else{
            try{
                loginInfo.mobile = userNum
                loginInfo.used_for=`${process.env.REACT_APP_REGPURPOSE}`
                loginInfo.is_agents = '1'
                const response = await axios.post(`https://api.theonlineattorney.in/api/v1/validate-phoneno/`,loginInfo)
                response.data.status &&
                sendOtp()
                alert(response.data.message)
                !response.data.status &&
                alert(response.data.detail)
            }catch(error){
                console.log(error)
            }
        }
        console.log(loginInfo)
    }

    const handleChange = (e) =>{
        setCheck(!check)
        console.log(check)
    }
    const handleLogin = () =>{
        setLogin(!login)
    }
    
  return (
    <div className='login'>
        <div className='login-cont'>
            <div className='login-img'>
                <div className='login-logo'>
                    <div className='logo'>
                        <img src='/assets/loginLogo.svg' alt='logo' className='logo-img'></img>
                    </div>
                    <div className='login-box' style={{cursor:"pointer"}} onClick={handleLogin}>
                        <h1 className='LOG-IN' >LOG IN</h1>
                    </div>
                </div>
                {
                    login ?<Loginotp setLogin={setLogin} />:
                    <Otp showOtp={showOtp} setShowOtp={setShowOtp} loginInfo={loginInfo}/>
                }
            </div>
            <div className='sign-up-wrapper'>
            <div className='signup-form'>
                <div className='mobile'>
                    <div className='mobile-radio'>
                    <p className='radio-name' style={{color:"black"}}>Mobile no</p>
                    </div>
                    <div className='login-input-field'>
                    <input type="text" value={userNum} autoComplete="off" onChange={(e)=>setUserNum(e.target.value)} placeholder='enter mobile number'></input>
                </div>
                </div>
                <div className='name'>
                <div className='mobile-radio'>
                    <p className='radio-name' style={{color:"black"}}>Name</p>
                    </div>
                    <div className='login-input-field'>
                    <input type="text" value={name} autoComplete="off" onChange={(e)=>setName(e.target.value)} placeholder='enter name'></input>
                </div>
                </div>
                <div className='signUp'>
                    <div className='sign-up-btn-wrapper'>
                        <button className='signup-btn' onClick={RegisterOtp}>Sign up</button>
                    </div>
                    <div className='signup-info-box'>
                        <input type="checkbox" value={check} onChange={handleChange}></input>
                        <p className='t-c'>i agree terms & conditions <br></br> already registered ? login</p>
                    </div>
                </div>
            </div>
            </div>
            <div className='vision'>
                <div className='vision-mission-img'>
                    <img src='/assets/bulb.svg' alt='bulb'></img>
                </div>
                <div className='mission-title'>
                    <h1>OUR VISSION</h1>
                    <hr className='vision-mission-hr'></hr>
                </div>
                <div className='vision-mission-info'>
                    <p>Our advocates strives to be a multi skill knowledge based law firm, driven by ethics and human values, delevering excellence and value in the field of legal service</p>
                </div>
            </div>
            <div className='mission'>
                <div className="mission-img">
                    <img src='/assets/missionimg.svg' alt='mission'></img>
                </div>
                <div className='mission-title'>
                    <h1>OUR MISSION</h1>
                    <hr className='vision-mission-hr'></hr>
                </div>
                <div className='m-info'>
                    <p>Our mission is to be the most preffered law firm within the indiam market, providing:</p>
                    <p>Clients with qualitative and innovative professional advice in atime bound and cost effective manner</p>
                    <p>Attorneys with a conductive environment for all ground growth and deveopment</p>
                </div>
            </div>
        </div>
        <LoginFooter />
    </div>
  )
}

export default Login
