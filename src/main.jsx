import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {App} from './App.jsx';
import './styles/index.css';
import { ErrorPage } from './components/ErrorPage.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />
    },
    {
        path: '/:name',
        element: <App />,
        errorElement: <ErrorPage />
    }

    /*
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "shop",
    element: <Shop />,
  },
  */
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
