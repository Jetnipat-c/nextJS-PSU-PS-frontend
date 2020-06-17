import React, { useState, useEffect } from "react";
import * as axios from "axios";
import Router from "next/router";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { Form001_2Action } from "../../redux/form001_2/action";
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
} from "antd";
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

import styled from "styled-components";
const StyledWrapper = styled.div`

  .center {
    display: flex;
    justify-content: center;
    align-content: center;
    width: 100%;
    justify-content: space-around;
    margin-top:15px;
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
  @import url("https://fonts.googleapis.com/css2?family=Baloo+Bhaina+2:wght@500&display=swap");
  font-family: "Baloo Bhaina 2", cursive;
  max-width: 960px;
  margin: 0 auto;
  table {
    border-collapse: collapse;
    width: 100%;
  }

  th,
  td {
    text-align: left;
    padding: 8px;
    font-size: 15px;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  input {
    border: 1px solid black;
    padding: 8px;
    width: 100%;
    /*background-color:#f0f2f5;*/
  }

  input:focus {
    outline: none;
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

const Form001_page2Content = (props) => {
  const { info_form001_2, saveForm001_2 } = props;
  console.log(props);
  const [username, setUsername] = useState("");
  const getuser = () => {
    setUsername(sessionStorage.getItem("username"));
  };
  const { register, handleSubmit, errors } = useForm(); // initialise the hook
  const onSubmit = (data) => {
    //console.log('data', data)
    saveForm001_2(data);
    axios
      .post(`http://localhost:3001/form001-list/insert`, data)
      .then((res) => {
        console.log('res.data', res.data)
        openMessage();
      })
      .catch((error) => {
        console.log('pls intert data')
        openMessageError();
      });
  };
  const [history, setHistoty] = useState([])
  const [order_id , setOrder_id] = useState("")
  console.log('order_id = ',order_id)
  console.log('history = ',history)
  const getForm001Bysid = async () => {
    var found = await axios.get(
      `http://localhost:3001/form001/${sessionStorage.getItem('username')}`
    )
    console.log('found = ', found.data)
    setHistoty(JSON.parse(JSON.stringify(found.data)))
    console.log('found length',(found.data).length-1);
    console.log('order id last = ',(found.data[(found.data).length-1].order_id))
    setOrder_id((found.data[(found.data).length-1].order_id))
    if((found.data).length === 0)
    {
      setcCheckEmpty(true)
    }
  }
  const key = "updatable";
  const openMessage = () => {
    message.loading({ content: "Save...", key });
    setTimeout(() => {
      message.success({ content: "Saved!", key, duration: 2 });
      Router.push("/Form001page_uploadfile");
    }, 1000);
  };
  const openMessageError = () => {
    message.loading({ content: "Please complete all information.", key });
    setTimeout(() => {
      message.success({ content: "Saved!", key, duration: 2 });
    }, 1000);
  };


  useEffect(() => {
    getuser();
    getForm001Bysid();
  }, []);
  return (
    <StyledWrapper>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>แบบฟอร์ม</Breadcrumb.Item>
        <Breadcrumb.Item>เพิ่มคำสั่งซื้อพัสดุแบบปกติ 001</Breadcrumb.Item>
      </Breadcrumb>


          <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ overflowX: "auto" }}>
        <table>
        <tbody>
          <tr>
            <th>ลำดับ</th>
            <th>รายการ</th>
            <th>จำนวน</th>
            <th>หน่วย</th>
            <th>ราคา/หน่วย</th>
          </tr>
          <tr>
            <td>
              1
              <input
                name="sid"
                value={username}
                disabled={true}
                type="hidden"
                ref={register}
              ></input>
              <input
                name="order_id"
                value={order_id}
                disabled={true}
                type="hidden"
                ref={register}
              ></input>
            </td>
            <td>
              <input ref={register} type="text" name="l_detail_1"></input>
            </td>
            <td>
              <input ref={register} type="text" name="l_amount_1"></input>
            </td>
            <td>
              <input ref={register} type="text" name="l_unit_1"></input>
            </td>
            <td>
              <input ref={register} type="text" name="l_priceunit_1"></input>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <input ref={register} type="text" name="l_detail_2"></input>
            </td>
            <td>
              <input ref={register} type="text" name="l_amount_2"></input>
            </td>
            <td>
              <input ref={register} type="text" name="l_unit_2"></input>
            </td>
            <td>
              <input ref={register} type="text" name="l_priceunit_1"></input>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              <input ref={register} type="text" name="l_detail_3"></input>
            </td>
            <td>
              <input ref={register} type="text" name="l_amount_3"></input>
            </td>
            <td>
              <input ref={register} type="text" name="l_unit_3"></input>
            </td>
            <td>
              <input ref={register} type="text" name="l_priceunit_1"></input>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              <input ref={register} type="text" name="l_detail_4"></input>
            </td>
            <td>
              <input ref={register} type="text" name="l_amount_4"></input>
            </td>
            <td>
              <input ref={register} type="text" name="l_unit_4"></input>
            </td>
            <td>
              <input ref={register} type="text" name="l_priceunit_1"></input>
            </td>
          </tr>

          </tbody>
        </table>
      </div>
      <div className="center">
            <button className="example_c" type="submit">
              Submit
            </button>
            <button className="example_cancel">Cancel</button>
          </div>
          </form>
      <BackTop>
        <div style={style}>UP</div>
      </BackTop>
    </StyledWrapper>
  );
};

export default connect(
  (state) => state.Form001_2,
  Form001_2Action
)(Form001_page2Content);
