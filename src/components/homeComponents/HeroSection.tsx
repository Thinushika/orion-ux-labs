import Image from 'next/image'
import React from 'react'
import { Button } from 'reactstrap'

const HeroSection = () => {
  return (
    <>
      <div className="d-flex flex-column-reverse flex-lg-row bg-light">
        <div className="col-12 col-lg-6">
          <h2 className='txt-color-gray font-600 font-64px font-inter'>We design Feeling</h2>
          <p className='font-raleway font-400 font-32px'>We Maily Design a user interface that aligns well with your business goals and creates excellent conversion rates.</p>
          <Button className='font-raleway btn-hero-sec'>Get Start</Button>
        </div>
        <div className="col-12 col-lg-6 px-lg-0">
          <Image src={'/assests/images/hero-sec-image.svg'} alt='' width={300} height={300} />
        </div>
      </div>
    </>
  )
}

export default HeroSection