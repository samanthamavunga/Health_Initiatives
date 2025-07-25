import React from 'react'
import VentureLayout from '../../../layouts/VentureLayout'

const dummyProgress = [
  {
    id: 1,
    title: 'Module 1: Business Model Canvas',
    score: 80,
    outOf: 100,
    status: 'Completed',
    lastUpdated: '2025-07-10',
    mentorComment: 'Great job! You clearly understand your value proposition.',
    mentorRating: 4.5,
  },
  {
    id: 2,
    title: 'Module 2: Pitch Deck',
    score: 40,
    outOf: 100,
    status: 'In Progress',
    lastUpdated: '2025-07-19',
    mentorComment: 'Work on clarity and visuals. More real-world examples would help.',
    mentorRating: 3.0,
  },
  {
    id: 3,
    title: 'Module 3: Financial Planning',
    score: 0,
    outOf: 100,
    status: 'Not Started',
    lastUpdated: '-',
    mentorComment: '',
    mentorRating: null,
  },
]

export default function ProgressTracker() {
  return (
    <VentureLayout>
      <div className="p-6 max-w-6xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-primaryColor mb-4">
          Progress Tracker
        </h1>

        <div className="grid gap-6 sm:grid-cols-2">
          {dummyProgress.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-xl border border-gray-200 hover:shadow transition"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="font-semibold text-lg">{item.title}</h2>
                  <p className="text-sm text-grayColor-light">
                    Last updated: {item.lastUpdated}
                  </p>
                </div>
                <span
                  className={`text-xs px-2 py-1 rounded-full font-medium ${
                    item.status === 'Completed'
                      ? 'bg-successColor-light text-successColor-dark'
                      : item.status === 'In Progress'
                      ? 'bg-secondaryColor-light text-secondaryColor-dark'
                      : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  {item.status}
                </span>
              </div>

              <div className="mt-3 w-full bg-gray-100 rounded-full h-3">
                <div
                  className="bg-primaryColor h-3 rounded-full"
                  style={{
                    width: `${(item.score / item.outOf) * 100}%`,
                  }}
                ></div>
              </div>

              <p className="text-sm mt-1 text-grayColor">
                Score: {item.score}/{item.outOf}
              </p>

              {/* Mentor Feedback */}
              {item.mentorComment && (
                <div className="mt-4 border-t pt-3">
                  <p className="text-sm font-semibold text-primaryColor">Mentor Feedback:</p>
                  <p className="text-sm text-grayColor italic">"{item.mentorComment}"</p>
                  {item.mentorRating !== null && (
                    <p className="text-sm mt-1 text-yellow-600 font-medium">
                      Rating: {item.mentorRating} / 5
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </VentureLayout>
  )
}
