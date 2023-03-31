import React from 'react'
import { useState } from 'react'
// import DocsOtp from './DocsOtp'
import "./documents.css"
import {CgProfile} from "react-icons/cg"
import {HiOutlineIdentification} from "react-icons/hi"
import {HiIdentification} from "react-icons/hi"
import {AiFillCamera} from "react-icons/ai"
import { useNavigate } from 'react-router'

const Documents = () => {
  // const [value, setValue] = useState(false)
  const [dp, setDp] = useState('')
  const [userInfo, setUserInfo] = useState({
    first_name:"",
    last_name:"",
    email:"",
    number:"",
    birth_date:"",
    city:"",
    state:"",
    zipcode:"",
    gender:"",
    adhar_number:"",
    is_agent:1,
  })
  const navigate = useNavigate();

  const handleUserInfo = (e)=>{
    const {name,value} = e.target
    setUserInfo((pre)=>{
      return{
        ...pre,[name]:value
      }
    })
  }

const data = new FormData();
data.append('profile_pic',userInfo.profile_pic)
data.append("mobile", userInfo.number);
data.append("email", userInfo.email);
data.append("birth_date", userInfo.birth_date);
data.append("address", userInfo.city);
data.append("gender", userInfo.gender);
data.append("adhar_number", userInfo.adhar_number);
data.append("advocate_license", userInfo.advocate_license);
data.append("zipcode", userInfo.zipcode);
data.append('city',userInfo.city)
data.append("state",userInfo.state)
data.append('last_name',userInfo.last_name)
data.append('first_name',userInfo.first_name)
data.append('is_agent',userInfo.is_agent)


  const open = async() =>{
    console.log(userInfo)
    try{
      await fetch(`https://api.theonlineattorney.in/api/v1/profile/`,{
        method:"POST",
        headers:{
          Authorization:`Bearer ${JSON.parse(localStorage.getItem("token"))}`
        },
        body:data
      }).then((response)=>response.json()).then((data)=>console.log(data))
      navigate('/')
    }catch(err){
      alert("oops something missing ! fill all details correctly")
    } 
  }

  const handleLicence = async (e) =>{
    let file = e.target.files[0]
    let base64 = await convertBase64(file)
    userInfo.advocate_license = base64.split(",")[1]
  }

  const handleChange = async (e) =>{
    let file = e.target.files[0]
    let base64 = await convertBase64(file)
    setDp(base64)
    userInfo.profile_pic = base64.split(",")[1]
  }

  const convertBase64 = (file) =>{
    return new Promise((resolve, reject)=>{
      const fileReader = new FileReader()
      fileReader.readAsDataURL(file)
      fileReader.onload = ()=>{
        resolve(fileReader.result)
      }
      fileReader.onerror =(error)=>{
        reject(error)
      }
    })
  }
  return (
    <>
    <div className='documents-wrapper'>
      {/* <div className={value ? 'docs-otp-wrapper' : 'docs-otp-hide'}>
        <DocsOtp setValue = {setValue} value={value} />
      </div> */}
      <div className='documents-cont'>
        <div className='documents-bg-img'>
          <img src='/assets/logo2.svg' alt='logo'></img>
        </div>
        <div className='submit-docs'>
          <div className='submit-docs-title-box'>
            <b> SUBMIT DOCUMENTS</b><hr></hr>
            <p>we need to verify your information please submit your documents below to sign up</p>
            <div className='personal-details-title'>
              <span style={{display:"flex", alignItems:"center"}}> <CgProfile style={{color:"#ffcd6c", fontSize:"1.7rem"}}/> Personal Details</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='personal-details-wrapper'>
      <div className='profile-dp-box' >
        <img src={dp} alt='' className='dp-img'></img>
      <label htmlFor="aifcam">
      <AiFillCamera className='AiFillCamera' style={{position:"absolute",borderRadius:"50%",padding:".5rem",fontSize:"1.5rem",color:"grey"}}/>
            </label>
            <input type="file" id="aifcam" style={{display:"none"}} onChange={handleChange}></input>
      </div>
      <div className='personal-detail-form'>
        <label><b>First Name</b></label><br></br>
        <input type="text" placeholder="Name" autoComplete='off' name='first_name' value={userInfo.first_name} onChange={handleUserInfo}></input><br></br>

        <label><b>Last Name</b></label><br></br>
        <input type="text" placeholder="Name" autoComplete='off' name='last_name' value={userInfo.last_name} onChange={handleUserInfo}></input><br></br>

        <label><b>Email Id</b></label><br></br>
        <input type="text" placeholder="Email Id" autoComplete='off' name='email' value={userInfo.email} onChange={handleUserInfo}></input><br></br>

        <label><b>Number</b></label><br></br>
        <input type="text" placeholder="Number" autoComplete='off' name='number' value={userInfo.number} onChange={handleUserInfo}></input><br></br>

        <label><b>Date Of Birth</b></label><br></br>
        <input type="date" placeholder="Date Of Birth" autoComplete='off' name='birth_date' value={userInfo.birth_date} onChange={handleUserInfo}></input><br></br>

        <label><b>City</b></label><br></br>
        <input type="text" placeholder="City" autoComplete='off' name='city' value={userInfo.city} onChange={handleUserInfo}></input><br></br>

        <div className='state-zip'>
          <div className='state'>
          <label><b>State</b></label><br></br>
          <input type="text" placeholder="State" autoComplete='off' name='state' value={userInfo.state} onChange={handleUserInfo}></input><br></br>
          </div>
          <div className='state'>
          <label><b>zipcode</b></label><br></br>
          <input type="text" placeholder="zip code" autoComplete='off' name='zipcode' value={userInfo.zipcode} onChange={handleUserInfo}></input><br></br>
          </div>
        </div>

        <div className='gender-wrapper'>
          <label><b>Gender</b></label><br></br>
          <div className='gender'>
          <input type="text" name='gender' value={userInfo.gender = "male"} autoComplete='off' onChange={handleUserInfo}></input>
          <input type="text" name='gender' value={userInfo.gender = "female"}contentEditable="no" autoComplete='off' onChange={handleUserInfo}></input>
          </div>
        </div>
      </div>
    </div>

    <div className="kyc-wrapper">
      <div className='kyc'>
        <div className='licence'>
          <p> <HiOutlineIdentification style={{color:"goldenrod"}} /> Advocate Licence verification</p><br></br>
          <span>upload both side photo of your Advocate license</span><br></br>
          <input type="file" id='upload' name="upload" onChange={handleLicence}></input>
        </div>
        <div className='kyc-verify'>
          <p> <HiIdentification style={{color:"goldenrod"}}/> KYC verification</p>
          <div className='kyc-verify-adhar-p'>Adhar Card Number</div>
          <input type="text" placeholder='Enter your Adhar card Number' value={userInfo.adhar_number} name="adhar_number" onChange={handleUserInfo}></input>
        </div>
        <button className='kyc-btn' onClick={open}>SIGN UP</button>
      </div>
    </div>
    </>
  )
}
export default Documents
