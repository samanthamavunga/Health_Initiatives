import React from 'react'
import { useAuthStore } from '../store/useAuthStore'
import { Bell } from 'lucide-react'

export default function Topbar() {
  const { user } = useAuthStore()

  return (
    <header className=" sticky top-0 z-40 md:ml-64">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center">
        {/* Left spacer or mobile logo */}
        <div className="md:hidden text-primaryColor font-bold text-lg">
          Venture
        </div>

        {/* Spacer pushes everything to right */}
        <div className="flex-1"></div>

        {/* Right: User + Notification */}
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-grayColor hidden sm:inline">
            {user?.name || 'User'}
          </span>
          <button className="p-2 rounded-full hover:bg-gray-100 relative">
            <Bell className="w-5 h-5 text-grayColor" />
            <span className="absolute top-0 right-0 block w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
        </div>
      </div>
    </header>
  )
}
