import React from 'react'
import { Contact_header, contact_header_mobile } from '../assets'

const Contactheader = () => (
  <div>
    <div className="hidden md:block">
        <img className='' src={Contact_header} alt="banner" />
    </div>

    <div className="block md:hidden w-[428px] h-[311px] mt-4">
        <img className='' src={contact_header_mobile} alt="banner" />
    </div>
    </div>
  )

export default Contactheader