import React, { useState, useEffect } from "react";
import axios from "axios";
import Router from "next/router";
import {
  Layout,
  Menu,
  Breadcrumb,
  Descriptions,
  PageHeader,
  Button,
  Empty,
  BackTop,
  Table,
  Space,
  Tag,Dropdown ,message
} from "antd";
import {
  SearchOutlined,
  DeleteOutlined,
  EditOutlined,
  PrinterOutlined,DownOutlined, UserOutlined 
} from "@ant-design/icons";
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;
import styled from "styled-components";
const StyledWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f0f2f5;
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
`;
const style = {
  height: 40,
  width: 40,
  lineHeight: "40px",
  borderRadius: 4,
  backgroundColor: "#1088e9",
  color: "#fff",
  textAlign: "center",
  fontSize: 14,
};

const HistoryContent = (props) => {
  const [history, setHistoty] = useState([]);
  const [checkEmpty, setcCheckEmpty] = useState(false);
  const getForm001Bysid = async () => {
    var found = await axios.get(
      `http://localhost:3001/form001/${sessionStorage.getItem("username")}`
    );
    console.log("found = ", found.data);
    setHistoty(JSON.parse(JSON.stringify(found.data)));
    console.log("found length", found.data.length);
    if (found.data.length === 0) {
      setcCheckEmpty(true);
    }
  };

  const [size, setSize] = useState("default");
  const cssonChange = (e) => {
    console.log("size checked", e.target.value);
    setSize(e.target.value);
  };
  useEffect(() => {
    getForm001Bysid();
  }, []);
  const deletehistory = async (order_id) => {
    var found = await axios.delete(`http://localhost:3001/form001/${order_id}`);
    Router.reload();
  };
  const edithistory = async (order_id) => {
    Router.push({
      pathname: "/editform001page",
      query: { order_id: order_id },
    });
  };
  const genpdf = async (order_id) => {
    Router.push({
      pathname: "/genpdfpage",
      query: { order_id: order_id },
    });
  };
  const view = async (order_id) => {
    Router.push({
      pathname: "/viewform001page",
      query: { order_id: order_id },
    });
  };
  const [o_typedoc_name, setO_typedoc_name] = useState("");
  const checkTypedoc = async (o_typedoc) => {
    var result = await axios.get(`http://localhost:3001/typeform/${o_typedoc}`);
    console.log("result = ", result.data);
    setO_typedoc_name(result);
  };
  const handleMenuClick = (e,order_id) => {
    message.info('Click on menu item.');
    console.log('click', typeof(e.key));
    console.log('click order_id', (order_id));
    if (e.key === '1'){
      return Router.push({
        pathname: "/pageview",
        query: { order_id: order_id },
      });}

    else if (e.key === '2'){
      return Router.push({
      pathname: "/pageedit",
      query: { order_id: order_id },
    });
    }
    
    else if (e.key === '3'){
      return Router.push({
      pathname: "/pageedit",
      query: { order_id: order_id },
    });
    }

    else {
      return Router.push({
        pathname: "/pageedit",
        query: { order_id: order_id },
      });
    }
  }
  const menu = (order_id) =>{
    return (<div>
      <Menu onClick={(e)=>{handleMenuClick(e,order_id)}}>
        <Menu.Item key="1" defaultValue={order_id} icon={<UserOutlined />}>
          View {order_id}
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          Edit
        </Menu.Item>
        <Menu.Item key="3" icon={<UserOutlined />}>
          Delete
        </Menu.Item>
        <Menu.Item key="4" icon={<UserOutlined />}>
          PDF
        </Menu.Item>
      </Menu>
    </div>)
  }
    const columns = [
      {
        title: "ใบรายการที่",
        dataIndex: "order_id",
        key: "order_id",
        render: (text,record) => (<>
        <span style={{marginRight:"5px"}}>
          {text}</span>
        </>),
        align: "center",
      },
      {
        title: "ผู้บันทึกรายการ",
        dataIndex: "sid",
        key: "sid",
        responsive: ["md"],
        align: "center",
      },
      {
        title: "วันที่บันทึกใบรายการ",
        dataIndex: "o_date",
        key: "o_date",
        responsive: ["lg"],
        align: "center",
      },
      {
        title: "ชื่อโครงการ",
        dataIndex: "o_projectname",
        key: "o_projectname",
        responsive: ["lg"],
      },
      {
        title: "สถานะ",
        render: (record) => {
          if(record.status_id.s_detail_en === 'Wait'){
            return <Tag color="#f50">รอการตรวจสอบ</Tag>
          }
          else if (record.status_id.s_detail_en === 'Pass'){
            return <Tag color="#87d068">ผ่าน</Tag>
          }
        },
        responsive: ["lg"],
        align: "center",
      },
      {
        title: "ประเภทใบรายการ",
        render: (record) => record.typeform.o_typedoc_name,
        responsive: ["lg"],
        align: "center",
      },
      {
        title: "ดำเนินการ",
        render: (record) => (
          <Dropdown overlay={menu(record.order_id)}>
        <Button>
          Button <DownOutlined />
        </Button>
      </Dropdown>
        ),
        responsive: ["md"],
        align: "center",
      },
    ];
  return (
    <StyledWrapper>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>ประวัติการทำรายการ</Breadcrumb.Item>
      </Breadcrumb>
      <Table
        columns={columns}
        dataSource={history}
        rowKey={(record) => record.order_id}
      />
      <BackTop>
        <div style={style}>UP</div>
      </BackTop>
    </StyledWrapper>
  );
};

export default HistoryContent;
