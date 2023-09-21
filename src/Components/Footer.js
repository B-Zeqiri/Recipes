import React from 'react'
import '../Style/Footer.css'
import {GiFoodTruck} from 'react-icons/gi'
import {AiFillInstagram, AiFillFacebook} from 'react-icons/ai'
import {FaTiktok} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'

const Footer = () => {
  return (
    <div className='footerWrapper'>
      <div className='footerLeft'>
        <div className='TruckDiv'>
        <GiFoodTruck className='TruckFood'/>
        </div>
        <h3>The most delicious page you have seen...</h3>
      </div>
      <div className='footerRight'>
        <h3>You can find me here:</h3>
        <div className='socialIcons'>
          <AiFillInstagram className='social'/>
          <AiFillFacebook className='social'/>
          <FaTiktok className='social'/>
          <MdEmail className='social'/>
        </div>
      </div>
      </div>
  )
}

export default Footer