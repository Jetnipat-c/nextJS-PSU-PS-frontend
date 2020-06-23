import React, { useState, useEffect } from "react";
import * as axios from "axios";
import Router from "next/router";
import { useForm } from "react-hook-form";
import styled from "styled-components";
const StyledWrapper = styled.div`
  /* max-width: 960px;
  margin: 0 auto;
  background-color: white;
  border-radius: 10px; */
  .grid-container {
    display: grid;
    grid-template-columns: 1fr;
    margin: 0 auto;
    background-color: #2196f3;
    padding: 10px;
    max-width: 960px;
  }
  .grid-item {
    display: grid;
    grid-template-columns: 1fr;
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.8);
    padding: 20px;
    font-size: 20px;
    /* text-align: center; */
  }
  p {
    margin-bottom: 0px;
  }
  input {
    margin-left: 15px;
    margin-right: 15px;
  }
  .grid-item :nth-child(2) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.8);
    padding: 20px;
    font-size: 20px;
    /* text-align: center; */
  }
  .grid-item :nth-child(5) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.8);
    padding: 20px;
    font-size: 20px;
    /* text-align: center; */
  }
  .grid-item :nth-child(7) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.8);
    padding: 20px;
    font-size: 20px;
    /* text-align: center; */
  }
  .grid-item :nth-child(13) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.8);
    padding: 20px;
    font-size: 20px;
    /* text-align: center; */
  }
  .grid-item :nth-child(14) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.8);
    padding: 20px;
    font-size: 20px;
    /* text-align: center; */
  }
  .grid-item :nth-child(15) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.8);
    padding: 20px;
    font-size: 20px;
    /* text-align: center; */
  }

  @media only screen and (max-width: 320px) {
    input {
      width: 200px;
    }
  }
`;

const Form002Content = (props) => {
  return (
    <StyledWrapper>
      <div className="grid-container">
        <div className="grid-item">
          <p>
            ส่วนงาน<input type="text" name="text"></input>
          </p>
        </div>
        <div className="grid-item">
          <span>
            ที่<input type="text" name="text"></input>
          </span>

          <span>
            วันที่<input type="text" name="text"></input>
          </span>
        </div>
        <div className="grid-item">
          <p>
            เรื่อง<input type="text" name="text"></input>
          </p>
        </div>
        <div className="grid-item">
          <p>
            เรียน<input type="text" name="text"></input>(ผู้มีอำนาจอนุมัติ)
          </p>
        </div>
        <div className="grid-item">
          <span>
            ด้วย หน่วยงาน<input type="text" name="text"></input>
          </span>

          <span>
            สังกัด<input type="text" name="text"></input>
          </span>
        </div>
        <div className="grid-item">
          <p>
            มีความจำเป็นต้องดำเนินการจัดซื้อจัดจ้างไปก่อนแล้ว
            จึงไม่สามารถดำเนินการขั้นตอนปกติตามระเบียบกระทรวงการคลังว่าด้วยการจัดซื้อจัดจ้างและการบริหารพัสดุภาครัฐ
            พ.ศ. 2560 กำหนดได้{" "}
          </p>
        </div>
        <div className="grid-item">
          <span>
            จำนวน<input type="text" name="text"></input>รายการ
          </span>

          <span>
            วงเงิน<input type="text" name="text"></input>เนื่องจาก
          </span>
        </div>
        <div className="grid-item">
          <p>
            <input type="checkbox" id="myCheck" />
            ได้รับการผ่อนผันตามหนังสือคณะกรรมการวินิจฉัยปัญหาการจัดซื้อจัดจ้างและการบริหารพัสดุภาครัฐ
            ที่ กค (กวจ) 0405.2/ว119 ลงวันที่ 9 มีนาคม 2561
            ซึ่งเป็นรายการเกี่ยวกับค่าใช้จ่ายตาม ตาราง 1
          </p>
        </div>
        <div className="grid-item">
          <p>
            ลำดับที่<input type="text" name="text"></input>
          </p>
        </div>
        <div className="grid-item">
          <p>
            <input type="checkbox" id="myCheck" />
            มีความจำเป็นเร่งด่วนเกิดเหตุการณ์ไม่อาจคาดหมายได้ ตามมาตรา 56
            วรรคหนึ่ง (1) (ค) หรือกรณีมีความจำเป็นต้องใช้พัสดุุนั้นโดยฉุกเฉิน
            มาตรา 56 วรรคหนึ่ง (2)(ง)
          </p>
        </div>
        <div className="grid-item">
          <p>
            เนื่องจาก<input type="text" name="text"></input>
          </p>
        </div>
        <div className="grid-item">โดยเบิกจ่ายให้แก่</div>
        <div className="grid-item">
            <span>
                1<input type="text" name="text"></input> เป็นเงิน
            </span>
            <span>
            
            <input type="text" name="text"></input>บาท
            </span>
        </div>
        <div className="grid-item">
            <span>
                2<input type="text" name="text"></input> เป็นเงิน
            </span>
            <span>
            
            <input type="text" name="text"></input>บาท
            </span>
        </div>
        <div className="grid-item">
            <span>
                3<input type="text" name="text"></input> เป็นเงิน
            </span>
            <span>
            
            <input type="text" name="text"></input>บาท
            </span>
        </div>
        <div className="grid-item">9</div>
        <div className="grid-item">9</div>
        <div className="grid-item">9</div>
      </div>
    </StyledWrapper>
  );
};

export default Form002Content;
