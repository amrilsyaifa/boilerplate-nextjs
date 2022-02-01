/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import { toast } from 'react-toastify'

interface IToastContext {
  setToast: (value: ToastProps) => void
  isSuccess: boolean
}

type ToastProps = {
  type: string
  title: string
  message: string
}

const useProvideToast = (): IToastContext => {
  const [isSuccess, setIsSuccess] = useState<boolean>(true)

  const ToastNotification = ({ type, title, message }: ToastProps) => {
    return (
      <div className="toast-style">
        <div className="img">
          {type === 'success' ? (
            <img
              src="/assets/images/commons/toast_success.svg"
              alt="img"
              width={42}
              height={42}
            />
          ) : type === 'error' ? (
            <img
              src="/assets/images/commons/toast_failed.svg"
              width={42}
              height={42}
              alt="img"
            />
          ) : null}
        </div>
        <div className="body">
          <p className="title">{title}</p>
          <p className="message">{message}</p>
        </div>
      </div>
    )
  }
  const setToast = ({ type, title, message }: ToastProps) => {
    setIsSuccess(type === 'success')
    toast(<ToastNotification type={type} title={title} message={message} />)
  }

  return {
    setToast,
    isSuccess,
  }
}

export type { IToastContext }
export default useProvideToast
