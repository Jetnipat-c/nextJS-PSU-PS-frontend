import styled from 'styled-components'
import { Layout, Menu, Breadcrumb, Form, Input, Button, Radio } from 'antd'
const StyledWrapper = styled.div`
  .site-layout-content {
    // display: flex;
    // justify-content: flex-end;
    background: #fff;
    padding: 24px;
    min-height: 280px;
  }
  #components-layout-demo-top .logo {
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 24px 16px 0;
    float: left;
  }
  .topic {
    text-align: left;
    #text {
      padding: 10px 10px 0 0;
    }
  }
  .titlepage{
    text-align: center;
    min-width:150px;
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 24px;
}
`
const { Header, Content, Footer } = Layout

function MainPage () {
  const FormLayoutDemo = () => {
    const [form] = Form.useForm()
    const [formLayout, setFormLayout] = useState('horizontal')

    const onFormLayoutChange = ({ layout }) => {
      setFormLayout(layout)
    }

    const formItemLayout =
      formLayout === 'horizontal'
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 }
          }
        : null

    const buttonItemLayout =
      formLayout === 'horizontal'
        ? {
            wrapperCol: { span: 14, offset: 4 }
          }
        : null
  }
  return (
    <StyledWrapper>
      <Layout className='layout'>
        <Header>
          <div className='logo' />
          <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']}>
            <Menu.Item key='1'>nav 1</Menu.Item>
            <Menu.Item key='2'>nav 2</Menu.Item>
            <Menu.Item key='3'>nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>
              <a href='/Main'>Main</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>User : </Breadcrumb.Item>
          </Breadcrumb>
          <div className='site-layout-content'>
          <div className="titlepage">
                    แบบขอจัดหาพัสดุของสำนักงานอธิการบดีวิทยาเขตภูเก็ต กรณีวงเงินครั้งหนึ่งไม่เกิน 5 แสนบาท ที่มิใช่ก่อสร้าง
            </div>
            <div className='topic'>
              <span id='text'>เอกสารที่ มอ. 696 /</span>
              <Input style={{ width: 150 }} placeholder='27/11/2541' />
            </div>

          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </StyledWrapper>
  )
}
export default MainPage
