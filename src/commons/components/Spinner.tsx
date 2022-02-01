import React from 'react'

type Props = {
  loading: boolean
}

const Spinner: React.FC<Props> = ({ loading }) => {
  return (
    <div
      className={`${
        loading ? 'flex' : 'hidden'
      } absolute w-full h-full items-center justify-center z-50`}
    >
      <div className={`flex space-x-2 animate-pulse`}>
        <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
        <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
        <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
      </div>
    </div>
  )
}

export default Spinner
