import react, { useState, useEffect } from 'react'

import { Layout, Menu, Breadcrumb } from 'antd'
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined
} from '@ant-design/icons'
const { SubMenu } = Menu
const { Header, Content, Sider, Footer } = Layout

import styled from 'styled-components'
import HeaderComponent from '../src/components/Header'
import SiderComponent from '../src/components/Sider'
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
function HomePage () {
  return (
    <StyledWrapper>
      <title>HomePage</title>
      <Layout>
          <HeaderComponent/>
        <Layout>
        <SiderComponent/>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className='site-layout-background'
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280
              }}
            >
              Content
            </Content>
          </Layout>
        </Layout>
        <Footer style={{ textAlign: 'center' }}>
        Copyright © 2020 CoE ระบบจัดซื้อ Purchasing system
        </Footer>
      </Layout>
    </StyledWrapper>
  )
}

export default HomePage
