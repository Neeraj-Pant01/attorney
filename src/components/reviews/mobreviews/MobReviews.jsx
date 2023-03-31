import React from 'react'
import "./mobreviews.css";
import {AiOutlineMessage} from "react-icons/ai"
import {RiStarSFill} from "react-icons/ri"

const MobReviews = () => {
  return (
    <div className='MobReviews'>
        <div className='MobReviews-title'>
            <AiOutlineMessage className='AiOutlineMessage' /> Reviews (8)
        </div>
        <div className="MobReviews-review">
            <div className='MobReviews-review-top'>
                <div className='MobReviews-review-top-left'>
                    <p>Arshadul</p>
                    <p className='MobReviews-review-top-left-date'>7 october 2020</p>
                </div>
                <div className="MobReviews-review-top-right">
                    <RiStarSFill className='RiStarSFill' />
                    <RiStarSFill className='RiStarSFill' />
                    <RiStarSFill className='RiStarSFill' />
                    <RiStarSFill className='RiStarSFill' />
                    <RiStarSFill className='RiStarSFill-unfilled' />
                </div>
            </div>
            <div className='MobReviews-review-message'>
                <b>charges withdrawn peace bond rating</b>
                <p>Tonii & her legal team provided expertise & confidence to manage a very difficult situation. Tonii was very good in explaining the step by step process, strategize to increase win odds and masterfully managing expectation along the way.</p>
            </div>
        </div>


        <div className="MobReviews-review">
            <div className='MobReviews-review-top'>
                <div className='MobReviews-review-top-left'>
                    <p>Arshadul</p>
                    <p className='MobReviews-review-top-left-date'>7 october 2020</p>
                </div>
                <div className="MobReviews-review-top-right">
                    <RiStarSFill className='RiStarSFill' />
                    <RiStarSFill className='RiStarSFill' />
                    <RiStarSFill className='RiStarSFill' />
                    <RiStarSFill className='RiStarSFill' />
                    <RiStarSFill className='RiStarSFill-unfilled' />
                </div>
            </div>
            <div className='MobReviews-review-message'>
                <b>charges withdrawn peace bond rating</b>
                <p>Tonii & her legal team provided expertise & confidence to manage a very difficult situation. Tonii was very good in explaining the step by step process, strategize to increase win odds and masterfully managing expectation along the way.</p>
            </div>
        </div>


    </div>
  )
}

export default MobReviews
