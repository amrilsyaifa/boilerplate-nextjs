import React from 'react'

type Props = {
  percentage?: number
}

const Progress: React.FC<Props> = ({ percentage = 0 }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full">
      <div
        className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full"
        style={{ width: `${percentage}%` }}
      >
        {percentage}%
      </div>
    </div>
  )
}

export default Progress
