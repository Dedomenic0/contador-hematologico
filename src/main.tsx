import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import CompleteCounter from './components/CompleteCounter/CompleteCounter.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/completeCounter",
    element: <CompleteCounter/>
  }
])

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <RouterProvider router={router}/>
  // </StrictMode>,
)
