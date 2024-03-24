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
        label: '版本管理',
        icon: 'DeploymentUnitOutlined'
      },
      {
        path: '/warehouse/currency',
        label: '货币管理',
        icon: 'DollarCircleOutlined'
      }
    ]
  }
]
