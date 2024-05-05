import React, { useContext, useEffect, useRef, useState } from 'react'
import type { GetRef } from 'antd'
import { Form, Input, Table } from 'antd'

type InputRef = GetRef<typeof Input>
type FormInstance<T> = GetRef<typeof Form<T>>

const EditableContext = React.createContext<FormInstance<any> | null>(null)

interface EditableRowProps {
  index: number
}

const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
  const [form] = Form.useForm()
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  )
}

interface EditableCellProps {
  title: React.ReactNode
  editable: boolean
  children: React.ReactNode
  dataIndex: any
  record: any
  handleSave: (record: any, preRecord: any) => void
}

const EditableCell: React.FC<EditableCellProps> = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false)
  const inputRef = useRef<InputRef>(null)
  const form = useContext(EditableContext)!

  useEffect(() => {
    if (editing) {
      ;(inputRef.current as unknown as HTMLInputElement).focus()
    }
  }, [editing])

  const toggleEdit = () => {
    setEditing(!editing)
    form.setFieldsValue({ [dataIndex]: record[dataIndex] })
  }

  const save = async () => {
    try {
      const values = await form.validateFields()
      toggleEdit()
      handleSave({ ...record, ...values }, record)
    } catch (errInfo) {
      console.log('Save failed:', errInfo)
    }
  }

  let childNode = children

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{ margin: 0 }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`
          },
          {
            whitespace: true,
            message: `${title} is required.`
          }
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{ paddingRight: 24 }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    )
  }

  return <td {...restProps}>{childNode}</td>
}
interface EditTableProps {
  defaultColumns: any[]
  list: any[]
  handleSave: (record: any, preRecord: any) => void
  [key: string]: any
}

const EditTable: React.FC<EditTableProps> = (props) => {
  const { defaultColumns, list, handleSave } = props
  const [columns, setColumns] = useState(defaultColumns)
  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell
    }
  }
  useEffect(() => {
    const columns = defaultColumns.map((col) => {
      if (!col.editable) {
        return col
      }
      return {
        ...col,
        onCell: (record: any) => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave
        })
      }
    })
    setColumns(columns)
  }, [defaultColumns])
  return (
    <div>
      <Table
        columns={columns}
        dataSource={list}
        rowKey="id"
        components={components}
        rowClassName={() => 'editable-row'}
        bordered
        {...props}
      />
    </div>
  )
}
export default EditTable
