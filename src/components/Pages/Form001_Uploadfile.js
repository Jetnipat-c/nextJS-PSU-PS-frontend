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

const props_Uploadfile = {
  action: "//jsonplaceholder.typicode.com/posts/",
  listType: "picture",
  previewFile(file) {
    console.log("Your upload file:", file);
    // Your process logic. Here we just mock to the same file
    return fetch("https://next.json-generator.com/api/json/get/4ytyBoLK8", {
      method: "POST",
      body: file,
    })
      .then((res) => res.json())
      .then(({ thumbnail }) => thumbnail);
  },
};

const Form001_UploadfileContent = (props) => {
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
        <Divider orientation="left">อัพโหลดเอกสารที่เกี่ยวข้อง :
        <Tag color="magenta" style={{marginLeft:'15px'}}>ไฟล์ภายในโครงการ</Tag>
        <Tag color="orange">ใบเสนอราคา</Tag>
        </Divider>
        
        <Upload {...props_Uploadfile}>
          <Button>
            <UploadOutlined /> Upload
          </Button>
        </Upload>
      </Content>
    </StyledWrapper>
  );
};
export default Form001_UploadfileContent;
