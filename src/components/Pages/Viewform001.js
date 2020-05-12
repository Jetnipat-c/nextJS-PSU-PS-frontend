import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
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

const Viewform001Component = props => {


    const [order_id, setOrder_id] = useState(props.order_id)
    console.log('order_id inpage view = ', order_id)

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
       {history.map((data , index)=>{
             return (
                //  <div key={index}>
                //     <div> เอกสารที่ มอ. 696 / : {data.o_location}</div>
                //     <div> ลงวันที่ {data.o_date}</div>
                //     <div> ด้วยมหาวิทยาลัยการคอมพิวเตอร์มีความประสงค์ที่จะใช้พัสดุด้านล่างนี้เพื่อ {data.o_purpose}</div>
                //     <div> ชื่อโครงการ (ถ้ามี) {data.o_projectname}</div>
                //     <div> วันที่ต้องใช้พัสดุ {data.o_require}</div>
                //     <div> รายละเอียดคุณลักษณะเฉพาะ/ขอบเขตงาน(ประทับตรามหาวิทยาลัยพร้อมผู้มีอำนาจลงนาม)  (จำนวนแผ่น) {data.o_specific}</div>
                //     <div> บันทึกการแต่งตั้งคณะกรรมการกำหนดคุณลักษณะเฉพาะ/ขอบเขตงานและราคากลาง  (จำนวนแผ่น) {data.o_appointment}</div>
                //     <div> บันทึกรายงานผลการจัดทำคุณลักษณะเฉพาะ/ขอบเขตงานและราคากลาง  (จำนวนแผ่น) {data.o_results}</div>
                //     <div> คณะกรรมการพิจารณาผล ประธานกรรมการ {data.o_committee1}</div>
                //     <div> คณะกรรมการพิจารณาผล คณะกรรมการ {data.o_committee2}</div>
                //     <div> คณะกรรมการพิจารณาผล คณะกรรมการ {data.o_committee3}</div>
                //     <div> คณะกรรมการตรวจรับพัสดุ ประธานกรรมการ {data.o_committee4}</div>
                //     <div> คณะกรรมการตรวจรับพัสดุ คณะกรรมการ {data.o_committee5}</div>
                //     <div> คณะกรรมการตรวจรับพัสดุ คณะกรรมการ {data.o_committee6}</div>
                //     <div> เงินอุดหนุนจากรัฐบาล ปี {data.o_gvm_sub}</div>
                //     <div> เงินรายได้ ปี {data.o_income}</div>
                //     <div> เงินรายได้สะสม ปี {data.o_aml_income}</div>
                //     <div> ทิศทาง {data.o_direction}</div>
                //     <div> นโยบาย {data.o_policy}</div>
                //     <div> ผลงาน {data.o_works}</div>
                //     <div> งาน {data.o_task}</div>
                //     <div> หมวดรายจ่าย {data.o_expense_cg}</div>
                //     <div> หมวดย่อย {data.o_sub_cg}</div>
                //     <div> ชื่อรายการ {data.o_list_n}</div>
                //     <div> เงินอื่นๆโปรดระบุ (ตามที่แนบมาพร้อมนี้) {data.o_other_m}</div>
                //  </div>
                <div key={index}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>แบบฟอร์ม</Breadcrumb.Item>
        <Breadcrumb.Item>คำสั่งซื้อพัสดุแบบปกติ 001</Breadcrumb.Item>
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
            <form >
              <Divider
                orientation='left'
                style={{ color: '#333', fontWeight: 'normal' }}
              >
                <h1>คำสั่งซื้อพัสดุแบบปกติ เลขออร์เดอร์ที่ {order_id}</h1>
                แบบขอจัดหาพัสดุของสำนักงานอธิการบดีวิทยาเขตภูเก็ต
                กรณีวงเงินครั้งหนึ่งไม่เกิน 5 แสนบาท ที่มิใช่ก่อสร้าง
              </Divider>

              <Radio.Group onChange={cssonChange} value={size}>
                <Radio value='default'>default</Radio>
                <Radio value='middle'>middle</Radio>
                <Radio value='small'>small</Radio>
              </Radio.Group>
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
                    
                  ></input>
                </Descriptions.Item>
                <Descriptions.Item label='ชื่อโครงการ (ถ้ามี)'>
                  <input
                    className='text-input'
                    name='o_projectname'
                    
                  ></input>
                </Descriptions.Item>
                <Descriptions.Item label='วันที่ต้องใช้พัสดุ'>
                  <input
                    className='text-input'
                    name='o_require'
                    
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
                    
                  ></input>
                </Descriptions.Item>
                <Descriptions.Item label='คณะกรรมการ'>
                  <input
                    className='text-input'
                    name='o_committee2'
                    
                  ></input>
                </Descriptions.Item>
                <Descriptions.Item label='คณะกรรมการ'>
                  <input
                    className='text-input'
                    name='o_committee3'
                    
                  ></input>
                </Descriptions.Item>
                <div span={3}>คณะกรรมการตรวจรับพัสดุ</div>
                <Descriptions.Item label='ประธานกรรมการ'>
                  <input
                    className='text-input'
                    name='o_committee4'
                    
                  ></input>
                </Descriptions.Item>
                <Descriptions.Item label='คณะกรรมการ'>
                  <input
                    className='text-input'
                    name='o_committee5'
                    
                  ></input>
                </Descriptions.Item>
                <Descriptions.Item label='คณะกรรมการ'>
                  <input
                    className='text-input'
                    name='o_committee6'
                    
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
                    
                  ></input>
                </Descriptions.Item>
                <Descriptions.Item label='เงินรายได้ ปี'>
                  <input
                    type='number'
                    className='text-input'
                    name='o_income'
                    
                  ></input>
                </Descriptions.Item>
                <Descriptions.Item label='เงินรายได้สะสม ปี'>
                  <input
                    type='number'
                    className='text-input'
                    name='o_aml_income'
                    
                  ></input>
                </Descriptions.Item>

                <Descriptions.Item label='ทิศทาง'>
                  <input
                    className='text-input'
                    name='o_direction'
                    
                  ></input>
                </Descriptions.Item>
                <Descriptions.Item span={2} label='นโยบาย'>
                  <input
                    className='text-input'
                    name='o_policy'
                    
                  ></input>
                </Descriptions.Item>
                <Descriptions.Item label='ผลงาน'>
                  <input
                    className='text-input'
                    name='o_works'
                    
                  ></input>
                </Descriptions.Item>
                <Descriptions.Item span={2} label='งาน'>
                  <input
                    className='text-input'
                    name='o_task'
                    
                  ></input>
                </Descriptions.Item>
                <Descriptions.Item label='หมวดรายจ่าย'>
                  <input
                    className='text-input'
                    name='o_expense_cg'
                    
                  ></input>
                </Descriptions.Item>
                <Descriptions.Item span={2} label='หมวดย่อย'>
                  <input
                    className='text-input'
                    name='o_sub_cg'
                    
                  ></input>
                </Descriptions.Item>
                <Descriptions.Item span={3} label='ชื่อรายการ'>
                  <input
                    className='text-input'
                    name='o_list_n'
                    
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
                    
                  ></input>
                </Descriptions.Item>
              </Descriptions>
              <br />
              {/* -------------------------------------------------------------------------------------------------------------- */}
              {/* ---------------------------------------------------- button ---------------------------------------------------- */}
              <div className='center'>
                <button style={{ marginLeft: '15px' }} type='submit' >Eidt form001</button>
                {/* <button className='btn' type='submit'>
                <svg
                  width='180px'
                  height='60px'
                  viewBox='0 0 180 60'
                  className='border'
                >
                  <polyline
                    points='179,1 179,59 1,59 1,1 179,1'
                    className='bg-line'
                  />
                  <polyline
                    points='179,1 179,59 1,59 1,1 179,1'
                    className='hl-line'
                  />
                </svg>
                <span>Submit</span>
              </button> */}

                {/* <button className='btn btn2' >
                <svg
                  width='180px'
                  height='60px'
                  viewBox='0 0 180 60'
                  className='border'
                >
                  <polyline
                    points='179,1 179,59 1,59 1,1 179,1'
                    className='bg-line'
                  />
                  <polyline
                    points='179,1 179,59 1,59 1,1 179,1'
                    className='hl-line'
                  />
                </svg>
                <span>Cancel</span>
              </button> */}
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
                </div>
             )
         })}
    </StyledWrapper>
  )
}

export default Viewform001Component
