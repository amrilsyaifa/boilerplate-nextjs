import { ReactElement, useEffect } from 'react'
import useProvideAuth from '@commons/hooks/useProvideAuth'
import { useRouter } from 'next/router'

const LogoutPage = () => {
  const auth = useProvideAuth()
  const router = useRouter()

  useEffect(() => {
    auth.signOut()
    router.replace('/auth/login')
  }, [])

  return null
}

LogoutPage.getLayout = function getLayout(page: ReactElement) {
  return page
}

export default LogoutPage
