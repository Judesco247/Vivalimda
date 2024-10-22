import React from 'react'
import styles from '../style'
import { Navbar, Serviceheader, Wedo, CardDeal, Difference, Contact, Footer, Business } from '../components'
import App from '../components/Business'

const Services = () => (
    <div className='bg-dimWhite w-full overflow-hidden'>
        <div className={`${styles.flexStart}`}>
            <div className={``}>
                <Serviceheader />
            </div>
        </div>
        <div className="bg-color7">
            <div className={``}>
                <Wedo />
            </div>
        </div>
        <div className={`bg-color7`}>
            <div className={``}>
                <CardDeal />
            </div>
        </div>
        <div className={`bg-dimWhite ${styles.paddingX} ${styles.flexStart}`}>
            <div className={``}>
                <Difference />
            </div>
        </div>
        {/* <div className={`bg-dimWhite mb-20`}>
            <div className={``}>
                <App/>
            </div>
        </div> */}
        <div className={`bg-color0`}>
            <div className={``}>
                <Contact />
            </div>
        </div>
    </div>
)

export default Services