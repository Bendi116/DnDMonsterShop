import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { Home } from './components/Home.jsx'
import { Shop } from './components/Shop.jsx'
import { ErrorPage } from './components/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    errorElement: <ErrorPage/>
  },
  {
    path:"home",
    element: <Home/>
  },
  {
    path:"shop",
    element: <Shop/>
  },

])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
