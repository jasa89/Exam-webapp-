//Main.jsx//
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom"

import App from "./App" 
import Frontpage from './pages/Frontpage'
import Studentspage from './pages/Studentspage';
import Teacherspage from './pages/teacherspage'




const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Not Found</div>,
    children:[
    { index: true, element: <Frontpage/> },

     // Student route
      { path: "student", element: <Studentspage /> },  
    // Teacher route
      { path: "teacher", element: <Teacherspage /> },  


      
    ]
  
  
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
     
     
      <RouterProvider router={router} />
    
  
  </StrictMode>,
);
