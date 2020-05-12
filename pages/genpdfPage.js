import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
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
import Form001Content from '../src/components/Pages/Form001'
import ProfileContent from '../src/components/Pages/Profile'
import HistoryContent from '../src/components/Pages/History'
import EditForm001Content from '../src/components/Pages/EditForm001'
import Viewform001Component from '../src/components/Pages/Viewform001'
import Example from '../src/components/Pages/Genpdf'
import styled from 'styled-components'

const StyledWrapper = styled.div`

  .site-layout-background {
    background: #fff;
  }
`
const GenpdfPage = () => {
    const router = useRouter();
    const order_id = router.query.order_id;
    console.log('order_id before send=',router.query.order_id);


  return (
    <StyledWrapper>
      <title>GenpdfPage</title>
            <Example order_id={order_id}/>
    </StyledWrapper>
  )
}
const WithTransfer =()=><WithAuth component={GenpdfPage} />
export default WithTransfer
