import React from "react";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  Comments,
  Contact,
  FeatureNews,
  Hero,
  Industries,
  Plans,
  Stats,
  Testimonials,
} from "../components";
import styles from "../style";

function Home() {
  return (
    <div>
      <Hero />
      <Stats />
      {/* <Business /> */}
      <Plans />
      <Billing />
      <CardDeal />
      <Testimonials />
      <Clients />
      <Industries />
      <Testimonials />
      {/* <Comments />
      <FeatureNews /> */}
      <Contact />
    </div>
  );
}

export default Home;
