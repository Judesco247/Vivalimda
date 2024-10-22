import React from 'react'
import { discover5, discover6, discover7, } from '../assets'

const RelatedNews = () => (
    <div>
        <div className='mt-10 md:w-[800px] w-[428px] md:h-[395px] h-[722px] md:mb-20'>
            <h5 className='mt-10 mb-10 text-center text-color1 text-[25px] font-bold font-bodyfont-700'>Related News</h5>
            <div class="md:grid grid-cols-3 mt-5 items-center">

                <div class="container mx-auto md:w-[250px] w-[379px] h-[395px]">
                    <img src={discover5} alt="bluetick" className="md:w-[351px] w-[379px] md:h-[194px]" />
                    <p className="ml-3 text-color2 text-[13px] font-bodyfont-400 pt-5">Sept 15th, 2022</p>
                    <h5 className="ml-3 md:w-[250px] w-[250px] h-[49px] text-color1 md:text-[14px] text-[18px] font-bold mb-2 font-bodyfont-400">Nintendo cancels Switch Pro in favour of Switch 2: Report.</h5>
                    <div className="ml-3 flex items-center mt-[20px]">
                        <a href="#" class="cursor-pointer text-background font-bodyfont-700 text-[13px] font-semibold">Read More </a>
                    </div>
                </div>

                <div class="hidden md:block container mx-auto w-[250px] h-[395px]">
                    <img src={discover6} alt="bluetick" className="w-[359px] h-[194px]" />
                    <p className="ml-3 text-color2 text-[13px] font-bodyfont-400 pt-5">Sept 15th, 2022</p>
                    <h5 className="ml-3 w-[250px] h-[49px] text-color1 text-[14px] font-bold mb-2 font-bodyfont-400">TSMC starts volume production of most advanced chips in Taiwan.</h5>
                    <div className="ml-3 flex items-center mt-[20px]">
                        <a href="#" class="cursor-pointer text-background font-bodyfont-700 text-[13px] font-semibold">Read More </a>
                    </div>
                </div>

                <div class="hidden md:block container mx-auto w-[250px] h-[395px]">
                    <img src={discover7} alt="bluetick" className="w-[359px] h-[194px]" />
                    <p className="ml-3 text-color2 text-[13px] font-bodyfont-400 pt-5">Sept 15th, 2022</p>
                    <h5 className="ml-3 w-[250px] h-[49px] text-color1 text-[14px] font-bold mb-2 font-bodyfont-400">Samsung Galaxy S23 series could launch with One UI 5.1.</h5>
                    <div className="ml-3 flex items-center mt-[20px]">
                        <a href="#" class="cursor-pointer text-background font-bodyfont-700 text-[13px] font-semibold">Read More </a>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )

export default RelatedNews