import React from 'react'
import "./notification.css"

const Notifications = () => {
  return (
    <>
    <div className='notification'>
                    <div className="notification-info">
                    <div className='notification-btn'>
                    <button className='new-btn'>joined new advocate</button>
                        <p className='notification-time'>time</p> 
                    </div>
                    <div className='new-registration'>
                        <h4>New Registration</h4>
                        <p>Complete the process to start your selling and get your business started</p>
                    </div>
                    </div>
                </div>


                <div className='notification'>
                    <div className="notification-info">
                    <div className='notification-btn'>
                        <p className='notification-time'>time</p>
                        <button className='old-btn'>joined new advocate</button>
                    </div>
                    <div className='new-registration'>
                        <h4>New Registration</h4>
                        <p>Complete the process to start your selling and get your business started</p>
                    </div>
                    </div>
                </div>
    </>
  )
}

export default Notifications
