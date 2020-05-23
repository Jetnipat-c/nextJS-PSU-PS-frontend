import React from 'react'
import { Layout, Breadcrumb, Carousel } from 'antd'

const { Header, Content, Sider, Footer } = Layout

import styled from 'styled-components'
const StyledWrapper = styled.div`
  .text-content {
    margin-left: 15px;
  }
  .ant-carousel .slick-slide {
    text-align: center;
    height: 200px;
    line-height: 200px;
    background: #364d79;
    overflow: hidden;
  }

  .ant-carousel .slick-slide h3 {
    color: #fff;
  }
  .ant-carousel .slick-dots-bottom {
    bottom: 12px;
    /* margin-top: 90%; */
    margin-left: 0;
  }
`

const ContentComponent = () => {
  return (
    <StyledWrapper>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Announce</Breadcrumb.Item>
      </Breadcrumb>
      <Carousel autoplay>
        <div>
          {/* <img src="/bg_login.jpg" alt="bg1" /> */}
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
      </Carousel>
      <Content>
        <div>
          <h2>Patch Frontend</h2>
          <div className='text-content'>
            <div>- 6:52 PM 5/4/2020 ออกแบบหน้าเว็ปใหม่</div>
            <div>- 3:12 AM 5/6/2020 ทำหน้าแสดงผลประวัติรายการ</div>
            <div>- 4:19 AM 5/6/2020 เพิ่มปุ่มลบรายการ</div>
            <div>
              - 6:05 AM 5/6/2020 เพิ่มปุ่มแก้ไขรายการ reload page เมื่อกด Delete
            </div>
            <div>- 8:05 PM 5/10/2020 ออกแบบหน้าประวัติทำรายการใหม่</div>
            <div>- 8:44 PM 5/10/2020 แก้ปุ่ม Submit , Cancel</div>
            <div>- 11:09 AM 5/11/2020 ย้ายปุ่มให้ Responsive</div>
            <div>- 1:48 AM 5/13/2020 ออกแบบหน้า View , GenPDF</div>
          </div>
        </div>
        <h2>Patch Backend</h2>
        <div className='text-content'>
          <div>- 2:23 AM 5/5/2020 เพิ่ม Model ใหม่เข้าไป</div>
          <div>- 4:19 AM 5/6/2020 เพิ่ม Delete API</div>
          <div>- 6:05 AM 5/6/2020 เพิ่ม Patch API</div>
          <div>- 1:48 AM 5/13/2020 เพิ่ม Get API By order_id</div>
        </div>
        <h2>Patch Function</h2>
        <div className='text-content'>
          <div>- 6:52 PM 5/4/2020 ปรับปรุงฟังก์ชันจากเวอร์ชั่นเก่า</div>
          <div>- 2:23 AM 5/4/2020 แก้ไข้ฟังก์ชันดึงข้อมูลส่วนตัว</div>
          <div>- 4:19 AM 5/6/2020 เพิ่มฟังก์ชัน Delete </div>
          <div>- 4:19 AM 5/15/2020 เพิ่ม Redux</div>
          <div>
            - 6:05 AM 5/6/2020 เพิ่มฟังก์ชัน Patch 'Editform001' , Router.reload
          </div>
          <div>- 6:06 PM 5/10/2020 แก้ฟังก์ชัน Signin ขณะใส่รหัสผิด</div>
          <div>- 9:39 PM 5/10/2020 เพิ่มฟังก์ชันลิงค์ไปยัง ProfilePage</div>
          <div>- 1:48 AM 5/13/2020 เพิ่มฟังก์ชัน View form001 , GenPDF </div>
          <div>- 6:54 PM 5/13/2020 GenPDF sucessfuly </div>
        </div>
        <h2>Problem list</h2>
        <div className='text-content'>
          <div>
            - 2:23 AM 5/4/2020 บันทึกค่า Null ยังไม่ได้ และ กด Purchasing system
            แล้วเป็นการบันทึกข้อมูล ***ปัญหาที่ css .button * Fixed
          </div>
          <div>
            - 3:12 AM 5/6/2020 css button ' Show info ' รอปรับปรุง * Fixed
          </div>
          <div>- 8:44 PM 5/10/2020 บันทึกค่า Null ยังไม่ได้</div>
          <div>- 9:39 PM 5/10/2020 Sider not Responsive * Fixed</div>
          <div>- 9:55 PM 5/10/2020 Responsive ไม่ทุกอุปกรณ์</div>
          <div>
            - 9:55 PM 5/10/2020 หน้า Homepage Carousel ไม่ตรงกลาง * Fixed ,
            จัดหน้า GenPDF
          </div>
        </div>
      </Content>
    </StyledWrapper>
  )
}
export default ContentComponent
