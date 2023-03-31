import React from 'react'
import "./wallet.css"
import Topbar from '../lawers/Topbar'
import Sidebar from '../lawers/Sidebar'
import {IoWalletOutline} from "react-icons/io5"
import MobieWallet from './MobieWallet'

const MyWallet = () => {
  return (
    <>
    <div className='mob-wallet'>
        <MobieWallet />
    </div>
    <div className='mywallet'>
        <Topbar  />
        <Sidebar />
        <div className='wallet-container'>
            <div className='wallet'>
                <div className='wallet-top'>
                    <div className='balance-info'>
                        <IoWalletOutline className='wallet-icon' />
                        <div className='current-balance'>
                            <p style={{fontSize:"1rem"}}>Wallet balance</p>
                            <span className='c-b' style={{fontWeight:"lighter"}}>$36127.00</span>
                        </div>
                    </div>
                    <hr className='break'></hr>
                </div>
                <div className='wallet-bottom'>
                    <div className='wallet-image'>
                        <img src='/assets/wallet.svg' alt='wallet'></img>
                    </div>
                    <div className='wallet-desc-wrapper'>
                        <div className='wallet-desc1'>
                        Digital wallets have made cashless transactions extremelyconvenient and hassle free. As a result, more and more people are adopting the digital wallet system for accepting and making payments. After demonetization, even the small street vendors like fruit and vegetable sellers have started using digital wallets.</div>
                        <div className='wallet-desc2'>
                        However, what we often ponder over is how exactly do the digital wallet companies earn, especially when they are offering up to 50% to 100% cashback. Let’s get a little deep and understand the revenue model of the digital wallet companies.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default MyWallet

