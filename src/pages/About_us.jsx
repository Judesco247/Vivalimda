import React from 'react'
import styles from '../style'
import { Navbar, Aboutheader, Story, Philosophy, Help, Business, Leadership, Contact, Industries, Footer } from '../components'

const About_us = () => (
    <div className='bg-dimWhite w-full overflow-hidden'>
        <div className={`${styles.flexStart}`}>
            <div className={``}>
                <Aboutheader />
            </div>
        </div>
        <div className={`bg-dimWhite ${styles.paddingX} ${styles.flexStart}`}>
            <div className={``}>
                <Story />
            </div>
        </div>
        <div className='bg-color7'>
            <div className={``}>
                <Philosophy />
            </div>
        </div>
        <div className='bg-color0'>
            <div className={``}>
                <Help />
            </div>
        </div>
        <div className="bg-color7">
            <div className={``}>
                <Industries />
            </div>
        </div>
        {/* <div className={`bg-dimWhite`}>
            <div className={``}>
                <Business />
            </div>
        </div> */}
        {/* <div className={`bg-dimWhite ${styles.paddingX} ${styles.flexStart}`}>
            <div className={``}>
                <Leadership />
            </div>
        </div> */}
        <div className={`bg-color0 `}>
            <div className={``}>
                <Contact />
            </div>
        </div>
    </div>
)

export default About_us