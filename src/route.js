import {  createHashRouter } from "react-router-dom";
import App from "./assets/App";
import About from './pages/About';
import Main from "./pages/Main";
import Contacts1 from "./pages/Contacts1";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import { devHome, prodHome } from "./config";


const router = createHashRouter([
    
    {
        path: window.location.hostname==='localhost' ? devHome : prodHome,
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
            
        ]
    },
    // {
    //     path: "*",
    //     element: <NotFound/>,
    // },

  
]);

export default router