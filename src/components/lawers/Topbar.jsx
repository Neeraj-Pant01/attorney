import React from 'react'
import "./css/topbar.css"
import {FiMail} from "react-icons/fi"
import {BsBell} from "react-icons/bs"
import { BsSearch } from 'react-icons/bs'
import { useSelector } from 'react-redux'

const Topbar = () => {
  const pf = 'https://api.theonlineattorney.in'
  const userDetails = useSelector((state)=>state.userReducer.payload)


  return (
    <div className='topbar-wrapper'>
          <div className='topbar'>
      <div className='topbar-logo'>
        <img src='/assets/logo2.svg' alt='logo'></img>
      </div>
      <div className='topbar-searchbar'>
        <input type="text" placeholder="Search..."></input><BsSearch className='search-icon'/>
      </div>
      <div className="topbar-icons">
        <FiMail className='icon' />
        <BsBell className="icon"/>
        <span className='profile-img'>
          <img src={pf + userDetails?.profile_pic} alt='profile-img'></img>
        </span>
      </div>
    </div>
    </div>
  )
}

export default Topbar
