import React, { useEffect } from 'react'
import styles from '../style'
import { Navbar, Newsheader, Latest, Contact, Footer } from '../components'
import axios from 'axios'

const News = () => (
        <div className='bg-dimWhite w-full overflow-hidden'>
        <div className={`${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Newsheader />
            </div>
        </div>
        <div className={`bg-dimWhite ${styles.paddingX} ${styles.flexStart}`}>
            <div className={``}>
                <Latest />
            </div>
        </div>
        <div className={`md:-mt-[900px] bg-color0 ${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Contact />
            </div>
        </div>
    </div>
    )

export default News