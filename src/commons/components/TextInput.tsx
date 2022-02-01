import React, { forwardRef } from 'react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

// eslint-disable-next-line react/display-name
const TextInput = forwardRef<HTMLInputElement, Props>(
  ({ label, error, ...props }, ref) => {
    return (
      <div className="mb-4 relative">
        {label && (
          <label className="block text-gray-700 text-sm font-medium  mb-2">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className="flex flex-row items-center shadow appearance-none border rounded w-full py-2 h-11 px-3 text-gray-700 leading-tight bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full py-2 h-11 px-3 text-gray-700 outline-none bg-transparent"
          {...props}
        />
        {error && <span className="text-red-500 text-sm">{error}</span>}
      </div>
    )
  }
)

export default TextInput
