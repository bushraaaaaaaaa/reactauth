import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Layout from '../../layout'
import Signup from './pages/signup'
import Login from './pages/login'
import Todolist from '../../components/todolist'

const router=createBrowserRouter([{
element:<Layout/>,
children:[{
    path:"",
    element:<Login/>,
    
},
{
    path:"/signup",
    element:<Signup/>
},
{
    path:"/todolist",
    element:<Todolist/>
}
]


}]);

const Router = () => {
  return <RouterProvider router={router} />
  
  
}

export default Router