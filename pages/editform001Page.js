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
const Pageeidtform001 = () => {
    const router = useRouter();
    const order_id = router.query.order_id;
    //console.log('order_id inpage editform001page=',router.query.order_id);


  return (
    <StyledWrapper>
      <title>Editform001</title>
      <Layout>
        <HeaderComponent />
        <Layout>
          <SiderComponent />
          <Layout style={{ padding: '0 24px 24px' }}>
            <EditForm001Content order_id={order_id}/>
          </Layout>
        </Layout>
        <FooterComponent />
      </Layout>
    </StyledWrapper>
  )
}
const WithTransfer =()=><WithAuth component={Pageeidtform001} />
export default WithTransfer