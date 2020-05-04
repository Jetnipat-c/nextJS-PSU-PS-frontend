import React, { useState, useEffect } from 'react'
import * as axios from 'axios'
import Router from 'next/router'
import { useForm } from 'react-hook-form'

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

const Form001Content = () => {
  const [username, setUsername] = useState('')
  const getuser = () => {
    setUsername(sessionStorage.getItem('username'))
  }
  const { register, handleSubmit, errors } = useForm() // initialise the hook
  const onSubmit  =  data => {
    console.log('data', data)
      axios.post(`http://localhost:3001/form001/insert`, data).then(res => {
      console.log('res.data', res.data)
    })
    openMessage()    
  }
  const key = 'updatable';
  const openMessage = () => {
    message.loading({ content: 'Save...', key });
    setTimeout(() => {
      message.success({ content: 'Saved!', key, duration: 2 });
      Router.push('/homepage')
    }, 1000);
  }
  useEffect(()=>{
      getuser()
  },[])
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
            <div className='titlepage'>
              แบบขอจัดหาพัสดุของสำนักงานอธิการบดีวิทยาเขตภูเก็ต
              กรณีวงเงินครั้งหนึ่งไม่เกิน 5 แสนบาท ที่มิใช่ก่อสร้าง
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Row gutter={[0, 24]}>
                <Col span={18} push={10}>
                  {/* <Input name="firstname" ref={register} style={{ maxWidth: 500 }} placeholder=''  /> */}
                  <input
                    name='sid'
                    value={username}
                    disabled={true}
                    ref={register}
                  ></input>
                </Col>
                <Col span={6} pull={18}>
                  เอกสารของ
                </Col>
              </Row>

              <Row gutter={[0, 24]}>
                <Col span={18} push={10}>
                  {/* <Input name="firstname" ref={register} style={{ maxWidth: 500 }} placeholder=''  /> */}
                  <input name='loca' ref={register}></input>
                </Col>
                <Col span={6} pull={18}>
                  เอกสารที่ มอ. 696 /
                </Col>
              </Row>
              <Row gutter={[0, 24]}>
                <Col span={18} push={10}>
                  {/* <Input  name="lastname" ref={register} style={{ maxWidth: 500  }} placeholder='' /> */}
                  <input name='date' ref={register}></input>
                </Col>
                <Col span={6} pull={18}>
                  ลงวันที่
                </Col>
              </Row>
              <input type='submit'/>
              {/* <Button type='submit'  onClick={openMessage} > Open the message box</Button> */}
             
            </form>
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
