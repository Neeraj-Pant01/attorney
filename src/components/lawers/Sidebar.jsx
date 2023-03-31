import React, { useState } from 'react'
import"./css/sidebar.css"
import {AiOutlineLogout} from "react-icons/ai"
import {BsAlarm} from "react-icons/bs"
import {BsWallet2} from "react-icons/bs"
import {BsStars} from "react-icons/bs"
import {FaHandHoldingHeart} from "react-icons/fa"
import {GiWallet} from "react-icons/gi"
import {BsHeadphones} from "react-icons/bs"
import {BsPerson} from "react-icons/bs"
import {BsQuestion} from "react-icons/bs"
import {FaArrowRight} from "react-icons/fa"
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Sidebar = () => {
  const [bg, setbg] = useState(false)
  const navigate = useNavigate();
  const {pathname} = useLocation()

  const handleLogOut = () =>{
    localStorage.clear()
    // navigate('/')
    window.location.reload(navigate('/'))
  }

  const changebg = (val) =>{
    console.log(val)
    console.log(pathname)
    if(pathname === val){
      return 'list bggrd'
    }else{
      return 'list'
    }
  }


  return (
    <>
    <div className='sidebar'>
      <div className='SIDEBAR-USER-INFO'>
        <div className='PROFILE-PIC-USER'>
          <img src='/assets/calls/person1.svg' alt='profile-pic'></img>
        </div>
        <div className='SIDEBAR-PROFILE-INFO'>
          <p className='SIDEBAR-USER-NAME'>JOHN SMITH</p>
          <p className='USER-NO-MAIL'><span>8049238492</span><span className='MAIL-mob'>john@gmail.com</span></p>
          <p className='USER-ADD'>Banglore, india</p>
          <p className='MOB-USER-GENDER'>Male</p>
        </div>
      </div>
      <div className='list-wrapper'>

      <div className={changebg('/appointment')}><li><BsAlarm className='sidebar-icons' /><Link to="/appointment" name="/appointment"> Appointment </Link></li><FaArrowRight className='FaArrowRight'/></div>

      <div className={changebg('/wallet')}><li><BsWallet2 className='sidebar-icons' /><Link to="/wallet" 
      name="/wallet">My Wallet</Link></li><FaArrowRight className='FaArrowRight'/></div>

      <div className={changebg('/reviews')}><li><BsStars className='sidebar-icons' /><Link to="/reviews"
      name="/reviews">Your Reviews</Link></li><FaArrowRight className='FaArrowRight'/></div>

      <div className={changebg('/services')}><li><FaHandHoldingHeart className='sidebar-icons' /><Link to="/services"
      name="/services"> My Services </Link></li><FaArrowRight className='FaArrowRight'/></div>
      
      <div className={changebg('/payments')}><li><GiWallet className='sidebar-icons' /><Link to="/payments" name="/payments">Payments</Link></li><FaArrowRight className='FaArrowRight'/></div>

      <div className={changebg('/help')}><li><BsHeadphones className='sidebar-icons' /><Link to="/help" name='/help'> Help & Support </Link></li><FaArrowRight className='FaArrowRight'/></div>

      <div className={changebg('/editprofile')}><li><BsPerson className='sidebar-icons' /><Link to="/editprofile" name="/editprofile">Edit Profile</Link></li><FaArrowRight className='FaArrowRight'/></div>

      <div className={changebg('/about')}>
      <li><BsQuestion className='sidebar-icons' /><Link to="/about" name="/about"> About Us </Link></li><FaArrowRight className='FaArrowRight'/></div>

      <button className='logout' onClick={handleLogOut}> <AiOutlineLogout className='logout-icon'/> Log out</button>
     </div>



     <div className='mob-list-wrapper'>
      <div className='list'><BsAlarm className='sidebar-icons' /><li><Link to="/card"> Appointment </Link></li><FaArrowRight className='FaArrowRight'/></div>

      <div className='list'><BsWallet2 className='sidebar-icons' /><li> <Link to="/wallet">My Wallet</Link></li><FaArrowRight className='FaArrowRight'/></div>

      <div className='list'><BsStars className='sidebar-icons' /><li><Link to="/reviews">Your Reviews</Link></li><FaArrowRight className='FaArrowRight'/></div>

      <div className='list'><FaHandHoldingHeart className='sidebar-icons' /><li><Link to="/services"> My Services </Link></li><FaArrowRight className='FaArrowRight'/></div>
      
      <div className='list'><GiWallet className='sidebar-icons' /><li> <Link to="/payments">Payments</Link></li><FaArrowRight className='FaArrowRight'/></div>

      <div className='list'><BsHeadphones className='sidebar-icons' /><li><Link to="/help"> Help & Support </Link></li><FaArrowRight className='FaArrowRight'/></div>

      <div className='list'><BsPerson className='sidebar-icons' /><li> <Link to="/editprofile">Edit Profile</Link></li><FaArrowRight className='FaArrowRight'/></div>

      {/* <div className='list'><BsQuestion className='sidebar-icons' />
      <li><Link to="/about"> About Us </Link></li><FaArrowRight className='FaArrowRight'/></div> */}

      <button className='logout'> <AiOutlineLogout className='logout-icon'/> Log out</button>
     </div>




    </div>
    <div className='SIDEBAR-FOOTER'>
      <li className='FOOTER-LINKS'>FAQs</li>
      <li className='FOOTER-LINKS'>TERMS OF USE</li>
      <li className='FOOTER-LINKS'>PRIVACY POLICY</li>
    </div>
    <div className="USER-LOGOUT">
    <button className='USER-LOGOUT-BTN'>LOG OUT</button>
    </div>
    </>
  )
}

export default Sidebar
