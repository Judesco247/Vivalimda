import React from "react";
import styles from "../style";
import {
  Contact,
  Effectiveproj,
  Footer,
  Industries2,
  Industryexpert,
  ManageProject,
  Navbar,
  Projectmgtbanner,
  ServiceArea,
  Testimonials,
  WhyUs,
} from "../components";

const ProjectManagement = () => (
  <div className="bg-dimWhite w-full overflow-hidden">
    <div className={`${styles.flexStart}`}>
      <div className={``}>
        <Projectmgtbanner />
      </div>
    </div>
    <div className={`bg-dimWhite ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Effectiveproj />
      </div>
    </div>
    <div className={`bg-color7 ${styles.paddingX} ${styles.flexStart}`}>
      <div className={``}>
        <Industryexpert />
      </div>
    </div>
    <div className={`bg-dimWhite ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Testimonials />
      </div>
    </div>
    {/* <div className={`bg-dimWhite ${styles.paddingX} ${styles.flexStart}`}>
      <div className={``}>
        <ServiceArea />
      </div>
    </div>
    <div className={`bg-color0 ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <WhyUs />
      </div>
    </div>
    <div className={`bg-dimWhite ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <ManageProject />
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

export default ProjectManagement;
