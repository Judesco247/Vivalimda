import React from 'react'
import { service_header, service_header_mobile } from '../assets'

const Serviceheader = () => (
  <div>
    <div className="hidden md:block">
        <img className='' src={service_header} alt="banner" />
    </div>

    <div className="block md:hidden w-[428px] h-[311px] mt-4">
        <img className='' src={service_header_mobile} alt="banner" />
    </div>
    </div>
  )

export default Serviceheader