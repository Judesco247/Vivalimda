import React from 'react'
import { vector, } from "../assets";
import styles from '../style';

const Clients = () => (
  <div className={`bg-color0 ${styles.paddingX} ${styles.flexStart}`}>
    <div className={`${styles.boxWidth}`}>
      <div class="container mx-auto bg-color0 ">
        <div class="bg-color0">
          <div className="flex items-center justify-center mt-20 ">
            <h1 class="md:w-[914px] w-[267px] md:h-[44px] h-[31px] text-center text-[20px] text-white font-bold font-bodyfont-700">Why Choose VIVALIMDA?</h1>
          </div>
          <div className="flex items-center justify-center ">
            <p class="md:w-[950px] w-[380px] md:h-[52px] h-[130px] text-center text-[13px] text-white font-bodyfont-700 p-4">With our advanced technological solutions and innovative strategies, VIVALIMDA can provide your business with enhanced communication, increased revenue, streamlined operations, and a competitive advantage. Choose us for results-driven solutions.</p>
          </div>
          <div className="container mx-auto grid md:grid-cols-3 grid-cols-2 gap-4 mt-10 mb-28">
            <div className="container mx-auto p-2">
              <div className="md:ml-12 flex items-center">
                <img src={vector} alt="bluetick" className="mr-2" />
                <h5 className='text-white text-[14px] font-bold font-bodyfont-400'>Enhanced communication</h5>
              </div>
            </div>
            <div className="container mx-auto p-2">
              <div className="md:ml-12 flex items-center">
                <img src={vector} alt="bluetick" className="mr-2" />
                <h5 className='text-white text-[14px] font-bold font-bodyfont-400'>Better collaboration</h5>
              </div>
            </div>
            <div className="container mx-auto p-2">
              <div className="md:ml-12 flex items-center">
                <img src={vector} alt="bluetick" className="mr-2" />
                <h5 className='text-white text-[14px] font-bold font-bodyfont-400'>Improved strategies</h5>
              </div>
            </div>
            <div className="container mx-auto p-2">
              <div className="md:ml-12 flex items-center">
                <img src={vector} alt="bluetick" className="mr-2" />
                <h5 className='text-white text-[14px] font-bold font-bodyfont-400'>Increased revenue</h5>
              </div>
            </div>
            <div className="container mx-auto p-2">
              <div className="md:ml-12 flex items-center">
                <img src={vector} alt="bluetick" className="mr-2" />
                <h5 className='text-white text-[14px] font-bold font-bodyfont-400'>Customized solutions</h5>
              </div>
            </div>
            <div className="container mx-auto p-2">
              <div className="md:ml-12 flex items-center">
                <img src={vector} alt="bluetick" className="mr-2" />
                <h5 className='text-white text-[14px] font-bold font-bodyfont-400'>Enhanced compliance</h5>
              </div>
            </div>
            <div className="container mx-auto p-2">
              <div className="md:ml-12 flex items-center">
                <img src={vector} alt="bluetick" className="mr-2" />
                <h5 className='text-white text-[14px] font-bold font-bodyfont-400'>Streamlined operations</h5>
              </div>
            </div>
            <div className="container mx-auto p-2">
              <div className="md:ml-12 flex items-center">
                <img src={vector} alt="bluetick" className="mr-2" />
                <h5 className='text-white text-[14px] font-bold font-bodyfont-400'>Reduced costs</h5>
              </div>
            </div>
            <div className="container mx-auto p-2">
              <div className="md:ml-12 flex items-center">
                <img src={vector} alt="bluetick" className="mr-2" />
                <h5 className='text-white text-[14px] font-bold font-bodyfont-400'>Reduced risk</h5>
              </div>
            </div>
            <div className="container mx-auto p-2">
              <div className="md:ml-12 flex items-center">
                <img src={vector} alt="bluetick" className="mr-2" />
                <h5 className='text-white text-[14px] font-bold font-bodyfont-400'>Improved project management</h5>
              </div>
            </div>
            <div className="container mx-auto p-2">
              <div className="md:ml-12 flex items-center">
                <img src={vector} alt="bluetick" className="mr-2" />
                <h5 className='text-white text-[14px] font-bold font-bodyfont-400'>Increased retention</h5>
              </div>
            </div>
            <div className="container mx-auto p-2">
              <div className="md:ml-12 flex items-center">
                <img src={vector} alt="bluetick" className="mr-2" />
                <h5 className='text-white text-[14px] font-bold font-bodyfont-400'>Competitive advantage</h5>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
)

export default Clients