//Main.jsx//
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom"

import App from "./App" 
import Frontpage from './pages/Frontpage'
import Studentspage from './pages/Studentspage'
import Teacherspage from './pages/teacherspage'
import Examdesignpage from './pages/Examdesignpage'
import Createquizpage from './pages/Createquizpage' 



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

      // Design exam route
      {path: "design-exam", element: <Examdesignpage />},
    
     // Design quiz route
      {path: "create-quiz", element: <Createquizpage />}
    
    
    
    ]
  
  
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
     
     
      <RouterProvider router={router} />
    
  
  </StrictMode>,
);
