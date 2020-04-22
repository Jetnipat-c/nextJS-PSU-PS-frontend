import styled from 'styled-components'
import React from "react";
import {Layout,Menu,Breadcrumb,} from 'antd'
import OptionPage from '../src/components/Option'
const { Header, Content, Footer } = Layout
const StyledWrapper = styled.div`
  .site-layout-content {
    background: #fff;
    padding: 24px;
    min-height: 280px;
    display:flex;
    flex-direction: row;
    justify-content: space-around;
  }
  #components-layout-demo-top .logo {
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 24px 16px 0;
    float: left;
  }
`
function MainPage () {
  
  return (
    <StyledWrapper>
      <Layout className='layout'>
        <Header>
          <div className='logo' />
          <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']}>
            <Menu.Item key='1'>nav 1</Menu.Item>
            <Menu.Item key='2'>nav 2</Menu.Item>
            <Menu.Item key='3'>nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className='site-layout-content'>
            <OptionPage></OptionPage>
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
