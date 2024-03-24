import React from 'react'
const Home = React.lazy(() => import('@/pages/Home'))
const NotFound = React.lazy(() => import('@/pages/404'))
const Version = React.lazy(() => import('@/pages/Version'))
const Currency = React.lazy(() => import('@/pages/Currency'))
const routes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/warehouse',
    children: [
      {
        path: '/warehouse/version',
        element: <Version />
      },
      {
        path: '/warehouse/currency',
        element: <Currency />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
]

export default routes
