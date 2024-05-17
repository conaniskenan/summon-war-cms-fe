import path from "path";

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
      }, {
        path: '/warehouse/race',
        label: '种族',
        icon: 'TeamOutlined'
      },
      {
        path: '/warehouse/avatar',
        label: '头像',
        icon: 'DeploymentUnitOutlined'
      },
      {
        path: '/warehouse/frame',
        label: '头像框',
        icon: 'DollarCircleOutlined'
      },
      {
        path: '/warehouse/skill',
        label: '技能',
        icon: 'TeamOutlined',
        children: [
          {
            path: '/warehouse/skill/base',
            label: '底层技能',
            icon: 'DeploymentUnitOutlined'
          }
        ]
      }
    ]
  },

]
