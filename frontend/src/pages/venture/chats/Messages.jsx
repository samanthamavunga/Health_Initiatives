import React, { useState } from 'react'
import VentureLayout from '../../../layouts/VentureLayout'
import { MessageSquareText } from 'lucide-react'

export default function Messages() {
  const messages = [
    {
      id: 1,
      sender: 'Dr. Angela Mensah',
      subject: 'Budget Revision Request',
      content:
        'Please submit your revised budget by Friday. Attach the previous version for comparison...',
      timestamp: 'Jul 24, 2:30 PM',
    },
    {
      id: 2,
      sender: 'Program Admin',
      subject: 'Tranche Approval Notification',
      content:
        'Your tranche has been approved. Expect disbursement within 3 business days.',
      timestamp: 'Jul 22, 10:00 AM',
    },
  ]

  const [activeMessage, setActiveMessage] = useState(null)
  const [reply, setReply] = useState('')

  const handleReplySubmit = (e) => {
    e.preventDefault()
    alert(`Reply sent: ${reply}`)
    setReply('')
  }

  return (
    <VentureLayout>
      <div className="p-4 max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold text-primaryColor mb-6 flex items-center gap-2">
          <MessageSquareText className="w-6 h-6" />
          Messages
        </h1>

        {!activeMessage ? (
          <div className="space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className="bg-white rounded-lg p-4 border-b hover:bg-gray-50 transition"
              >
                <div className="flex flex-col gap-1">
                  <button
                    onClick={() => setActiveMessage(msg)}
                    className="text-lg font-semibold text-primaryColor text-left hover:underline"
                  >
                    {msg.subject}
                  </button>
                  <p className="text-sm text-gray-500">
                    From: {msg.sender} · {msg.timestamp}
                  </p>
                  <p className="text-gray-600 line-clamp-2">{msg.content}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg p-6">
            <button
              onClick={() => setActiveMessage(null)}
              className="text-primaryColor text-sm underline hover:text-primaryColor-dark mb-4"
            >
              ← Back to Messages
            </button>

            <div>
              <h2 className="text-xl font-bold text-gray-800">{activeMessage.subject}</h2>
              <p className="text-sm text-gray-500 mb-1">
                From: {activeMessage.sender}
              </p>
              <p className="text-sm text-gray-400">{activeMessage.timestamp}</p>
              <p className="mt-4 text-gray-700 whitespace-pre-wrap">{activeMessage.content}</p>
            </div>

            {/* Reply Box */}
            <form onSubmit={handleReplySubmit} className="mt-6 space-y-3">
              <textarea
                className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primaryColor-light"
                rows={4}
                placeholder="Write a reply..."
                value={reply}
                onChange={(e) => setReply(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-primaryColor text-white px-4 py-2 rounded-md hover:bg-primaryColor-dark transition text-sm"
              >
                Send Reply
              </button>
            </form>
          </div>
        )}
      </div>
    </VentureLayout>
  )
}
