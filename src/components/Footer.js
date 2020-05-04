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

const FooterComponent = () => {
  return (
    <StyledWrapper>
      <Footer style={{ textAlign: 'center' }}>
          Copyright © 2020 CoE ระบบจัดซื้อ Purchasing system
        </Footer>
    </StyledWrapper>
  )
}
export default FooterComponent
