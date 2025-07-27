import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import VentureLayout from '../../../layouts/VentureLayout'
import { FileText, Plus } from 'lucide-react'

const dummySubmissions = {
  Budgets: [
    {
      id: 1,
      title: 'Q1 Budget',
      date: '2025-07-01',
      status: 'Approved',
      comment: 'Well structured, approved for disbursement.',
      amountRequested: '$5,000',
      amountApproved: '$5,000',
    },
    {
      id: 2,
      title: 'Q2 Budget',
      date: '2025-07-15',
      status: 'Pending',
      comment: 'Awaiting review from mentor.',
      amountRequested: '$6,000',
      amountApproved: null,
    },
  ],
  'Expense Reports': [
    {
      id: 3,
      title: 'April Expenses',
      date: '2025-07-10',
      status: 'Approved',
      comment: 'Matched receipts perfectly.',
      total: '$1,200',
    },
    {
      id: 4,
      title: 'May Expenses',
      date: '2025-07-20',
      status: 'Pending',
      comment: 'Awaiting finance check.',
      total: '$980',
    },
  ],
  'Receipts & Invoices': [
    {
      id: 5,
      title: 'Invoice - Office Supplies',
      date: '2025-07-05',
      status: 'Rejected',
      comment: 'Missing invoice number.',
      file: 'office_invoice.pdf',
    },
    {
      id: 6,
      title: 'Receipt - Laptop Purchase',
      date: '2025-07-08',
      status: 'Approved',
      comment: 'All details verified.',
      file: 'laptop_receipt.pdf',
    },
  ],
  'Business Documentation': [
    {
      id: 7,
      title: 'Pitch Deck - V1',
      date: '2025-07-18',
      status: 'Pending',
      comment: 'Needs review from admin.',
      type: 'Google Drive Link',
    },
    {
      id: 8,
      title: 'Financial Projections',
      date: '2025-07-22',
      status: 'Approved',
      comment: 'Reviewed by mentor.',
      type: 'Excel Spreadsheet',
    },
  ],
}

const statusColors = {
  Approved: 'text-successColor',
  Pending: 'text-secondaryColor',
  Rejected: 'text-dangerColor',
}

export default function SubmissionCategoryPage() {
  const { type } = useParams()
  const navigate = useNavigate()

  const submissionTypeMap = {
  budgets: 'Budgets',
  expenses: 'Expense Reports',
  receipts: 'Receipts & Invoices',
  documents: 'Business Documentation',
}

  const readableType = submissionTypeMap[type] || 'Unknown'


  const submissions = dummySubmissions[readableType] || []

  const renderDetails = (item) => {
    if (readableType === 'Budgets') {
      return (
        <>
          <p className="text-sm text-gray-500">Requested: {item.amountRequested}</p>
          <p className="text-sm text-gray-500">
            Approved: {item.amountApproved || '—'}
          </p>
        </>
      )
    } else if (readableType === 'Expense Reports') {
      return <p className="text-sm text-gray-500">Total: {item.total}</p>
    } else if (readableType === 'Receipts & Invoices') {
      return <p className="text-sm text-gray-500">File: {item.file}</p>
    } else if (readableType === 'Business Documentation') {
      return <p className="text-sm text-gray-500">Type: {item.type}</p>
    }
    return null
  }

  return (
    <VentureLayout>
      <div className="p-6 max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-primaryColor flex items-center gap-2">
            <FileText className="w-6 h-6" />
            {readableType}
          </h1>
          <button
            className="flex items-center gap-2 px-4 py-2 bg-primaryColor text-white text-sm rounded-md hover:bg-primaryColor-dark"
            onClick={() => alert('Open create form...')}
          >
            <Plus className="w-4 h-4" />
            New {readableType.split(' ')[0]}
          </button>
        </div>

        {submissions.length === 0 ? (
          <p className="text-gray-500">No submissions yet.</p>
        ) : (
          <div className="space-y-4">
            {submissions.map((item) => (
              <div
                key={item.id}
                onClick={() => navigate(`/submissions/${type}/${item.id}`)}
                className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer transition"
              >
                <div className="flex justify-between items-center mb-1">
                  <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
                  <span
                    className={`text-sm font-medium ${
                      statusColors[item.status] || 'text-gray-600'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
                <p className="text-sm text-gray-400 mb-2">{item.date}</p>
                {renderDetails(item)}
                <p className="text-sm text-gray-600 mt-2 italic">{item.comment}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </VentureLayout>
  )
}
