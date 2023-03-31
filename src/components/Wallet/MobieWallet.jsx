import React from 'react'
import "./imobwallet.css"
import {AiOutlineArrowLeft} from "react-icons/ai"
import { useNavigate } from 'react-router'

const MobieWallet = () => {
    const navigate = useNavigate();
    return (
        <div className='mob-Wallet-Cont'>
            <div className='mob-wallet-top'>
                <div className='mob-wallet-top-title'>
                    <span> <AiOutlineArrowLeft style={{color:"black"}} onClick={()=>navigate('/appointment')}/></span>
                    <span className='MY-WALLET'>MY WALLET</span>
                </div>
                <div className='mob-wallet-top-BALANCE'>
                    <div className='WALLET-BALANCE'>
                        <p className='wallet-TITLE'>WALLET BALANCE</p>
                        <p className='AC-BALANCE'>$ 00.00</p>
                    </div>
                </div>
            </div>
            <div className='mob-wallet-bottom'>
                <div className='WALLET-IMG'>
                    <img src='/assets/wallet.svg' alt='wallet'></img>
                </div>
                <div className='WALLET-FOOTER'>
                    <p className='WALLET-FOOTER-CONTENT'>
                        Digital wallets have made cashless transactions extremely
                        convenient and hassle free. As a result, more and more
                        people are adopting the digital wallet system for accepting
                        and making payments. After demonetization, even the
                        small street vendors like fruit and vegetable sellers have
                        started using digital wallets.
                    </p>

                    <p className='WALLET-FOOTER-CONTENT'>
                        However, what we often ponder over is how exactly do the
                        digital wallet companies earn, especially when they are
                        offering up to 50% to 100% cashback. Let’s get a little deep
                        and understand the revenue model of the digital
                        wallet companies.
                    </p>
                    
                </div>
            </div>
        </div>
    )
}

export default MobieWallet
