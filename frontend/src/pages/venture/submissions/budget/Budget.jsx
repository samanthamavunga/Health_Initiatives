import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import VentureLayout from '../../../../layouts/VentureLayout'
import {
  FileText,
  Plus,
  CalendarDays,
  DollarSign,
  CheckCircle,
  Pencil,
  Trash2,
  Search,
  XCircle,
} from 'lucide-react'

const initialBudgets = [
  {
    id: 1,
    title: 'Q1 Budget',
    date: '2025-07-01',
    amountRequested: '$5,000',
    amountApproved: '$4,500',
    status: 'Approved',
    comment: 'Well structured, approved for disbursement.',
  },
  {
    id: 2,
    title: 'Q2 Budget',
    date: '2025-07-15',
    amountRequested: '$6,000',
    amountApproved: '-',
    status: 'Pending',
    comment: 'Awaiting review from mentor.',
  },
  {
    id: 3,
    title: 'Special Budget',
    date: '2025-06-10',
    amountRequested: '$3,000',
    amountApproved: '$2,800',
    status: 'Rejected',
    comment: 'Exceeded recommended travel allocation.',
  },
]

const statusStyles = {
  Approved: 'text-green-700 bg-green-50',
  Pending: 'text-yellow-700 bg-yellow-50',
  Rejected: 'text-red-700 bg-red-50',
}

const allStatuses = ['Approved', 'Pending', 'Rejected']

export default function Budget() {
  const navigate = useNavigate()
  const [budgets, setBudgets] = useState(initialBudgets)

  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const handleDelete = (e, id) => {
    e.stopPropagation()
    if (window.confirm('Are you sure you want to delete this budget?')) {
      setBudgets(prev => prev.filter(b => b.id !== id))
    }
  }

  const handleEdit = (e, id) => {
    e.stopPropagation()
    navigate(`/submissions/budgets/${id}/edit`)
  }

  const handleResetFilters = () => {
    setSearchTerm('')
    setStatusFilter('')
    setStartDate('')
    setEndDate('')
  }

  const filteredBudgets = budgets.filter((budget) => {
    const matchTitle = budget.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchStatus = !statusFilter || budget.status === statusFilter
    const matchStart = !startDate || new Date(budget.date) >= new Date(startDate)
    const matchEnd = !endDate || new Date(budget.date) <= new Date(endDate)
    return matchTitle && matchStatus && matchStart && matchEnd
  })

  return (
    <VentureLayout>
      <div className="p-6 max-w-7xl mx-auto">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-primaryColor flex items-center gap-2">
            <FileText className="w-6 h-6" /> Budgets
          </h1>
          <button
            onClick={() => navigate('/submissions/budgets/new')}
            className="flex items-center gap-2 bg-primaryColor text-white text-sm px-4 py-2 rounded-lg hover:bg-primaryColor-dark cursor-pointer"
          >
            <Plus className="w-4 h-4" /> New Budget
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search title"
              className="pl-9 pr-3 py-2 border border-gray-300 rounded-md text-sm w-52 focus:outline-none focus:ring-2 focus:ring-primaryColor-light"
            />
          </div>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md text-sm w-40"
          >
            <option value="">All statuses</option>
            {allStatuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>

          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md text-sm"
          />
          <span className="text-gray-500">to</span>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md text-sm"
          />

          <button
            onClick={handleResetFilters}
            className="flex items-center gap-1 text-sm text-gray-600 hover:text-primaryColor"
          >
            <XCircle className="w-4 h-4" /> Reset
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {filteredBudgets.length > 0 ? (
            filteredBudgets.map((budget) => (
              <div
                key={budget.id}
                onClick={() => navigate(`/submissions/budgets/${budget.id}`)}
                className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-md transition cursor-pointer flex flex-col justify-between"
              >
                {/* Title & Status */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-1">
                      {budget.title}
                    </h2>
                    <p className="text-sm text-gray-500">{budget.date}</p>
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded-full font-medium ${statusStyles[budget.status]}`}
                  >
                    {budget.status}
                  </span>
                </div>

                {/* Budget Info */}
                <div className="text-sm text-gray-700 space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="w-4 h-4 text-gray-400" />
                    <span>Date: {budget.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-gray-400" />
                    <span>Requested: <strong>{budget.amountRequested}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gray-400" />
                    <span>Approved: <strong>{budget.amountApproved}</strong></span>
                  </div>
                  <p className="italic text-gray-500 mt-2 line-clamp-2">{budget.comment}</p>
                </div>

                {/* Actions */}
                <div className="flex justify-end gap-2 mt-auto">
                  <button
                    onClick={(e) => handleEdit(e, budget.id)}
                    className="flex items-center gap-1 text-sm text-primaryColor hover:underline cursor-pointer"
                  >
                    <Pencil className="w-4 h-4" /> Edit
                  </button>
                  <button
                    onClick={(e) => handleDelete(e, budget.id)}
                    className="flex items-center gap-1 text-sm text-dangerColor hover:underline cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" /> Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 italic">No budgets match your filters.</p>
          )}
        </div>
      </div>
    </VentureLayout>
  )
}
