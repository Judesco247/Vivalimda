import React from 'react'
import styles from '../style'
import { Navbar, Contact, Footer, NewsBody, RelatedNews } from '../components'

const FullNews = () => (
    <div className='bg-color7 w-full overflow-hidden'>
        <div className={`${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <NewsBody />
            </div>
        </div>
        {/* <div className={`bg-color7 ${styles.paddingX} ${styles.flexStart}`}>
      <div className={``}>
        <RelatedNews />
      </div>
    </div> */}
        <div className={`bg-color0 ${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Contact />
            </div>
        </div>
    </div>
  )

export default FullNews