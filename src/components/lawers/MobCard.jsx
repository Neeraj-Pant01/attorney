import React, { useState } from 'react'
import Card from './Card'
import "./css/card.css"
import UserInfo from "../lawers/UserInfo";
import {AiOutlineArrowLeft} from "react-icons/ai"
import { useNavigate } from 'react-router';

const MobCard = () => {
  const [userinfo, setUserinfo] = useState(true)
  const navigate = useNavigate();
  return (
    <>
    {
      userinfo ?
      <>
      <div className='MobCard'>
        <div className='mob-wc'>
        <b><AiOutlineArrowLeft onClick={()=>navigate('/appointment')}/></b>
          <span>WELCOME BACK !</span></div>
        <div className='mob-name'>John Smith</div>
      </div>
      <Card setUserinfo={setUserinfo} />
      <Card setUserinfo={setUserinfo} />
      <Card setUserinfo={setUserinfo}/>
      <Card setUserinfo={setUserinfo}/>
      <Card setUserinfo={setUserinfo}/>
      </>
      :
      <UserInfo setUserinfo={setUserinfo} />
    }
    </>
    
  )
}

export default MobCard
