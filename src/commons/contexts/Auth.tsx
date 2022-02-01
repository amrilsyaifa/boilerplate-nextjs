import { createContext, ReactElement, useContext } from 'react'
import useProvideAuth, { IAuthContext } from '../hooks/useProvideAuth'

const AuthContext = createContext<IAuthContext>({
  setAuthToken: () => {},
  isSignedIn: () => false,
  signOut: () => {},
})

const AuthProvider = ({ children }: { children: ReactElement }) => {
  const auth = useProvideAuth()

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}

export default AuthProvider
