import React from 'react'
import Topbar from '../lawers/Topbar'
import Sidebar from '../lawers/Sidebar'
import "./notification.css"
import Notifications from './Notifications'

const Notificatio = () => {
  return (
    <div className='notification-cont'>
        <Topbar />
        <Sidebar />
        <div className='notification-wrapper'>
            <div className='notifications'>
            <span className='n-title'>Notifications</span>
            <Notifications /></div>
        </div>
    </div>
  )
}

export default Notificatio
