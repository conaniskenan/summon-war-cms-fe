import React from 'react'
const Home = React.lazy(() => import('@/pages/Home'))
const NotFound = React.lazy(() => import('@/pages/404'))
const Version = React.lazy(() => import('@/pages/Warehouse/Version'))
const Currency = React.lazy(() => import('@/pages/Warehouse/Currency'))
const Race = React.lazy(() => import('@/pages/Warehouse/Race'))
const Avatar = React.lazy(() => import('@/pages/Warehouse/Avatar'))
const Frame = React.lazy(() => import('@/pages/Warehouse/Frame'))
const BaseSkill = React.lazy(() => import('@/pages/Warehouse/Skill/BaseSkill'))
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
      },
      {
        path: '/warehouse/race',
        element: <Race />
      },
      {
        path: '/warehouse/avatar',
        element: <Avatar />
      },
      {
        path: '/warehouse/frame',
        element: <Frame />
      },
      {
        path: '/warehouse/skill',
        children: [
          {
            path: '/warehouse/skill/base',
            element: <BaseSkill />
          }
        ]
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
]

export default routes
