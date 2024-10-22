import React from 'react'
import { discover1, discover2, discover3, discover4, discover5 } from '../assets'
import { Link } from 'react-router-dom'

function Discover () {
    return (
    <div className='md:ml-3 container mx-auto mb-20'>
        <h5 className='mt-20 text-color1 text-[25px] font-bold font-bodyfont-700'>Discover More</h5>
        <div class="md:grid lg:grid-cols-4 md:grid-cols-2 gap-1 mt-5 items-center">

            <Link to="/" class="cursor-pointer text-color1 hover:text-background md:w-[250px] w-[428px]">
                <div class="container mx-auto md:w-[250px] w-[380px] mt-6">
                    <img src={discover1} alt="bluetick" className="md:w-[222px] w-[372px] md:h-[160px] h-[173px]" />
                    <div className="ml-3 flex items-center mt-[20px]">
                        <Link to="/" class="cursor-pointer  font-bodyfont-700 text-[13px] md:font-semibold font-bold">Home </Link>
                    </div>
                </div>
            </Link>

            <Link to="/about-us" class="cursor-pointer text-color1 hover:text-background md:w-[250px] w-[428px]">
                <div class="container mx-auto md:w-[250px] w-[380px] mt-6">
                    <img src={discover2} alt="bluetick" className="md:w-[222px] w-[372px] md:h-[160px] h-[173px]" />
                    <div className="ml-3 flex items-center mt-[20px]">
                        <Link to="/about-us" class="cursor-pointer  font-bodyfont-700 text-[13px] md:font-semibold font-bold">About Us </Link>
                    </div>
                </div>
            </Link>

            <Link to="/services" class="cursor-pointer text-color1 hover:text-background md:w-[250px] w-[428px]">
                <div class="container mx-auto md:w-[250px] w-[380px] mt-6">
                    <img src={discover3} alt="bluetick" className="md:w-[222px] w-[372px] md:h-[160px] h-[173px]" />
                    <div className="ml-3 flex items-center mt-[20px]">
                        <Link to="/services" preventScrollReset={false} class="cursor-pointer  font-bodyfont-700 text-[13px] md:font-semibold font-bold">Services </Link>
                    </div>
                </div>
            </Link>

            {/* <a href="#" class="cursor-pointer text-color1 hover:text-background md:w-[250px] w-[428px]">
                <div class="container mx-auto md:w-[250px] w-[380px] mt-6">
                    <img src={discover4} alt="bluetick" className="md:w-[222px] w-[372px] md:h-[160px] h-[173px]" />
                    <div className="ml-3 flex items-center mt-[20px]">
                        <a href="#" class="cursor-pointer  font-bodyfont-700 text-[13px] md:font-semibold font-bold">Case Studies </a>
                    </div>
                </div>
            </a> */}

            <a href="#" class="cursor-pointer text-color1 hover:text-background md:w-[250px] w-[428px]">
                <div class="container mx-auto md:w-[250px] w-[380px] mt-6">
                    <img src={discover5} alt="bluetick" className="md:w-[222px] w-[372px] md:h-[160px] h-[173px]" />
                    <div className="ml-3 flex items-center mt-[20px]">
                        <a href="#" class="cursor-pointer  font-bodyfont-700 text-[13px] md:font-semibold font-bold">Blog </a>
                    </div>
                </div>
            </a>

        </div>
    </div>
)
        }

export default Discover