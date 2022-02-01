import { ReactElement } from 'react'
import useProvideToast from '@commons/hooks/useProvideToast'
import Button from '@commons/components/Button'

const LoginPage = () => {
  const toast = useProvideToast()

  const testToast = () => {
    toast.setToast({ type: 'success', title: 'tes', message: 'message' })
  }
  return (
    <div>
      <Button text="Logins" onClick={() => testToast()} />
    </div>
  )
}

LoginPage.getAdminLayout = function getLayout(page: ReactElement) {
  return page
}

export default LoginPage
