import styled from 'styled-components'
import React from 'react'
import Router from 'next/router'
import { useState, useEffect } from 'react'
import OptionPage from '../src/components/Option'
import History from '../src/components/History'
import WithAuth from "../src/hoc/withAuth"
import { Layout, Menu, Breadcrumb } from 'antd'
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
  
  const [token, setToken] = useState(null)

  const CheckToken = async () => {
    setToken(sessionStorage.getItem('token'))
  }

  useEffect(() => {
    CheckToken()
  }, [])


  
  const logout = () =>{
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('token')
    Router.push('/')
}  



const [selectedMenuItem, setSelectedMenuItem] = useState('1')
  const componentsSwtich = key => {
    switch (key) {
      case '1':
        return (<OptionPage/>)
      case '2':
        return (<History/>)
      default:
        break
    }
  }

  return (
    <StyledWrapper>
      <title>Mainpage</title>
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
            <Menu.Item key='2'>History</Menu.Item>
            <Menu.Item >
              <a onClick={logout}>Logout</a>
              </Menu.Item>
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


