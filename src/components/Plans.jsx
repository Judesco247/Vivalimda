import React from 'react'
import styles from '../style'

const Plans = () => (
  <div className={`bg-color7 ${styles.paddingX} ${styles.flexStart}`}>
    <div className={`${styles.boxWidth}`}>
      <div className="md:flex flex-cols-2 mt-20">
        <div className="md:w-[700px] w-[358px]">
          <div><h2 className="text-background text-[15px] md:font-semibold font-bold font-bodyfont-700 mb-2 ">Expert Technology Consulting Services</h2></div>
          <div><h2 className="text-color1 text-[25px] font-bold mb-4 font-bodyfont-700">Customized Technology Plans<br /> for Your Needs</h2></div>
        </div>
        <div className="md:ml-12">
          <p className="text-color2 text-[13px] font-bodyfont-400">Our expert consultants can help your business navigate the complex world of technology, providing customized solutions that meet your unique needs. From knowledge management to project management, we have you covered.</p>
        </div>
      </div>
    </div>
  </div>
)

export default Plans