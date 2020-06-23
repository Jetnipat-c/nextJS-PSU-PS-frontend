import React, { useState, useEffect } from "react";
import * as axios from "axios";
import Router from "next/router";
import { useForm } from "react-hook-form";
import styled from "styled-components";
const StyledWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  background-color: white;
`;

const Form002Content = (props) => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="header">
          <div>
            <p>
              ส่วนงาน<input type="text" name="text"></input>
            </p>
          </div>
          <div>
            <span>ที่</span>
            <input type="text" name="text"></input>
            <span>วันที่</span>
            <input type="text" name="text"></input>
          </div>
          <div>
            <p>
              เรื่อง<input type="text" name="text"></input>
            </p>
          </div>
          <div>
            <p>
              เรียน<input type="text" name="text"></input>(ผู้มีอำนาจอนุมัติ)
            </p>
          </div>
          <div>
            <span>ด้วย หน่วยงาน</span>
            <input type="text" name="text"></input>
            <span>สังกัด</span>
            <input type="text" name="text"></input>
          </div>
          <div>
            มีความจำเป็นต้องดำเนินการจัดซื้อจัดจ้างไปก่อนแล้ว
            จึงไม่สามารถดำเนินการขั้นตอนปกติตามระเบียบกระทรวงการคลังว่าด้วยการจัดซื้อจัดจ้างและการบริหารพัสดุภาครัฐ
            พ.ศ. 2560 กำหนดได้ จำนวน
          </div>
        </div>
        <div>
          <p>
            รายการ วงเงิน<input type="text" name="text"></input>เนื่องจาก
          </p>
        </div>
        <div>
          <input type="checkbox" id="myCheck" />{" "}
          ได้รับการผ่อนผันตามหนังสือคณะกรรมการวินิจฉัยปัญหาการจัดซื้อจัดจ้างและการบริหารพัสดุภาครัฐ
          ที่ กค (กวจ) 0405.2/ว119 ลงวันที่ 9 มีนาคม 2561
          ซึ่งเป็นรายการเกี่ยวกับค่าใช้จ่ายตาม ตาราง 1
        </div>
      </div>
      <div>
        <p>
          ลำดับที่<input type="text" name="text"></input>
        </p>
      </div>
      <div>
        <input type="checkbox" id="myCheck" />{" "}
        มีความจำเป็นเร่งด่วนเกิดเหตุการณ์ไม่อาจคาดหมายได้ ตามมาตรา 56 วรรคหนึ่ง
        (1) (ค)
      </div>
      <div>
        <p>
          ลำดับที่<input type="text" name="text"></input>
        </p>
      </div>
      <div>
        <p>โดยเบิกจ่ายให้แก่</p>
        <p>
          1<input type="text" name="text"></input>เป็นเงิน
          <input type="text" name="text"></input>บาท
        </p>
        <p>
          2<input type="text" name="text"></input>เป็นเงิน
          <input type="text" name="text"></input>บาท
        </p>
        <p>
          3<input type="text" name="text"></input>เป็นเงิน
          <input type="text" name="text"></input>บาท
        </p>
        <p>
          บาทโดยเบิกจ่ายจากแหล่งเงิน<input type="text" name="text"></input>
          แผนงาน<input type="text" name="text"></input>บาท
        </p>
        <p>
          ผลผลิต<input type="text" name="text"></input>ประเภท
          <input type="text" name="text"></input>บาท
        </p>
      </div>
      <div>
        <h2>กรรมการตรวจรับพัสดุ</h2>
        <p>
          กรณีวงเงินไม่เกิน 1 แสนบาท
          จะแต่งตั้งบุคคลใดบุคคลหนึ่งเป็นผู้ตรวจรับพัสดุก็ได้ แต่ถ้าเกิน 1
          แสนบาท ต้องแต่งตั้งคณะกรรมการตรวจรับพัสดุอย่างน้อย 3 คน
        </p>
      </div>
      <div>
        <p>โดยเบิกจ่ายให้แก่</p>
        <p>
          1<input type="text" name="text"></input>ประธานกรรมการ/ผู้ตรวจรับพัสดุ
        </p>
        <p>
          2<input type="text" name="text"></input>กรรมการ
        </p>
        <p>
          3<input type="text" name="text"></input>กรรมการ
        </p>
      </div>
      <div>
        <h2>หลักฐานที่แนบ</h2>
        <p>
        <input type="checkbox" id="myCheck" />{" "} บิลส่งของ/ใบเสร็จรับเงิน 
        <input type="checkbox" id="myCheck" />{" "} ใบตรวจรับวัสดุ 
        <input type="checkbox" id="myCheck" />{" "} ใบเบิกวัสดุ 
        <input type="checkbox" id="myCheck" />{" "} สัญญายืมเงิน
        </p>
      </div>
      <div>
        <p>
          จึงเรียนมาเพื่อโปรดพิจารณาอนุมัติการดำเนินการจัดซื้อจัดจ้าง
          ตามรายละเอียดดังกล่าวข้างต้น
        </p>
      </div>
      <div>
        <p>
          (ลงชื่อ)<input type="text" name="text"></input>ผู้ขอ(
          <input type="text" name="text"></input>)
        </p>
        <p>
          เบอร์ติดต่อ<input type="text" name="text"></input>
        </p>
      </div>
      <div>
        <h2>หลักฐานที่แนบ</h2>
        <p>เรียน หัวหน้างานการเงินและพัสดุ</p>
        <p>
          <input type="checkbox" id="myCheck" />{" "}
          ได้ตรวจสอบแล้วปรากฏว่าเอกสารถูกต้อง ครบถ้วน
          เป็นไปตามกฏ/ระเบียบที่เกี่ยวข้อง จึงเห็นสมควรอนุมัติตามที่เสนอ
        </p>
        <p>
          ลงชื่อ<input type="text" name="text"></input>เจ้าหน้าที่พัสดุ
        </p>
      </div>
      <div>
        <h2>ความเห็นของผู้มีอำนาจอนุมัติ</h2>
        <input type="checkbox" id="myCheck" /> อนุมัติ
        <input type="checkbox" id="myCheck" /> ไม่อนุมัติ
        <p>
          ลงชื่อ<input type="text" name="text"></input>ผู้อนุมัติ
        </p>
      </div>
    </StyledWrapper>
  );
};

export default Form002Content;
