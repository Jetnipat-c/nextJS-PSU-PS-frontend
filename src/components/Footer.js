import React from 'react'
import { Layout, Menu } from 'antd'

const { SubMenu } = Menu
const { Header, Content, Sider, Footer } = Layout

import styled from 'styled-components'
const StyledWrapper = styled.div``
const FooterComponent = () => {
  return (
    <StyledWrapper>
      <Footer style={{ textAlign: 'center'}}>
        Copyright © 2020 CoE ระบบจัดซื้อ Purchasing system
      </Footer>
    </StyledWrapper>
  )
}
export default FooterComponent
