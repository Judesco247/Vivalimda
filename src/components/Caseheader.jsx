import React from 'react'
import { case_header, case_header_mobile } from '../assets'

const Caseheader = () => (
  <div>
    <div className="hidden md:block container mx-auto">
        <img className='' src={case_header} alt="banner" />
    </div>

    <div className="block md:hidden w-[428px] h-[311px] mt-4">
        <img className='' src={case_header_mobile} alt="banner" />
    </div>
    </div>
  )

export default Caseheader