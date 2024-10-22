import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from './pages/About_us.jsx'
import Services from './pages/Services.jsx'
import News from './pages/News.jsx'
import Contacts from './pages/Contacts.jsx'
import Case from './pages/Case.jsx'
import FullNews from './pages/FullNews.jsx'
import Research from './pages/Research.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import BusAnalyst from './pages/BusAnalyst.jsx'
import Knowledge from './pages/Knowledge.jsx'
import Integration from './pages/Integration.jsx'
import ProjectManagement from './pages/ProjectManagement.jsx'
// import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx' 

const queryClient = new QueryClient();
export const router = [
  
  // {
  //   exact: true,
  //   path: "/",
  //   element: <Home />,
  // },
  {
    exact: true,
    path: "/about-us",
    element: <About />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/case-studies",
    element: <Case />,
  },
  {
    path: "/contact-us",
    element: <Contacts />,
  },
  {
    path: "/full-details",
    element: <FullNews />,
  },
  {
    path: "/user-research",
    element: <Research />,
  },
  {
    path: "/business-Analyst",
    element: <BusAnalyst />,
  },
  {
    path: "/knowledge-management",
    element: <Knowledge />,
  },
  {
    path: "/integration",
    element: <Integration />,
  },
  {
    path: "/project-management",
    element: <ProjectManagement />,
  },
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    {/* <ScrollToTop/> */}
    {/* <Provider > */}
    <App />
    {/* </Provider> */}
    </QueryClientProvider>
  </React.StrictMode>,
)
      
