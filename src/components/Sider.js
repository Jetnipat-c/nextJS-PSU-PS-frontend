import React, { useState, useEffect } from 'react'
import Router from 'next/router'

import { Layout, Menu, Breadcrumb } from 'antd'
import { UserOutlined, LaptopOutlined, NotificationOutlined ,EditOutlined } from '@ant-design/icons';
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

const SiderComponent = props => {
  const gotoPageForm001 = (e) =>{
      Router.push('/Form001page')
  }
  const gotoPageProfile = (e) =>{
    Router.push('/formprofilepage')
}
const gotoPageHistory = (e) =>{
  Router.push('/formhistorypage')
}

  return (
    <StyledWrapper>
      <Sider width={250} className='site-layout-background'  breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }} >
        <Menu
          mode='inline' 
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key='sub1'  icon={<EditOutlined />} title='แบบฟอร์ม'>
            <Menu.Item key='1'>
            <a onClick={gotoPageForm001}>เพิ่มคำสั่งซื้อพัสดุแบบปกติ 001</a> 
              </Menu.Item>
            <Menu.Item key='2'>เพิ่มคำสั่งซื้อพัสดุแบบเร่งด่วน 002</Menu.Item>
          </SubMenu>
          <SubMenu key='sub2' icon={<LaptopOutlined />} title='จัดการข้อมูลส่วนตัว'>
            <Menu.Item key='5'>
            <a onClick={gotoPageProfile}>แก้ไขข้อมูลประวัติส่วนตัว</a>  
              </Menu.Item>
          </SubMenu>
          <SubMenu key='sub3' icon={<NotificationOutlined />} title='ประวัติการทำรายการ'>
            <Menu.Item key='9'>
            <a onClick={gotoPageHistory}>ประวัติการทำรายการของท่าน</a>
              </Menu.Item>

          </SubMenu>
        </Menu>
      </Sider>
    </StyledWrapper>
  )
}
export default SiderComponent
