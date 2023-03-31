import React from 'react'
import "../call.css"
import {AiOutlineArrowLeft} from "react-icons/ai"
import {BsChatLeftText} from "react-icons/bs"
import {MdCallEnd} from "react-icons/md"
import {BsFillCameraVideoFill} from "react-icons/bs"
import {BsFillMicFill} from "react-icons/bs"
import { Link } from 'react-router-dom'


const VideoCall = () => {
  return (
    <div className='oncall-container'>
    <div className='back'>
    <Link to="/appointment"><AiOutlineArrowLeft className='back-btn' /></Link>
    </div>
    <div className='caller-info'>
        <p>caller name</p>
        <span>calling...</span>
    </div>
    <div className="video-calling-options">
        <BsFillMicFill className='mic' />
        <BsChatLeftText className='msg' />
        <BsFillCameraVideoFill className='video' />
        <MdCallEnd className='end-call' />
    </div>
</div>
  )
}

export default VideoCall
