import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import ReactToPrint from 'react-to-print';
import { useRouter } from 'next/router'
import styled from 'styled-components'
const StyledWrapper = styled.div``

const GenpdfPage = props => {
    const componentRef = useRef();
  const router = useRouter()
  const { order_id } = router.query
  //console.log(order_id)

  const [history, setHistoty] = useState([])
  const getform001byorder_id = async () => {
    const found = await axios.get(
      `http://localhost:3001/form001/findbyorder/${order_id}`
    )
    console.log('found = ', found.data)
    setHistoty(JSON.parse(JSON.stringify(found.data)))
    console.log('history', history)
  }

  useEffect(() => {
    getform001byorder_id()
  }, [])
  return (
     <StyledWrapper>
         {history.map((data , index)=>{
             return (
                 <div key={index}>
                    <div> เอกสารที่ มอ. 696 / : {data.o_location}</div>
                    <div> ลงวันที่ {data.o_date}</div>
                    <div> ด้วยมหาวิทยาลัยการคอมพิวเตอร์มีความประสงค์ที่จะใช้พัสดุด้านล่างนี้เพื่อ {data.o_purpose}</div>
                    <div> ชื่อโครงการ (ถ้ามี) {data.o_projectname}</div>
                    <div> วันที่ต้องใช้พัสดุ {data.o_require}</div>
                    <div> รายละเอียดคุณลักษณะเฉพาะ/ขอบเขตงาน(ประทับตรามหาวิทยาลัยพร้อมผู้มีอำนาจลงนาม)  (จำนวนแผ่น) {data.o_specific}</div>
                    <div> บันทึกการแต่งตั้งคณะกรรมการกำหนดคุณลักษณะเฉพาะ/ขอบเขตงานและราคากลาง  (จำนวนแผ่น) {data.o_appointment}</div>
                    <div> บันทึกรายงานผลการจัดทำคุณลักษณะเฉพาะ/ขอบเขตงานและราคากลาง  (จำนวนแผ่น) {data.o_results}</div>
                    <div> คณะกรรมการพิจารณาผล ประธานกรรมการ {data.o_committee1}</div>
                    <div> คณะกรรมการพิจารณาผล คณะกรรมการ {data.o_committee2}</div>
                    <div> คณะกรรมการพิจารณาผล คณะกรรมการ {data.o_committee3}</div>
                    <div> คณะกรรมการตรวจรับพัสดุ ประธานกรรมการ {data.o_committee4}</div>
                    <div> คณะกรรมการตรวจรับพัสดุ คณะกรรมการ {data.o_committee5}</div>
                    <div> คณะกรรมการตรวจรับพัสดุ คณะกรรมการ {data.o_committee6}</div>
                    <div> เงินอุดหนุนจากรัฐบาล ปี {data.o_gvm_sub}</div>
                    <div> เงินรายได้ ปี {data.o_income}</div>
                    <div> เงินรายได้สะสม ปี {data.o_aml_income}</div>
                    <div> ทิศทาง {data.o_direction}</div>
                    <div> นโยบาย {data.o_policy}</div>
                    <div> ผลงาน {data.o_works}</div>
                    <div> งาน {data.o_task}</div>
                    <div> หมวดรายจ่าย {data.o_expense_cg}</div>
                    <div> หมวดย่อย {data.o_sub_cg}</div>
                    <div> ชื่อรายการ {data.o_list_n}</div>
                    <div> เงินอื่นๆโปรดระบุ (ตามที่แนบมาพร้อมนี้) {data.o_other_m}</div>
                 </div>
             )
         })}

         
     </StyledWrapper> 
  )
}

const Example = () => {
    const componentRef = useRef();
   
    return (
      <div>
        <ReactToPrint
          trigger={() => <button>Print this out!</button>}
          content={() => componentRef.current}
        />
        <GenpdfPage ref={componentRef} />
      </div>
    );
  };
  export default Example