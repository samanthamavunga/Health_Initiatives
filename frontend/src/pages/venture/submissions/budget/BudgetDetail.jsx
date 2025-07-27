import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import VentureLayout from '../../../../layouts/VentureLayout'
import {
  FileText,
  MessageCircle,
  Send,
  DollarSign,
  ArrowLeft,
} from 'lucide-react'

const dummyBudgetDetails = {
  '1': {
    title: 'Q3 Budget Plan',
    fileUrl: 'https://example.com/budget-q3.pdf',
    uploadedAt: '2025-07-24 14:30',
    requestedAmount: '$6,000',
    approvedAmount: '$5,500',
    status: 'Approved',
    commentThread: [
      {
        id: 1,
        sender: 'mentor',
        message: 'Please explain the $500 marketing allocation.',
        timestamp: '2025-07-24 15:00',
      },
      {
        id: 2,
        sender: 'me',
        message: 'Sure, it’s for online ad testing next month.',
        timestamp: '2025-07-24 16:12',
      },
    ],
  },
  '2': {
    title: 'Q3 Budget Plan',
    fileUrl: 'https://example.com/budget-q3.pdf',
    uploadedAt: '2025-07-24 14:30',
    requestedAmount: '$6,000',
    approvedAmount: '$5,500',
    status: 'Approved',
    commentThread: [
      {
        id: 1,
        sender: 'mentor',
        message: 'Please explain the $500 marketing allocation.',
        timestamp: '2025-07-24 15:00',
      },
      {
        id: 2,
        sender: 'me',
        message: 'Sure, it’s for online ad testing next month.',
        timestamp: '2025-07-24 16:12',
      },
    ],
  },
}

export default function BudgetDetail() {
  const { id = '1' } = useParams()
  const navigate = useNavigate()
  const [newComment, setNewComment] = useState('')
  const submission = dummyBudgetDetails[id]

  const handleCommentSubmit = (e) => {
    e.preventDefault()
    if (newComment.trim()) {
      console.log('New comment:', newComment)
      setNewComment('')
    }
  }

  if (!submission) {
    return (
      <VentureLayout>
        <div className="p-6 max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-dangerColor mb-4">Budget not found</h1>
          <button
            onClick={() => navigate(-1)}
            className="text-primaryColor underline text-sm cursor-pointer"
          >
            Go back
          </button>
        </div>
      </VentureLayout>
    )
  }

  return (
    <VentureLayout>
      <div className="p-6 max-w-7xl mx-auto space-y-4">
        {/* Header */}
        <div className="flex justify-start items-center mb-2">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1 text-sm text-gray-600 hover:text-primaryColor cursor-pointer mr-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <div className="flex items-center gap-2">
            <FileText className="w-6 h-6 text-primaryColor" />
            <h1 className="text-2xl font-bold text-primaryColor">{submission.title}</h1>
          </div>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-6">
          {/* PDF Viewer */}
          <div className="h-[82vh] border border-gray-200 rounded-lg overflow-hidden">
            <iframe
              src={submission.fileUrl}
              title="Uploaded File"
              className="w-full h-full"
            />
          </div>

          {/* Side Panel */}
          <div className="flex flex-col h-[82vh]">
            {/* Info */}
            <div className="border border-gray-200 rounded-lg p-4 mb-4 space-y-2">
              <p className="text-sm text-gray-500">Uploaded at: {submission.uploadedAt}</p>
              <p className="text-sm flex items-center gap-1">
                <DollarSign className="w-4 h-4 text-gray-400" />
                Requested: <span className="font-medium">{submission.requestedAmount}</span>
              </p>
              {submission.status === 'Approved' && (
                <p className="text-sm flex items-center gap-1">
                  <DollarSign className="w-4 h-4 text-gray-400" />
                  Approved: <span className="font-medium">{submission.approvedAmount}</span>
                </p>
              )}
              <p className="text-sm">
                Status:{' '}
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    submission.status === 'Approved'
                      ? 'bg-green-100 text-green-700'
                      : submission.status === 'Rejected'
                      ? 'bg-red-100 text-red-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}
                >
                  {submission.status}
                </span>
              </p>
            </div>

            {/* Comments */}
            <div className="flex-1 border border-gray-200 rounded-lg p-4 flex flex-col">
              <h2 className="text-base font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <MessageCircle className="w-5 h-5" /> Feedback & Comments
              </h2>

              <div className="flex-1 overflow-y-auto pr-1 space-y-3">
                {submission.commentThread.length === 0 ? (
                  <p className="text-sm text-gray-400 italic">No comments yet.</p>
                ) : (
                  submission.commentThread.map((msg) => (
                    <div
                      key={msg.id}
                      className="bg-gray-50 border border-gray-200 rounded-md p-3"
                    >
                      <div className="flex justify-between mb-1">
                        <span className="text-xs font-medium text-gray-600">
                          {msg.sender === 'me' ? 'You' : msg.sender}
                        </span>
                        <span className="text-xs text-gray-400">{msg.timestamp}</span>
                      </div>
                      <p className="text-sm text-gray-800">{msg.message}</p>
                    </div>
                  ))
                )}
              </div>

              {/* Input */}
              <form onSubmit={handleCommentSubmit} className="mt-4 border-t pt-3 flex gap-2 items-center">
                <input
                  type="text"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Write a comment..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primaryColor-light"
                />
                <button
                  type="submit"
                  className="bg-primaryColor p-2 rounded-full text-white hover:bg-primaryColor-dark cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </VentureLayout>
  )
}
