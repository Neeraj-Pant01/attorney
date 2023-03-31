import React, { useState } from 'react'
import "./css/userinfo.css"
import {FiPhoneCall} from "react-icons/fi"
import {BsChatSquareText} from "react-icons/bs"
import {BsCameraVideo} from "react-icons/bs"
import {BsArrowLeft} from "react-icons/bs"
import { Link } from 'react-router-dom'


const UserInfo = ({testFunc,accept, setUserinfo}) => {
  const [usercontacts, setUsercontacts] = useState(false)

  const ShowUserContacts = () =>{
    setUsercontacts(true)
    testFunc()
  }
  return (
    <div className='userinfo-wrapper'>
      <div className='userinfo-top'>
        <div className='mob-mob-info'>
        <BsArrowLeft className='mob-BsArrowLeft' onClick={()=>setUserinfo(true)} /><span className='mob-appointment'>APPOINTMENT</span>
        </div>
        <p className='req-date'>10 oct 2022,</p>
        <p className='req-time'>9:30 am</p>
        <div className='CLIENT-IMG'>
                <img src='/assets/lawerImg.svg' alt='img'></img>
              </div>
      </div>
      <div className='user-PROFILE'>
        <div className='user-PROFILE-wrapper'>
            <div className='user-NAME-CHARGE'>
              <div className='USER-NAME'><h1>priyankhi saikia</h1></div>
              <div className='USER-CHARGE'><p>charge</p><h1>100/min</h1></div>
            </div>
            <div className='USER-CONTACT-INFO'>
              <p className='USER-MOB'>9083240823</p>
              <p className='USER-MAIL'>priyanka@gmail.com</p>
              <p className='USER-ADRESS'>New Delhi, India</p>
              <p className='USER-GENDER'>Female</p>
            </div>
            <div className='USER-MSG'>
              <div className='USER-MSG-WRAPPER'>
                <p className='USER-MESSAGE'>Message</p>
                <p className='USER-HELLO'>Hello JOHN smith</p>
                <p className='USER-CASE-INFO'>please contact me as soon as possible i need your help in a case . this is report</p>
                <div className='CASE-REPORT'>
                  <b>complete case report</b>
                  <p>18 november 2022</p>
                </div>
              </div>
            </div>
          { !usercontacts && !accept ? <div className='USER-REQ-OPTIONS'>
              <button className='ACCEPT' onClick={ShowUserContacts}>ACCEPT</button>
              <button className='DECLINE'>DECLINE</button>
            </div> :
            <div className='USER-CONTACT-OPTIONS'>
                    <Link to='/call'><FiPhoneCall className='USER-CONTACT-OPTION' /></Link>
                    <Link to='/chats'><BsChatSquareText className='USER-CONTACT-OPTION'/></Link>
                    <Link to='/videocall'><BsCameraVideo className='USER-CONTACT-OPTION'/></Link>
                </div>
}
        </div>
      </div>
    </div>
  )
}

export default UserInfo
