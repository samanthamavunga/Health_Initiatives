import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthStore } from './store/useAuthStore'


import VentureDashboard from './pages/venture/dashboard/VentureDashboard';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Submissions from './pages/venture/submissions/Submissions';
import Funding from './pages/venture/funding/Funding';
import Modules from './pages/venture/sessions/Modules';
import Events from './pages/venture/sessions/Events';
import ProgressTracker from './pages/venture/progress/ProgressTracker';
import Resources from './pages/venture/resources/Resources';
import VentureProfile from './pages/venture/profile/VentureProfile';
import Messages from './pages/venture/chats/Messages';

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
          <>
          <Route path="/" element={<VentureDashboard />} />
          <Route path="/submissions" element={<Submissions />} />
          <Route path="/funding" element={<Funding />} />
          <Route path="/sessions/training" element={<Modules />} />
          <Route path="/sessions/events" element={<Events />} />
          <Route path="/progress" element={<ProgressTracker />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/profile" element={<VentureProfile />} />
          <Route path="/chats" element={<Messages />} />

          </>
         

        )}

        {/* Catch-all fallback */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}