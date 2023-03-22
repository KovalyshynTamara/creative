import {  createHashRouter } from "react-router-dom";
import App from "./assets/App";
import About from './pages/About';
import Main from "./pages/Main";
import Contacts1 from "./pages/Contacts1";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import Team from "./assets/components/Team";
import Testimonials from "./assets/components/Testimonials";
import Portfolio from "./assets/components/Portfolio";
import Service from "./assets/components/Service";



const router = createHashRouter([
    
    {
        path: '/',
        element: <App/>,
        children: [
            {
                index: true,
                element: <Main />,
            },
            {
                path: "about",
                element: <About/>,
            },
            {
                path: "contacts",
                element: <Contacts1/>,
            },
            {
                path: "blog",
                element: <Blog/>,
            },
            {
                path: "testimonial",
                element: <Testimonials/> ,
            },
            {
                path: "team",
                element: <Team/>,
            },
            {
                path: "service",
                element: <Service/>,
            },
            {
                path: "portfolio",
                element: <Portfolio/>,
            },
            
        ]
    },
    {
        path: "*",
        element: <NotFound/>,
    },

  
]);

export default router