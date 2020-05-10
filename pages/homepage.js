import React, { useState, useEffect } from 'react'

import { Layout, Menu, Breadcrumb } from 'antd'
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined
} from '@ant-design/icons'
const { SubMenu } = Menu
const { Header, Content, Sider, Footer } = Layout


import HeaderComponent from '../src/components/Header'
import SiderComponent from '../src/components/Sider'
import ContentComponent from '../src/components/Content'
import FooterComponent from '../src/components/Footer'
import WithAuth from '../src/hoc/withAuth'

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
const HomePage = () => {
  return (
    <StyledWrapper>
      <title>HomePage</title>
      <Layout>
        <HeaderComponent />
        <Layout>
          <SiderComponent />
          <Layout style={{ padding: '0 24px 24px' }}>
            <ContentComponent />
          </Layout>
        </Layout>
        <FooterComponent />
      </Layout>
    </StyledWrapper>
  )
}
const WithTransfer =()=><WithAuth component={HomePage} />
export default WithTransfer
