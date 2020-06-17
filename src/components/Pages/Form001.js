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
  BackTop,
  Tag
} from 'antd'
const { SubMenu } = Menu
const { Header, Content, Sider, Footer } = Layout

import styled from 'styled-components'
const StyledWrapper = styled.div`
/* ของใหม่ */
  max-width: 960px;
  margin: 0 auto;
  background-color:#f0f2f5;
  .title h1 {
    font-size: 30px;
    text-align: center;
    color: #212529;
    padding-top: 20px;
  }
  .sub-title {
    font-size: 30px;
    padding-bottom: 5px;
    padding-top: 20px;
  }
  input {
    border: none;
    border-bottom: 1.5px solid #D5D8DC ;
    padding: 10px;
    width: 100%;
    background-color:#f0f2f5;
  }

  input:focus {
    outline: none;
  }
  .menu {
    font-size: 18px;
    padding-top: 20px;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    border: 1px solid #ddd;
  }

  th,
  td {
    text-align: left;
    padding: 8px;
  }
/* ของเก่า */
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
    margin-top: 15px;
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
    <div className="title">
        <h1>
          แบบขอจัดหาพัสดุของสำนักงานอธิการบดีวิทยาเขตภูเก็ต <br></br>{" "}
          กรณีวงเงินครั้งหนึ่งไม่เกิน 5 แสนบาท ที่มิใช่ก่อสร้าง
        </h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
      {/* ############################################## Header 1 ##############################################*/}
      {/* -------------------------------- หัวข้อ --------------------------------*/}
      <div className="sub-title">1.รายละเอียด</div>
      {/* ---------------------------------------------------------------------------*/}
      {/* -------------------------------- หัวข้อ ย่อย --------------------------------*/}
      <div className="menu">เอกสารของ</div>
      {/* -------------------------------- ช่อง Input -------------------------------*/}
      <input
        className="text-input"
        name="sid"
        value={username}
        disabled={true}
        ref={register}
      ></input>
      <input
        className="text-input"
        name="o_typedoc"
        value="1"
        type="hidden"
        ref={register}
      ></input>
      <input
        className="text-input"
        name="s_id"
        value="0"
        type="hidden"
        ref={register}
      ></input>
      {/* ---------------------------------------------------------------------------*/}
      {/* -------------------------------- หัวข้อ ย่อย --------------------------------*/}
      <div className="menu">เอกสารที่ มอ.696/</div>
      {/* -------------------------------- ช่อง Input -------------------------------*/}
      <div className="sub-menu">
        <input type="text" name="o_location" ref={register} />
      </div>
      {/* ---------------------------------------------------------------------------*/}
      {/* -------------------------------- หัวข้อ ย่อย --------------------------------*/}
      <div className="menu">ลงวันที่</div>
      {/* -------------------------------- ช่อง Input -------------------------------*/}
      <div className="sub-menu">
        <input type="text" name="o_date" ref={register} />
      </div>
      {/* ---------------------------------------------------------------------------*/}
      {/* -------------------------------- หัวข้อ ย่อย --------------------------------*/}
      <div className="menu">
        ด้วยมหาวิทยาลัยการคอมพิวเตอร์มีความประสงค์ที่จะใช้พัสดุด้านล่างนี้เพื่อ
      </div>
      {/* -------------------------------- ช่อง Input -------------------------------*/}
      <div className="sub-menu">
        <input type="text"  name='o_purpose'
                    ref={register}/>
      </div>
      {/* ---------------------------------------------------------------------------*/}
      {/* -------------------------------- หัวข้อ ย่อย --------------------------------*/}
      <div className="menu">ชื่อโครงการ (ถ้ามี)</div>
      {/* -------------------------------- ช่อง Input -------------------------------*/}
      <div className="sub-menu">
        <input type="text" name='o_projectname'
                    ref={register}/>
      </div>
      {/* ---------------------------------------------------------------------------*/}
      {/* -------------------------------- หัวข้อ ย่อย --------------------------------*/}
      <div className="menu" >วันที่ต้องใช้พัสดุ</div>
      {/* -------------------------------- ช่อง Input -------------------------------*/}
      <div className="sub-menu">
        <input type="text" name='o_require'
                    ref={register} />
      </div>
      {/* ############################################## Header 2 ##############################################*/}

      {/* -------------------------------- หัวข้อ --------------------------------*/}
      <div className="sub-title">2.รายละเอียดคุณลักษณะเฉพาะ/ขอบเขตงาน</div>
      {/* ---------------------------------------------------------------------------*/}
      {/* -------------------------------- หัวข้อ ย่อย --------------------------------*/}
      <div className="menu">
        รายละเอียดคุณลักษณะเฉพาะ/ขอบเขตงาน
        (ประทับตรามหาวิทยาลัยพร้อมผู้มีอำนาจลงนาม) (จำนวนแผ่น)
      </div>
      {/* -------------------------------- ช่อง Input -------------------------------*/}
      <div className="sub-menu">
        <input type='number'  name='o_specific'
                    defaultValue='0'
                    ref={register}/>
      </div>
      {/* ---------------------------------------------------------------------------*/}
      {/* -------------------------------- หัวข้อ ย่อย --------------------------------*/}
      <div className="menu">
        บันทึกการแต่งตั้งคณะกรรมการกำหนดคุณลักษณะเฉพาะ/ขอบเขตงานและราคากลาง
        (จำนวนแผ่น)
      </div>
      {/* -------------------------------- ช่อง Input -------------------------------*/}
      <div className="sub-menu">
        <input type='number' name='o_appointment'
                    defaultValue='0'
                    ref={register}/>
      </div>
      {/* ---------------------------------------------------------------------------*/}
      {/* -------------------------------- หัวข้อ ย่อย --------------------------------*/}
      <div className="menu">
        บันทึกรายงานผลการจัดทำคุณลักษณะเฉพาะ/ขอบเขตงานและราคากลาง (จำนวนแผ่น)
      </div>
      {/* -------------------------------- ช่อง Input -------------------------------*/}
      <div className="sub-menu">
        <input type='number' name='o_results'
                    defaultValue='0'
                    ref={register}/>
      </div>
      {/* ############################################## Header 3 ##############################################*/}

      {/* -------------------------------- หัวข้อ --------------------------------*/}
      <div className="sub-title">3.คณะกรรมการ</div>
      {/* ---------------------------------------------------------------------------*/}
      {/* -------------------------------- หัวข้อ ย่อย --------------------------------*/}
      <div className="menu">
        <Tag color="red">คณะกรรมการพิจารณาผล</Tag>ประธานกรรมการ
      </div>
      {/* -------------------------------- ช่อง Input -------------------------------*/}
      <div className="sub-menu">
        <input type="text" name='o_committee1'
                    ref={register}/>
      </div>
      {/* -------------------------------- หัวข้อ ย่อย --------------------------------*/}
      <div className="menu">
        <Tag color="red">คณะกรรมการพิจารณาผล</Tag>คณะกรรมการ
      </div>
      {/* -------------------------------- ช่อง Input -------------------------------*/}
      <div className="sub-menu">
        <input type="text" name='o_committee2'
                    ref={register}/>
      </div>
      {/* -------------------------------- หัวข้อ ย่อย --------------------------------*/}
      <div className="menu">
        <Tag color="red">คณะกรรมการพิจารณาผล</Tag>คณะกรรมการ
      </div>
      {/* -------------------------------- ช่อง Input -------------------------------*/}
      <div className="sub-menu">
        <input type="text" name='o_committee3'
                    ref={register}/>
      </div>
      {/* -------------------------------- หัวข้อ ย่อย --------------------------------*/}
      <div className="menu">
        <Tag color="purple">คณะกรรมการตรวจรับพัสดุ</Tag>ประธานกรรมการ
      </div>
      {/* -------------------------------- ช่อง Input -------------------------------*/}
      <div className="sub-menu">
        <input type="text" name='o_committee4'
                    ref={register}/>
      </div>
      {/* -------------------------------- หัวข้อ ย่อย --------------------------------*/}
      <div className="menu">
        <Tag color="purple">คณะกรรมการตรวจรับพัสดุ</Tag>คณะกรรมการ
      </div>
      {/* -------------------------------- ช่อง Input -------------------------------*/}
      <div className="sub-menu">
        <input type="text" name='o_committee5'
                    ref={register}/>
      </div>
      {/* -------------------------------- หัวข้อ ย่อย --------------------------------*/}
      <div className="menu">
        <Tag color="purple">คณะกรรมการตรวจรับพัสดุ</Tag>คณะกรรมการ
      </div>
      {/* -------------------------------- ช่อง Input -------------------------------*/}
      <div className="sub-menu">
        <input type="text" name='o_committee6'
                    ref={register}/>
      </div>
      {/* ############################################## Header 4 ##############################################*/}

      {/* -------------------------------- หัวข้อ --------------------------------*/}
      <div className="sub-title">4.แหล่งเงิน</div>

      <div style={{ overflowX: "auto" }}>
        <table>
        <tbody>
          <tr >
            <td>เงินอุดหนุนจากรัฐบาล ปี</td>
            <td>
              <input type='number' name='o_gvm_sub'
                    defaultValue='0'
                    ref={register}/>
            </td>
          </tr>
          <tr >
            <td>เงินรายได้ ปี</td>
            <td>
              <input type='number'  name='o_income'
                    defaultValue='0'
                    ref={register}/>
            </td>
          </tr>
          <tr >
            <td>เงินรายได้สะสม ปี</td>
            <td>
              <input type='number'  name='o_aml_income'
                    defaultValue='0'
                    ref={register}/>
            </td>
          </tr>
          <tr >
            <td>ทิศทาง</td>
            <td>
              <input type="text" name='o_direction'
                    ref={register}/>
            </td>
          </tr>
          <tr >
            <td>นโยบาย</td>
            <td>
              <input type="text" name='o_policy'
                    ref={register}/>
            </td>
          </tr>
          <tr >
            <td>ผลงาน</td>
            <td>
              <input type="text"  name='o_works'
                    ref={register}/>
            </td>
          </tr>
          <tr >
            <td>งาน</td>
            <td>
              <input type="text" name='o_task'
                    ref={register}/>
            </td>
          </tr>
          <tr >
            <td>หมวดรายจ่าย</td>
            <td>
              <input type="text"  name='o_expense_cg'
                    ref={register}/>
            </td>
          </tr>
          <tr >
            <td>หมวดย่อย</td>
            <td>
              <input type="text" name='o_sub_cg'
                    ref={register}/>
            </td>
          </tr>
          <tr >
            <td>ชื่อรายการ</td>
            <td>
              <input type="text" name='o_list_n'
                    ref={register}/>
            </td>
          </tr>
          <tr >
            <td>เงินอื่นๆโปรดระบุ (ตามที่แนบมาพร้อมนี้)</td>
            <td>
              <input type='number'  name='o_other_m'
                    defaultValue='0'
                    ref={register}/>
            </td>
          </tr>
          </tbody>
        </table>
        
      </div>
      <div className='center'>
                <button className='example_c' type='submit'>
                  Submit
                </button>
                <button className='example_cancel'>Cancel</button>
              </div>
      </form>
      <BackTop>
        <div style={style}>UP</div>
      </BackTop>
    </StyledWrapper>
  )
}

export default connect(state => state.Form001 ,Form001Action )(Form001Content)
