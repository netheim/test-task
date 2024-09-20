import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/App.jsx'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import HelpDesk from "./pages/help-desk/HelpDesk.jsx";
import UserPage from "./pages/user-page/UserPage.jsx";
import ErrorPage from "./pages/error-page/ErrorPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage />
    },

    {
        path: "/help-desk",
        element: <HelpDesk />,
    },
    {
        path: "/users/:id",
        element: <UserPage />
    }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
