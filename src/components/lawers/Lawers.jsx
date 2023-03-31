import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import "./css/lawers.css"
import Card from './Card'
import InfoCard from './InfoCard'
import UserInfo from './UserInfo'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { userActions } from '../redux/actions/actions'

const Lawers = () => {
  const [accept, setAccept] = useState(false);
  const [info, setInfo] = useState(false)  
  const [request, setRequest] = useState({})


  const user = useSelector((state)=>state.userReducer.payload)
  const dispatch = useDispatch()

const testFunc = () =>{
  setAccept(true)
}

useEffect(()=>{
  loadUserDetails()
},[])

const loadUserDetails = async () =>{
  try{
      const response = await axios.get('https://api.theonlineattorney.in/api/v1/profile/',{
          headers :{
              "Authorization" : `Bearer ${JSON.parse(localStorage.getItem('Logintoken'))}`
          }
      })
      dispatch(userActions(response.data))
  }catch(err){
      console.log("error occured")
  }
}

useEffect(()=>{
  loadClientRequests()
},[])

const loadClientRequests = async () =>{
  try{
      const response = await axios.get('https://api.theonlineattorney.in/api/v1/consult/',{
          headers :{
              "Authorization" : `Bearer ${JSON.parse(localStorage.getItem('Logintoken'))}`
          }
      })
      setRequest(response.data)
  }catch(err){
      console.log("error occured")
  }
}
console.log(request)

  return (
    <>
    <div className='cards bg-hide'>
      <Card />
    </div>
    <div className='lawers'>
      <Topbar userDetails={user} />
      <div className='SIDEBAR'>
      <Sidebar />
      </div>
      <div className='lawers-wrapper'>
        <div className='lawers-container'>
              <div className='help-box'></div>
          <div className='lawers-info'>
            <div className='lawer-card'>
            <div className='p'>
            <p className='welcome-lawer'>welcome back !</p>
            <h1 className='users-name' style={{fontWeight:"500"}}>Mr {`${user.first_name} ${user.last_name}`}</h1>
            </div>
              <div className='cards'>
                  {
                    
                request.length === 0
                ?
                <>
                <h3 style={{width:"80%", textAlign:"center", marginTop:"9rem"}}>sorry !</h3>
                <h3 style={{width:"80%", textAlign:"center"}}>You don't have any requests to show right now </h3>
                </>
                :
                <>
                <Card />
                {/* {
                  request.map((request)=>{
                    return (
                  <Card info={info} setInfo={setInfo} accept={accept} testFunc={testFunc} request={request}/>
                    )
                  })
                } */}
                </>
                }
              </div>
            </div>
            {
              request.length !==0 &&
              <div className='card-info'>
              {!info ? <InfoCard /> : <UserInfo accept={accept} testFunc={testFunc} />}
            </div>
            }
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Lawers
