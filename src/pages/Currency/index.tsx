/*
 * @Author: hypocrisy
 * @Date: 2024-03-22 15:05:45
 * @LastEditors: hypocrisy
 * @LastEditTime: 2024-03-25 09:44:09
 * @FilePath: \summon-war-cms-fe\src\pages\Currency\index.tsx
 */
import { getCurrencyList } from '@/service/currency'
import { useEffect, useState } from 'react'
import { Table } from 'antd'
const Currency: React.FC = () => {
  const [list, setList] = useState<Api.Paths.GetCurrencyList.Response['list']>(
    []
  )
  useEffect(() => {
    getCurrencyList({
      version_id: 0
    }).then((res) => {
      setList(res.list)
    })
  }, [])
  const columns = [
    {
      title: '货币名称',
      dataIndex: 'name'
    },
    {
      title: '发布状态',
      dataIndex: 'release',
      //0 未发布 1 已发布 2隐藏
      render: (text: number) => {
        if (text === 0) {
          return '未发布'
        } else if (text === 1) {
          return '已发布'
        } else {
          return '隐藏'
        }
      }
    },
    {
      title: '默认状态',
      dataIndex: 'default',
      //1正常 2隐藏
      render: (text: number) => {
        if (text === 1) {
          return '正常'
        } else {
          return '隐藏'
        }
      }
    },
    {
      title: '被创建版本',
      dataIndex: 'version_name'
    },
    {
      title: '被修改版本',
      dataIndex: 'last_version_name'
    }
  ]
  return (
    <div>
      <Table columns={columns} dataSource={list} rowKey="id" />
    </div>
  )
}
export default Currency
