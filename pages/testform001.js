import styled from 'styled-components'
import { useState, useEffect } from 'react'
import * as axios from 'axios'
import { useForm } from 'react-hook-form'
import OptionPage from '../src/components/Option'
import ProfilePage from '../src/components/Profile'
import Router from 'next/router'
import {
  Layout,
  Menu,
  Breadcrumb,
  Form,
  Input,
  Button,
  Radio,
  Row,
  Col,
  Checkbox,
  Pagination
} from 'antd'
const StyledWrapper = styled.div`
  .site-layout-content {
    // display: flex;
    // justify-content: flex-end;
    background: #fff;
    padding: 24px;
    min-height: 280px;
  }
  #components-layout-demo-top .logo {
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 24px 16px 0;
    float: left;
  }
  .topic {
    text-align: left;
    #text {
      padding: 10px 10px 0 0;
    }
  }
  .titlepage {
    text-align: center;
    min-maxwidth: 500 px;
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 24px;
  }
`
const { Header, Content, Footer } = Layout

const TestForm001Page = () => {
  const [user, setUser] = useState('')
  const [selectedMenuItem, setSelectedMenuItem] = useState('0')
  const logout = () => {
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('token')
    Router.push('/')
  }
  const componentsSwtich = key => {
    switch (key) {
      case '1':
        return <OptionPage />
      case '2':
        return <ProfilePage />
      case '3':
        return logout()
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
      <div className='site-layout-content'>
      <Layout className='layout'>
        <Header>
          <div className='logo' />
          <Menu
            theme='dark'
            selectedKeys={selectedMenuItem}
            mode='horizontal'
            defaultSelectedKeys={['2']}
            onClick={e => setSelectedMenuItem(e.key)}
          >
            <Menu.Item key='1'>MainPage</Menu.Item>
            <Menu.Item key='2'>Profile</Menu.Item>
            <Menu.Item key='3'>Logout</Menu.Item>
          </Menu>
        </Header>
        

        <Content style={{ padding: '0 50px' }}>
          <div>{componentsSwtich(selectedMenuItem)}</div>
        </Content>


        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
      </div>
    </StyledWrapper>
  )
}
export default TestForm001Page
