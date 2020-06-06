import React, { useState, useEffect } from "react";
import * as axios from "axios";
import Router from 'next/router'
import {
  Layout,
  Menu,
  Breadcrumb,
  message,
  Divider,
  Descriptions,
  Radio,
  BackTop,
  Row,
  Col,
  Input,
  Upload,
  Button,
  Tag,
} from "antd";
import { UploadOutlined , InboxOutlined  } from "@ant-design/icons";
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;
import styled from "styled-components";
const StyledWrapper = styled.div`
  .site-layout-background {
    background-color: white;
  }
  .center {
    display: flex;
    margin-top:30px;
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
`;
const { Dragger } = Upload;

const Form001_UploadfileContent = (props) => {
  const key = 'updatable'
  const openMessage = async () => {
    message.loading({ content: 'Save...', key })
    setTimeout( async ()  => {
      message.success({ content: 'Saved!', key, duration: 2 })
      
      Router.push('/Form001page_uploadfile_2')
    }, 1000)
  }

  const submit = async () =>{
    var found = await axios.patch(`http://localhost:3001/uploadfile001/find/${originalfilename}`,order_id).then(res => {
      console.log('res.data', res.data)
    })
    return console.log('ส่งไป'),openMessage()
  }
  const [originalfilename , setOriginalfilename] = useState('')
  console.log('originalfilename : ' ,originalfilename)
  const propsupload = {
    name: 'image',
    multiple: false,
    action: 'http://localhost:3001/uploadfile001/multiple', 
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
        //console.log('original name',info.file.name );
        setOriginalfilename(info.file.name);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);   
      }
    },
  };
  const [history, setHistoty] = useState([])
  const [order_ids , setOrder_ids] = useState('')
  const order_id = {
    order_id : order_ids
  }
  console.log('order_id = ',(order_id))
  console.log('history = ',history)
  const getForm001Bysid = async () => {
    var found = await axios.get(
      `http://localhost:3001/form001/${sessionStorage.getItem('username')}`
    )
    console.log('found = ', found.data)
    setHistoty(JSON.parse(JSON.stringify(found.data)))
    console.log('found length',(found.data).length-1);
    console.log('order id last = ',(found.data[(found.data).length-1].order_id))
    setOrder_ids((found.data[(found.data).length-1].order_id))

  }
  const [username, setUsername] = useState("");
  const getuser = () => {
    setUsername(sessionStorage.getItem("username"));
  };
  useEffect(() => {
    getuser();
    getForm001Bysid();
  }, []);
  return (
    <StyledWrapper>
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <Divider
          orientation="left"
          style={{ color: "#333", fontWeight: "normal" }}
        >
          แบบขอจัดหาพัสดุของสำนักงานอธิการบดีวิทยาเขตภูเก็ต
          กรณีวงเงินครั้งหนึ่งไม่เกิน 5 แสนบาท ที่มิใช่ก่อสร้าง
        </Divider>
        อัพโหลดเอกสารที่เกี่ยวข้อง :
        <Tag color="magenta" style={{ marginLeft: "15px" }}>
          ไฟล์ภายในโครงการ
        </Tag>
      

        <Dragger {...propsupload} style={{marginTop:"15px"}}>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">
      Support for a single or bulk upload. Strictly prohibit from uploading company data or other
      band files
    </p>
  </Dragger >
        <div className="center">
          <button className="example_c" onClick={()=>submit()} >
            Submit
          </button>
          <button className="example_cancel">Cancel</button>
        </div>
      </Content>
    </StyledWrapper>
  );
};
export default Form001_UploadfileContent;
