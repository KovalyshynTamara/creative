import {  createBrowserRouter } from "react-router-dom";
import App from "./assets/App";
import About from './pages/About';
import Main from "./pages/Main";
import Contacts1 from "./pages/Contacts1";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";



const router = createBrowserRouter([
    
    {
        path: "/",
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
    {
        path: "*",
        element: <NotFound/>,
    },

  
]);

export default router