import React from 'react'
import { FileText, BookOpen, Download } from 'lucide-react'
import VentureLayout from '../../../layouts/VentureLayout'

const dummyResources = [
  {
    id: 1,
    title: 'Business Model Canvas Guide',
    description: 'A step-by-step guide to creating your business model.',
    type: 'PDF',
    date: '2025-07-20',
    link: '/files/business-model-canvas.pdf',
  },
  {
    id: 2,
    title: 'Pitch Deck Template',
    description: 'Use this template to build a compelling pitch deck.',
    type: 'PPT',
    date: '2025-07-18',
    link: '/files/pitch-deck-template.pptx',
  },
  {
    id: 3,
    title: 'Financial Planning Video',
    description: 'Learn the basics of startup financial forecasting.',
    type: 'Video',
    date: '2025-07-15',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
]

export default function Resources() {
  return (
    <VentureLayout>
      <div className="p-6 max-w-6xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-primaryColor mb-4">
          Resources
        </h1>

        <div className="grid gap-6 sm:grid-cols-2">
          {dummyResources.map((res) => (
            <div
              key={res.id}
              className="bg-white p-5 rounded-xl border border-gray-200 hover:shadow transition space-y-2"
            >
              <div className="flex items-center gap-3">
                {res.type === 'PDF' || res.type === 'PPT' ? (
                  <FileText className="w-5 h-5 text-primaryColor" />
                ) : (
                  <BookOpen className="w-5 h-5 text-primaryColor" />
                )}
                <h2 className="text-lg font-semibold">{res.title}</h2>
              </div>
              <p className="text-sm text-grayColor">{res.description}</p>
              <p className="text-xs text-grayColor-light">Uploaded: {res.date}</p>
              <a
                href={res.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primaryColor font-medium hover:underline mt-2"
              >
                <Download className="w-4 h-4" />
                Download / View
              </a>
            </div>
          ))}
        </div>
      </div>
    </VentureLayout>
  )
}
