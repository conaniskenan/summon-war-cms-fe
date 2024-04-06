/*
 * @Author: hypocrisy
 * @Date: 2024-03-22 15:05:45
 * @LastEditors: hypocrisy
 * @LastEditTime: 2024-04-06 21:09:58
 * @FilePath: /summon-war-cms-fe/src/pages/Ava/Avatar/index.tsx
 */
import {
  getAvatarList,
  postAvatarModify,
  postAvatarDelete,
  postAvatarInsert,
  postAvatarDefault,
  postAvatarRelease
} from '@/service/avatar'
import { useEffect, useState } from 'react'
import { useRequest } from 'ahooks'
import EditTable from '@/components/EditTable'
import { Button, Form, Input, Modal, Radio, Select, notification } from 'antd'

const Avatar: React.FC = () => {
  const [id, setId] = useState<number>(0)
  const [list, setList] = useState<Api.Paths.GetAvatarList.Response['list']>([])
  const [visible, setVisible] = useState(false)
  const [releaseVisible, setReleaseVisible] = useState(false)
  const [defaultVisible, setDefaultVisible] = useState(false)

  const [form] = Form.useForm()
  const [releaseForm] = Form.useForm()
  const [defaultForm] = Form.useForm()
  const [refresh, setRefresh] = useState(0)
  const { run: getAvatarListRun } = useRequest(getAvatarList, {
    manual: true,
    onSuccess: (res) => {
      setList(res.list)
    }
  })
  const { run: postAvatarModifyRun } = useRequest(postAvatarModify, {
    manual: true,
    onSuccess: () => {
      setRefresh((prev) => prev + 1)
      notification.success({
        message: '',
        description: '头像名称修改成功',
        duration: 2
      })
    }
  })
  const { run: postAvatarDeleteRun } = useRequest(postAvatarDelete, {
    manual: true,
    onSuccess: () => {
      setRefresh((prev) => prev + 1)
      notification.success({
        message: '',
        description: '头像删除成功',
        duration: 2
      })
    }
  })
  const { run: postAvatarInsertRun, loading: postAvatarInsertLoading } =
    useRequest(postAvatarInsert, {
      manual: true,
      onSuccess: () => {
        setRefresh((prev) => prev + 1)
        setVisible(false)
        notification.success({
          message: '',
          description: '头像添加成功',
          duration: 2
        })
        form.resetFields()
      }
    })
  const { run: postAvatarDefaultRun, loading: postAvatarDefaultLoading } =
    useRequest(postAvatarDefault, {
      manual: true,
      onSuccess: () => {
        setRefresh((prev) => prev + 1)
        setDefaultVisible(false)
        notification.success({
          message: '',
          description: '头像默认状态修改成功',
          duration: 2
        })
      }
    })
  const { run: postAvatarReleaseRun, loading: postAvatarReleaseLoading } =
    useRequest(postAvatarRelease, {
      manual: true,
      onSuccess: () => {
        setRefresh((prev) => prev + 1)
        setReleaseVisible(false)
        notification.success({
          message: '',
          description: '头像发布状态修改成功',
          duration: 2
        })
      }
    })
  const handleSave = (
    row: Api.Paths.GetAvatarList.Response['list'][0],
    preRow: Api.Paths.GetAvatarList.Response['list'][0]
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
    postAvatarModifyRun({
      id: row.id,
      name: row.name
    })
  }
  const columns = [
    {
      title: '头像名称',
      dataIndex: 'name',
      editable: true
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
      title: '被创建版本',
      dataIndex: 'version_name'
    },
    {
      title: '被修改版本',
      dataIndex: 'last_version_name'
    },
    //操作
    {
      title: '操作',
      dataIndex: 'operation',
      align: 'center',
      width: 400,
      render: (
        _text: string,
        record: Api.Paths.GetAvatarList.Response['list'][0]
      ) => {
        return (
          <div>
            <Button
              type="link"
              onClick={() => {
                setId(record.id)
                setDefaultVisible(true)
              }}
              //只有release为0的才能修改
              disabled={record.release !== 0}
            >
              修改默认状态
            </Button>
            <Button
              type="link"
              onClick={() => {
                setId(record.id)
                setReleaseVisible(true)
              }}
              //只有release不为0的才能修改
              disabled={record.release === 0}
            >
              修改发布状态
            </Button>
            <Button
              danger
              type="link"
              onClick={() => {
                postAvatarDeleteRun({
                  id: record.id
                })
              }}
              //只有release为0的才能删除
              disabled={record.release !== 0}
            >
              删除
            </Button>
          </div>
        )
      }
    }
  ]
  useEffect(() => {
    getAvatarListRun({ version_id: 0 })
  }, [refresh])

  return (
    <div>
      <Modal
        destroyOnClose={true}
        open={visible}
        onCancel={() => {
          setVisible(false)
          form.resetFields()
        }}
        onOk={() => {
          form.validateFields().then((values) => {
            postAvatarInsertRun(values)
          })
        }}
        confirmLoading={postAvatarInsertLoading}
        style={{
          padding: '20px'
        }}
        width={600}
        title="添加头像"
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
            label="头像名称"
            name="name"
            required
            rules={[{ required: true, message: '请输入头像名称' }]}
          >
            <Input placeholder="输入头像名称" />
          </Form.Item>
          <Form.Item
            label="默认状态"
            name="default"
            required
            rules={[{ required: true, message: '请输入默认状态' }]}
            initialValue={1}
          >
            <Radio.Group defaultValue={1}>
              <Radio value={1}>正常</Radio>
              <Radio value={2}>隐藏</Radio>
            </Radio.Group>
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        destroyOnClose={true}
        open={releaseVisible}
        onCancel={() => {
          setReleaseVisible(false)
          releaseForm.resetFields()
        }}
        onOk={() => {
          releaseForm.validateFields().then((values) => {
            postAvatarReleaseRun({ ...values, id })
          })
        }}
        confirmLoading={postAvatarReleaseLoading}
        style={{
          padding: '20px'
        }}
        width={600}
        title="修改发布状态"
      >
        <Form
          form={releaseForm}
          style={{
            marginTop: '50px',
            marginBottom: '50px'
          }}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
        >
          <Form.Item label="发布状态" name="release" required initialValue={1}>
            <Select>
              {/* <Select.Option value={0}>未发布</Select.Option> */}
              <Select.Option value={1}>已发布</Select.Option>
              <Select.Option value={2}>隐藏</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        destroyOnClose={true}
        open={defaultVisible}
        onCancel={() => {
          setDefaultVisible(false)
          defaultForm.resetFields()
        }}
        onOk={() => {
          defaultForm.validateFields().then((values) => {
            postAvatarDefaultRun({ ...values, id })
          })
        }}
        confirmLoading={postAvatarDefaultLoading}
        style={{
          padding: '20px'
        }}
        width={600}
        title="修改默认状态"
      >
        <Form
          form={defaultForm}
          style={{
            marginTop: '50px',
            marginBottom: '50px'
          }}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
        >
          <Form.Item label="默认状态" name="default" required initialValue={1}>
            <Select>
              {/* <Select.Option value={0}>未发布</Select.Option> */}
              <Select.Option value={1}>正常</Select.Option>
              <Select.Option value={2}>隐藏</Select.Option>
            </Select>
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
        添加头像
      </Button>
      <EditTable defaultColumns={columns} list={list} handleSave={handleSave} />
    </div>
  )
}
export default Avatar
