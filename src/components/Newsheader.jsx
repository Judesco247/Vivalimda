import React from 'react'
import { News_header, news_header_mobile } from '../assets'

const Newsheader = () => (
  <div>
    <div className="hidden md:block">
        <img className='' src={News_header} alt="banner" />
    </div>

    <div className="block md:hidden w-[428px] h-[311px] mt-4">
        <img className='' src={news_header_mobile} alt="banner" />
    </div>
    </div>
  )

export default Newsheader