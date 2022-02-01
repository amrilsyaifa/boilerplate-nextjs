import withPrivateLayout from '../../hoc/withPrivateLayout'

const PrivateLayout = ({ children }: { children: any }) => {
  return <div>{children}</div>
}

export default withPrivateLayout(PrivateLayout)
