import react, { useState, useEffect } from 'react'
import Router from 'next/router'

import { Layout, Menu, Breadcrumb } from 'antd'
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined
} from '@ant-design/icons'
const { SubMenu } = Menu
const { Header, Content, Sider, Footer } = Layout

import styled from 'styled-components'
const StyledWrapper = styled.div`
  #components-layout-demo-top-side-2 .logo {
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 28px 16px 0;
    float: left;
  }

  .site-layout-background {
    background: #fff;
  }
`

const HeaderComponent = () => {
    const logout = () =>{
        sessionStorage.removeItem('username')
        sessionStorage.removeItem('token')
        Router.push('/')
    }
  return (
    <StyledWrapper>
      <Header className='header'>
        <div className='logo' />
        <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']}>
          <Menu.Item key='1'>nav 1</Menu.Item>
          <Menu.Item key='2'>nav 2</Menu.Item>
          <Menu.Item key='3'>
          <a onClick={logout}>SignOut</a>
              </Menu.Item>
        </Menu>
      </Header>
    </StyledWrapper>
  )
}
export default HeaderComponent
