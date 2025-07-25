import React from 'react'
import VentureLayout from '../../../layouts/VentureLayout'

const dummySubmissions = [
  {
    id: 1,
    title: 'Budget for Tranche 1',
    type: 'Budget',
    date: '2025-07-10',
    status: 'Pending',
    comment: 'Awaiting approval from mentor.',
  },
  {
    id: 2,
    title: 'Receipts for Supplies',
    type: 'Receipt',
    date: '2025-07-06',
    status: 'Approved',
    comment: 'Checked and validated.',
  },
  {
    id: 3,
    title: 'Pitch Deck',
    type: 'Document',
    date: '2025-06-30',
    status: 'Declined',
    comment: 'Please revise format and resubmit.',
  },
]

export default function Submissions() {
  return (
    <VentureLayout>
      <div className="p-6 max-w-5xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-primaryColor">Your Submissions</h1>

        <div className="space-y-4">
          {dummySubmissions.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-4 border border-gray-200 hover:shadow transition"
            >
              <div className="flex items-center justify-between mb-1">
                <div>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="text-sm text-grayColor-light">
                    {item.type} • Submitted on {item.date}
                  </p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    item.status === 'Approved'
                      ? 'bg-successColor-light text-successColor-dark'
                      : item.status === 'Pending'
                      ? 'bg-secondaryColor-light text-secondaryColor-dark'
                      : 'bg-dangerColor-light text-dangerColor-dark'
                  }`}
                >
                  {item.status}
                </span>
              </div>
              {item.comment && (
                <p className="mt-2 text-sm italic text-grayColor">{item.comment}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </VentureLayout>
  )
}
