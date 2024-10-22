import React from "react";
import styles from "../style";
import {
  Contact,
  Footer,
  Industries2,
  Knowledgebenefit,
  Knowledgeheader,
  Knowledgetype,
  ManageScreen,
  Navbar,
  Testimonials,
  WhyUs,
} from "../components";

const Knowledge = () => (
  <div className="bg-dimWhite w-full overflow-hidden">
    <div className={`${styles.flexStart}`}>
      <div className={``}>
        <Knowledgeheader />
      </div>
    </div>
    <div className={`bg-dimWhite ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <ManageScreen />
      </div>
    </div>
    {/* <div className={`bg-color7 ${styles.paddingX} ${styles.flexStart}`}>
      <div className={``}>
        <Knowledgetype />
      </div>
    </div> */}
    <div className={`bg-dimWhite ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Testimonials />
      </div>
    </div>
    {/* <div className={`bg-dimWhite ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Knowledgebenefit />
      </div>
    </div>
    <div className={`bg-color0 ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <WhyUs />
      </div>
    </div> */}
    <div className={`bg-dimWhite ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Industries2 />
      </div>
    </div>
    <div className={`bg-color0 ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Contact />
      </div>
    </div>
  </div>
);

export default Knowledge;
