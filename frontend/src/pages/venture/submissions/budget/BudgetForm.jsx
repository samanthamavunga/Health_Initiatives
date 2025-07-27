import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import VentureLayout from '../../../../layouts/VentureLayout'
import { FileText, Upload, X, File as FileIcon } from 'lucide-react'

export default function BudgetForm() {
  const navigate = useNavigate()
  const [selectedFile, setSelectedFile] = useState(null)

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file)
    } else {
      setSelectedFile(null)
      alert('Please upload a PDF file only.')
    }
  }

  return (
    <VentureLayout>
      <div className="p-6 max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-primaryColor flex items-center gap-2">
            <FileText className="w-6 h-6" /> New Budget Submission
          </h1>
          <button
            onClick={() => navigate(-1)}
            className="text-gray-600 hover:text-red-600 text-sm flex items-center gap-1 cursor-pointer"
          >
            <X className="w-4 h-4" /> Cancel
          </button>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1">Budget Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-primaryColor"
              placeholder="e.g. Q3 Budget"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Amount Requesting (USD)</label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-primaryColor"
              placeholder="e.g. 5000"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Upload Budget File (PDF only)</label>
            <label
              htmlFor="budgetFile"
              className="flex flex-col items-center justify-center w-full h-32 px-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-primaryColor text-gray-500 hover:text-primaryColor text-sm transition"
            >
              <Upload className="w-6 h-6 mb-2" />
              <span>Click to upload or drag a PDF file here</span>
            </label>
            <input
              id="budgetFile"
              type="file"
              accept="application/pdf"
              className="hidden"
              onChange={handleFileChange}
            />

            {selectedFile && (
              <div className="mt-3 flex items-center gap-2 text-sm text-gray-700 border border-gray-200 rounded-md p-2">
                <FileIcon className="w-4 h-4 text-primaryColor" />
                <div className="flex-1">
                  <p className="font-medium">{selectedFile.name}</p>
                  <p className="text-xs text-gray-500">
                    {(selectedFile.size / 1024).toFixed(1)} KB
                  </p>
                </div>
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Comment or Description</label>
            <textarea
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-primaryColor"
              placeholder="Add any comments or clarifications about this budget..."
            />
          </div>

          <button
            type="submit"
            className="bg-primaryColor text-white text-sm px-4 py-2 rounded-lg hover:bg-primaryColor-dark cursor-pointer flex items-center gap-2"
          >
            <Upload className="w-4 h-4" /> Submit Budget
          </button>
        </form>
      </div>
    </VentureLayout>
  )
}
