import React from 'react'

const Dashboard = React.lazy(() => import('./components/dashboard/Dashboard'))
const Payments = React.lazy(() => import('./components/payments/Payments'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/payments', name: 'Payments', element: Payments },
]

export default routes
