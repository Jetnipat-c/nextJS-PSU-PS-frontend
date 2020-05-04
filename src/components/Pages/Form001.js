import React, { useState, useEffect } from 'react'
import * as axios from 'axios'
import Router from 'next/router'
import { useForm } from 'react-hook-form'

import {
  Layout,
  Menu,
  Breadcrumb,
  message,
  Row,
  Col,
  Divider,
  Descriptions,
  Radio,
  Checkbox
} from 'antd'
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
  .text-input {
    width: 250px;
    border-bottom: 2px solid #d9dee3;
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
  }

  .btn {
    width: 180px;
    height: 60px;
    cursor: pointer;
    background: transparent;
    border: 2px solid #d7d7d7;
    outline: none;
    transition: 1s ease-in-out;
  }

  svg {
    position: absolute;
    left: 0;
    top: 0;
    fill: none;
    stroke: #fff;
    stroke-dasharray: 150 480;
    stroke-dashoffset: 150;
    transition: 1s ease-in-out;
  }

  .btn:hover {
    transition: 1s ease-in-out;
    background: #5ab0ff;
  }

  .btn2:hover {
    transition: 1s ease-in-out;
    background: #ffd7b6;
  }

  .btn:hover svg {
    stroke-dashoffset: -480;
  }

  .btn span {
    color: black;
    font-size: 18px;
    font-weight: 100;
  }
  .center {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 60px;
  justify-content: space-around;
}
`

const Form001Content = () => {
  const [size, setSize] = useState('default')
  const [username, setUsername] = useState('')
  const getuser = () => {
    setUsername(sessionStorage.getItem('username'))
  }
  const { register, handleSubmit, errors } = useForm() // initialise the hook
  const onSubmit = data => {
    console.log('data', data)
    axios.post(`http://localhost:3001/form001/insert`, data).then(res => {
      console.log('res.data', res.data)
    })
    openMessage()
  }
  const key = 'updatable'
  const openMessage = () => {
    message.loading({ content: 'Save...', key })
    setTimeout(() => {
      message.success({ content: 'Saved!', key, duration: 2 })
      Router.push('/homepage')
    }, 1000)
  }
  const cssonChange = e => {
    console.log('size checked', e.target.value)
    setSize(e.target.value)
  }
  const checkbox = e => {
    console.log(`checked = ${e.target.checked}`)
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
            <Radio.Group onChange={cssonChange} value={size}>
              <Radio value='default'>default</Radio>
              <Radio value='middle'>middle</Radio>
              <Radio value='small'>small</Radio>
            </Radio.Group>
            <br />
            <br />
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
                </Descriptions.Item>
                <Descriptions.Item label='เอกสารที่ มอ. 696 /'>
                  <input
                    className='text-input'
                    name='loca'
                    ref={register}
                  ></input>
                </Descriptions.Item>
                <Descriptions.Item label='ลงวันที่'>
                  <input
                    className='text-input'
                    name='date'
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
                    name='date'
                    ref={register}
                  ></input>
                </Descriptions.Item>
                <Descriptions.Item label='ชื่อโครงการ (ถ้ามี)'>
                  <input
                    className='text-input'
                    name='date'
                    ref={register}
                  ></input>
                </Descriptions.Item>
                <Descriptions.Item label='วันที่ต้องใช้พัสดุ'>
                  <input
                    className='text-input'
                    name='date'
                    ref={register}
                  ></input>
                </Descriptions.Item>
              </Descriptions>

              <br></br>

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
                    className='text-input'
                    name='sid'
                    ref={register}
                  ></input>
                </Descriptions.Item>
                <Descriptions.Item
                  span={3}
                  label='2.2
                บันทึกการแต่งตั้งคณะกรรมการกำหนดคุณลักษณะเฉพาะ/ขอบเขตงานและราคากลาง  (จำนวนแผ่น)'
                >
                  <input
                    className='text-input'
                    name='sid'
                    ref={register}
                  ></input>
                </Descriptions.Item>
                <Descriptions.Item
                  span={3}
                  label='2.3 บันทึกรายงานผลการจัดทำคุณลักษณะเฉพาะ/ขอบเขตงานและราคากลาง  (จำนวนแผ่น)'
                >
                  <input
                    className='text-input'
                    name='sid'
                    ref={register}
                  ></input>
                </Descriptions.Item>
              </Descriptions>
              <br />
              <Descriptions bordered title='3. คณะกรรมการ' size={size}>
                <div span={3}>คณะกรรมการพิจารณาผล</div>
                <Descriptions.Item label='ประธานกรรมการ'>
                  <input
                    className='text-input'
                    name='sid'
                    ref={register}
                  ></input>
                </Descriptions.Item>
                <Descriptions.Item label='คณะกรรมการ'>
                  <input
                    className='text-input'
                    name='loca'
                    ref={register}
                  ></input>
                </Descriptions.Item>
                <Descriptions.Item label='คณะกรรมการ'>
                  <input
                    className='text-input'
                    name='date'
                    ref={register}
                  ></input>
                </Descriptions.Item>
                <div span={3}>คณะกรรมการตรวจรับพัสดุ</div>
                <Descriptions.Item label='ประธานกรรมการ'>
                  <input
                    className='text-input'
                    name='sid'
                    ref={register}
                  ></input>
                </Descriptions.Item>
                <Descriptions.Item label='คณะกรรมการ'>
                  <input
                    className='text-input'
                    name='loca'
                    ref={register}
                  ></input>
                </Descriptions.Item>
                <Descriptions.Item label='คณะกรรมการ'>
                  <input
                    className='text-input'
                    name='date'
                    ref={register}
                  ></input>
                </Descriptions.Item>
              </Descriptions>
              <br />
              <Descriptions bordered title='4. แหล่งเงิน' size={size}>
                <div span={3}>* ใส่ข้อมูลเฉพาะที่มี</div>
                <Descriptions.Item label='เงินอุดหนุนจากรัฐบาล ปี'>
                  <input
                    className='text-input'
                    name='sid'
                    ref={register}
                  ></input>
                </Descriptions.Item>
                <Descriptions.Item label='เงินรายได้ ปี'>
                  <input
                    className='text-input'
                    name='loca'
                    ref={register}
                  ></input>
                </Descriptions.Item>
                <Descriptions.Item label='เงินรายได้สะสม ปี'>
                  <input
                    className='text-input'
                    name='date'
                    ref={register}
                  ></input>
                </Descriptions.Item>

                <Descriptions.Item label='ทิศทาง'>
                  <input
                    className='text-input'
                    name='sid'
                    ref={register}
                  ></input>
                </Descriptions.Item>
                <Descriptions.Item span={2} label='นโยบาย'>
                  <input
                    className='text-input'
                    name='loca'
                    ref={register}
                  ></input>
                </Descriptions.Item>
                <Descriptions.Item label='ผลงาน'>
                  <input
                    className='text-input'
                    name='date'
                    ref={register}
                  ></input>
                </Descriptions.Item>
                <Descriptions.Item span={2} label='งาน'>
                  <input
                    className='text-input'
                    name='loca'
                    ref={register}
                  ></input>
                </Descriptions.Item>
                <Descriptions.Item label='หมวดรายจ่าย'>
                  <input
                    className='text-input'
                    name='date'
                    ref={register}
                  ></input>
                </Descriptions.Item>
                <Descriptions.Item span={2} label='หมวดย่อย'>
                  <input
                    className='text-input'
                    name='loca'
                    ref={register}
                  ></input>
                </Descriptions.Item>
                <Descriptions.Item span={3} label='ชื่อรายการ'>
                  <input
                    className='text-input'
                    name='loca'
                    ref={register}
                  ></input>
                </Descriptions.Item>
                <Descriptions.Item
                  span={3}
                  label='เงินอื่นๆโปรดระบุ (ตามที่แนบมาพร้อมนี้) '
                >
                  <input
                    className='text-input'
                    name='loca'
                    ref={register}
                  ></input>
                </Descriptions.Item>
              </Descriptions>

              <br />
            </form>
            <br />
            <br />
            <div className='center'>
              <button class='btn' type='submit'>
                <svg
                  width='180px'
                  height='60px'
                  viewBox='0 0 180 60'
                  class='border'
                >
                  <polyline
                    points='179,1 179,59 1,59 1,1 179,1'
                    class='bg-line'
                  />
                  <polyline
                    points='179,1 179,59 1,59 1,1 179,1'
                    class='hl-line'
                  />
                </svg>
                <span>Submit</span>
              </button>

              <button class='btn btn2' >
                <svg
                  width='180px'
                  height='60px'
                  viewBox='0 0 180 60'
                  class='border'
                >
                  <polyline
                    points='179,1 179,59 1,59 1,1 179,1'
                    class='bg-line'
                  />
                  <polyline
                    points='179,1 179,59 1,59 1,1 179,1'
                    class='hl-line'
                  />
                </svg>
                <span>Cancel</span>
              </button>
            </div>
          </div>
          <Divider
            orientation='left'
            style={{ color: '#333', fontWeight: 'normal' }}
          ></Divider>

          {/* ##################################################################################################################### */}

          <div>
            {/* <Row gutter={[0, 24]}>
              <Col span={18} push={10}>
                <Input style={{ maxWidth: 500  }} placeholder='' />
              </Col>
              <Col span={6} pull={18}>
                ลงวันที่
              </Col>
            </Row>

            <h2>1) รายละเอียด</h2>

            <Row gutter={[0, 24]}>
              <Col span={18} push={10}>
                <Input style={{ maxWidth: 500  }} placeholder='' />
              </Col>
              <Col span={6} pull={18}>
                ด้วยมหาวิทยาลัยการคอมพิวเตอร์
                มีความประสงค์ที่จะใช้พัสดุด้านล่างนี้เพื่อ
              </Col>
            </Row>

            <Row gutter={[0, 24]}>
              <Col span={18} push={10}>
                <Input style={{ maxWidth: 500  }} placeholder='' />
              </Col>
              <Col span={6} pull={18}>
                ชื่อโครงการ (ถ้ามี)
              </Col>
            </Row>

            <Row gutter={[0, 24]}>
              <Col span={18} push={10}>
                <Input style={{ maxWidth: 500  }} placeholder='' />
              </Col>
              <Col span={6} pull={18}>
                วันที่ต้องใช้พัสดุ
              </Col>
            </Row>

            <h2>2) รายละเอียดคุณลักษณะเฉพาะ/ขอบเขตงาน</h2>

            <Row gutter={[0, 24]}>
              <Col span={18} push={10}>
                <Input
                  style={{ maxWidth: 500 , marginRight: 10 }}
                  placeholder=''
                />
                แผ่น
              </Col>
              <Col span={6} pull={18}>
                2.1 รายละเอียดคุณลักษณะเฉพาะ/ขอบเขตงาน
                (ประทับตรามหาวิทยาลัยพร้อมผู้มีอำนาจลงนาม) จำนวน
              </Col>
            </Row>

            <Row gutter={[0, 24]}>
              <Col span={18} push={10}>
                <Input
                  style={{ maxWidth: 500 , marginRight: 10 }}
                  placeholder=''
                />
                แผ่น
              </Col>
              <Col span={6} pull={18}>
                2.2
                บันทึกการแต่งตั้งคณะกรรมการกำหนดคุณลักษณะเฉพาะ/ขอบเขตงานและราคากลาง
                จำนวน
              </Col>
            </Row>

            <Row gutter={[0, 24]}>
              <Col span={18} push={10}>
                <Input
                  style={{ maxWidth: 500 , marginRight: 10 }}
                  placeholder=''
                />
                แผ่น
              </Col>
              <Col span={6} pull={18}>
                2.3 บันทึกรายงานผลการจัดทำคุณลักษณะเฉพาะ/ขอบเขตงานและราคากลาง
                จำนวน
              </Col>
            </Row>

            <h2>3) คณะกรรมการ</h2>
            <h3>คณะกรรมการพิจารณาผล</h3>
            <Row gutter={[0, 24]}>
              <Col span={18} push={10}>
                <Input style={{ maxWidth: 500  }} placeholder='' />
              </Col>
              <Col span={6} pull={18}>
                ประธานกรรมการ
              </Col>
            </Row>

            <Row gutter={[0, 24]}>
              <Col span={18} push={10}>
                <Input style={{ maxWidth: 500  }} placeholder='' />
              </Col>
              <Col span={6} pull={18}>
                กรรมการ
              </Col>
            </Row>

            <Row gutter={[0, 24]}>
              <Col span={18} push={10}>
                <Input style={{ maxWidth: 500  }} placeholder='' />
              </Col>
              <Col span={6} pull={18}>
                กรรมการ
              </Col>
            </Row>

            <h3>คณะกรรมการตรวจรับพัสดุ</h3>
            <Row gutter={[0, 24]}>
              <Col span={18} push={10}>
                <Input style={{ maxWidth: 500  }} placeholder='' />
              </Col>
              <Col span={6} pull={18}>
                ประธานกรรมการ
              </Col>
            </Row>

            <Row gutter={[0, 24]}>
              <Col span={18} push={10}>
                <Input style={{ maxWidth: 500  }} placeholder='' />
              </Col>
              <Col span={6} pull={18}>
                กรรมการ
              </Col>
            </Row>

            <Row gutter={[0, 24]}>
              <Col span={18} push={10}>
                <Input style={{ maxWidth: 500  }} placeholder='' />
              </Col>
              <Col span={6} pull={18}>
                กรรมการ
              </Col>
            </Row>

            <h2>4) แหล่งเงิน</h2>

            <Row gutter={[0, 24]}>
              <Col span={18} push={10}>
                <Input style={{ maxWidth: 500  }} placeholder='' />
              </Col>
              <Col span={6} pull={18}>
                <Checkbox value='A'>เงินอุดหนุนจากรัฐบาล ปี</Checkbox>
              </Col>
            </Row>

            <Row gutter={[0, 24]}>
              <Col span={18} push={10}>
                <Input style={{ maxWidth: 500  }} placeholder='' />
              </Col>
              <Col span={6} pull={18}>
                <Checkbox value='B'>เงินรายได้ ปี</Checkbox>
              </Col>
            </Row>

            <Row gutter={[0, 24]}>
              <Col span={18} push={10}>
                <Input style={{ maxWidth: 500  }} placeholder='' />
              </Col>
              <Col span={6} pull={18}>
                <Checkbox value='C'>เงินรายได้สะสม ปี</Checkbox>
              </Col>
            </Row>

            <Row gutter={[0, 24]}>
              <Col span={18} push={10}>
                <Input style={{ maxWidth: 500  }} placeholder='' />
              </Col>
              <Col span={6} pull={18}>
                ทิศทาง
              </Col>
            </Row>

            <Row gutter={[0, 24]}>
              <Col span={18} push={10}>
                <Input style={{ maxWidth: 500  }} placeholder='' />
              </Col>
              <Col span={6} pull={18}>
                นโยบาย
              </Col>
            </Row>

            <Row gutter={[0, 24]}>
              <Col span={18} push={10}>
                <Input style={{ maxWidth: 500  }} placeholder='' />
              </Col>
              <Col span={6} pull={18}>
                ผลงาน
              </Col>
            </Row>

            <Row gutter={[0, 24]}>
              <Col span={18} push={10}>
                <Input style={{ maxWidth: 500  }} placeholder='' />
              </Col>
              <Col span={6} pull={18}>
                งาน
              </Col>
            </Row>

            <Row gutter={[0, 24]}>
              <Col span={18} push={10}>
                <Input style={{ maxWidth: 500  }} placeholder='' />
              </Col>
              <Col span={6} pull={18}>
                หมวดรายจ่าย
              </Col>
            </Row>
            <Row gutter={[0, 24]}>
              <Col span={18} push={10}>
                <Input style={{ maxWidth: 500  }} placeholder='' />
              </Col>
              <Col span={6} pull={18}>
                หมวดย่อย
              </Col>
            </Row>

            <Row gutter={[0, 24]}>
              <Col span={18} push={10}>
                <Input style={{ maxWidth: 500  }} placeholder='' />
              </Col>
              <Col span={6} pull={18}>
                ชื่อรายการ
              </Col>
            </Row>

            <Row gutter={[0, 24]}>
              <Col span={18} push={10}>
                <Input style={{ maxWidth: 500  , marginRight: 10 }} placeholder='' />
                ตามที่แนบมาพร้อมนี้
              </Col>
              <Col span={6} pull={18}>
                <Checkbox value='A'>เงินอื่นๆโปรดระบุ</Checkbox>
              </Col>
            </Row>

            <Row gutter={[0, 24]}>
              <Col span={18} push={10}>
                <Input style={{ maxWidth: 500  , marginRight: 10 }} placeholder='' />
                ผู้ขอ
              </Col>
              <Col span={6} pull={18}>
                (ลงชื่อ)
              </Col>
            </Row>

            <Row gutter={[0, 24]}>
              <Col span={18} push={10}>
                <Input style={{ maxWidth: 500  , marginRight: 10 }} placeholder='' />
                
              </Col>
              <Col span={6} pull={18}>
              </Col>
            </Row>

            <Row gutter={[0, 24]}>
              <Col span={18} push={10}>
                <Input style={{ maxWidth: 500  , marginRight: 10 }} placeholder='' />
              </Col>
              <Col span={6} pull={18}>
                เบอร์ติดต่อ
              </Col>
            </Row> */}

            {/* <Button onClick={Singin} type="primary">บันทึก</Button> */}
          </div>
          {/* <Pagination
            style={{ textAlign: 'center', marginTop: 10 }}
            defaultCurrent={1}
            total={50}
          /> */}
        </div>
      </Content>
    </StyledWrapper>
  )
}

export default Form001Content
