import React from 'react'
import { useNavigate } from 'react-router-dom'
import VentureLayout from '../../../layouts/VentureLayout'
import {
  FileText,
  MessageCircle,
  FolderOpen,
  BarChart2,
} from 'lucide-react'

// Simulated summary data
const submissionData = {
  Budgets: {
    count: 4,
    statuses: {
      Approved: 2,
      Pending: 1,
      Rejected: 1,
    },
  },
  'Expense Reports': {
    count: 3,
    statuses: {
      Approved: 2,
      Pending: 1,
    },
  },
  'Receipts & Invoices': {
    count: 5,
    statuses: {
      Approved: 4,
      Rejected: 1,
    },
  },
  'Business Documentation': {
    count: 2,
    statuses: {
      Pending: 2,
    },
  },
}

const submissionCategories = [
  {
    title: 'Budgets',
    description: 'Submit financial plans for upcoming periods.',
    icon: <FileText className="w-6 h-6 text-primaryColor" />,
    route: '/submissions/budgets',
  },
  {
    title: 'Expense Reports',
    description: 'Upload detailed expense reports for verification.',
    icon: <FolderOpen className="w-6 h-6 text-primaryColor" />,
    route: '/submissions/expenses',
  },
  {
    title: 'Receipts & Invoices',
    description: 'Provide receipts for funding tranche validation.',
    icon: <MessageCircle className="w-6 h-6 text-primaryColor" />,
    route: '/submissions/receipts',
  },
  {
    title: 'Business Documentation',
    description: 'Attach pitch decks, reports, or drive links.',
    icon: <BarChart2 className="w-6 h-6 text-primaryColor" />,
    route: '/submissions/documents',
  },
]

export default function Submissions() {
  const navigate = useNavigate()

  return (
    <VentureLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-primaryColor mb-8 flex items-center gap-2">
          <FileText className="w-6 h-6" /> Submissions
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {submissionCategories.map((cat) => {
            const summary = submissionData[cat.title] || { count: 0, statuses: {} }

            return (
              <div
                key={cat.title}
                onClick={() => navigate(cat.route)}
                className="bg-white border border-gray-200 hover:border-primaryColor-light transition cursor-pointer rounded-xl p-5 hover:bg-gray-50"
              >
                <div className="flex items-center gap-3 mb-2">
                  {cat.icon}
                  <h2 className="text-lg font-semibold text-gray-800">{cat.title}</h2>
                </div>

                <p className="text-sm text-gray-500 mb-4">{cat.description}</p>

                <div className="text-sm text-gray-700 space-y-1">
                  <p>
                    <span className="font-medium">{summary.count}</span> total submissions
                  </p>
                  {Object.entries(summary.statuses).map(([status, count]) => (
                    <p key={status}>
                      <span className="text-gray-500">{status}:</span>{' '}
                      <span className="font-medium">{count}</span>
                    </p>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </VentureLayout>
  )
}
