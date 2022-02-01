import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../contexts/Auth'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface WithAuthProps {}

const withAuth = <T extends WithAuthProps>(
  WrappedComponent: React.ComponentType<T>
) => {
  // Try to create a nice displayName for React Dev Tools.
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component'

  const Component = (props: Omit<T, keyof WithAuthProps>) => {
    const router = useRouter()
    const { isSignedIn } = useAuth()

    const redirectToLoginPage = () => {
      router.replace('/auth/login')
    }

    const registerInterceptor = () => {
      // RestAPI.interceptors.response.use(
      //   (response: unknown) => {
      //     return response;
      //   },
      //   (error: Errr) => {
      //     if (401 === error.response.status) {
      //     } else {
      //       return Promise.reject(error);
      //     }
      //   }
      // );
    }

    const getUserProfile = async () => {
      registerInterceptor()
    }

    useEffect(() => {
      if (!isSignedIn()) redirectToLoginPage()
      else getUserProfile()
    }, []) // eslint-disable-line

    return (
      <>
        <WrappedComponent {...(props as T)} />
      </>
    )
  }

  Component.displayName = `withAuth(${displayName})`

  return Component
}

export default withAuth
