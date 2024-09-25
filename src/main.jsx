import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout.jsx';
import About from './Components/About.jsx';
import LoginPage from './Components/Login.jsx';
import ContactForm from './Components/Contact.jsx';


const router = createBrowserRouter([
  {
    path: "/Electronics/",
    element: <Layout />,
    children: [
      {
        path: "/Electronics/",
        element: <App />,
      },
      {
        path: "/Electronics/about",
        element: <About />,
      },
      {
        path: "/Electronics/login",
        element: <LoginPage />,
      },
      {
        path: "/Electronics/contact",
        element: <ContactForm />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
