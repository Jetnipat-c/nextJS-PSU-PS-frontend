import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import ReactToPrint from "react-to-print";
import styled from "styled-components";
const StyledWrapper = styled.div`
  margin: 0;
  padding: 0;

  font: 12pt "Tahoma";
  * {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
  }

  .page {
    width: 21cm;
    min-height: 30.7cm;
    padding: 1cm;
    margin: 1cm auto;
    border: 1px #d3d3d3 solid;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }

  .subpage {
    padding: 0.2cm;

    height: 256mm;
  }

  @media print {
    .page {
      margin: 0;
      border: initial;
      border-radius: initial;
      width: initial;
      min-height: initial;
      box-shadow: initial;
      background: initial;
      page-break-after: always;
    }
  }

  .flex-container {
    display: flex;
    align-items: stretch;
    background-color: white;
  }

  .flex-container > div {
    background-color: white;
    color: white;
    padding-top: 5px;
    padding-bottom: 5px;
    margin-bottom: 25px;
    text-align: center;
    font-size: 15px;
  }

  .flex-containersub {
    display: flex;
    align-items: stretch;
  }

  .flex-containersub > div {
    color: black;
    padding-top: 5px;
    padding-bottom: 5px;
    margin-bottom: 10px;
    font-size: 15px;
  }
  table,
  td,
  th {
    border: 1px solid #ddd;
    text-align: left;
  }

  table {
    border-collapse: collapse;
    width: 100%;
  }

  th,
  td {
    padding: 15px;
  }
`;

