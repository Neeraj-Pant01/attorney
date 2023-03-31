import React from 'react'
import "./bankDetails.css"

const BankDetails = () => {
  return (
    <div className='bank-details-wrapper'>
            <div className='bankdetails-header'>
        <div className='add-details-info'>
        <span className='add-details'>ADD BANK DETAILS</span>
        <span>change Bank</span>
        </div>
        <div className="ac-details">
          <div className='input-field'>
            <label>Bank account Number
            <input type="text"></input>
            </label>
          </div>
          <div className='input-field'>
            <label>Confirm Bank account Number
            <input type="text"></input>
            </label>
          </div>
          <div className='input-field'>
            <input type="text" placeholder='Bank Name'></input>
          </div>
          <div className='input-field'>
            <input type="text" placeholder='IFSC code'></input>
          </div>
          <div className='input-field'>
            <input type="text" placeholder='Bank Address'></input>
          </div>
            <div className='save-ac'>
            <input type="checkbox" className='check-box'></input>save account
            </div>
        </div>
        <button className='add-bank-ac'>Add bank Account</button>
      </div>
    </div>
  )
}

export default BankDetails
