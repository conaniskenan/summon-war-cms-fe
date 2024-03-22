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
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
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
