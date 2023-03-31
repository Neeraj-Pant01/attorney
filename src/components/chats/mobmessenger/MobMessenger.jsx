import React from 'react'
import "./mobmessenger.css"
import {BsArrowLeft} from "react-icons/bs"
import {FiVideo} from "react-icons/fi"
import {FiPhoneCall} from "react-icons/fi"
import {CiPaperplane} from "react-icons/ci"
import { useNavigate } from 'react-router'

const MobMessenger = ({setMessenger}) => {
  const navigate = useNavigate()
  return (
    <div className='messenger'>
      <div className='messenger-top'>
        <div className='messenger-top-left'>
            <BsArrowLeft className='mob-msgr-nav' onClick={()=>setMessenger(true)} />
            <img src='/assets/calls/person1.svg' alt='person'></img>
        </div>
        <div className='messenger-top-mid'>
            <p className='mob-msgr-userName'>Jonath Rabeb</p>
            <p className='mob-msgr-status'>online</p>
        </div>
        <div className='messenger-top-right'>
            <FiPhoneCall onClick={()=>{navigate("/call")}} className='msgr-call-option' />
            <FiVideo onClick={()=>{navigate("/videocall")}} className='msgr-call-option' />
        </div>
      </div>


      <div className='mob-messenger-messeges'>
      <div className='messenger-received-messege'>
            <p>hii</p>
        </div>

        <div className='messenger-send-messege'>
            <p>hello </p>
        </div>      

        <div className='messenger-received-messege'>
            <p>hii Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique dicta magnam ullam laudantium mollitia aperiam iste iure doloremque explicabo, fuga quidem? Consequatur est cupiditate exercitationem dignissimos voluptates, eligendi perferendis quae!</p>
        </div>
        </div>


      <div className='messenger-bottom'>
        <input className='messenger-msg-box' type="text" placeholder='write a messege'></input>
        <CiPaperplane  className='msg-send'/>
      </div>
    </div>
  )
}

export default MobMessenger
