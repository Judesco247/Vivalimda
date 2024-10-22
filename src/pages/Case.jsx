import React from 'react'
import styles from '../style'
import { Navbar, Caseheader, Project,Project2, Project3, CaseBox, CaseStudy, Contact, Footer } from '../components'

const Case = () => (
    <div className='bg-dimWhite w-full overflow-hidden'>
        <div className={`${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Caseheader />
            </div>
        </div>
        <div className={`bg-color7 ${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Project />
            </div>
        </div>
        <div className={`bg-color12 ${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Project2 />
            </div>
        </div>
        <div className={`bg-color7 ${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Project3 />
            </div>
        </div>
        <div className={`bg-color12 ${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <CaseBox />
            </div>
        </div>
        <div className={`bg-color0 ${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Contact />
            </div>
        </div>
    </div>
  )

export default Case