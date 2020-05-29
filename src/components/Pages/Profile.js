import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { connect } from 'react-redux'
import { Layout, Menu, Breadcrumb, Divider, Descriptions, Radio } from 'antd'
const { SubMenu } = Menu
const { Header, Content, Sider, Footer } = Layout

import styled from 'styled-components'
import { ProfilesAction } from '../../redux/profile/actions'
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
    /* display: flex;
    align-content: center;
    justify-content: center; */
  }
  .position_changesize {
    text-align:right;
  }
`

const ProfileContent = (props) => {
  const { userinfo , loadProfile } = props;
  console.log(props)
  const [size, setSize] = useState('default')
  const [info, setinfo] = useState({})
  const getprofiledatabase = async () => {
    const users = await Axios.get(
      `http://localhost:3001/users/${sessionStorage.getItem('username')}`,
      {
        headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` }
      }
    )
    console.log('user', users)
    //setinfo(users.data)
    loadProfile(users.data)
    //dispatch({type: 'LOAD_PROFILE', payload: users.data})
  }
  const cssonChange = e => {
    //console.log('size checked', e.target.value)
    setSize(e.target.value)
  }
  useEffect(() => {
    getprofiledatabase()

  },[] )
  return (
    <StyledWrapper>
      {userinfo.map((data , index)=>{
              return (
                
                <div key={index}>
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
          <Divider
            orientation='left'
            style={{ color: '#333', fontWeight: 'normal' }}
          >
            ข้อมูลส่วนตัว 
          </Divider>
          <div>
          <div className="position_changesize">
                      <Radio.Group onChange={cssonChange} value={size}>
                      <Radio value='default'>L</Radio>
                      <Radio value='middle'>M</Radio>
                      <Radio value='small'>S</Radio>
                    </Radio.Group>
                    </div>
            <br />
            <br />
            <Descriptions
              bordered
              title=' '
              size={size}
              column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
            >
              <Descriptions.Item label='รหัสนักศึกษา'>
                {data.sid}
              </Descriptions.Item>
              <Descriptions.Item label='ชื่อ'>
                {data.firstname}
              </Descriptions.Item>
              <Descriptions.Item label='นามสกุล'>
                {data.lastname}
              </Descriptions.Item>
              <Descriptions.Item label='บัตรประจำตัวประชาชน'>
                {data.cid}
              </Descriptions.Item>
              <Descriptions.Item label='ที่อยู่'>
                99/99 หมู่ 4
                <br />
                อำเภอ กะทู้ ตำบล กะทู้
                <br />
                จังหวัด ภูเก็ต 83000
                <br />
              </Descriptions.Item>
            </Descriptions>
            <br />
            <br />
            
                
          </div>
          <Divider
            orientation='left'
            style={{ color: '#333', fontWeight: 'normal' }}
          ></Divider>
        </div>
      </Content>
      </div>
              )
            })}
    </StyledWrapper>
  )
}

export default connect(state => state.Profile , ProfilesAction)(ProfileContent)
