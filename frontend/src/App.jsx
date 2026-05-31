import React from 'react'
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-background text-textPrimary antialiased selection:bg-gray-700">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
