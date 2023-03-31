import React, { useEffect, useState } from 'react'
import "./chat.css"
import {HiPaperAirplane} from "react-icons/hi"
import {MdAttachFile} from "react-icons/md"
import {IoMdCall} from "react-icons/io"
import {BsFillCameraVideoFill} from "react-icons/bs"
import {BsInfoCircleFill} from "react-icons/bs"
import {AiOutlineArrowLeft} from "react-icons/ai"
import ChatsMob from './mobchats/ChatsMob'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { userInfo } from '../documents/Documents'

const Chats = () => {

    const navigate = useNavigate()
    const user = useSelector((state)=>state.userReducer.payload)


    const pf = "https://api.theonlineattorney.in"

  return (
    <>
    <div className="mob-chats">
        <ChatsMob />
    </div>
    <div className='chats-wrapper'>
        <div className='online-bar'>
            <div className='chats-person-conv-info'></div>
            <div className='topbar-chats bg'>
                <div className="chats-searchbar">
                    <AiOutlineArrowLeft className='left-arr' onClick={()=>navigate('/appointment')} />
                    <input type="text" placeholder='search..'></input>
                </div>
            </div>
            <div className='chats-online bg'>
                <span className='recents'>Recent</span>
                <ul>
                    <li className='chats-online-person'>
                        <img src='/assets/onlineImages/online1.svg' className='online-person' alt='online'></img>
                        <div className='name-online'>
                            <span className='name'>user</span>
                            <span className='typing'>online status</span>
                        </div>
                        <div className='show-active'>
                        <span>now</span>
                        </div>
                    </li>

                    <li className='chats-online-person'>
                        <img src='/assets/onlineImages/online1.svg' className='online-person' alt='online'></img>
                        <div className='name-online'>
                            <span className='name'>name</span>
                            <span className='typing'>online status</span>
                        </div>
                        <div className='show-active'>
                        <span>now</span>
                        </div>
                    </li>
                    

                    <li className='chats-online-person'>
                        <img src='/assets/onlineImages/person2.svg' className='online-person' alt='online'></img>
                        <div className='name-online'>
                            <span className='name'>name</span>
                            <span className='typing'>online status</span>
                        </div>
                        <div className='show-active'>
                        <span>now</span>
                        </div>
                    </li>

                    <li className='chats-online-person'>
                        <img src='/assets/onlineImages/online3.svg' className='online-person' alt='online'></img>
                        <div className='name-online'>
                            <span className='name'>name</span>
                            <span className='typing'>online status</span>
                        </div>
                        <div className='show-active'>
                        <span>now</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div className='messeges-wrapper'>
        <div className='topbar-chats  bg2'>
            <div className='person-info'>
                <img src={pf + user?.profile_pic} className='online-person' alt='online'></img>
                <div className='info-wrapper'>
                    <span className='name'>{`${user.first_name} ${user.last_name}`}</span>
                    <span className='online' style={{textAlign:"center",color:"green"}}>online</span>
                </div>
            </div>
            <div className='time-stamp'>
                <span>00:00:38</span>
                <button className='stop'>stop</button>
            </div>
            <div className='calling-info'>
                <IoMdCall className='icon icon-bg' />
                <BsFillCameraVideoFill className='icon icon-bg' />
                <BsInfoCircleFill className='icon' />
            </div>
        </div>
        <div className='all-messeges'>
        <div className='received-messege'>
            <div className='bg-img'><img src='/assets/onlineImages/online1.svg' className='online-person' alt='online'></img></div>
        <span className='RECEIVED'>hi iam gelm jacobas</span>
        <span className='msg-time'>9:30 pm</span>
        </div>

        <div className='sent-messege'><span> hello how can i help you</span></div>

        <div className='sent-messege'><span>i've received your message regard a case i want you to share me more information about the case  and send the case report file as soon as possible</span>
        </div>


        <div className='received-messege'>
            <div className='bg-img'><img src='/assets/onlineImages/online1.svg' className='online-person' alt='online'></img></div>
        <span className='RECEIVED'>thank you for your response i will send all the essential information regarding the case and i will send the case report file as soon as possible</span>
        <span className='msg-time'>9:30 pm</span>
        </div>

        </div>
        <div className='type-messege'>
            <MdAttachFile className='file' />
            <input type="text" placeholder='type your messege here..'></input>
            <HiPaperAirplane  className='send' onClick={()=>console.log(localStorage.getItem('token'))} />
        </div>
        </div>
    </div>
    </>
  )
}

export default Chats
