import React from 'react'
import "./payments.css"

const PaymentsHistory = () => {
  return (
    <>
                  <div className="payments-history">
                <h2>Transaction History</h2>
                <div className='payment'>
                    <div className='payment-info'>
                        <img src='/assets/onlineImages/person3.svg' alt='payment'></img>
                        <div className="payment-user-info">
                            <p className='u-name'><b>John Smith</b></p>
                            <span>city</span>
                            <span className='payment-date'>date</span>
                        </div>
                    </div>
                    <div className='payment-amount'>
                        <span className='amount-title'>Amount</span>
                        <h1>$100.00</h1>
                    </div>
                </div>


                <div className='payment'>
                    <div className='payment-info'>
                        <img src='/assets/onlineImages/person3.svg' alt='payment'></img>
                        <div className="payment-user-info">
                            <p className='u-name'><b>John Smith</b></p>
                            <span>city</span>
                            <span className='payment-date'>date</span>
                        </div>
                    </div>
                    <div className='payment-amount'>
                        <span className='amount-title'>Amount</span>
                        <h1>$100.00</h1>
                    </div>
                </div>
                 </div>
    </>
  )
}

export default PaymentsHistory
