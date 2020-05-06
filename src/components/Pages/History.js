import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Router from 'next/router'
import {
  Layout,
  Menu,
  Breadcrumb,
  message,
  Row,
  Col,
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
`

const HistoryContent = () => {
  const [history, setHistoty] = useState([])
  const getForm001Bysid = async () => {
    var found = await axios.get(
      `http://localhost:3001/form001/${sessionStorage.getItem('username')}`
    )
    //console.log('found = ', found.data)
    setHistoty(JSON.parse(JSON.stringify(found.data)))
  }
  const [showResults, setShowResults] = useState(false)
  const showresult = () => setShowResults(true)
  const closeesult = () => setShowResults(false)
  const [size, setSize] = useState('default')
  const cssonChange = e => {
    console.log('size checked', e.target.value)
    setSize(e.target.value)
  }
  useEffect(() => {
    getForm001Bysid()
  }, [])
  const deletehistory = async (order_id) =>{
    //console.log('order_id = ',order_id)
    var found = await axios.delete(
      `http://localhost:3001/form001/${order_id}`
    )
  }
  const edithistory = async (order_id) =>{
    console.log('order_id = ',order_id)
    Router.push({
      pathname: '/editform001page',
      query: { order_id: order_id }
  })
    // var found = await axios.patch(
    //   `http://localhost:3001/form001/${order_id}`
    // )
  }
  return (
    <StyledWrapper>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>ประวัติการทำรายการ</Breadcrumb.Item>
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
          {history.map((data, index) => {
            return (
              <div key={index}>
                <div><Divider
                      orientation='left'
                      style={{ color: '#333', fontWeight: 'normal' }}
                    >
                      วันที่ : {data.o_date}
                      เลขออร์เดอร์ : {data.order_id}
                   <button style={{marginLeft: '15px'}} onClick={showresult}>Show info</button> 
                   <button style={{marginLeft: '15px'}} onClick={closeesult}>Close info</button>  
                   <button style={{marginLeft: '15px'}} onClick={() => deletehistory(data.order_id)}>Delete info</button> 
                   <button style={{marginLeft: '15px'}} onClick={() => edithistory(data.order_id)}>Edit info</button> 
                    </Divider>
                </div>
                {showResults ? (
                  <div>
                    <div>
                      <Radio.Group onChange={cssonChange} value={size}>
                        <Radio value='default'>default</Radio>
                        <Radio value='middle'>middle</Radio>
                        <Radio value='small'>small</Radio>
                      </Radio.Group>
                      <br />
                      <br />
                      <Descriptions bordered title='1. รายละเอียด' size={size}>
                        <Descriptions.Item label='เอกสารของ'>
                          <input
                            className='text-input'
                            value='sid'
                            value={data.sid}
                            disabled={true}
                          ></input>
                        </Descriptions.Item>
                        <Descriptions.Item label='เอกสารที่ มอ. 696 /'>
                          <input
                            className='text-input'
                            value={data.o_location}
                            disabled={true}
                          ></input>
                        </Descriptions.Item>
                        <Descriptions.Item label='ลงวันที่'>
                          <input
                            className='text-input'
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
                            value={data.o_purpose}
                            disabled={true}
                          ></input>
                        </Descriptions.Item>
                        <Descriptions.Item label='ชื่อโครงการ (ถ้ามี)'>
                          <input
                            className='text-input'
                            value={data.o_projectname}
                            disabled={true}
                          ></input>
                        </Descriptions.Item>
                        <Descriptions.Item label='วันที่ต้องใช้พัสดุ'>
                          <input
                            className='text-input'
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
                            value={data.o_committee1}
                            disabled={true}
                          ></input>
                        </Descriptions.Item>
                        <Descriptions.Item label='คณะกรรมการ'>
                          <input
                            className='text-input'
                            value={data.o_committee2}
                            disabled={true}
                          ></input>
                        </Descriptions.Item>
                        <Descriptions.Item label='คณะกรรมการ'>
                          <input
                            className='text-input'
                            value={data.o_committee3}
                            disabled={true}
                          ></input>
                        </Descriptions.Item>
                        <div span={3}>คณะกรรมการตรวจรับพัสดุ</div>
                        <Descriptions.Item label='ประธานกรรมการ'>
                          <input
                            className='text-input'
                            value={data.o_committee4}
                            disabled={true}
                          ></input>
                        </Descriptions.Item>
                        <Descriptions.Item label='คณะกรรมการ'>
                          <input
                            className='text-input'
                            value={data.o_committee5}
                            disabled={true}
                          ></input>
                        </Descriptions.Item>
                        <Descriptions.Item label='คณะกรรมการ'>
                          <input
                            className='text-input'
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
                            value={data.o_gvm_sub}
                            disabled={true}
                          ></input>
                        </Descriptions.Item>
                        <Descriptions.Item label='เงินรายได้ ปี'>
                          <input
                            type='number'
                            className='text-input'
                            value={data.o_income}
                            disabled={true}
                          ></input>
                        </Descriptions.Item>
                        <Descriptions.Item label='เงินรายได้สะสม ปี'>
                          <input
                            type='number'
                            className='text-input'
                            value={data.o_aml_income}
                            disabled={true}
                          ></input>
                        </Descriptions.Item>

                        <Descriptions.Item label='ทิศทาง'>
                          <input
                            className='text-input'
                            value={data.o_direction}
                            disabled={true}
                          ></input>
                        </Descriptions.Item>
                        <Descriptions.Item span={2} label='นโยบาย'>
                          <input
                            className='text-input'
                            value={data.o_policy}
                            disabled={true}
                          ></input>
                        </Descriptions.Item>
                        <Descriptions.Item label='ผลงาน'>
                          <input
                            className='text-input'
                            value={data.o_works}
                            disabled={true}
                          ></input>
                        </Descriptions.Item>
                        <Descriptions.Item span={2} label='งาน'>
                          <input
                            className='text-input'
                            value={data.o_task}
                            disabled={true}
                          ></input>
                        </Descriptions.Item>
                        <Descriptions.Item label='หมวดรายจ่าย'>
                          <input
                            className='text-input'
                            value={data.o_expense_cg}
                            disabled={true}
                          ></input>
                        </Descriptions.Item>
                        <Descriptions.Item span={2} label='หมวดย่อย'>
                          <input
                            className='text-input'
                            value={data.o_sub_cg}
                            disabled={true}
                          ></input>
                        </Descriptions.Item>
                        <Descriptions.Item span={3} label='ชื่อรายการ'>
                          <input
                            className='text-input'
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
                            value={data.o_other_m}
                            disabled={true}
                          ></input>
                        </Descriptions.Item>
                      </Descriptions>
                      <br />
                      <Divider
                        orientation='left'
                        style={{ color: '#333', fontWeight: 'normal' }}
                      ></Divider>
                      {/* -------------------------------------------------------------------------------------------------------------- */}
                    </div>
                  </div>
                ) : null}
              </div>
            )
          })}
        </div>
      </Content>
    </StyledWrapper>
  )
}

export default HistoryContent
