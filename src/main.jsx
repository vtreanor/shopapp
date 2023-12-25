import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, RouterProvider, createBrowserRouter } from "react-router-dom";


import App from './App.jsx'
import Index from './pages/index.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // loader: contactsLoader,
    children: [
      {index: true, element: <Index />},

      // {
      //   path: "note/create/:id",
      //   element: <NoteCreate />,
      //   loader: noteCreateLoader,
      //   action: newNoteAction,
      // },    
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
