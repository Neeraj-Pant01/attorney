import React from 'react'
import "./review.css"
import Topbar from '../lawers/Topbar'
import Sidebar from '../lawers/Sidebar'
import UserReview from './UserReview'
import {GiHandcuffs} from 'react-icons/gi'
import MobReviews from './mobreviews/MobReviews'
import {RiStarSFill} from "react-icons/ri"
import {FiArrowLeft} from "react-icons/fi"
import { useNavigate } from 'react-router'

const Review = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className='review-wrapper'>
      <Topbar />
      <Sidebar />
      <div className='review-cont'>
        <div className='review-options-wrapper'>
            <div className='review-options'>
                {/* <ul> */}
                    <li className='current active'><GiHandcuffs className='bail' />Bail</li>
                    <li className='current'><img src="/assets/crimes/offence.svg" alt='offence' className='offence'></img>Sexual Offences</li>
                    <li className='current'><img src="/assets/crimes/hacking.svg" alt='hack' className='hack'></img>Internet Crime</li>
                    <li className='current'><img src="/assets/crimes/drugs.svg" alt='drugs' className='drugs'></img>Drug Offences</li>
                {/* </ul> */}
            </div>
        </div>
        <div className='reviews'>
            <div className='review-title'>
                <span className='REVIEWS'>REVIEWS (8)</span>
            </div>
            <UserReview />
            <UserReview />
            <UserReview />
            <UserReview />
        </div>
      </div>
    </div>
    <div className='MOB-REVIEWS'>
      <div className='MOB-Reviews-top'>
        <div className='MOB-Reviews-top-topbar'>
          <FiArrowLeft className='review-FiArrowLeft' onClick={()=>navigate('/appointment')} />
          my reviews
        </div>
        <div className="MOB-Reviews-top-mid">
          <h1>4.0</h1>
          <div className='ratings-stars'>
            <RiStarSFill className='ratings-star-filled' />
            <RiStarSFill className='ratings-star-filled' />
            <RiStarSFill className='ratings-star-filled' />
            <RiStarSFill className='ratings-star-filled' />
            <RiStarSFill className='ratings-star-unfilled' />
          </div>
          <p>based on 8 reviews</p>
        </div>
        <div className="MOB-Reviews-top-bottom">
          <div className='EXCELLENT'>
          <p>Excellent</p><progress id='r-p-bar' max="100" value="7"></progress>
          </div>
          <div className="GOOD">
            <p>Good</p> <progress max="100" value="5"></progress>
          </div>
          <div className='Average'>
            <p>Average</p> <progress max="100" value="4"></progress>
          </div>
          <div className='Below-Average'>
            <p>Below Average</p> <progress max="100" value="5"></progress>
          </div>
          <div className='Poor'>
            <p>Poor</p> <progress max="100" value="3"></progress>
          </div>
        </div>
      </div>
      <MobReviews />
    </div>
    </>
  )
}

export default Review
