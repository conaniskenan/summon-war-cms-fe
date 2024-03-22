import React from 'react'
import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'
const App: React.FC = () => {
  const navigate = useNavigate()
  const backHome = () => {
    navigate('/')
  }
  return (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={
        <Button
          type="primary"
          onClick={() => {
            backHome()
          }}
        >
          返回首页
        </Button>
      }
    />
  )
}

export default App
