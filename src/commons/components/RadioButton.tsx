import React from 'react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  checked: boolean
}

const RadioButton: React.FC<Props> = ({ label, checked, ...props }) => {
  return (
    <label className="inline-flex items-center mt-3">
      <input
        type="radio"
        className="form-radio h-5 w-5 text-gray-600"
        checked={checked}
        {...props}
      />
      {label && <span className="ml-2 text-gray-700">{label}</span>}
    </label>
  )
}

export default RadioButton
