import React, { forwardRef } from 'react'
import DatePicker from 'react-datepicker'
import { FiCalendar } from 'react-icons/fi'

type Props = {
  selected: any
  onChange: (date: any) => void
  error?: string
  showTimeSelect?: boolean
}

const DatePickerComponent: React.FC<Props> = ({
  selected,
  onChange,
  error,
  showTimeSelect = false,
}) => {
  // eslint-disable-next-line react/display-name
  const ExampleCustomInput = forwardRef(({ value, onClick }: any, ref: any) => (
    <button
      className={`${
        error ? 'border-red-500 text-red-500' : 'border-black-500 text-gray-700'
      } shadow-lg flex w-full flex-row items-center justify-between bg-white hover:bg-blue-500 hover:text-white py-2 px-4 border hover:border-transparent rounded`}
      onClick={onClick}
      ref={ref}
    >
      {value}
      <div className="pl-2">
        <FiCalendar size={24} />
      </div>
    </button>
  ))
  return (
    <div className="w-full mb-3 flex flex-col">
      <DatePicker
        showTimeSelect={showTimeSelect}
        selected={selected}
        onChange={(date) => onChange(date)}
        customInput={<ExampleCustomInput />}
      />
      <span className={`text-red-500 text-sm ${error ? 'block' : 'hidden'}`}>
        {error}
      </span>
    </div>
  )
}

export default DatePickerComponent
