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
  Radio,
  PageHeader,
  Button,
  Tabs, Statistic
} from 'antd'
import { SearchOutlined,CloseCircleOutlined,DeleteOutlined,EditOutlined,PrinterOutlined    } from '@ant-design/icons'
const { SubMenu } = Menu
const { Header, Content, Sider, Footer } = Layout
import styled from 'styled-components'
const StyledWrapper = styled.div`
  .site-page-header-ghost-wrapper {
    background-color: #f5f5f5;
    padding: 10px;
  }
  .ant-btn-three {
    background-color: #58D68D;
    color: white;
  }
  .ant-btn-sec {
    background-color: #ffa500;
    color: white;
  }
  .ant-btn-one {
    background-color: #d8bfd8;
    color: white;
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
    console.log('history',history)
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
  const deletehistory = async order_id => {
    //console.log('order_id = ',order_id)
    var found = await axios.delete(`http://localhost:3001/form001/${order_id}`)
    Router.reload()
  }
  const edithistory = async order_id => {
    //console.log('order_id = ',order_id)
    Router.push({
      pathname: '/editform001page',
      query: { order_id: order_id }
    })
  }
  const genpdf = async order_id => {
    //console.log('order_id = ',order_id)
    Router.push({
      pathname: '/genpdfclasspage',
      query: { order_id: order_id }
    })
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
          <div className='site-page-header-ghost-wrapper'>
            {history.map((data, index) => {
              return (
                <div key={index}>
                  <div className='site-page-header-ghost-wrapper'>
                    <PageHeader
                    className="site-page-header-responsive"
                      ghost={false}
                      //onBack={() => window.history.back()}
                      title='ใบราายการที่'
                      subTitle={data.order_id}
                      
                    >
                      <Descriptions size='small' column={3}>
                        <Descriptions.Item label='ผู้บันทึกใบรายการ'>
                          {data.sid}
                        </Descriptions.Item>
                        <Descriptions.Item label='วันที่บันทึกใบรายการ'>
                          {data.createdAt}
                        </Descriptions.Item>
                        <Descriptions.Item label='ชื่อโครงการ'>
                          {data.o_projectname}
                        </Descriptions.Item>
                        <Descriptions.Item label='สาถานะ'>
                          รออนุมัติ
                        </Descriptions.Item>
                      </Descriptions>

                      <Button
                          key='5'
                          type='three'
                          style={{ marginLeft: '15px' }}
                          onClick={() => genpdf(data.order_id)}
                          icon={<PrinterOutlined />}
                        >
                          PDF
                        </Button>
                        <Button
                          key='4'
                          type='one'
                          style={{ marginLeft: '15px' }}
                          onClick={showresult}
                          icon={<SearchOutlined />}
                        >
                          Show info
                        </Button>
                        <Button
                          key='3'
                          type='sec'
                          style={{ marginLeft: '15px' }}
                          onClick={closeesult}
                          icon={<CloseCircleOutlined />}
                           
                        >
                          Close info
                        </Button>
                        <Button
                          key='2'
                          type='danger'
                          style={{ marginLeft: '15px' }}
                          onClick={() => deletehistory(data.order_id)}
                          icon={<DeleteOutlined  />}
                        >
                          Delete
                        </Button>
                        <Button
                          key='1'
                          type='primary'
                          style={{ marginLeft: '15px' }}
                          onClick={() => edithistory(data.order_id)}
                          icon={<EditOutlined  />}
                        >
                          Edit
                        </Button>
                        
                     
                    </PageHeader>
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
                        <Descriptions
                          bordered
                          title='1. รายละเอียด'
                          size={size}
                        >
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
                        <Descriptions
                          bordered
                          title='3. คณะกรรมการ'
                          size={size}
                        >
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
        </div>
      </Content>
    </StyledWrapper>
  )
}

export default HistoryContent
