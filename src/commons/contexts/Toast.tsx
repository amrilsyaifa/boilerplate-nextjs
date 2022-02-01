import { createContext, ReactElement, useContext } from 'react'
import { ToastContainer } from 'react-toastify'
import useProvideAuth, { IToastContext } from '../hooks/useProvideToast'

const ToastContext = createContext<IToastContext>({
  setToast: () => {},
  isSuccess: true,
})

const AuthProvider = ({ children }: { children: ReactElement }) => {
  const auth = useProvideAuth()

  return (
    <ToastContext.Provider value={auth}>
      <ToastContainer
        position="bottom-left"
        closeButton={false}
        pauseOnHover={false}
        style={{ width: '500px' }}
        progressStyle={
          auth.isSuccess ? { background: '#01CB6B' } : { background: '#FF345D' }
        }
      />
      {children}
    </ToastContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(ToastContext)
}

export default AuthProvider
