import React from 'react'

const SyllabusAnalysis = () => {
  return (
    <>
        <h3 className="text-lg font-medium text-black">Syllabus Wise Analysis</h3>
    <div className="mt-4 space-y-4">
      <div>
        <p className="text-sm  text-gray-500">HTML Tools, Forms, History</p>
        <div className="flex w-full bg-gray-200 rounded-full h-2 mt-1">
          <div
            className="bg-blue-500 h-2 rounded-full"
            style={{ width: "80%" }}
          ></div>
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-500">Tags & References in HTML</p>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
          <div
            className="bg-orange-500 h-2 rounded-full"
            style={{ width: "60%" }}
          ></div>
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-500">Tables & References in HTML</p>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
          <div
            className="bg-red-500 h-2 rounded-full"
            style={{ width: "24%" }}
          ></div>
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-500">Tables & CSS Basics</p>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
          <div
            className="bg-green-500 h-2 rounded-full"
            style={{ width: "96%" }}
          ></div>
        </div>
      </div>
    </div>
    </>
  )
}

export default SyllabusAnalysis
