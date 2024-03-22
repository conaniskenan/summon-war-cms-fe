import { SetStateAction, Suspense, useState, useCallback } from 'react'
import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import { Layout, Breadcrumb } from 'antd'
import MyMenu from './components/Layout/menu'
import routes from './router/index'
import './style/index.styl'
import defaultPng from './assets/images/default.png'
import logoPng from './assets/images/logo.png'
const { Header, Content, Sider } = Layout
const Routes = () => {
  const element = useRoutes(routes)
  return element
}
const breadCrumbArr: any[] = []
const App = () => {
  const [breadArr, setBredArr] = useState(breadCrumbArr)
  const getBread = useCallback((res: SetStateAction<{ title: string }[]>) => {
    setBredArr(res)
  }, [])
  return (
    <Router>
      <Layout>
        <Header className="header">
          <img src={logoPng} alt="加载失败" className="logo" />
          <i className="logo_title">召唤战争CMS</i>
          <div style={{ marginLeft: 'auto' }} className="flex">
            <img className="avatar" src={defaultPng} alt="" />
            <span
              style={{
                display: 'inline-block'
              }}
            >
              hypocrisy
            </span>
          </div>
        </Header>
        <Layout>
          <Sider width={256}>
            <MyMenu bread={getBread}></MyMenu>
          </Sider>
          <Layout>
            <Breadcrumb style={{ margin: '16px 20px 0' }} items={breadArr} />
            <Content className="content">
              <Suspense>
                <Routes></Routes>
              </Suspense>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Router>
  )
}

export default App
