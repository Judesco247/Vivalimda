import React from 'react'
import { leadership_image1, leadership_image2, leadership_image3 } from '../assets'

const Leadership = () => (
  <div className='md:container mx-auto mb-20'>
    <h5 className='ml-3 mt-20 text-color1 text-[25px] font-bold font-bodyfont-700'>Our Leadership</h5>
    <div class="md:grid lg:grid-cols-3 md:grid-cols-2 gap-1 mt-5 items-center">

      <div class="container mx-auto p-4">
        <img src={leadership_image1} alt="bluetick" className="" />
        <h5 className='mt-4 mb-4 text-[15px] font-bold font-bodyfont-700'>Mark Adeboye</h5>
        <p className="w-[300px] text-color2 text-[13px] font-bodyfont-700">Our user research service
          provides you with insights into how your customers interact with your product or service, allowing
          you to make informed decisions and create a better user experience. We use a range of qualitative
          and quantitative research methods to gather data on user behavior and preferences.</p>
        <div className="flex items-center mt-[30px]">
          <a href="#" class="cursor-pointer text-background font-bodyfont-700 text-[13px] font-semibold">Learn More </a>
        </div>
      </div>

      <div class="container mx-auto p-4">
        <img src={leadership_image3} alt="bluetick" className="" />
        <h5 className='mt-4 mb-4 text-[15px] font-bold font-bodyfont-700'>Mark Adeboye</h5>
        <p className="w-[300px] text-color2 text-[13px] font-bodyfont-700">Our user research service
          provides you with insights into how your customers interact with your product or service, allowing
          you to make informed decisions and create a better user experience. We use a range of qualitative
          and quantitative research methods to gather data on user behavior and preferences.</p>
        <div className="flex items-center mt-[30px]">
          <a href="#" class="cursor-pointer text-background font-bodyfont-700 text-[13px] font-semibold">Learn More </a>
        </div>
      </div>

      <div class="container mx-auto p-4">
        <img src={leadership_image2} alt="bluetick" className="" />
        <h5 className='mt-4 mb-4 text-[15px] font-bold font-bodyfont-700'>Mark Adeboye</h5>
        <p className="w-[300px] text-color2 text-[13px] font-bodyfont-700">Our business analysis services
          help clients identify business problems and opportunities, and develop solutions to improve processes,
          products, and services.</p>
        <div className="flex items-center mt-[70px]">
          <a href="#" class="cursor-pointer text-background font-bodyfont-700 text-[13px] font-semibold">Learn More </a>
        </div>
      </div>

      {/* <div class="container mx-auto p-4">
        <img src={leadership_image1} alt="bluetick" className="" />
        <h5 className='mb-4 text-[15px] font-bold font-bodyfont-700'>Mark Adeboye</h5>
        <p className="w-[300px] text-color2 text-[13px] font-bodyfont-700">Our user research service
          provides you with insights into how your customers interact with your product or service, allowing
          you to make informed decisions and create a better user experience. We use a range of qualitative
          and quantitative research methods to gather data on user behavior and preferences.</p>
        <div className="flex items-center mt-[30px]">
          <a href="#" class="cursor-pointer text-background font-bodyfont-700 text-[13px] font-semibold">Learn More </a>
        </div>
      </div>

      <div class="container mx-auto p-4">
        <img src={leadership_image3} alt="bluetick" className="" />
        <h5 className='mb-4 text-[15px] font-bold font-bodyfont-700'>Mark Adeboye</h5>
        <p className="w-[300px] text-color2 text-[13px] font-bodyfont-700">Our user research service
          provides you with insights into how your customers interact with your product or service, allowing
          you to make informed decisions and create a better user experience. We use a range of qualitative
          and quantitative research methods to gather data on user behavior and preferences.</p>
        <div className="flex items-center mt-[30px]">
          <a href="#" class="cursor-pointer text-background font-bodyfont-700 text-[13px] font-semibold">Learn More </a>
        </div>
      </div>

      <div class="container mx-auto p-4">
        <img src={leadership_image2} alt="bluetick" className="" />
        <h5 className='mb-4 text-[15px] font-bold font-bodyfont-700'>Mark Adeboye</h5>
        <p className="w-[300px] text-color2 text-[13px] font-bodyfont-700">Our business analysis services
          help clients identify business problems and opportunities, and develop solutions to improve processes,
          products, and services.</p>
        <div className="flex items-center mt-[70px]">
          <a href="#" class="cursor-pointer text-background font-bodyfont-700 text-[13px] font-semibold">Learn More </a>
        </div>
      </div> */}
    </div>
  </div>
)

export default Leadership