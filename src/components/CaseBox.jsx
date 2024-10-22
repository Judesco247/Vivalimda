import React from 'react'
import { cloud_img } from '../assets'

const CaseBox = () => (
    <div class="md:flex flex-cols-2 md:mt-20 mt-5">
  <div class="md:ml-16 md:flex w-[254px]">
    <h1 className='text-color1 text-[24px] font-bold font-bodyfont-400'>The Result</h1>
  </div>
  <div class="ml-24 hidden md:grid grid-cols-2 grid-rows-3 gap-4 w-[531px]">
    <div>
      <p className="text-color11 text-[14px] font-bodyfont-400 pb-6"><img src={ cloud_img } alt="bluetick" className="mr-2" />
        <span className='font-bold text-background'>Improved communication<br /> and collaboration</span>
        </p>
    </div>
    <div className=''>
    <p className="text-color11 text-[14px] font-bodyfont-400 pb-6"><img src={ cloud_img } alt="bluetick" className="mr-2" /> 
    <span className='font-bold text-background'>Better customer<br /> satisfaction</span>
    </p>
    </div>

    <div className=''>
      <p className="text-color11 text-[14px] font-bodyfont-400 pb-6"><img src={ cloud_img } alt="bluetick" className="mr-2" />
        <span className='font-bold text-background'>Faster delivery of working<br /> software</span>
        </p>
    </div>
    <div className=''>
    <p className="text-color11 text-[14px] font-bodyfont-400 pb-6"><img src={ cloud_img } alt="bluetick" className="mr-2" /> 
    <span className='font-bold text-background'>Increased flexibility</span>
    </p>
    </div>
  </div>


{/* Mobile view */}

  <div className="block md:hidden grid grid-cols-2 gap-4 mt-10 mb-10">
  <div>
      <p className="text-color11 text-[14px] font-bodyfont-400 pb-6"><img src={ cloud_img } alt="bluetick" className="mr-2" />
        <span className='font-bold text-background'>Improved communication<br /> and collaboration</span>
        </p>
    </div>
    <div className='ml-10'>
    <p className="text-color11 text-[14px] font-bodyfont-400 pb-6"><img src={ cloud_img } alt="bluetick" className="mr-2" /> 
    <span className='font-bold text-background'>Better customer<br /> satisfaction</span>
    </p>
    </div>

    <div className=''>
      <p className="text-color11 text-[14px] font-bodyfont-400 pb-6"><img src={ cloud_img } alt="bluetick" className="mr-2" />
        <span className='font-bold text-background'>Faster delivery of working<br /> software</span>
        </p>
    </div>
    <div className='ml-10'>
    <p className="text-color11 text-[14px] font-bodyfont-400 pb-6"><img src={ cloud_img } alt="bluetick" className="mr-2" /> 
    <span className='font-bold text-background'>Increased flexibility</span>
    </p>
    </div>
  </div>
</div>
  )

export default CaseBox