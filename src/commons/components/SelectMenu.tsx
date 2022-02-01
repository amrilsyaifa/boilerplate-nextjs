/* eslint-disable jsx-a11y/role-has-required-aria-props */
import React, { useState, useEffect, useRef } from 'react'
import useOutsideClickComponent from '@commons/hooks/useOutsideClickComponent'

type Props = {
  label?: string
  options: OptionsArray[]
  value?: any
  error?: string
  placeholder: string
  onSelect: (e: any) => void
  loading?: boolean
}

type OptionsArray = {
  id: string | number
  name: string
  checked?: boolean
}

const SelectMenu: React.FC<Props> = ({
  label,
  options,
  error,
  value,
  loading = false,
  onSelect,
  placeholder,
}) => {
  const outSideRef = useRef<HTMLDivElement>(null)

  const [show, setShow] = useState(false)
  const [name, setName] = useState('')

  useEffect(() => {
    setName(value?.name)
  }, [value])

  const on_select = (e: any) => {
    onSelect(e)
    setShow(false)
  }

  useOutsideClickComponent(outSideRef, () => {
    setShow(false)
  })

  return (
    <div className="mb-4 relative" ref={outSideRef}>
      {label && (
        <label
          id="listbox-label"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {label}
        </label>
      )}

      <div className="relative">
        <div
          onClick={() => setShow(!show)}
          className="relative flex flex-row items-center bg-white text-gray-600 focus-within:text-gray-400 shadow appearance-none border rounded w-full py-2 h-11 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <div
            className={`text-lg pl-3 ${
              name ? 'text-black-400' : 'text-gray-400'
            }`}
          >
            {name ? name : placeholder}
          </div>
          <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
        {error && <span className="text-red-500 text-sm">{error}</span>}
        {show && loading && (
          <ul
            onClick={() => setShow(!show)}
            className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
            tabIndex={-1}
            role="listbox"
            aria-labelledby="listbox-label"
            aria-activedescendant="listbox-option-3"
          >
            <li
              className="text-gray-400 cursor-default select-none relative py-2 pl-3 pr-9"
              id="listbox-option-0"
              role="option"
            >
              Loading Data
            </li>
          </ul>
        )}
        {show && options?.length > 0 && !loading && (
          <ul
            className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
            tabIndex={-1}
            role="listbox"
            aria-labelledby="listbox-label"
            aria-activedescendant="listbox-option-3"
          >
            {options?.map((item, index) => (
              <li
                onClick={() => on_select(item)}
                key={index}
                className="cursor-pointer text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9"
                id="listbox-option-0"
                role="option"
              >
                <div className="flex items-center">
                  <span className="font-normal ml-3 block truncate">
                    {item.name}
                  </span>
                </div>
                {item.checked && (
                  <span className="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default SelectMenu
