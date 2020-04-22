import styled from 'styled-components'
import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
import OptionPage from '../src/components/Option'
const { Header, Content, Footer } = Layout
const StyledWrapper = styled.div`
  .site-layout-content {
    background: #fff;
    padding: 24px;
    min-height: 280px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  #components-layout-demo-top .logo {
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 24px 16px 0;
    float: left;
  }
`
const MainPage = () => {
  const [user, setUser] = useState('')
  const [selectedMenuItem, setSelectedMenuItem] = useState('1')
  const componentsSwtich = key => {
    switch (key) {
      case '1':
        return (<OptionPage/>)
      case '2':
        return <h1>item2</h1>
      case '3':
        return <h3>item3</h3>
      default:
        break
    }
  }
  const getuser = () => {
    setUser(sessionStorage.getItem('username'))
  }
  useEffect(() => {
    getuser()
  }, [])

  return (
    <StyledWrapper>
      <Layout className='layout'>
        <Header>
          <div className='logo' />
          <Menu
            theme='dark'
            selectedKeys={selectedMenuItem}
            mode='horizontal'
            onClick={e => setSelectedMenuItem(e.key)}
          >
            <Menu.Item key='1'>MainPage</Menu.Item>
            <Menu.Item key='2'>Profile</Menu.Item>
            <Menu.Item key='3'>nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>MainPage</Breadcrumb.Item>
            <Breadcrumb.Item>{user}</Breadcrumb.Item>
          </Breadcrumb>
          <div>
              {componentsSwtich(selectedMenuItem)}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </StyledWrapper>
  )
}
export default MainPage
