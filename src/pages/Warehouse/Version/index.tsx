/*
 * @Author: hypocrisy
 * @Date: 2024-03-22 15:05:15
 * @LastEditors: hypocrisy
 * @LastEditTime: 2024-05-05 16:03:09
 * @FilePath: \summon-war-cms-fe\src\pages\Warehouse\Version\index.tsx
 */
import {
  getVersionList,
  postVersionModify,
  postVersionDelete,
  postVersionInsert,
  postVersionShelve
} from '@/service/version'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import React from 'react'
import { Button, notification, Modal, Input, Form, Checkbox } from 'antd'
import EditTable from '@/components/EditTable'
import { useRequest } from 'ahooks'
const Version: React.FC = () => {
  const [visible, setVisible] = useState(false)
  const [refresh, setRefresh] = useState(0)
  const [form] = Form.useForm()
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
  const { run: postVersionInsertRun, loading: postVersionInsertLoading } =
    useRequest(postVersionInsert, {
      manual: true,
      onSuccess: () => {
        setRefresh((prev) => prev + 1)
        setVisible(false)
        notification.success({
          message: '',
          description: '版本添加成功',
          duration: 2
        })
        form.resetFields()
      }
    })
  const { run: postVersionShelveRun } = useRequest(postVersionShelve, {
    manual: true,
    onSuccess: () => {
      setRefresh((prev) => prev + 1)
      notification.success({
        message: '',
        description: '版本上架成功',
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
            disabled
          >
            删除
          </Button>
        )
      }
    }
  ]
  return (
    <div>
      <Modal
        destroyOnClose
        open={visible}
        onCancel={() => {
          setVisible(false)
          form.resetFields()
        }}
        onOk={() => {
          form.validateFields().then((values) => {
            console.log(values);
            postVersionInsertRun(values)
          })
        }}
        confirmLoading={postVersionInsertLoading}
        style={{
          padding: '20px'
        }}
        width={600}
        title="添加版本"
      >
        <Form
          form={form}
          style={{
            marginTop: '50px'
          }}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
        >
          <Form.Item
            label="版本名称"
            name="name"
            required
            rules={[{ required: true, message: '请输入版本名称' }]}
          >
            <Input placeholder="输入版本名称" />
          </Form.Item>
          <Form.Item label="大版本" name="largeVersion" valuePropName="checked">
            <Checkbox></Checkbox>
          </Form.Item>
          <Form.Item label="小版本" name="smallVersion" valuePropName="checked">
            <Checkbox></Checkbox>
          </Form.Item>
        </Form>
      </Modal>
      <Button
        type="primary"
        className="mb-3 mr-4"
        onClick={() => {
          setVisible(true)
        }}
      >
        添加版本
      </Button>
      <Button danger onClick={() => postVersionShelveRun({})}>
        上架
      </Button>
      <EditTable defaultColumns={columns} handleSave={handleSave} list={list} />
    </div>
  )
}
export default Version
