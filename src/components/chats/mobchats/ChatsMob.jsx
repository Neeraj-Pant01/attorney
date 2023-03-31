import React, { useState } from 'react'
import "./mobchat.css"
import {FiBell} from "react-icons/fi"
import {GoPrimitiveDot} from "react-icons/go"
import MobMessenger from '../mobmessenger/MobMessenger'

const ChatsMob = () => {
  const [messenger, setMessenger] = useState(true)
  return (
    <>
    {
      messenger ?
    <div className='ChatsMob'>
      <div className='mob-TOP'>
        <div className="mob-chats-topbar">
            <div className='mob-chats-pf-img'>
                <img src='/assets/calls/person1.svg' alt='pf-pic'></img>
            </div>
            <div className='mob-chats-title'>CONVERSATIONS</div>
            <div className='mob-chats-bell'> <FiBell /></div>
        </div>
        <div className="mob-chats-searchbar">
          <input type="text" placeholder='start conversation'></input>
        </div>
        </div>

        <div className='mob-CHATS'>
          <div className='mob-chat' onClick={()=>setMessenger(false)}>
            <div className='mob-chat-left'>
              <div className='mob-chats-img'>
                <img src='/assets/onlineImages/online3.svg' alt='person'></img>
              </div>
              <div className='mob-chats-p-name'>
                <p className='mob-client-name'>Jonathan Rabeb<GoPrimitiveDot className='mob-online'/></p>
                <p className='mob-recent-msg'>hii</p>
              </div>
            </div>
            <div className='mob-chats-right'>
              <span>just now</span>
            </div>
          </div>


          <div className='mob-chat' onClick={()=>setMessenger(false)}>
            <div className='mob-chat-left'>
              <div className='mob-chats-img'>
                <img src='/assets/onlineImages/online3.svg' alt='person'></img>
              </div>
              <div className='mob-chats-p-name'>
                <p className='mob-client-name'>Jonathan Rabeb<GoPrimitiveDot className='mob-online'/></p>
                <p className='mob-recent-msg'>hii</p>
              </div>
            </div>
            <div className='mob-chats-right'>
              <span>just now</span>
            </div>
          </div>

        </div>
        
    </div>
    :
    <MobMessenger setMessenger={setMessenger} />
}
    </>
  )
}

export default ChatsMob
