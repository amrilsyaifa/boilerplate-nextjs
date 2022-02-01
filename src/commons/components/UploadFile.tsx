import React from 'react'

type Props = {
  title: string
  width?: string
  multiple?: boolean
  onChange: (e: any) => void
  error?: string
  accept?: string
}

const BreakPoint = [
  { key: 'fullWidth', className: 'w-full mb-3' },
  { key: 'auto', className: 'w-auto mb-3' },
  { key: 'lg', className: 'w-96 mb-3' },
  { key: 'md', className: 'w-64 mb-3' },
  { key: 'sm', className: 'w-32 mb-3' },
]

const UploadFile: React.FC<Props> = ({
  title,
  width = 'fullWidth',
  onChange,
  multiple = false,
  error,
  ...props
}) => {
  const widthContainer: any = BreakPoint.find((item) => item.key === width)

  return (
    <div className={widthContainer ? widthContainer.className : 'w-full'}>
      <label className="flex flex-row items-center justify-between p-2 bg-white text-gray-700 rounded-lg shadow-lg tracking-wide border border-blue cursor-pointer hover:bg-blue-500 hover:text-white">
        <span className="pr-3 leading-normal">{title}</span>
        <svg
          className="w-8 h-8"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <input
          type="file"
          className="hidden"
          onChange={(e) => onChange(e)}
          {...props}
          multiple={multiple}
        />
      </label>
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  )
}

export default UploadFile
