import React from 'react'
import VentureLayout from '../../../layouts/VentureLayout';

const dummyEvents = [
  {
    id: 1,
    name: 'Venture Demo Day',
    location: 'Accra Digital Centre',
    date: '2025-09-12',
    description: 'Final presentation of ventures to partners and mentors.',
  },
  {
    id: 2,
    name: 'Networking Event',
    location: 'Zoom',
    date: '2025-08-15',
    description: 'Connect with venture mentors and industry leaders.',
  },
]

export default function Events() {
  return (
    <VentureLayout>
      <div className="p-6 max-w-5xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-primaryColor">Upcoming Events</h1>
        <div className="space-y-4">
          {dummyEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl p-4 border border-gray-200 hover:shadow transition"
            >
              <h2 className="font-semibold text-lg">{event.name}</h2>
              <p className="text-sm text-grayColor-light">{event.date} • {event.location}</p>
              <p className="text-sm mt-2 text-grayColor">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </VentureLayout>
  )
}
