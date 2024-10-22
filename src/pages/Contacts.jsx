import React from 'react'
import styles from '../style'
import { Navbar, Contactheader, Contactwhite, Discover, Contact, Footer } from '../components'

const Contacts = () => (
    <div className='bg-dimWhite w-full overflow-hidden'>
        <div className={`${styles.flexStart}`}>
            <div className={``}>
                <Contactheader />
            </div>
        </div>
        <div className={`bg-dimWhite`}>
            <div className={``}>
                <Contactwhite />
            </div>
        </div>
        <div className={`bg-dimWhite ${styles.paddingX} ${styles.flexStart}`}>
            <div className={``}>
                <Discover />
            </div>
        </div>
        <div className={`bg-color0`}>
            <div className={``}>
                <Contact />
            </div>
        </div>
    </div>
  )

export default Contacts