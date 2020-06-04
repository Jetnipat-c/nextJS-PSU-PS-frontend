import React, { useState, useEffect } from "react";
import * as axios from "axios";
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
  Tag
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;
import styled from "styled-components";
const StyledWrapper = styled.div`

  .site-layout-background {
    background-color: white;
  }
`;

const propsupload = {
  name: 'image',
  action: 'http://localhost:3001/uploadfile001/multiple',
  
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  progress: {
    strokeColor: {
      '0%': '#108ee9',
      '100%': '#87d068',
    },
    strokeWidth: 3,
    format: percent => `${parseFloat(percent.toFixed(2))}%`,
  },
};
const Form001_UploadfileContent = (props) => {
  const [originalname , setOriginalname] = useState('')
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
            orientation='left'
            style={{ color: '#333', fontWeight: 'normal' }}
          >
            แบบขอจัดหาพัสดุของสำนักงานอธิการบดีวิทยาเขตภูเก็ต
            กรณีวงเงินครั้งหนึ่งไม่เกิน 5 แสนบาท ที่มิใช่ก่อสร้าง
          </Divider>
        อัพโหลดเอกสารที่เกี่ยวข้อง :
        <Tag color="magenta" style={{marginLeft:'15px'}}>ไฟล์ภายในโครงการ</Tag>
        <Tag color="orange">ใบเสนอราคา</Tag>
        
        
        <Upload {...propsupload}>
    <Button>
      <UploadOutlined /> Click to Upload
    </Button>
  </Upload>
      </Content>
    </StyledWrapper>
  );
};
export default Form001_UploadfileContent;
