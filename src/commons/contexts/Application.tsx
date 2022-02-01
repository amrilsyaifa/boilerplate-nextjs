import React, { useContext, createContext, ReactElement } from 'react'
import { useState } from 'react'
import { useCookies } from 'react-cookie'

interface IApplicationSettingContext {
  toggleSidebarView: () => void
  isCollapsed: () => boolean
  toggleReady: () => void
  isReady: () => boolean
}

const ApplicationSettingContext = createContext<IApplicationSettingContext>({
  toggleSidebarView: () => {},
  isCollapsed: () => false,
  toggleReady: () => {},
  isReady: () => false,
})

export function ApplicationSettingProvider({
  children,
}: {
  children: ReactElement
}) {
  const applicationSetting = useProvideApplicationSetting()

  return (
    <ApplicationSettingContext.Provider value={applicationSetting}>
      {children}
    </ApplicationSettingContext.Provider>
  )
}

export const useApplicationSetting = () => {
  return useContext(ApplicationSettingContext)
}

function useProvideApplicationSetting(): IApplicationSettingContext {
  const [ready, setReady] = useState(false)
  const [cookie, setCookie] = useCookies(['collapsed'])
  const currentState = cookie.collapsed === true || cookie.collapsed === 'true'

  const isCollapsed = () => {
    return currentState
  }

  const toggleSidebarView = () => {
    setCookie('collapsed', !currentState)
  }

  const isReady = () => {
    return ready
  }

  const toggleReady = () => {
    setReady((r) => !r)
  }

  return {
    toggleReady,
    isReady,
    isCollapsed,
    toggleSidebarView,
  }
}
