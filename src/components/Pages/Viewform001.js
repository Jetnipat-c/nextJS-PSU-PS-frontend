import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Layout, Menu, Breadcrumb, Divider, Descriptions, Radio, BackTop  } from 'antd'
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
    background-color: white;
    border-bottom-style:hidden ;
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

const Viewform001Component = props => {
  
  const [order_id, setOrder_id] = useState(props.order_id)
  //console.log('order_id  = ', order_id)

  const [history, setHistoty] = useState([])
  const getform001byorder_id = async () => {
    const found = await axios.get(
      `http://localhost:3001/form001/findbyorder/${order_id}`
    )
    console.log('found = ', found.data)
    setHistoty(JSON.parse(JSON.stringify(found.data)))
    console.log('history', history)
  }

  useEffect(() => {
    getform001byorder_id()
  }, [])
  const [size, setSize] = useState('default')
  const cssonChange = e => {
    console.log('size checked', e.target.value)
    setSize(e.target.value)
  }

  return (
    <StyledWrapper>
      {history.map((data, index) => {
        return (
          <div key={index}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>แบบฟอร์ม</Breadcrumb.Item>
              <Breadcrumb.Item>ประวัติคำสั่งซื้อ 001</Breadcrumb.Item>
              <Breadcrumb.Item>รายละเอียดคำสั่งซื้อ</Breadcrumb.Item>
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
                <div>
                  <form>
                    <Divider
                      orientation='left'
                      style={{ color: '#333', fontWeight: 'normal' }}
                    >
                      <h1>คำสั่งซื้อพัสดุ ใบรายการที่ {order_id}</h1>
                      แบบ {data.typeform.o_typedoc_name}
                    </Divider>
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
                    <Descriptions bordered title='1. รายละเอียด' size={size}>
                      <Descriptions.Item label='เอกสารของ'>
                        <input
                          className='text-input'
                          name='sid'
                          value={data.sid}
                          disabled={true}
                        ></input>
                      </Descriptions.Item>
                      <Descriptions.Item label='เอกสารที่ มอ. 696 /'>
                        <input
                          className='text-input'
                          name='o_location'
                          value={data.o_location}
                          disabled={true}
                        ></input>
                      </Descriptions.Item>
                      <Descriptions.Item label='ลงวันที่'>
                        <input
                          className='text-input'
                          name='o_date'
                          value={data.o_date}
                          disabled={true}
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
                          value={data.o_purpose}
                          disabled={true}
                        ></input>
                      </Descriptions.Item>
                      <Descriptions.Item label='ชื่อโครงการ (ถ้ามี)'>
                        <input
                          className='text-input'
                          name='o_projectname'
                          value={data.o_projectname}
                          disabled={true}
                        ></input>
                      </Descriptions.Item>
                      <Descriptions.Item label='วันที่ต้องใช้พัสดุ'>
                        <input
                          className='text-input'
                          name='o_require'
                          value={data.o_require}
                          disabled={true}
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
                          value={data.o_specific}
                          disabled={true}
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
                          value={data.o_appointment}
                          disabled={true}
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
                          value={data.o_results}
                          disabled={true}
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
                          value={data.o_committee1}
                          disabled={true}
                        ></input>
                      </Descriptions.Item>
                      <Descriptions.Item label='คณะกรรมการ'>
                        <input
                          className='text-input'
                          name='o_committee2'
                          value={data.o_committee2}
                          disabled={true}
                        ></input>
                      </Descriptions.Item>
                      <Descriptions.Item label='คณะกรรมการ'>
                        <input
                          className='text-input'
                          name='o_committee3'
                          value={data.o_committee3}
                          disabled={true}
                        ></input>
                      </Descriptions.Item>
                      <div span={3}>คณะกรรมการตรวจรับพัสดุ</div>
                      <Descriptions.Item label='ประธานกรรมการ'>
                        <input
                          className='text-input'
                          name='o_committee4'
                          value={data.o_committee4}
                          disabled={true}
                        ></input>
                      </Descriptions.Item>
                      <Descriptions.Item label='คณะกรรมการ'>
                        <input
                          className='text-input'
                          name='o_committee5'
                          value={data.o_committee5}
                          disabled={true}
                        ></input>
                      </Descriptions.Item>
                      <Descriptions.Item label='คณะกรรมการ'>
                        <input
                          className='text-input'
                          name='o_committee6'
                          value={data.o_committee6}
                          disabled={true}
                        ></input>
                      </Descriptions.Item>
                    </Descriptions>
                    {/* -------------------------------------------------------------------------------------------------------------- */}
                    <br />
                    {/* ---------------------------------------------------- Ch 4 ---------------------------------------------------- */}
                    <Descriptions bordered title='4. แหล่งเงิน' size={size}>
                      <div span={3}>* ใส่ข้อมูลเฉพาะที่มี</div>
                      <Descriptions.Item label='เงินอุดหนุนจากรัฐบาล ปี'>
                        <input
                          type='number'
                          className='text-input'
                          name='o_gvm_sub'
                          value={data.o_gvm_sub}
                          disabled={true}
                        ></input>
                      </Descriptions.Item>
                      <Descriptions.Item label='เงินรายได้ ปี'>
                        <input
                          type='number'
                          className='text-input'
                          name='o_income'
                          value={data.o_income}
                          disabled={true}
                        ></input>
                      </Descriptions.Item>
                      <Descriptions.Item label='เงินรายได้สะสม ปี'>
                        <input
                          type='number'
                          className='text-input'
                          name='o_aml_income'
                          value={data.o_aml_income}
                          disabled={true}
                        ></input>
                      </Descriptions.Item>

                      <Descriptions.Item label='ทิศทาง'>
                        <input
                          className='text-input'
                          name='o_direction'
                          value={data.o_direction}
                          disabled={true}
                        ></input>
                      </Descriptions.Item>
                      <Descriptions.Item span={2} label='นโยบาย'>
                        <input
                          className='text-input'
                          name='o_policy'
                          value={data.o_policy}
                          disabled={true}
                        ></input>
                      </Descriptions.Item>
                      <Descriptions.Item label='ผลงาน'>
                        <input
                          className='text-input'
                          name='o_works'
                          value={data.o_works}
                          disabled={true}
                        ></input>
                      </Descriptions.Item>
                      <Descriptions.Item span={2} label='งาน'>
                        <input
                          className='text-input'
                          name='o_task'
                          value={data.o_task}
                          disabled={true}
                        ></input>
                      </Descriptions.Item>
                      <Descriptions.Item label='หมวดรายจ่าย'>
                        <input
                          className='text-input'
                          name='o_expense_cg'
                          value={data.o_expense_cg}
                          disabled={true}
                        ></input>
                      </Descriptions.Item>
                      <Descriptions.Item span={2} label='หมวดย่อย'>
                        <input
                          className='text-input'
                          name='o_sub_cg'
                          value={data.o_sub_cg}
                          disabled={true}
                        ></input>
                      </Descriptions.Item>
                      <Descriptions.Item span={3} label='ชื่อรายการ'>
                        <input
                          className='text-input'
                          name='o_list_n'
                          value={data.o_list_n}
                          disabled={true}
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
                          value={data.o_other_m}
                          disabled={true}
                        ></input>
                      </Descriptions.Item>
                    </Descriptions>
                    <br />
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
         
          </div>
        )
      })}
      <BackTop>
        <div style={style}>UP</div>
      </BackTop> 
    </StyledWrapper>
  )
}

export default Viewform001Component
