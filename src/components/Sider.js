import react, { useState, useEffect } from 'react'

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

const SiderComponent = () => {
  return (
    <StyledWrapper>
      <Sider width={250} className='site-layout-background'>
        <Menu
          mode='inline'
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key='sub1'  icon={<EditOutlined />} title='แบบฟอร์ม'>
            <Menu.Item key='1'>เพิ่มคำสั่งซื้อพัสดุแบบปกติ 001</Menu.Item>
            <Menu.Item key='2'>เพิ่มคำสั่งซื้อพัสดุแบบเร่งด่วน 002</Menu.Item>
          </SubMenu>
          <SubMenu key='sub2' icon={<LaptopOutlined />} title='จัดการข้อมูลส่วนตัว'>
            <Menu.Item key='5'>แก้ไขข้อมูลประวัติส่วนตัว</Menu.Item>
          </SubMenu>
          <SubMenu key='sub3' icon={<NotificationOutlined />} title='ประวัติการทำรายการ'>
            <Menu.Item key='9'>ประวัติการทำรายการของท่าน</Menu.Item>

          </SubMenu>
        </Menu>
      </Sider>
    </StyledWrapper>
  )
}
export default SiderComponent
