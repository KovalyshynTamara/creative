import React from 'react';
import ReactDOM from 'react-dom/client';
import {  RouterProvider} from "react-router-dom";
import router from './route';



import './assets/css/common/creative-studio.css';
import './assets/css/themify-icons.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


