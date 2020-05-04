import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Layout, Menu, Breadcrumb, message, Row, Col } from 'antd'
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
  .titlepage {
    text-align: center;
    min-maxwidth: 500 px;
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 24px;
  }
`

const HistoryContent = () => {
  const [history, setHistoty] = useState([])
  const getForm001Bysid = async () => {
    var found = await axios.get(
      `http://localhost:3001/form001/${sessionStorage.getItem('username')}`
    )
    console.log('found = ', found.data)
    setHistoty(JSON.parse(JSON.stringify(found.data)))
  }
  useEffect(() => {
    getForm001Bysid()
  }, [])
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
            {
                history.map((data , index)=>{  
                    return(
                        <div key={index} >
                        วันที่ : {data.date}
                        </div>
                    )
                })
            }
        </div>
      </Content>
    </StyledWrapper>
  )
}

export default HistoryContent
