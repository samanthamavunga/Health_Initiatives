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
import SubmissionDetail from './pages/venture/submissions/SubmissionDetail';
import SubmissionCategoryPage from './pages/venture/submissions/SubmissionCategoryPage';
import Expenses from './pages/venture/submissions/expenses/Expenses';
import BudgetDetail from './pages/venture/submissions/budget/BudgetDetail';
import BudgetForm from './pages/venture/submissions/budget/BudgetForm';
import ExpensesDetail from './pages/venture/submissions/expenses/ExpensesDetail';
import Invoices from './pages/venture/submissions/invoices/Invoices';
import InvoiceDetail from './pages/venture/submissions/invoices/InvoiceDetail';
import Documents from './pages/venture/submissions/bussines_documents/Documents';
import DocumentDetail from './pages/venture/submissions/bussines_documents/DocumentDetail';
import Budget from './pages/venture/submissions/budget/Budget';

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
          {/* <Route path="/submissions/:category/:id" element={<SubmissionDetail />} />
          <Route path="/submissions/:type" element={<SubmissionCategoryPage />} /> */}
          {/* Budgets */}
          <Route path="/submissions/budgets" element={<Budget />} />
          <Route path="/submissions/budgets/:id" element={<BudgetDetail />} />
          <Route path="/submissions/budgets/new" element={<BudgetForm />} />

          {/* Expense Reports */}
          <Route path="/submissions/expenses" element={<Expenses />} />
          <Route path="/submissions/expenses/:id" element={<ExpensesDetail />} />

          {/* Receipts */}
          <Route path="/submissions/receipts" element={<Invoices />} />
          <Route path="/submissions/receipts/:id" element={<InvoiceDetail />} />

          {/* Business Documents */}
          <Route path="/submissions/documents" element={<Documents />} />
          <Route path="/submissions/documents/:id" element={<DocumentDetail />} />



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