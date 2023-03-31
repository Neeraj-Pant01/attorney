import React from 'react'
import "./loginFooter.css"

const LoginFooter = () => {
  return (
    <>
    <div className='footer'>
        <div className='footer-logo-wrapper'>
            <div className="footer-img">
                <img src='/assets/loginLogo.svg' alt='login'></img>
            </div>
            <div className="footer-info">
                <p>find your clients online with <br></br>0% comission</p>
            </div>
        </div>
        <div className='footer-contact'>
            <h1>CONTACT US</h1>
            <div className='footer-email'>
                <p className='email'>Email</p>
                <p className='email-id'>info@gamil.com</p>
            </div>
        </div>
        <div className="footer-links">
            <p className='links'>Links</p>
            <a href='/about'>About</a>
            <a href='/privacy'>Privacy policy</a>
            <a href='/terms'>Terms of Services</a>
            <a href='/faq'>F.A.Q</a>
        </div>
        <p className='mob-footer'>
            copyright &copy; 2021 find your advocate
        </p>
    </div>
            <div className='copyrights'>
                <p>copyright &copy; 2021 Advocate find your Lawers</p>
        </div>
        </>
  )
}

export default LoginFooter
