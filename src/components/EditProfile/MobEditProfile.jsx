import React from 'react'
import "./editprofile.css"
import {AiOutlineArrowLeft} from "react-icons/ai"
import { useNavigate } from 'react-router'

const MobEditProfile = () => {
  const navigate = useNavigate();
  return (
    <div className='MobEditProfile'>
              <div className='editprofile-cont'>
            <div className='editprofile-wrapper'>
              <h1 className='editprofile-title'> <AiOutlineArrowLeft className='AiOutlineArrowLeft-mob-ep' onClick={()=>navigate('/appointment')}/> Edit Profile</h1>
              <div className='PROFILE-IMAGE-CONT'>
                <div className='PROFILE-IMAGE'>
                  {/* <img src='/assets/calls/person1.svg' alt='person'></img> */}
                </div>
                </div>
                <form className='EDIT-PROFILE-FORM'>
                  <div className='e-p-f'>
                    <h2 className='FORM-I-TITLE'>Name</h2>
                    <input className='e-p-f-i' type="text"></input>
                  </div>
                  <div className='e-p-f'>
                    <h2 className='FORM-I-TITLE'>Email</h2>
                    <input className='e-p-f-i' type="text"></input>
                  </div>
                  <div className='e-p-f'>
                    <h2 className='FORM-I-TITLE'>Number</h2>
                    <input className='e-p-f-i' type="text"></input>
                  </div>
                  <div className='e-p-f'>
                    <h2 className='FORM-I-TITLE'>City</h2>
                    <input className='e-p-f-i' type="text"></input>
                  </div>

                  <div className='s-z-f'>
                    <div className='c-e-f'>
                    <h2 className='FORM-I-TITLE'>State</h2>
                    <input className='e-f' type="text"></input>
                    </div>
                    <div className='c-e-f'>
                    <h2 className='FORM-I-TITLE'>Zip Code</h2>
                    <input className='e-f' type="text"></input>
                    </div>
                  </div>

                  <div className='M-F-f'>
                    <div className='GENDER-f'>
                    <input className='MALE' value="Male" type="text"></input>
                    </div>
                    <div className='GENDER-f'>
                    <input className='FEMALE' value="Female" type="text"></input>
                    </div>
                  </div>

                  <div className='e-p-f BIO-CONT'>
                    <h2 id="bio-id" className='FORM-I-TITLE'>Bio</h2>
                    <textarea className='BIO' rows={10} cols={10} placeholder="write here.."></textarea>
                  </div>

                  <div className='e-p-f-b'>
                    <button className='SAVE'>SAVE</button>
                  </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default MobEditProfile
