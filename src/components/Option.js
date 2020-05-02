import styled from 'styled-components'
import React from "react"
import Router from 'next/router'
import { useState, useEffect } from 'react'
import { Breadcrumb } from 'antd'
import { UserOutlined  , EditOutlined , FormOutlined } from '@ant-design/icons'
const StyledWrapper = styled.div`
  .site-layout-content {
    background: #fff;
    padding: 24px;
    min-height: 280px;
    display: flex;
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
  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    //height:620px;
    min-height: 1em;
    justify-content: space-between;
    background-color: white;
  }
`

function OptionPage () {
    const [user, setUser] = useState('')
    const getuser = () => {
        setUser(sessionStorage.getItem('username'))
      }
      useEffect(() => {
        getuser()
      }, [])
  return (
    <StyledWrapper>
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>MainPage</Breadcrumb.Item>
            <Breadcrumb.Item>{user}</Breadcrumb.Item>
          </Breadcrumb>
      <div className='site-layout-content'>
        <div className='box'>
          <EditOutlined 
            onClick={() => Router.push('/Form001')}
            style={{ fontSize: '100px', color: '#08c' }}
          />
          <h3>เพิ่มคำสั่งซื้อพัสดุแบบปกติ 001</h3>
          <h4>- เพิ่มคำสั่งซื้อรายการพัสดุไม่เกิน 2 รายการ</h4>
          <h4>- เพิ่มคำสั่งซื้อรายการพัสดุมากกว่า 2 รายการ</h4>
        </div>
        <div className='box'>
          <FormOutlined 
            onClick={() => Router.push('/')}
            style={{ fontSize: '100px', color: '#08c' }}
          />
          <h3>เพิ่มคำสั่งซื้อพัสดุแบบเร่งด่วน 002</h3>
          <h4>- เพิ่มคำสั่งซื้อรายการพัสดุไม่เกิน 2 รายการ</h4>
          <h4>- เพิ่มคำสั่งซื้อรายการพัสดุมากกว่า 2 รายการ</h4>
        </div>
        <div className='box'>
          <UserOutlined 
            onClick={() => Router.push('/profilepage')}
            style={{ fontSize: '100px', color: '#08c' }}
          />
          <h3>จัดการข้อมูลส่วนตัว</h3>
          <h4>- แก้ไขข้อมูลประวัติส่วนตัว</h4>
        </div>
      </div>
    </StyledWrapper>
  )
}
export default OptionPage
