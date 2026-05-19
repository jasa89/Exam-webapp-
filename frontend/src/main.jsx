import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom"

import App from "./App" 
import Frontpage from './pages/Frontpage'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Not Found</div>,
    children:[
    { index: true, element: <Frontpage/> },

    ]
  
  
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
     
     
      <RouterProvider router={router} />
    
  
  </StrictMode>,
);
