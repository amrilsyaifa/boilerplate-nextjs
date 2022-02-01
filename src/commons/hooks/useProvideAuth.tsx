/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef } from 'react'
import { useCookies } from 'react-cookie'
import { logout } from '@lib/Axios'
import { TOKEN_KEY } from '@config/App'

interface LoginProps {
  username: string
  password: string
  onSuccess?: () => void
  onFailed?: () => void
}

interface IAuthContext {
  setAuthToken: (value: string) => void
  isSignedIn: () => boolean
  signOut: () => void
}

const useProvideAuth = (): IAuthContext => {
  const firstLoad = useRef(true)
  const [authToken, setToken] = useCookies([TOKEN_KEY])

  const isEmpty = (obj: object) => {
    for (const prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false
      }
    }

    return JSON.stringify(obj) === JSON.stringify({})
  }

  const setHeader = async (access_token: string) => {
    // RestAPI.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
  }

  const setAuthToken = (token: string) => {
    setToken(TOKEN_KEY, token)
  }

  if (authToken && !isEmpty(authToken)) {
    if (firstLoad.current) {
      firstLoad.current = false
      setHeader(authToken[TOKEN_KEY])
    }
  }

  const isSignedIn = () => {
    if (authToken && !isEmpty(authToken) && authToken[TOKEN_KEY]) {
      return true
    } else {
      return false
    }
  }

  const signOut = async () => {
    logout()
  }

  return {
    setAuthToken,
    isSignedIn,
    signOut,
  }
}

export type { IAuthContext }
export default useProvideAuth
