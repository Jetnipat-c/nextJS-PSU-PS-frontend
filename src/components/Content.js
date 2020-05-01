import { Layout, Menu, Breadcrumb } from 'antd'
import { useState, useEffect } from 'react'
import OptionPage from './Option'
import ProfilePage from './Profile'
import styled from 'styled-components'
const Content = (prop) => {
const { Header, Content, Footer } = Layout

const StyledWrapper = styled.div`
  .site-layout-content {
    background: #fff;
    padding: 24px;
    min-height: 280px;
    display: flex;
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
  return (
    <StyledWrapper>

       <Content style={{ padding: '0 50px' }}>
          sadasd
        </Content>

    </StyledWrapper>
  )
}
export default Content
