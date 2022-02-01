import React from 'react'
import withAuth from './withAuth'

const withPrivateLayout = (WrappedComponent: any): any => {
  // Try to create a nice displayName for React Dev Tools.
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component'

  const Component = (props: any) => {
    return <WrappedComponent {...props} />
  }

  Component.displayName = `withPrivateLayout(${displayName})`

  return withAuth(Component)
}

export default withPrivateLayout
