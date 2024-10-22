import React from 'react'
import { about_header, about_us_mobile } from "../assets"

const Aboutheader = () => (
  <div>
    <div className="hidden md:block">
      <img className='w-full' src={about_header} alt="banner" />
    </div>

    <div className="block md:hidden w-[428px] h-[311px] mt-4">
      <img className='' src={about_us_mobile} alt="banner" />
    </div>
  </div>
)

export default Aboutheader