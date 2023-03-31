import React, { useRef, useState } from 'react'
import Sidebar from '../lawers/Sidebar'
import Topbar from '../lawers/Topbar'
import "./editprofile.css"
import MobEditProfile from './MobEditProfile'
import {AiFillCamera} from "react-icons/ai"
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'


const EditProfile = () => {

  const male = useRef()
  const female = useRef()

  const [updatedProfile, setUpdatedProfile] = useState({
    first_name:"",
    email:"",
    city:"",
    state:"",
    zipcode:"",
    gender:"",
    profile_pic:"",
    bio:""
  })

  const user = useSelector((state)=>state.userReducer.payload)
  const pf = 'https://api.theonlineattorney.in'
  const [updatedDP, setUpdatedDP] = useState('')

  const navigate = useNavigate()

  const data = new FormData();
  updatedProfile.first_name && data.append("first_name",updatedProfile.first_name);
  updatedProfile.email && data.append("email",updatedProfile.email)
  updatedProfile.city && data.append("city",updatedProfile.city)
  updatedProfile.state && data.append("state",updatedProfile.state)
  updatedProfile.zipcode && data.append("zipcode",updatedProfile.zipcode)
  updatedProfile.gender && data.append("gender",updatedProfile.gender)
  updatedProfile.profile_pic && data.append("profile_pic",updatedProfile.profile_pic)
  updatedProfile.bio && data.append("bio",updatedProfile.bio)
  updatedProfile.gender && data.append('gender',updatedProfile.gender)

  const editProf = async (e)=>{
    e.preventDefault()
    try{
      await fetch(`https://api.theonlineattorney.in/api/v1/profile/`,{
        method:"POST",
        headers:{
          Authorization:`Bearer ${JSON.parse(localStorage.getItem("Logintoken"))}`
        },
        body:data
      }).then((response)=>response.json()).then((data)=>{
        if(data.status === true){
      alert('profile updated sucessfully')
      navigate('/appointment')
        }
      })
    }catch(err){
      alert("oops something missing ! fill all details correctly")
    } 
  }

  const handleChange = (e) =>{
    const {name,value} = e.target;
    setUpdatedProfile(()=>{
      return {...updatedProfile,[name]:value}
    })
  }

  const handledp = async (e) =>{
    let file = e.target.files[0]
    let base64 = await convertBase64(file)
    setUpdatedDP(base64)
    updatedProfile.profile_pic = base64.split(",")[1]

  }

  const convertBase64 = (file) =>{
    return new Promise((resolve, reject)=>{
      const fileReader = new FileReader()
      fileReader.readAsDataURL(file);
      fileReader.onload = ()=>{
        resolve(fileReader.result)
      }
      fileReader.onerror = (error) =>{
        reject(error)
      }
    })
  }

  const handlemale = (e) =>{
    console.log(updatedProfile)
    updatedProfile.gender = male.current.value
  }

  const handlefemale = () =>{
    updatedProfile.gender = female.current.value;
    console.log(updatedProfile)
  }

  return (
    <>
    <div className='editprofile'>
        <Topbar />
        <Sidebar />
        <div className='editprofile-cont'>
            <div className='editprofile-wrapper'>
              <h1 className='editprofile-title'>Edit Profile</h1>
              <div className='PROFILE-IMAGE-CONT'>
                <div className='PROFILE-IMAGE'>
                  <img src={updatedDP ? updatedDP : `${pf + user?.profile_pic}`} alt='person'></img>
                  <label htmlFor='aificon'>
                  <AiFillCamera className='p-AiFillCamera' /></label>
                  <input type='file' id='aificon' style={{display:"none"}} onChange={handledp}></input>
                </div>
                </div>
                <form className='EDIT-PROFILE-FORM' onSubmit={editProf}>
                  <div className='e-p-f'>
                    <h2 className='FORM-I-TITLE'>Name</h2>
                    <input className='e-p-f-i' type="text" name='first_name' value={updatedProfile.first_name} onChange={handleChange}></input>
                  </div>
                  <div className='e-p-f'>
                    <h2 className='FORM-I-TITLE'>Email</h2>
                    <input className='e-p-f-i' type="text" name='email' value={updatedProfile.email} onChange={handleChange}></input>
                  </div>
                  <div className='e-p-f'>
                    <h2 className='FORM-I-TITLE'>Number</h2>
                    <input className='e-p-f-i' type="text" name='number' value={user.mobile} onChange={handleChange}></input>
                  </div>
                  <div className='e-p-f'>
                    <h2 className='FORM-I-TITLE'>City</h2>
                    <input className='e-p-f-i' type="text" name='city' value={updatedProfile.city} onChange={handleChange}></input>
                  </div>

                  <div className='s-z-f'>
                    <div className='c-e-f'>
                    <h2 className='FORM-I-TITLE'>State</h2>
                    <input className='e-f' type="text" name="state" value={updatedProfile.state} onChange={handleChange}></input>
                    </div>
                    <div className='c-e-f'>
                    <h2 className='FORM-I-TITLE'>Zip Code</h2>
                    <input className='e-f' type="text" name='zipcode' value={updatedProfile.zipcode} onChange={handleChange}></input>
                    </div>
                  </div>

                  {/* <h2 className='FORM-I-TITLE'>Gender</h2> */}
                  <div className='M-F-f'>
                    <div className='GENDER-f'>
                    <input className='MALE' ref={male} value="Male" type="text" onClick={handlemale}></input>
                    </div>
                    <div className='GENDER-f'>
                    <input className='FEMALE' ref={female} value="Female" type="text" onClick={handlefemale}></input>
                    </div>
                  </div>

                  <div className='e-p-f BIO-CONT'>
                    <h2 className='FORM-I-TITLE'>Bio</h2>
                    <textarea className='BIO' rows={10} cols={10} placeholder="write here.." name='bio' value={updatedProfile.bio} onChange={handleChange}></textarea>
                  </div>

                  <div className='e-p-f-b'>
                    <button className='SAVE'>SAVE</button>
                  </div>
                </form>
            </div>
        </div>
    </div>
    <MobEditProfile />
    </>
  )
}

export default EditProfile
