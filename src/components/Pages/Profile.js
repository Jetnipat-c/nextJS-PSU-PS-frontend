import React, { useState, useEffect } from 'react'
import Axios from 'axios'

import { Layout, Menu, Breadcrumb, message, Row, Col, } from 'antd'
import { UserOutlined, LaptopOutlined, NotificationOutlined} from '@ant-design/icons'
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
  .titlepage {
    text-align: center;
    min-maxwidth: 500 px;
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 24px;
  }
`

const ProfileContent = () => {
    const [profile, setProfile] = useState({})
    const getprofiledatabase = async () => {
      const users = await Axios.get(
        `http://localhost:3001/users/${sessionStorage.getItem('username')}`,
        {
          headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` }
        }
      )
      console.log('user', users)
      setProfile(users.data)
  
      
    }
  useEffect(()=>{
    getprofiledatabase()
  },[])
  return (
    <StyledWrapper>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>แก้ไขข้อมูลประวัติส่วนตัว</Breadcrumb.Item>
      </Breadcrumb>
      <Content
        className='site-layout-background'
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280
        }}
      >
        <div className='site-layout-content'>
        <div>รหัสนักศึกษา : {profile.sid}</div>
        <div>ชื่อ : {profile.firstname}</div>
        <div>นามสกุล : {profile.lastname}</div>
        <div>บัตรประจำตัวประชาชน : {profile.cid}</div>
          </div>
      </Content>
    </StyledWrapper>
  )
}

export default ProfileContent
