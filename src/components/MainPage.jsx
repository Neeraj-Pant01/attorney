import React  from 'react'
import {Routes, Route} from "react-router-dom";
import Login from "./login/Login"
import CustomerSupport from './customer-support/CustomerSupport'
import Firm from './firm/Firm'
import Payments from './payments/Payments'
import YourServices from './myServices/YourServices'
import Services from './myServices/Services'
import Review from './reviews/Review'
import MyWallet from './Wallet/MyWallet'
import VideoCall from './call/calling/VideoCall'
// import Oncall from './call/Oncall'
import Calling from './call/calling/Calling'
import Chats from './chats/Chats'
import Lawers from './lawers/Lawers'
import Documents from './documents/Documents'
import UserInfo from './lawers/UserInfo';
import EditProfile from './EditProfile/EditProfile';
import MobCard from './lawers/MobCard';
import { useSelector } from 'react-redux';
const MainPage = () => {
  const user = useSelector((state)=>state.userReducer.payload)
  return (
    <>
    <Routes>
      <Route path='/' element={user ?<Lawers /> : <Login />} />
      <Route path='/appointment' element={user ? <Lawers /> : <Login />} />
      <Route path='/reviews' element={user ? <Review /> : <Login />} />
      <Route path='/services' element={user ? <Services /> : <Login />} />
      <Route path='/payments' element={user ? <Payments /> : <Login />} />
      <Route path='/help' element={user ? <CustomerSupport /> : <Login />} />
      <Route path='/videocall' element={user ? <VideoCall /> : <Login />} />
      <Route path='/about' element={user ? <Firm /> : <Login />} />
      <Route path='/documents' element={!user && <Documents />} />
      <Route path='/wallet' element={user ? <MyWallet /> : <Login />} />
      <Route path='/yourservices' element={user ? <YourServices /> : <Login />} />
      <Route path='/userinfo' element={user ? <UserInfo /> : <Login />} />
      <Route path='/chats' element={user ? <Chats /> : <Login />} />
      <Route path='/call' element={user ? <Calling /> : <Login />} />
      <Route path='/editprofile' element={user ? <EditProfile /> : <Login />} />
      <Route path='/card' element={user ? <MobCard /> : <Login />} />
    </Routes>
    </>
  )
}

export default MainPage
