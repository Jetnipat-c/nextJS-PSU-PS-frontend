import React, { useState, useEffect } from 'react'

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
  .text-content {
    margin-left: 15px;
  }
`

const ContentComponent = () => {
  return (
    <StyledWrapper>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Announce</Breadcrumb.Item>
      </Breadcrumb>
      <Content
        className='site-layout-background'
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280
        }}
      >
        <h1>Announce</h1>
        {/* <div>
          <h2>Patch Frontend</h2>
          <div className='text-content'>
            <div>- 6:52 PM 5/4/2020 ออกแบบหน้าเว็ปใหม่</div>
          </div>
        </div>
        <h2>Patch Backend</h2>
        <div className='text-content'>
          <div>- 2:23 AM 5/5/2020 เพิ่ม Model ใหม่เข้าไป</div>
        </div>
        <h2>Patch Function</h2>
        <div className='text-content'>
          <div>- 6:52 PM 5/4/2020 ปรับปรุงฟังก์ชันจากเวอร์ชั่นเก่า</div>
          <div>- 2:23 AM 5/4/2020 แก้ไข้ฟังก์ชันดึงข้อมูลส่วนตัว</div>
        </div>
        <h2>Problem list</h2>
        <div className='text-content'>
          <div>- 2:23 AM 5/4/2020 บันทึกค่า Null ยังไม่ได้ และ กด Purchasing system แล้วเป็นการบันทึกข้อมูล ***ปัญหาที่ css .button</div>
        </div> */}
      </Content>
    </StyledWrapper>
  )
}
export default ContentComponent
