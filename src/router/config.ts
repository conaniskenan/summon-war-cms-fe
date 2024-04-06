export const menuList = [
  {
    path: '/',
    label: '首页',
    icon: 'HomeOutlined'
  },
  {
    path: '/warehouse',
    label: '仓库管理',
    icon: 'ShopOutlined',
    children: [
      {
        path: '/warehouse/version',
        label: '版本',
        icon: 'DeploymentUnitOutlined'
      },
      {
        path: '/warehouse/currency',
        label: '货币',
        icon: 'DollarCircleOutlined'
      }
    ]
  },
  {
    path: '/race',
    label: '种族管理',
    icon: 'TeamOutlined'
  },
  {
    path: '/ava',
    label: '头像管理',
    icon: 'UserOutlined',
    children: [
      {
        path: '/ava/avatar',
        label: '头像',
        icon: 'DeploymentUnitOutlined'
      },
      {
        path: '/ava/frame',
        label: '头像框',
        icon: 'DollarCircleOutlined'
      }
    ]
  }
]
