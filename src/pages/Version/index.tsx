/*
 * @Author: hypocrisy
 * @Date: 2024-03-22 15:05:15
 * @LastEditors: hypocrisy
 * @LastEditTime: 2024-03-24 19:55:56
 * @FilePath: \summon-war-cms-fe\src\pages\Version\index.tsx
 */

import { getVersionList, postVersionModify } from '@/service/version'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import React from 'react'
import { notification } from 'antd'
import EditTable from '@/components/EditTable'
const Version: React.FC = () => {
  const [refresh, setRefresh] = useState(0)
  const [list, setList] = useState<Api.Paths.GetVersionList.Response['list']>(
    []
  )
  const getVersionListFn = () => {
    getVersionList({}).then((res) => {
      setList(res.list)
    })
  }
  useEffect(() => {
    getVersionListFn()
  }, [refresh])
  const handleSave = (
    row: Api.Paths.GetVersionList.Response['list'][0],
    preRow: Api.Paths.GetVersionList.Response['list'][0]
  ) => {
    if (row.name === preRow.name) {
      return
    }
    postVersionModify({
      id: row.id,
      name: row.name
    }).then(() => {
      setRefresh((prev) => prev + 1)
      notification.success({
        message: '版本名称修改成功',
        duration: 1
      })
    })
  }

  const columns = [
    {
      title: '版本名',
      dataIndex: 'name',
      editable: true
    },
    {
      title: '版本号',
      dataIndex: 'number'
    },
    {
      title: '创建时间',
      dataIndex: 'create_time',
      render: (text: string) =>
        text && dayjs(+text * 1000).format('YYYY-MM-DD HH:mm:ss')
    }
  ]
  return (
    <div>
      <EditTable defaultColumns={columns} handleSave={handleSave} list={list} />
    </div>
  )
}
export default Version
