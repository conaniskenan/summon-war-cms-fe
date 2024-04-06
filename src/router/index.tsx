import React from 'react'
const Home = React.lazy(() => import('@/pages/Home'))
const NotFound = React.lazy(() => import('@/pages/404'))
const Version = React.lazy(() => import('@/pages/Warehouse/Version'))
const Currency = React.lazy(() => import('@/pages/Warehouse/Currency'))
const Race = React.lazy(() => import('@/pages/Race'))
const Avatar = React.lazy(() => import('@/pages/Ava/Avatar'))
const Frame = React.lazy(() => import('@/pages/Ava/Frame'))
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
    path: '/race',
    element: <Race />
  },
  {
    path: '/ava',
    children: [
      {
        path: '/ava/avatar',
        element: <Avatar />
      },
      {
        path: '/ava/frame',
        element: <Frame />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
]

export default routes
