import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Menu,
  X,
  LayoutDashboard,
  FileText,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { useAuthStore } from '../store/useAuthStore'

export default function Sidebar() {
  const location = useLocation()
  const { logout } = useAuthStore()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [collapsed, setCollapsed] = useState(false)

  const links = [
    {
      name: 'Dashboard',
      icon: <LayoutDashboard className="w-5 h-5" />,
      path: '/',
    },
    {
      name: 'Submissions',
      icon: <FileText className="w-5 h-5" />,
      path: '/submissions',
    },
  ]

  const handleLogout = () => {
    logout()
    window.location.href = '/'
  }

  const toggleSidebar = () => setCollapsed(!collapsed)

  return (
    <>
      {/* Mobile Toggle */}
      <div className="md:hidden p-4">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-primaryColor cursor-pointer"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white shadow-md z-40 transition-all duration-300
        ${mobileOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
        ${collapsed ? 'w-20' : 'w-64'}`}
      >
        <div className="h-full flex flex-col justify-between p-4">
          <div>
            {/* Collapse button */}
            <div className="flex items-center justify-between mb-6">
              {!collapsed && <div className="text-xl font-bold text-primaryColor">Venture</div>}
              <button
                onClick={toggleSidebar}
                className="hidden md:block text-gray-400 hover:text-primaryColor cursor-pointer"
              >
                {collapsed ? <Menu /> : <ChevronLeft />}
              </button>
            </div>

            <nav className="space-y-2">
              {links.map(link => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer
                    ${location.pathname === link.path
                      ? 'bg-primaryColor text-white'
                      : 'text-grayColor hover:bg-primaryColor-light hover:text-white'}
                  `}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.icon}
                  {!collapsed && <span>{link.name}</span>}
                </Link>
              ))}
            </nav>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-2 rounded-lg text-dangerColor font-medium hover:bg-dangerColor hover:text-white cursor-pointer"
          >
            <LogOut className="w-5 h-5" />
            {!collapsed && <span>Logout</span>}
          </button>
        </div>
      </aside>
    </>
  )
}
