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
} from "antd";
import { UploadOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;
import styled from "styled-components";
const StyledWrapper = styled.div`

`;

const props_Uploadfile = {
    action: '//jsonplaceholder.typicode.com/posts/',
    listType: 'picture',
    previewFile(file) {
      console.log('Your upload file:', file);
      // Your process logic. Here we just mock to the same file
      return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
        method: 'POST',
        body: file,
      })
        .then(res => res.json())
        .then(({ thumbnail }) => thumbnail);
    },
  };

const Form001_UploadfileContent = (props) => {
  return (
    <StyledWrapper>
      <Upload {...props_Uploadfile}>
      <Button>
        <UploadOutlined /> Upload
      </Button>
    </Upload>
    </StyledWrapper>
  );
};
export default Form001_UploadfileContent;
