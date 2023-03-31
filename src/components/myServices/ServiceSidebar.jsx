import React, { useState } from 'react'
import "./serviceSidebar.css"
// import { Service, AddServices } from '../../ServiceData'

const ServiceSidebar = ({comp1, setComp1, comp2, setComp2, comp3, setComp3, comp4, setComp4, comp5, setComp5, comp6, setComp6, comp7, setComp7, comp8, setComp8, comp9, setComp9, comp10, setComp10, setShowSidebar}) => {

  const [services, setServices] = useState({})



  const handleClick = () =>{
    setShowSidebar(false)
    services.s1 = comp1
    services.s2 = comp2
    services.s3 = comp3
    services.s4 = comp4
    services.s5 = comp5
    services.s6 = comp6
    services.s7 = comp7
    console.log(services)
  }
  const handleChange = (e)=>{
  }
  return (
    <>
    <div className='my-services-wrapper'>
      <p>add services</p>
      <li><input type="checkbox" className='inp'></input><span className='M-Svs'>Sexual Offence</span></li>

      <li><input type="checkbox" className='inp'></input><span className='M-Svs'>Bail</span></li>

      <li><input type="checkbox" className='inp'></input><span className='M-Svs'>Internet Crime</span></li>

      <li className={comp1 ? 'SHOW' : 'HDN'}><input type="checkbox"  className='inp'></input><span className='M-Svs' onChange={(e)=>setComp1(null)}>Domestic Offences</span></li>

      <li className={comp2 ? 'SHOW' : 'HDN'}><input type="checkbox" className='inp'></input><span className='M-Svs'>Firearm & Weapons</span></li>

      <li className={comp3 ? 'SHOW' : 'HDN'}><input type="checkbox" className='inp'></input><span className='M-Svs'>Assaults & Threats</span></li>

      <li className={comp4 ? 'SHOW' : 'HDN'}><input type="checkbox" className='inp'></input><span className='M-Svs'>Property, Fraud & Theafts</span></li>

      <li className={comp5 ? 'SHOW' : 'HDN'}><input type="checkbox" className='inp'></input><span className='M-Svs'>Appeals</span></li>

      <li className={comp6 ? 'SHOW' : 'HDN'}><input type="checkbox" className='inp'></input><span className='M-Svs'>Drugs Offences</span></li>

      <li className={comp7 ? 'SHOW' : 'HDN'}><input type="checkbox" className='inp'></input><span className='M-Svs'>Youth Charges</span></li>
      
    </div>
    <div className='ADD-SERVICES-CONT'>
    <p>add more services</p>
    <li className={!comp1 ? 'SHOW' : 'HDN'}><input type="checkbox" className='INP' value="Domestic Offences" onChange={(e)=>setComp1(e.target.value)}></input><span className='MA-Svs'>Domestic Offences</span>s</li>

    <li className={!comp2 ? 'SHOW' : 'HDN'}><input type="checkbox" className='INP' value="Firearm & Weapons" onChange={(e)=>setComp2(e.target.value)}></input><span className='MA-Svs'>Firearm & Weapons</span></li>

    <li className={!comp3 ? 'SHOW' : 'HDN'}><input type="checkbox" className='INP' value="Assault & Threats" onChange={(e)=>setComp3(e.target.value)}></input><span className='MA-Svs'>Assault & Threats</span></li>

    <li className={!comp4 ? 'SHOW' : 'HDN'}><input type="checkbox" className='INP' value="Property, Fraud & Theaft" onChange={(e)=>setComp4(e.target.value)}></input><span className='MA-Svs'>Property, Fraud & Theaft</span></li>

    <li className={!comp5 ? 'SHOW' : 'HDN'}><input type="checkbox" className='INP' onChange={(e)=>setComp5(e.target.value)} value="Appeals"></input><span className='MA-Svs'>Appeals</span></li>

    <li className={!comp6 ? 'SHOW' : 'HDN'}><input type="checkbox" className='INP' onChange={(e)=>setComp6(e.target.value)} value="drugs Offences"></input><span className='MA-Svs'>Drugs Offences</span></li>

    <li className={!comp7 ? 'SHOW' : 'HDN'}><input type="checkbox" className='INP' value="Youth Charges" onChange={(e)=>setComp7(e.target.value)}></input><span className='MA-Svs'>Youth Charges</span></li>
      <button className='DONE' onClick={handleClick}>Done</button>
    </div>







    {/* <div className='my-services-wrapper'>
      <p>add services</p>
      <li><input type="checkbox" className='inp' checked="checked"></input><span className='M-Svs'>Sexual Offence</span></li>

      <li><input type="checkbox" className='inp' checked="checked"></input><span className='M-Svs'>Bail</span></li>

      <li><input type="checkbox" className='inp' checked="checked"></input><span className='M-Svs'>Internet Crime</span></li>
      <li className={comp1 ? 'HDN' : 'SHOW'}><input type="checkbox" className='inp' checked="checked"></input><span className='M-Svs'>Domestic Offences</span></li>
      <li className={comp2 ? 'HDN' : 'SHOW'}><input type="checkbox" className='inp' checked="checked"></input><span className='M-Svs'>Firearm & Weapons</span></li>
      <li className={comp3 ? 'HDN' : 'SHOW'}><input type="checkbox" className='inp' checked="checked"></input><span className='M-Svs'>Assaults & Threats</span></li>
      <li className={comp4 ? 'HDN' : 'SHOW'}><input type="checkbox" className='inp' checked="checked"></input><span className='M-Svs'>Property, Fraud & Theafts</span></li>
      <li className={comp5 ? 'HDN' : 'SHOW'}><input type="checkbox" className='inp' checked="checked"></input><span className='M-Svs'>Appeals</span></li>
      <li className={comp6 ? 'HDN' : 'SHOW'}><input type="checkbox" className='inp' checked="checked"></input><span className='M-Svs'>Drugs Offences</span></li>
      <li className={comp7 ? 'HDN' : 'SHOW'}><input type="checkbox" className='inp' checked="checked"></input><span className='M-Svs'>Youth Charges</span></li>
      
    </div>
    <div className='ADD-SERVICES-CONT'>
    <p>add more services</p>
    <li className={!comp1 ? 'HDN' : 'SHOW'}><input type="checkbox" className='INP' onChange={(e)=>setComp1(false)}></input><span className='MA-Svs'>Domestic Offences</span>s</li>
    <li className={!comp2 ? 'HDN' : 'SHOW'}><input type="checkbox" className='INP' onChange={(e)=>setComp2(false)}></input><span className='MA-Svs'>Firearm & Weapons</span></li>
    <li className={!comp3 ? 'HDN' : 'SHOW'}><input type="checkbox" className='INP' onChange={(e)=>setComp3(false)}></input><span className='MA-Svs'>Assault & Threats</span></li>
    <li className={!comp4 ? 'HDN' : 'SHOW'}><input type="checkbox" className='INP' onChange={(e)=>setComp4(false)}></input><span className='MA-Svs'>Property, Fraud & Theaft</span></li>
    <li className={!comp5 ? 'HDN' : 'SHOW'}><input type="checkbox" className='INP' onChange={(e)=>setComp5(false)}></input><span className='MA-Svs'>Appeals</span></li>
    <li className={!comp6 ? 'HDN' : 'SHOW'}><input type="checkbox" className='INP' onChange={(e)=>setComp6(false)}></input><span className='MA-Svs'>Drugs Offences</span></li>
    <li className={!comp7 ? 'HDN' : 'SHOW'}><input type="checkbox" className='INP' onChange={(e)=>setComp7(false)}></input><span className='MA-Svs'>Youth Charges</span></li>
      <button className='DONE' onClick={handleClick}>Done</button>
    </div> */}
    </>
  )
}
export default ServiceSidebar
