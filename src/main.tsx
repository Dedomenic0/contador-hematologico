import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import CompleteCounter from './components/CompleteCounter/CompleteCounter.tsx'
import SimpleCounter from './components/SimpleCounter/simpleCounter.tsx'
import CustomCounter from './components/CustomCounter/CustomCounter.tsx'
import ErrorElement from './components/ErrorElement/index.tsx'
import MobileCouterPage from './components/Mobile/MobileCouterPage.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorElement/>
  },
  {
    path: "/completecounter",
    element: <CompleteCounter/>
  },
  {
    path: "/simplecounter",
    element: <SimpleCounter/>
  },
  {
    path: "/customcounter",
    element: <CustomCounter/>
    
  },
  {
    path: "/mobilecounter",
    element: <MobileCouterPage/>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
