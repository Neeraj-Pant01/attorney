import React from 'react'
import "./call.css"
import {AiOutlineArrowLeft} from "react-icons/ai"
import {BsChatLeftText} from "react-icons/bs"
import {MdCallEnd} from "react-icons/md"
import {FiCamera} from "react-icons/fi"
import {FaSyncAlt} from "react-icons/fa"

const Oncall = () => {
  return (
    <div className='oncall-container'>
    <div className='back'>
    <AiOutlineArrowLeft className='back-btn' />
    </div>
    <div className='caller-side'>
        <img src='/assets/calls/person1.svg' alt='call-img'></img>
        <FaSyncAlt className='switch-cam'/>
    </div>
    <div className='caller-info'>
        <p>caller name</p>
        <span>calling...</span>
    </div>
    <div className="calling-options">
        <div className="type"> <BsChatLeftText className='type-text' /></div>
        <div className="end-call"> <MdCallEnd  className='end'/></div>
        <div className="cam"><FiCamera className='cam'/></div>
    </div>
</div>
  )
}

export default Oncall
