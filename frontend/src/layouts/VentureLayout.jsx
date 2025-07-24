// src/layouts/VentureLayout.jsx
import React from 'react'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'

export default function VentureLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Topbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 md:ml-64 p-4">
          {children}
        </main>
      </div>
    </div>
  )
}
