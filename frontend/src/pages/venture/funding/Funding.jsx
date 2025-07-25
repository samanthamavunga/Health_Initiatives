import React from 'react'
import VentureLayout from '../../../layouts/VentureLayout'

const dummyFunding = [
  {
    id: 1,
    tranche: 'Tranche 1',
    amount: '₵5,000',
    dateReleased: '2025-07-05',
    status: 'Released',
    note: 'Transferred to MoMo account.',
  },
  {
    id: 2,
    tranche: 'Tranche 2',
    amount: '₵5,000',
    dateReleased: null,
    status: 'Pending',
    note: 'Will be disbursed after milestone 2.',
  },
]

export default function Funding() {
  return (
    <VentureLayout>
      <div className="p-6 max-w-5xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-primaryColor">Funding Overview</h1>

        <div className="space-y-4">
          {dummyFunding.map((fund) => (
            <div
              key={fund.id}
              className="bg-white rounded-xl p-4 border border-gray-200 hover:shadow transition"
            >
              <div className="flex items-center justify-between mb-1">
                <div>
                  <h2 className="font-semibold">{fund.tranche}</h2>
                  <p className="text-sm text-grayColor-light">
                    Amount: <span className="font-medium">{fund.amount}</span>
                  </p>
                  <p className="text-sm text-grayColor-light">
                    {fund.dateReleased
                      ? `Released on ${fund.dateReleased}`
                      : 'Not yet released'}
                  </p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    fund.status === 'Released'
                      ? 'bg-successColor-light text-successColor-dark'
                      : 'bg-secondaryColor-light text-secondaryColor-dark'
                  }`}
                >
                  {fund.status}
                </span>
              </div>
              {fund.note && (
                <p className="mt-2 text-sm italic text-grayColor">{fund.note}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </VentureLayout>
  )
}
