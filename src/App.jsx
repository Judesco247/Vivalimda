import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './style';
import {
  Navbar,
  Footer,
  ScrollToTop,
} from './components';
import Home from './pages/Home';
import About from './pages/About_us';
import Services from './pages/Services';
import News from './pages/News';
import Contacts from './pages/Contacts';
import Case from './pages/Case';
import FullNews from './pages/FullNews';
import Research from './pages/Research';
import BusAnalyst from './pages/BusAnalyst';
import Knowledge from './pages/Knowledge';
import Integration from './pages/Integration';
import ProjectManagement from './pages/ProjectManagement';
import Privacy from './pages/privacy';

const App = () => {
  return (
    <>
      <ScrollToTop />
      <div className='bg-dimWhite w-full overflow-hidden'>
        {/* Navbar */}
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        {/* Main Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/news" element={<News />} />
          <Route path="/case-studies" element={<Case />} />
          <Route path="/contact-us" element={<Contacts />} />
          <Route path="/full-details" element={<FullNews />} />
          <Route path="/user-research" element={<Research />} />
          <Route path="/business-Analyst" element={<BusAnalyst />} />
          <Route path="/knowledge-management" element={<Knowledge />} />
          <Route path="/integration" element={<Integration />} />
          <Route path="/project-management" element={<ProjectManagement />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>

        {/* Footer */}
        <div className={`bg-dimWhite ${styles.paddingX} ${styles.flexStart}`}>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
