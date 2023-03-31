import React from 'react'
import "../call.css"
import {AiOutlineArrowLeft} from "react-icons/ai"
import {BsChatLeftText} from "react-icons/bs"
import {MdCallEnd} from "react-icons/md"
import {FiCamera} from "react-icons/fi"
import { Link } from 'react-router-dom'

const Calling = () => {
  return (
    <div className='container'>
        <div className='back'>
          <Link to="/appointment"><AiOutlineArrowLeft className='back-btn' /></Link>
        </div>
        <div className='caller-info'>
            <p>caller name</p>
            <span>calling...</span>
        </div>
        <div className="calling-options">
            <div className="type"> <BsChatLeftText className='type-text' /></div>
            <MdCallEnd  className='end'/>
            <div className="cam"><FiCamera className='cam'/></div>
        </div>
    </div>
  )
}

export default Calling
