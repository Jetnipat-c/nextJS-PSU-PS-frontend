import styled from 'styled-components'
import { useState, useEffect } from 'react'
import * as axios from 'axios'
import { useForm } from 'react-hook-form'
import Router from 'next/router'
import {
  Layout,
  Menu,
  Icon,
  Breadcrumb,
  Space,
  Card,
} from 'antd'
import { SmileOutlined } from '@ant-design/icons';
import Form001 from '../src/components/Form001'

const { Header, Content, Footer } = Layout
const StyledWrapper = styled.div`
  .site-layout-content {
    background: #fff;
    padding: 24px;
    min-height: 280px;
    display:flex;
    flex-direction: row;
    justify-content: space-around;
  }
  #components-layout-demo-top .logo {
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 24px 16px 0;
    float: left;
  }
  .box{
    display:flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    //height:620px;
    min-height: 1em;
    justify-content: space-between;
    background-color:white;
}
`

function MainPage () {
  return (
    <StyledWrapper>
      <Layout className='layout'>
        <Header>
          <div className='logo' />
          <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']}>
            <Menu.Item key='1'>nav 1</Menu.Item>
            <Menu.Item key='2'>nav 2</Menu.Item>
            <Menu.Item key='3'>nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className='site-layout-content'>
          <div className="box" >
          <SmileOutlined  onClick={()=> Router.push('/Form001')} style={{ fontSize: '100px', color: '#08c' }}/>
          <h3>เพิ่มคำสั่งซื้อพัสดุแบบปกติ  001</h3>
                    <h4>- เพิ่มคำสั่งซื้อรายการพัสดุไม่เกิน 2 รายการ</h4>
                    <h4>- เพิ่มคำสั่งซื้อรายการพัสดุมากกว่า 2 รายการ</h4>
          </div>
          <div className="box" >
          <SmileOutlined  onClick={()=> Router.push('/')} style={{ fontSize: '100px', color: '#08c' }}/>
          <h3>เพิ่มคำสั่งซื้อพัสดุแบบเร่งด่วน  002</h3>
                    <h4>- เพิ่มคำสั่งซื้อรายการพัสดุไม่เกิน 2 รายการ</h4>
                    <h4>- เพิ่มคำสั่งซื้อรายการพัสดุมากกว่า 2 รายการ</h4>
          </div>
          <div className="box" >
          <SmileOutlined  onClick={()=> Router.push('/')} style={{ fontSize: '100px', color: '#08c' }}/>
          <h3>จัดการข้อมูลส่วนตัว</h3>
                    <h4>- แก้ไขข้อมูลประวัติส่วนตัว</h4>
          </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </StyledWrapper>
  )
}
export default MainPage
