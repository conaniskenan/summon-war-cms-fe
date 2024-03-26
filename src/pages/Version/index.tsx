/*
 * @Author: hypocrisy
 * @Date: 2024-03-22 15:05:15
 * @LastEditors: hypocrisy
 * @LastEditTime: 2024-03-26 09:19:57
 * @FilePath: \summon-war-cms-fe\src\pages\Version\index.tsx
 */

import {
  getVersionList,
  postVersionModify,
  postVersionDelete
} from '@/service/version'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import React from 'react'
import { Button, notification } from 'antd'
import EditTable from '@/components/EditTable'
import { useRequest } from 'ahooks'
const Version: React.FC = () => {
  const [refresh, setRefresh] = useState(0)
  const [list, setList] = useState<Api.Paths.GetVersionList.Response['list']>(
    []
  )

  const { run: getVersionListRun } = useRequest(getVersionList, {
    manual: true,
    onSuccess: (res) => {
      setList(res.list)
    }
  })
  const { run: postVersionModifyRun } = useRequest(postVersionModify, {
    manual: true,
    onSuccess: () => {
      setRefresh((prev) => prev + 1)
      notification.success({
        message: '',
        description: '版本名称修改成功',
        duration: 2
      })
    }
  })
  const { run: postVersionDeleteRun } = useRequest(postVersionDelete, {
    manual: true,
    onSuccess: () => {
      setRefresh((prev) => prev + 1)
      notification.success({
        message: '',
        description: '版本删除成功',
        duration: 2
      })
    }
  })
  useEffect(() => {
    getVersionListRun({})
  }, [refresh])
  const handleSave = (
    row: Api.Paths.GetVersionList.Response['list'][0],
    preRow: Api.Paths.GetVersionList.Response['list'][0]
  ) => {
    if (row.name === preRow.name) {
      return
    }
    setList((prev) => {
      return prev.map((item) => {
        if (item.id === row.id) {
          return {
            ...item,
            name: row.name
          }
        }
        return item
      })
    })
    postVersionModifyRun({
      id: row.id,
      name: row.name
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
    },
    //操作 删除
    {
      title: '操作',
      dataIndex: 'operation',
      align: 'center',
      render: (_text: string, record: any) => {
        return (
          <Button
            type="link"
            onClick={() => {
              postVersionDeleteRun({ id: record.id })
            }}
          >
            删除
          </Button>
        )
      }
    }
  ]
  return (
    <div>
      <EditTable defaultColumns={columns} handleSave={handleSave} list={list} />
    </div>
  )
}
export default Version