class ComponentToPrint extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      order_id: props.order_id,
      info: [],
      info_list: [],
    };
  }
  componentDidMount() {
    axios
      .get(`http://localhost:3001/form001/findbyorder/${this.state.order_id}`)
      .then((response) => response.data)
      .then((data) => {
        this.setState({ info: data });
        console.log("info :", this.state.info);
      });

    axios
      .get(
        `http://localhost:3001/form001-list/byorder_id/${this.state.order_id}`
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({ info_list: data });
        console.log("info_list :", this.state.info_list);
      });
  }

  render() {
    return (
      <StyledWrapper>
        {this.state.info.map((data, index) => (
          <div key={index}>
            <div className="book">
              <div className="page">
                <div className="subpage">
                  <div className="flex-container">
                    <div style={{ flexGrow: "7", backgroundColor: "black" }}>
                      {" "}
                      แบบขอให้จัดหาพัสดุ
                      <br />
                      กรณีวงเงินครั้งหนึ่งไม่เกิน 5 แสนบาท
                    </div>
                    <div style={{ flexGrow: "2", backgroundColor: "blue" }}>
                      แบบจัดหา 001
                      <br />
                      วิธีเฉพาะเจาะจง
                    </div>
                  </div>
                  <div className="flex-containersub">
                    <div style={{ flexGrow: "7", textAlign: "end" }}>
                      เอกสารที่ มอ. 696 / &ensp; {data.o_location}
                    </div>
                  </div>
                  <div className="flex-containersub">
                    <div
                      style={{
                        flexGrow: "7",
                        textAlign: "end",
                        marginRight: "92px",
                      }}
                    >
                      ลงวันที่ &ensp; {data.o_date}
                    </div>
                  </div>
                  <h4>1) *** รายละเอียด</h4>
                  <div className="flex-containersub">
                    <div style={{ flexGrow: "7", textAlign: "start" }}>
                      {" "}
                      ด้วยมหาวิทยาลัยการคอมพิวเตอร์มีความประสงค์ที่จะใช้พัสดุด้านล่างนี้เพื่อ
                      &ensp;
                      {data.o_purpose}
                    </div>
                  </div>
                  <div className="flex-containersub">
                    <div style={{ flexGrow: "7", textAlign: "start" }}>
                      {" "}
                      ชื่อโครงการ (ถ้ามี) &ensp; {data.o_projectname}
                    </div>
                    <div style={{ flexGrow: "7", textAlign: "start" }}>
                      {" "}
                      วันที่ต้องใช้พัสดุ &ensp; {data.o_require}
                    </div>
                  </div>
                  <h4>
                    2) *** กำหนดรายละเอียดขอบเขตงาน/คุณลักษณะเฉพาะ ***
                    เอกสารแนบประทับตรามหาวิทยาลัยพร้อมลงนามทุกฉบับ
                  </h4>
                  <div className="flex-containersub">
                    <div style={{ flexGrow: "7", textAlign: "start" }}>
                      {" "}
                      รายละเอียดคุณลักษณะเฉพาะ/ขอบเขตงาน(ประทับตรามหาวิทยาลัยพร้อมผู้มีอำนาจลงนาม)
                      (จำนวนแผ่น) &ensp; {data.o_specific}
                    </div>
                  </div>

                  <div className="flex-containersub">
                    <div style={{ flexGrow: "7", textAlign: "start" }}>
                      {" "}
                      บันทึกการแต่งตั้งคณะกรรมการกำหนดคุณลักษณะเฉพาะ/ขอบเขตงานและราคากลาง
                      (จำนวนแผ่น) &ensp; {data.o_appointment}
                    </div>
                  </div>

                  <div className="flex-containersub">
                    <div style={{ flexGrow: "7", textAlign: "start" }}>
                      {" "}
                      บันทึกรายงานผลการจัดทำคุณลักษณะเฉพาะ/ขอบเขตงานและราคากลาง
                      (จำนวนแผ่น) &ensp; {data.o_results}{" "}
                    </div>
                  </div>

                  <h4>
                    3) *** กรรมการตรวจรับพัสดุ *** กรณีวงเงินไม่เกิน 1 แสนบาท
                    จะแต่งตั้งบุคคลใดบุคคลหนึ่งเป็นผู้ตรวจรับพัสดุก็ได้
                    แต่ถ้าเกิน 1 แสนบาท
                    ต้องแต่งตั้งคณะกรรมการตรวจรับพัสดุอย่างน้อย 3 คน
                  </h4>
                  <div className="flex-containersub">
                    <div style={{ flexGrow: "7", textAlign: "start" }}>
                      3.1&ensp; {data.o_committee1} &ensp; คณะกรรมการพิจารณาผล
                      ประธานกรรมการ{" "}
                    </div>
                  </div>
                  <div className="flex-containersub">
                    <div style={{ flexGrow: "7", textAlign: "start" }}>
                      3.2&ensp; {data.o_committee2} &ensp; คณะกรรมการพิจารณาผล
                      คณะกรรมการ{" "}
                    </div>
                  </div>
                  <div className="flex-containersub">
                    <div style={{ flexGrow: "7", textAlign: "start" }}>
                      3.3&ensp; {data.o_committee3} &ensp; คณะกรรมการพิจารณาผล
                      คณะกรรมการ{" "}
                    </div>
                  </div>
                  <div className="flex-containersub">
                    <div style={{ flexGrow: "7", textAlign: "start" }}>
                      3.4&ensp; {data.o_committee4} &ensp;
                      คณะกรรมการตรวจรับพัสดุ ประธานกรรมการ{" "}
                    </div>
                  </div>
                  <div className="flex-containersub">
                    <div style={{ flexGrow: "7", textAlign: "start" }}>
                      3.5&ensp; {data.o_committee5} &ensp;
                      คณะกรรมการตรวจรับพัสดุ คณะกรรมการ{" "}
                    </div>
                  </div>
                  <div className="flex-containersub">
                    <div style={{ flexGrow: "7", textAlign: "start" }}>
                      3.6&ensp; {data.o_committee6} &ensp;
                      คณะกรรมการตรวจรับพัสดุ คณะกรรมการ{" "}
                    </div>
                  </div>
                  <h4>
                    4) *** แหล่งเงิน ***
                    เอกสารที่เป็นสำเนาต้องรับรองสำเนาถูกต้องทุกฉบับ
                  </h4>
                  <div className="flex-containersub">
                    <div style={{ flexGrow: "2", textAlign: "start" }}>
                      {" "}
                      เงินอุดหนุนจากรัฐบาล ปี {data.o_gvm_sub}{" "}
                    </div>
                    <div style={{ flexGrow: "2", textAlign: "start" }}>
                      {" "}
                      เงินรายได้ ปี {data.o_income}
                    </div>
                    <div style={{ flexGrow: "2", textAlign: "start" }}>
                      {" "}
                      เงินรายได้สะสม ปี {data.o_aml_income}
                    </div>
                  </div>

                  <div className="flex-containersub">
                    <div style={{ flexGrow: "7", textAlign: "start" }}>
                      ทิศทาง &ensp; {data.o_direction}{" "}
                    </div>
                  </div>
                  <div className="flex-containersub">
                    <div style={{ flexGrow: "7", textAlign: "start" }}>
                      นโยบาย &ensp;{data.o_policy}{" "}
                    </div>
                  </div>
                  <div className="flex-containersub">
                    <div style={{ flexGrow: "7", textAlign: "start" }}>
                      ผลงาน &ensp; {data.o_works}{" "}
                    </div>
                    <div style={{ flexGrow: "7", textAlign: "start" }}>
                      งาน &ensp; {data.o_task}{" "}
                    </div>
                  </div>

                  <div className="flex-containersub">
                    <div style={{ flexGrow: "7", textAlign: "start" }}>
                      หมวดรายจ่าย &ensp; {data.o_expense_cg}{" "}
                    </div>
                    <div style={{ flexGrow: "7", textAlign: "start" }}>
                      หมวดย่อย &ensp; {data.o_sub_cg}{" "}
                    </div>
                  </div>

                  <div className="flex-containersub">
                    <div style={{ flexGrow: "7", textAlign: "start" }}>
                      ชื่อรายการ &ensp; {data.o_list_n}{" "}
                    </div>
                  </div>
                  <div className="flex-containersub">
                    <div style={{ flexGrow: "7", textAlign: "start" }}>
                      {" "}
                      เงินอื่นๆโปรดระบุ (ตามที่แนบมาพร้อมนี้) &ensp;{" "}
                      {data.o_other_m}{" "}
                    </div>
                  </div>
                  <div className="flex-containersub">
                    <div style={{ flexGrow: "7", textAlign: "end" }}>
                      (ลงชื่อ).....................................ผู้ขอ
                    </div>
                  </div>
                  <div className="flex-containersub">
                    <div
                      style={{
                        flexGrow: "7",
                        textAlign: "end",
                        marginRight: "10px",
                      }}
                    >
                      (.....................................){" "}
                    </div>
                  </div>
                  <div className="flex-containersub">
                    <div style={{ flexGrow: "7", textAlign: "end" }}>
                      {" "}
                      เบอร์ติดต่อ.....................................{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div>
          {this.state.info_list.map((datas, indexs) => (
            <div key={indexs}>
              <div className="book">
                <div className="page">
                  <div className="subpage">
                    <div>
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
                            <td>1</td>
                            <td>{datas.l_detail_1}</td>
                            <td>{datas.l_amount_1}</td>
                            <td>{datas.l_unit_1}</td>
                            <td>{datas.l_priceunit_1}</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>{datas.l_detail_2}</td>
                            <td>{datas.l_amount_2}</td>
                            <td>{datas.l_unit_2}</td>
                            <td>{datas.l_priceunit_2}</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>{datas.l_detail_3}</td>
                            <td>{datas.l_amount_3}</td>
                            <td>{datas.l_unit_3}</td>
                            <td>{datas.l_priceunit_3}</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>{datas.l_detail_4}</td>
                            <td>{datas.l_amount_4}</td>
                            <td>{datas.l_unit_4}</td>
                            <td>{datas.l_priceunit_4}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </StyledWrapper>
    );
  }
}

const Example = (props) => {
  const componentRef = useRef();
  const [order_id, setOrder_id] = useState(props.order_id);
  console.log("Example or_id = ", order_id);
  return (
    <div>
      <ReactToPrint
        trigger={() => <button style={{marginLeft:'47%',marginTop:'15px' }}>Print this out!</button>}
        content={() => componentRef.current}
      />
      <ComponentToPrint order_id={order_id} ref={componentRef} />
    </div>
  );
};
export default Example;
