import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Paths/Paths.jsx'
import Auth from './Context/Auth.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<Auth>
<RouterProvider router={router} />
</Auth>
  </React.StrictMode>,
)



