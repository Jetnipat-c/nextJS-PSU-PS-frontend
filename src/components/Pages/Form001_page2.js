import React, { useState, useEffect } from 'react'
import * as axios from 'axios'
import Router from 'next/router'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import { Form001Action } from '../../redux/form001/action'
import ScrollUpButton from "react-scroll-up-button";
import {
  Layout,
  Menu,
  Breadcrumb,
  message,
  Divider,
  Descriptions,
  Radio
} from 'antd'
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
  .text-input {
    width: 100%;
    border-bottom: 1px solid #d9dee3;
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
  }

  .center {
    display: flex;
    justify-content: center;
    align-content: center;
    width: 100%;
    justify-content: space-around;
  }
  .example_c {
    text-align: center;
    color: #494949 !important;
    text-transform: uppercase;
    text-decoration: none;
    background: #ffffff;
    padding: 20px;
    border: 4px solid #494949 !important;
    display: inline-block;
    transition: all 0.4s ease 0s;
  }
  .example_c:hover {
    color: #ffffff !important;
    background: #f6b93b;
    border-color: #f6b93b !important;
    transition: all 0.4s ease 0s;
  }

  .example_cancel {
    text-align: center;
    color: #494949 !important;
    text-transform: uppercase;
    text-decoration: none;
    background: #ffffff;
    padding: 20px;
    border: 4px solid #494949 !important;
    display: inline-block;
    transition: all 0.4s ease 0s;
  }
  .example_cancel:hover {
    color: #ffffff !important;
    background: #f1948a;
    border-color: #f1948a !important;
    transition: all 0.4s ease 0s;
  }
  .position_changesize {
    text-align:right;
  }
`

const Form001_page2Content = (props) => {
  const { info_form001 , saveForm001 } = props;
  console.log(props)
  const [size, setSize] = useState('default')

  const [username, setUsername] = useState('')
  const getuser = () => {
    setUsername(sessionStorage.getItem('username'))
  }

  const { register, handleSubmit, errors } = useForm() // initialise the hook

  const onSubmit = data => {
    //console.log('data', data)
    saveForm001(data)
    console.log('info_form001 0 :',info_form001)
    axios.post(
      `http://localhost:3001/form001/insert`
      , data)
    .then(res => {
      //console.log('res.data', res.data)
      openMessage()
    })
    .catch(error=> {
      //console.log('pls intert data')
      openMessageError()
    })
    
  }
  const key = 'updatable'
  const openMessage = () => {
    message.loading({ content: 'Save...', key })
    setTimeout(() => {
      message.success({ content: 'Saved!', key, duration: 2 })
      Router.push('/homepage')
    }, 1000)
  }

  const openMessageError = () => {
    message.loading({ content: 'Please complete all information.', key })
    setTimeout(() => {
      message.success({ content: 'Saved!', key, duration: 2 })
    }, 1000)
  }
  const cssonChange = e => {
    console.log('size checked', e.target.value)
    setSize(e.target.value)
  }

  useEffect(() => {
    getuser()
  }, [])
  return (
    <StyledWrapper>
    <ScrollUpButton
          EasingType="easeInQuad"
          StopPosition={11}
          ShowAtPosition={50}
          AnimationDuration={50}
        />
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>แบบฟอร์ม</Breadcrumb.Item>
        <Breadcrumb.Item>เพิ่มคำสั่งซื้อพัสดุแบบปกติ 001</Breadcrumb.Item>
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
            แบบขอจัดหาพัสดุของสำนักงานอธิการบดีวิทยาเขตภูเก็ต
            กรณีวงเงินครั้งหนึ่งไม่เกิน 5 แสนบาท ที่มิใช่ก่อสร้าง
          </Divider>
          <div className="position_changesize">
            <Radio.Group onChange={cssonChange} value={size}>
              <Radio value='default'>L</Radio>
              <Radio value='middle'>M</Radio>
              <Radio value='small'>S</Radio>
            </Radio.Group>
        </div>
          <Divider
            orientation='left'
            style={{ color: '#333', fontWeight: 'normal' }}
          ></Divider>
        </div>
      </Content>
      
    </StyledWrapper>
  )
}

export default connect(state => state.Form001 ,Form001Action )(Form001_page2Content)
