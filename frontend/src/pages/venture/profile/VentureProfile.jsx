import React from 'react'
import VentureLayout from '../../../layouts/VentureLayout'
import { useAuthStore } from '../../../store/useAuthStore'
import { User } from 'lucide-react'

export default function VentureProfile() {
  const { user } = useAuthStore()

  const venture = {
    fullName: user?.name || 'Venture Owner',
    email: user?.email || 'venture@example.com',
    ventureName: 'EcoSavvy Solutions',
    category: 'Green Tech',
    stage: 'Prototype',
    assignedMentor: 'Dr. Angela Mensah',
    totalFunding: '$12,000',
    location: 'Accra, Ghana',
    joinedDate: 'March 15, 2025',
  }

  return (
    <VentureLayout>
      <div className="p-6 max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <div className="bg-primaryColor-light text-primaryColor-dark p-4 rounded-full">
            <User className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-primaryColor">Venture Profile</h1>
            <p className="text-grayColor">Overview of your venture information</p>
          </div>
        </div>

        {/* Venture Card */}
        <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-primaryColor mb-4 border-b pb-2">
            Venture Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            <ProfileItem label="Full Name" value={venture.fullName} />
            <ProfileItem label="Email" value={venture.email} />
            <ProfileItem label="Venture Name" value={venture.ventureName} />
            <ProfileItem label="Category" value={venture.category} />
            <ProfileItem label="Stage" value={venture.stage} />
            <ProfileItem label="Assigned Mentor" value={venture.assignedMentor} />
            <ProfileItem label="Total Funding" value={venture.totalFunding} />
            <ProfileItem label="Location" value={venture.location} />
            <ProfileItem label="Joined Date" value={venture.joinedDate} />
          </div>
        </div>
      </div>
    </VentureLayout>
  )
}

// Subcomponent for cleaner layout
function ProfileItem({ label, value }) {
  return (
    <div>
      <p className="text-grayColor text-sm">{label}</p>
      <p className="font-medium text-gray-800">{value}</p>
    </div>
  )
}
