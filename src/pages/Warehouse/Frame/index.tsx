/*
 * @Author: hypocrisy
 * @Date: 2024-03-22 15:05:45
 * @LastEditors: hypocrisy
 * @LastEditTime: 2024-05-05 18:55:12
 * @FilePath: \summon-war-cms-fe\src\pages\Warehouse\Frame\index.tsx
 */
import { useEffect, useRef, useState } from 'react'
import { useRequest } from 'ahooks'
import EditTable from '@/components/EditTable'
import { Button, Form, Input, Modal, Radio, Select, notification } from 'antd'
import { Service } from '@/api'
//通过PostAvatarFrameList方法获取 返回值是一个promise 拿到promise的返回值
type AvatarFrameListProps = ReturnType<
  typeof Service.postWarehouseAvatarFrameList
> extends Promise<infer T>
  ? T
  : never
type VersionListProps = ReturnType<
  typeof Service.getWarehouseVersionList
> extends Promise<infer T>
  ? T
  : never
const AvatarFrame: React.FC = () => {
  const [list, setList] = useState<AvatarFrameListProps['list']>([])
  const [id, setId] = useState<number>(0)
  const [visible, setVisible] = useState(false)
  const [releaseVisible, setReleaseVisible] = useState(false)
  const [defaultVisible, setDefaultVisible] = useState(false)
  const [form] = Form.useForm()
  const [searchFrom] = Form.useForm()
  const [releaseForm] = Form.useForm()
  const [defaultForm] = Form.useForm()
  const [refresh, setRefresh] = useState(0)
  const [total, setTotal] = useState(0)
  const [versionList, setVersionList] = useState<VersionListProps['list']>([])
  const searchRef = useRef({
    offset: 0,
    limit: 50,
    filter: {
      name: '',
      version_id: 0,
      default: -1,
      release: -1
    }
  })
  const { run: getWarehouseVersionListRun } = useRequest(
    Service.getWarehouseVersionList,
    {
      manual: true,
      onSuccess: (res) => {
        setVersionList(res.list)
      }
    }
  )
  const { run: postAvatarFrameListRun } = useRequest(
    Service.postWarehouseAvatarFrameList,
    {
      manual: true,
      debounceWait: 500,
      onSuccess: (res) => {
        setList(res.list)
        setTotal(res.total)
      }
    }
  )
  const { run: postAvatarFrameModifyRun } = useRequest(
    Service.postWarehouseAvatarFrameModify,
    {
      manual: true,
      onSuccess: () => {
        setRefresh((prev) => prev + 1)
        notification.success({
          message: '',
          description: '头像框名称修改成功',
          duration: 2
        })
      }
    }
  )
  const { run: postAvatarFrameDeleteRun } = useRequest(
    Service.postWarehouseAvatarFrameDelete,
    {
      manual: true,
      onSuccess: () => {
        setRefresh((prev) => prev + 1)
        notification.success({
          message: '',
          description: '头像框删除成功',
          duration: 2
        })
      }
    }
  )
  const {
    run: postAvatarFrameInsertRun,
    loading: postAvatarFrameInsertLoading
  } = useRequest(Service.postWarehouseAvatarFrameInsert, {
    manual: true,
    onSuccess: () => {
      setRefresh((prev) => prev + 1)
      setVisible(false)
      notification.success({
        message: '',
        description: '头像框添加成功',
        duration: 2
      })
      form.resetFields()
    }
  })
  const {
    run: postAvatarFrameDefaultRun,
    loading: postAvatarFrameDefaultLoading
  } = useRequest(Service.postWarehouseAvatarFrameModifyDefault, {
    manual: true,
    onSuccess: () => {
      setRefresh((prev) => prev + 1)
      setDefaultVisible(false)
      notification.success({
        message: '',
        description: '头像框默认状态修改成功',
        duration: 2
      })
    }
  })
  const {
    run: postAvatarFrameReleaseRun,
    loading: postAvatarFrameReleaseLoading
  } = useRequest(Service.postWarehouseAvatarFrameModifyRelease, {
    manual: true,
    onSuccess: () => {
      setRefresh((prev) => prev + 1)
      setReleaseVisible(false)
      notification.success({
        message: '',
        description: '头像框发布状态修改成功',
        duration: 2
      })
    }
  })
  const handleSave = (row: any, preRow: any) => {
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
    postAvatarFrameModifyRun('', '', {
      id: row.id,
      name: row.name
    })
  }
  const columns = [
    {
      title: '头像框名称',
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
      render: (_text: string, record: any) => {
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
                postAvatarFrameDeleteRun('', '', {
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
    getWarehouseVersionListRun('', '')
    postAvatarFrameListRun('', '', searchRef.current)
  }, [refresh])

  return (
    <div className="relative">
      <Modal
        destroyOnClose={true}
        open={visible}
        onCancel={() => {
          setVisible(false)
          form.resetFields()
        }}
        onOk={() => {
          form.validateFields().then((values) => {
            postAvatarFrameInsertRun('', '', values)
          })
        }}
        confirmLoading={postAvatarFrameInsertLoading}
        style={{
          padding: '20px'
        }}
        width={600}
        title="添加头像框"
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
            label="头像框名称"
            name="name"
            required
            rules={[{ required: true, message: '请输入头像框名称' }]}
          >
            <Input placeholder="输入头像框名称" />
          </Form.Item>
          <Form.Item label="默认状态" name="default" required initialValue={1}>
            <Radio.Group>
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
            postAvatarFrameReleaseRun('', '', { ...values, id })
          })
        }}
        confirmLoading={postAvatarFrameReleaseLoading}
        style={{
          padding: '20px'
        }}
        width={600}
        title="修改发布状态"
      >
        <Form
          name="releaseForm"
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
              <Select.Option value={0}>未发布</Select.Option>
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
            postAvatarFrameDefaultRun('', '', { ...values, id })
          })
        }}
        confirmLoading={postAvatarFrameDefaultLoading}
        style={{
          padding: '20px'
        }}
        width={600}
        title="修改默认状态"
      >
        <Form
          name="defaultForm"
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
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Form
          layout="inline"
          name="searchFrom"
          form={searchFrom}
          labelCol={{ flex: 100 }}
          wrapperCol={{ flex: 300 }}
          style={{ marginBottom: '20px', width: '100%' }}
          onValuesChange={() => {
            searchFrom.validateFields().then((values) => {
              searchRef.current = {
                ...searchRef.current,
                filter: {
                  ...searchRef.current.filter,
                  ...values
                }
              }
              postAvatarFrameListRun('', '', searchRef.current)
            })
          }}
        >
          <Form.Item label="头像框名称" name="name" initialValue={''}>
            <Input placeholder="输入头像框名称" />
          </Form.Item>
          <Form.Item label="被创建版本" name="version_id" initialValue={0}>
            <Select style={{ minWidth: 100 }} placeholder="选择版本">
              <Select.Option value={0}>全部</Select.Option>
              {versionList.map((item) => (
                <Select.Option key={item.id} value={item.id}>
                  {item.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="默认状态" name="default" initialValue={-1}>
            <Select style={{ minWidth: 100 }}>
              <Select.Option value={-1}>全部</Select.Option>
              <Select.Option value={1}>正常</Select.Option>
              <Select.Option value={2}>隐藏</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="发布状态" name="release" initialValue={-1}>
            <Select style={{ minWidth: 100 }}>
              <Select.Option value={-1}>全部</Select.Option>
              <Select.Option value={0}>未发布</Select.Option>
              <Select.Option value={1}>已发布</Select.Option>
              <Select.Option value={2}>隐藏</Select.Option>
            </Select>
          </Form.Item>
        </Form>
        <Button
          type="primary"
          className="mb-3 mr-4"
          onClick={() => {
            setVisible(true)
          }}
        >
          添加头像框
        </Button>
      </div>
      <div
        style={{
          height: 'calc(100vh - 240px)',
          overflow: 'auto'
        }}
      >
        <EditTable
          defaultColumns={columns}
          list={list}
          handleSave={handleSave}
          pagination={{
            showSizeChanger: true,
            total: total,
            pageSize: searchRef.current.limit,
            pageSizeOptions: ['20', '50', '100', '200'],
            onChange: (page: number, pageSize: number) => {
              searchRef.current = {
                ...searchRef.current,
                offset: page,
                limit: pageSize
              }
              postAvatarFrameListRun('', '', searchRef.current)
            }
          }}
        />
      </div>
    </div>
  )
}
export default AvatarFrame
