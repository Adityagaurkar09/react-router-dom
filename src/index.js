import ReactDom from 'react-dom/client';
import "./index.css"

import { createBrowserRouter,RouterProvider } from 'react-router-dom';

import Home from "./view/home/home"
import About from "./view/about/About"
import Contact from "./view/contact/Contact"


const root = ReactDom.createRoot(document.getElementById('root'));

const router = createBrowserRouter ([
    {
        path:'/',
        element: <Home/>,
    },
    {
        path:'/about',
        element: <About/>,
    },
    {
        path:'/contact',
        element: <Contact/>,
    }
])

root.render (<RouterProvider router={router}/>)
