/* eslint-disable @typescript-eslint/no-explicit-any */
import { CookiesProvider } from 'react-cookie'
import type { AppProps } from 'next/app'
import type { NextPage } from 'next'
import type { ReactElement, ReactNode } from 'react'

// context
import AuthProvider from '@commons/contexts/Auth'
import ToastProvider from '@commons/contexts/Toast'

// Layout
import AdminLayout from '@commons/layouts/AdminLayout'
import DefaultLayout from '@commons/layouts/DefaultLayout'

// Styles
import '@styles/index.scss'

type NextPageWithContext = NextPage & {
  getContext?: (page: ReactElement) => ReactNode
  getAdminLayout?: (page: ReactElement) => any
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithContext
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getContext = Component.getContext || ((page: any) => page)
  const getLayout = Component.getAdminLayout
    ? (page: any) => <AdminLayout>{page}</AdminLayout>
    : (page: any) => <DefaultLayout>{page}</DefaultLayout>
  return (
    <CookiesProvider>
      <AuthProvider>
        <ToastProvider>
          {getContext(getLayout(<Component {...pageProps} />))}
        </ToastProvider>
      </AuthProvider>
    </CookiesProvider>
  )
}

export default MyApp
