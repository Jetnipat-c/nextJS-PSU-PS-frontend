import React, { useState, useEffect } from 'react'
import * as axios from 'axios'
import Router from 'next/router'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import { Form001Action } from '../../redux/form001/action'
import {
  Layout,
  Menu,
  Breadcrumb,
  message,
  Divider,
  Descriptions,
  Radio,
  BackTop
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
const style = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: '#1088e9',
  color: '#fff',
  textAlign: 'center',
  fontSize: 14,
};

const Form001Content = (props) => {
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
      Router.push('/form001Page_2')
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
            {/* ---------------------------------------------------- Ch 1 ---------------------------------------------------- */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <Descriptions bordered title='1. รายละเอียด' size={size}>
                <Descriptions.Item label='เอกสารของ'>
                  <input
                    className='text-input'
                    name='sid'
                    value={username}
                    disabled={true}
                    ref={register}
                  ></input>
                  <input
                    className='text-input'
                    name='o_typedoc'
                    value='1'
                    type="hidden"
                    ref={register}
                  ></input>
                  <input
                    className='text-input'
                    name='s_id'
                    value='0'
                    type="hidden"
                    ref={register}
                  ></input>
                </Descriptions.Item>
                <Descriptions.Item label='เอกสารที่ มอ.696/'>
                  <input
                    className='text-input'
                    name='o_location'
                    ref={register}
                  ></input>
                </Descriptions.Item>
                <Descriptions.Item label='ลงวันที่'>
                  <input
                    className='text-input'
                    name='o_date'
                    ref={register}
                  ></input>
                </Descriptions.Item>
                <Descriptions.Item
                  span={3}
                  label='ด้วยมหาวิทยาลัยการคอมพิวเตอร์
                มีความประสงค์ที่จะใช้พัสดุด้านล่างนี้เพื่อ'
                >
                  <input
                    className='text-input'
                    name='o_purpose'
                    ref={register}
                  ></input>
                </Descriptions.Item>
                <Descriptions.Item label='ชื่อโครงการ (ถ้ามี)'>
                  <input
                    className='text-input'
                    name='o_projectname'
                    ref={register}
                  ></input>
                </Descriptions.Item>
                <Descriptions.Item label='วันที่ต้องใช้พัสดุ'>
                  <input
                    className='text-input'
                    name='o_require'
                    ref={register}
                  ></input>
                </Descriptions.Item>
              </Descriptions>
              {/* -------------------------------------------------------------------------------------------------------------- */}
              <br></br>
              {/* ---------------------------------------------------- Ch 2 ---------------------------------------------------- */}
              <Descriptions
                bordered
                title='2. รายละเอียดคุณลักษณะเฉพาะ/ขอบเขตงาน'
                size={size}
              >
                <Descriptions.Item
                  span={3}
                  label='2.1 รายละเอียดคุณลักษณะเฉพาะ/ขอบเขตงาน
                (ประทับตรามหาวิทยาลัยพร้อมผู้มีอำนาจลงนาม)  (จำนวนแผ่น)'
                >
                  <input
                    type='number'
                    className='text-input'
                    name='o_specific'
                    defaultValue='0'
                    ref={register}
                  ></input>
                </Descriptions.Item>
                <Descriptions.Item
                  span={3}
                  label='2.2
                บันทึกการแต่งตั้งคณะกรรมการกำหนดคุณลักษณะเฉพาะ/ขอบเขตงานและราคากลาง  (จำนวนแผ่น)'
                >
                  <input
                    type='number'
                    className='text-input'
                    name='o_appointment'
                    defaultValue='0'
                    ref={register}
                  ></input>
                </Descriptions.Item>
                <Descriptions.Item
                  span={3}
                  label='2.3 บันทึกรายงานผลการจัดทำคุณลักษณะเฉพาะ/ขอบเขตงานและราคากลาง  (จำนวนแผ่น)'
                >
                  <input
                    type='number'
                    className='text-input'
                    name='o_results'
                    defaultValue='0'
                    ref={register}
                  ></input>
                </Descriptions.Item>
              </Descriptions>
              {/* -------------------------------------------------------------------------------------------------------------- */}
              <br />
              {/* ---------------------------------------------------- Ch 3 ---------------------------------------------------- */}
              <Descriptions bordered title='3. คณะกรรมการ' size={size}>
                <div span={3}>คณะกรรมการพิจารณาผล</div>
                <Descriptions.Item label='ประธานกรรมการ'>
                  <input
                    className='text-input'
                    name='o_committee1'
                    ref={register}
                  ></input>
                </Descriptions.Item>
                <Descriptions.Item label='คณะกรรมการ'>
                  <input
                    className='text-input'
                    name='o_committee2'
                    ref={register}
                  ></input>
                </Descriptions.Item>
                <Descriptions.Item label='คณะกรรมการ'>
                  <input
                    className='text-input'
                    name='o_committee3'
                    ref={register}
                  ></input>
                </Descriptions.Item>
                <div span={3}>คณะกรรมการตรวจรับพัสดุ</div>
                <Descriptions.Item label='ประธานกรรมการ'>
                  <input
                    className='text-input'
                    name='o_committee4'
                    ref={register}
                  ></input>
                </Descriptions.Item>
                <Descriptions.Item label='คณะกรรมการ'>
                  <input
                    className='text-input'
                    name='o_committee5'
                    ref={register}
                  ></input>
                </Descriptions.Item>
                <Descriptions.Item label='คณะกรรมการ'>
                  <input
                    className='text-input'
                    name='o_committee6'
                    ref={register}
                  ></input>
                </Descriptions.Item>
              </Descriptions>
              {/* -------------------------------------------------------------------------------------------------------------- */}
              <br />
              {/* ---------------------------------------------------- Ch 4 ---------------------------------------------------- */}
              <Descriptions bordered title='4. แหล่งเงิน' size={size}>
                <div span={3}>* ข้อมูลที่มีให้ใส่ 0</div>
                <Descriptions.Item label='เงินอุดหนุนจากรัฐบาล ปี'>
                  <input
                    type='number'
                    className='text-input'
                    name='o_gvm_sub'
                    defaultValue='0'
                    ref={register}
                  ></input>
                </Descriptions.Item>
                <Descriptions.Item label='เงินรายได้ ปี'>
                  <input
                    type='number'
                    className='text-input'
                    name='o_income'
                    defaultValue='0'
                    ref={register}
                  ></input>
                </Descriptions.Item>
                <Descriptions.Item label='เงินรายได้สะสม ปี'>
                  <input
                    type='number'
                    className='text-input'
                    name='o_aml_income'
                    defaultValue='0'
                    ref={register}
                  ></input>
                </Descriptions.Item>

                <Descriptions.Item label='ทิศทาง'>
                  <input
                    className='text-input'
                    name='o_direction'
                    ref={register}
                  ></input>
                </Descriptions.Item>
                <Descriptions.Item span={2} label='นโยบาย'>
                  <input
                    className='text-input'
                    name='o_policy'
                    ref={register}
                  ></input>
                </Descriptions.Item>
                <Descriptions.Item label='ผลงาน'>
                  <input
                    className='text-input'
                    name='o_works'
                    ref={register}
                  ></input>
                </Descriptions.Item>
                <Descriptions.Item span={2} label='งาน'>
                  <input
                    className='text-input'
                    name='o_task'
                    ref={register}
                  ></input>
                </Descriptions.Item>
                <Descriptions.Item label='หมวดรายจ่าย'>
                  <input
                    className='text-input'
                    name='o_expense_cg'
                    ref={register}
                  ></input>
                </Descriptions.Item>
                <Descriptions.Item span={2} label='หมวดย่อย'>
                  <input
                    className='text-input'
                    name='o_sub_cg'
                    ref={register}
                  ></input>
                </Descriptions.Item>
                <Descriptions.Item span={3} label='ชื่อรายการ'>
                  <input
                    className='text-input'
                    name='o_list_n'
                    ref={register}
                  ></input>
                </Descriptions.Item>
                <Descriptions.Item
                  span={3}
                  label='เงินอื่นๆโปรดระบุ (ตามที่แนบมาพร้อมนี้) '
                >
                  <input
                    type='number'
                    className='text-input'
                    name='o_other_m'
                    defaultValue='0'
                    ref={register}
                  ></input>
                </Descriptions.Item>
              </Descriptions>
              <br />
              {/* -------------------------------------------------------------------------------------------------------------- */}
              {/* ---------------------------------------------------- button ---------------------------------------------------- */}
              <div className='center'>
                <button className='example_c' type='submit'>
                  Submit
                </button>
                <button className='example_cancel'>Cancel</button>
              </div>
            </form>
            {/* -------------------------------------------------------------------------------------------------------------- */}
            <br />
            <br />
          </div>
          <Divider
            orientation='left'
            style={{ color: '#333', fontWeight: 'normal' }}
          ></Divider>
        </div>
      </Content>
      <BackTop>
        <div style={style}>UP</div>
      </BackTop>
    </StyledWrapper>
  )
}

export default connect(state => state.Form001 ,Form001Action )(Form001Content)
