import styled from 'styled-components'
import React from 'react'
import Router from 'next/router'
import { useState, useEffect } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
import OptionPage from '../src/components/Option'
import ProfilePage from '../src/components/Profile'
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
  const logout = () =>{
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('token')
    Router.push('/')
}
  const componentsSwtich = key => {
    switch (key) {
      case '1':
        return (<OptionPage/>)
      case '2':
        return (<ProfilePage/>)
      case '3':
        return (logout())
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
            <Menu.Item key='3'>Logout</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
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
