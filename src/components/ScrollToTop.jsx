import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const ScrollToTop = () => {
//     const navigate = useNavigate();

//     useEffect(() => {
//       const unlisten = () => {
//         navigate(window.location.pathname);
//         window.scrollTo(0, 0);
//       };
  
//       window.addEventListener('popstate', unlisten);
  
//       return () => {
//         window.removeEventListener('popstate', unlisten);
//       };
//     }, [navigate]);
  
//     return null;
// };

// export default ScrollToTop;