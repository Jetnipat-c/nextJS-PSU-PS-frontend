import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Router from 'next/router'
import {
  Layout,
  Menu,
  Breadcrumb,
  Descriptions,
  PageHeader,
  Button,
  Empty,
  BackTop
} from 'antd'
import {
  SearchOutlined,
  DeleteOutlined,
  EditOutlined,
  PrinterOutlined
} from '@ant-design/icons'
const { SubMenu } = Menu
const { Header, Content, Sider, Footer } = Layout
import styled from 'styled-components'
const StyledWrapper = styled.div`
  .site-page-header-ghost-wrapper {
    background-color: #f5f5f5;
    padding: 10px;
  }
  .ant-btn-three {
    background-color: #58d68d;
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

const HistoryContent = (props) => {
  const [history, setHistoty] = useState([])
  const [checkEmpty,setcCheckEmpty] = useState(false)
  const getForm001Bysid = async () => {
    var found = await axios.get(
      `http://localhost:3001/form001/${sessionStorage.getItem('username')}`
    )
    console.log('found = ', found.data)
    setHistoty(JSON.parse(JSON.stringify(found.data)))
    console.log('found length',(found.data).length);
    if((found.data).length === 0)
    {
      setcCheckEmpty(true)
    }
  }

  const [size, setSize] = useState('default')
  const cssonChange = e => {
    console.log('size checked', e.target.value)
    setSize(e.target.value)
  }
  useEffect(() => {
    getForm001Bysid()
  }, [])
  const deletehistory = async order_id => {
    var found = await axios.delete(`http://localhost:3001/form001/${order_id}`)
    Router.reload()
  }
  const edithistory = async order_id => {
    Router.push({
      pathname: '/editform001page',
      query: { order_id: order_id }
    })
  }
  const genpdf = async order_id => {
    Router.push({
      pathname: '/genpdfpage',
      query: { order_id: order_id }
    })
  }
  const view = async order_id => {
    Router.push({
      pathname: '/viewform001page',
      query: { order_id: order_id }
    })
 
  }
  const [o_typedoc_name,setO_typedoc_name] = useState('')
  const checkTypedoc = async o_typedoc => {
    var result = await axios.get(`http://localhost:3001/typeform/${o_typedoc}`)
    console.log('result = ',result.data)
    setO_typedoc_name(result)
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
            {checkEmpty ? <Empty/> : <div>{history.map((data, index) => {
              return (
                <div key={index}>
                  <div className='site-page-header-ghost-wrapper'>
                    <PageHeader
                      className='site-page-header-responsive'
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
                        <Descriptions.Item label='สถานะ'>{data.status}</Descriptions.Item>
                        <Descriptions.Item label='ประเภทใบรายการ'>
                          {data.o_typedoc}
                        </Descriptions.Item>
                      </Descriptions>

                      <Button
                        key='6'
                        type='sec'
                        style={{ marginLeft: '15px' }}
                        onClick={() => view(data.order_id)}
                        icon={<SearchOutlined />}
                      >
                        View
                      </Button>
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
                        key='2'
                        type='danger'
                        style={{ marginLeft: '15px' }}
                        onClick={() => deletehistory(data.order_id)}
                        icon={<DeleteOutlined />}
                      >
                        Delete
                      </Button>
                      <Button
                        key='1'
                        type='primary'
                        style={{ marginLeft: '15px' }}
                        onClick={() => edithistory(data.order_id)}
                        icon={<EditOutlined />}
                      >
                        Edit
                      </Button>
                    </PageHeader>
                  </div>
                </div>
              )
            })}</div>}

            
          </div>
        </div>
      </Content>
      <BackTop>
        <div style={style}>UP</div>
      </BackTop>
    </StyledWrapper>
  )
}

export default HistoryContent
