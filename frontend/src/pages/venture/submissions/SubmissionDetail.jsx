import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import VentureLayout from '../../../layouts/VentureLayout'
import { FileText, MessageCircle, Send } from 'lucide-react'

// Dummy submission store by category and id
const dummySubmissionDetails = {
  budgets: {
    '1': {
      title: 'Q3 Budget Plan',
      fileUrl: 'https://example.com/budget-q3.pdf',
      uploadedAt: '2025-07-24 14:30',
      status: 'Pending',
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
  },
  receipts: {
    '1': {
      title: 'Tranche 1 Receipt',
      fileUrl: 'https://example.com/receipt-tranche1.pdf',
      uploadedAt: '2025-07-15 10:00',
      status: 'Approved',
      commentThread: [],
    },
  },
}

export default function SubmissionDetail() {
  const { category = 'budgets', id = '1' } = useParams()
  const navigate = useNavigate()
  const [newComment, setNewComment] = useState('')

  const submission = dummySubmissionDetails[category]?.[id]

  const handleCommentSubmit = (e) => {
    e.preventDefault()
    if (newComment.trim()) {
      console.log('Comment submitted:', newComment)
      setNewComment('')
    }
  }

  if (!submission) {
    return (
      <VentureLayout>
        <div className="p-6 max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-dangerColor mb-4">Submission not found</h1>
          <button
            onClick={() => navigate(-1)}
            className="text-primaryColor underline text-sm"
          >
            Go back
          </button>
        </div>
      </VentureLayout>
    )
  }

  return (
    <VentureLayout>
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-primaryColor mb-6 flex items-center gap-2">
          <FileText className="w-6 h-6" />
          {submission.title}
        </h1>

        <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-6">
          {/* Submission Info */}
          <div className="space-y-1">
            <a
              href={submission.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primaryColor underline text-sm"
            >
              View file
            </a>
            <p className="text-sm text-gray-500">Uploaded: {submission.uploadedAt}</p>
            <p>
              Status:{' '}
              <span
                className={`px-2 py-1 rounded-full text-sm font-medium ${
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

          {/* Comment Thread */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-1">
              <MessageCircle className="w-5 h-5" />
              Feedback & Comments
            </h2>
            <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
              {submission.commentThread.length === 0 ? (
                <p className="text-sm text-gray-400 italic">No comments yet</p>
              ) : (
                submission.commentThread.map((msg) => (
                  <div
                    key={msg.id}
                    className={`max-w-[75%] px-4 py-2 rounded-lg ${
                      msg.sender === 'me'
                        ? 'ml-auto bg-primaryColor text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p className="text-sm">{msg.message}</p>
                    <p className="text-xs text-gray-400 mt-1">{msg.timestamp}</p>
                  </div>
                ))
              )}
            </div>

            {/* Comment Input */}
            <form
              onSubmit={handleCommentSubmit}
              className="mt-4 flex items-center gap-2 border-t pt-4"
            >
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Write a comment..."
                className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-primaryColor-light"
              />
              <button
                type="submit"
                className="bg-primaryColor p-2 rounded-full text-white hover:bg-primaryColor-dark"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </VentureLayout>
  )
}
