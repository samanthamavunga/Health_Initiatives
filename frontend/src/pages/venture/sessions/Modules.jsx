import React from 'react'
import VentureLayout from '../../../layouts/VentureLayout';

const dummyTrainings = [
  {
    id: 1,
    title: 'Financial Literacy Workshop',
    date: '2025-08-10',
    status: 'Scheduled',
  },
  {
    id: 2,
    title: 'Digital Marketing Basics',
    date: '2025-08-25',
    status: 'Coming Soon',
  },
]

export default function Modules() {
  return (
    <VentureLayout>
      <div className="p-6 max-w-5xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-primaryColor">Training Sessions</h1>
        <div className="space-y-4">
          {dummyTrainings.map((session) => (
            <div
              key={session.id}
              className="bg-white rounded-xl p-4 border border-gray-200 hover:shadow transition"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">{session.title}</p>
                  <p className="text-sm text-grayColor-light">Date: {session.date}</p>
                </div>
                <span
                  className={`text-xs px-2 py-1 rounded-full font-medium ${
                    session.status === 'Coming Soon'
                      ? 'bg-secondaryColor-light text-secondaryColor-dark'
                      : 'bg-successColor-light text-successColor-dark'
                  }`}
                >
                  {session.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </VentureLayout>
  )
}
