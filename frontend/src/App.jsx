import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthStore } from './store/useAuthStore'


import VentureDashboard from './pages/venture/dashboard/VentureDashboard';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';

export default function App() {
  const { user } = useAuthStore()

  // Temporary fallback: allow development without auth
  const currentUser = user || {
    name: 'Demo Venture',
    role: 'venture_owner',
  }

  return (
    <Router>
      <Routes>
        {currentUser.role === 'venture_owner' && (
          <Route path="/" element={<VentureDashboard />} />
        )}

        {/* Catch-all fallback */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}