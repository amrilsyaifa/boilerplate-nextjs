import withPrivateLayout from '../../hoc/withPrivateLayout'
import Sidebar from './Sidebar'

import styles from './admin-layout.module.scss'

const PrivateLayout = ({ children }: { children: any }) => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div>{children}</div>
    </div>
  )
}

export default withPrivateLayout(PrivateLayout)
