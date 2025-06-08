import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import CompleteCounter from './components/CompleteCounter/CompleteCounter.tsx'
import SimpleCounter from './components/SimpleCounter/simpleCounter.tsx'
import CustomCounter from './components/CustomCounter/CustomCounter.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/completeCounter",
    element: <CompleteCounter/>
  },
  {
    path: "/simpleCounter",
    element: <SimpleCounter/>
  },
  {
    path: "/customCounter",
    element: <CustomCounter/>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
