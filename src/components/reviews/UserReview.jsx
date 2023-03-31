import React from 'react'
import "./review.css"
import {AiTwotoneStar} from "react-icons/ai"
import {AiInverted} from "react-icons/ai"

const UserReview = () => {
    return (
        <>
            <div className='review'>
                <div className='customer-details'>
                    <div className='customer-name'>
                    <p >Robert Jain</p>
                    <div>
                        <AiTwotoneStar className='AiTwotoneStar' /><AiTwotoneStar className='AiTwotoneStar' /><AiTwotoneStar className='AiTwotoneStar' /><AiTwotoneStar className='AiTwotoneStar' /><AiTwotoneStar className='AiTwotoneStar-emp' />
                    </div>
                    </div>
                    <p className='time'>9:20, 10.Oct.2022</p>
                </div>
                <div className='review-text'><h2>Charges Withdrawn Peace bond Rating</h2>
                    <p>Tonii & her legal team provided expertise & confidence to manage a very difficult situation. Tonii was very good in explaining the step by step process, strategize to increase win odds and masterfully managing expectation along the way</p>
                </div>
            </div>
        </>
    )
}

export default UserReview
