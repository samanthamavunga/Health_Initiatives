import React from 'react'
import { useAuthStore } from '../../../store/useAuthStore'
import VentureLayout from '../../../layouts/VentureLayout'

const dummyProgress = {
  totalPoints: 60,
  outOf: 100,
  status: 'On Track',
  lastUpdated: '2025-07-18',
}

const dummySubmissions = [
  {
    id: 1,
    type: 'Budget',
    status: 'Pending',
    date: '2025-07-15',
    comment: 'Awaiting approval from mentor.',
  },
  {
    id: 2,
    type: 'Receipt',
    status: 'Approved',
    date: '2025-07-10',
    comment: 'Validated for tranche 1.',
  },
]

const dummySessions = [
  {
    id: 1,
    name: 'GBV Training',
    status: 'Coming Soon',
    startDate: '2025-09-01',
  },
  {
    id: 2,
    name: 'Mentoring: Pitch Practice',
    status: 'Scheduled',
    startDate: '2025-08-05',
  },
]

export default function VentureDashboard() {
  const { user } = useAuthStore()

  return (
    <VentureLayout>
      <div className="p-6 max-w-6xl mx-auto space-y-6">
        <h1 className="text-3xl font-semibold text-primaryColor">
          Welcome, {user?.name || 'Venture Owner'}
        </h1>

        {/* Progress Overview */}
        <div className="bg-white rounded-lg p-4 border border-gray-100">
          <h2 className="text-xl font-medium text-primaryColor mb-3">Progress Overview</h2>
          <div className="flex flex-wrap gap-6 justify-between text-sm text-grayColor">
            <div>
              <p>Points Earned</p>
              <p className="text-2xl font-bold text-gray-800">
                {dummyProgress.totalPoints}/{dummyProgress.outOf}
              </p>
            </div>
            <div>
              <p>Status</p>
              <span
                className={`inline-block px-3 py-1 rounded-full text-white text-sm font-semibold ${
                  dummyProgress.status === 'On Track'
                    ? 'bg-successColor'
                    : 'bg-dangerColor'
                }`}
              >
                {dummyProgress.status}
              </span>
            </div>
            <div>
              <p className="text-sm text-grayColor-light">
                Last Updated: {dummyProgress.lastUpdated}
              </p>
            </div>
          </div>
        </div>

        {/* Recent Submissions */}
        <div className="bg-white rounded-lg p-4 border border-gray-100">
          <h2 className="text-xl font-medium text-primaryColor mb-3">Recent Submissions</h2>
          <ul className="divide-y divide-gray-100">
            {dummySubmissions.map((item) => (
              <li key={item.id} className="py-3">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">
                      {item.type}{' '}
                      <span className="text-sm text-grayColor-light ml-1">{item.date}</span>
                    </p>
                    <p className="text-sm text-grayColor mt-1 italic">{item.comment}</p>
                  </div>
                  <span
                    className={`font-semibold text-sm ${
                      item.status === 'Approved'
                        ? 'text-successColor'
                        : 'text-secondaryColor'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Upcoming Sessions */}
        <div className="bg-white rounded-lg p-4 border border-gray-100">
          <h2 className="text-xl font-medium text-primaryColor mb-3">Upcoming Sessions</h2>
          <ul className="space-y-3">
            {dummySessions.map((session) => (
              <li key={session.id} className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-800">{session.name}</p>
                  <p className="text-sm text-grayColor-light">
                    Starts: {session.startDate}
                  </p>
                </div>
                <span
                  className={`text-xs px-2 py-1 rounded-full font-semibold ${
                    session.status === 'Coming Soon'
                      ? 'bg-secondaryColor-light text-secondaryColor-dark'
                      : 'bg-successColor-light text-successColor-dark'
                  }`}
                >
                  {session.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </VentureLayout>
  )
}
