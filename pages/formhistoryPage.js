import React from 'react'
import { Layout, Menu } from 'antd'
const { Header, Content, Sider, Footer } = Layout
import HeaderComponent from '../src/components/Header'
import SiderComponent from '../src/components/Sider'
import FooterComponent from '../src/components/Footer'
import WithAuth from '../src/hoc/withAuth'
import HistoryContent from '../src/components/Pages/History'
import styled from 'styled-components'
const StyledWrapper = styled.div``
const Pagehistory = () => {
  return (
    <StyledWrapper>
      <title>Form001historyPage</title>
      <Layout>
        <HeaderComponent />
        <Layout>
          <SiderComponent />
          <Layout style={{ padding: '0 24px 24px' }}>
            <HistoryContent />
          </Layout>
        </Layout>
        <FooterComponent />
      </Layout>
    </StyledWrapper>
  )
}
const WithTransfer = () => <WithAuth component={Pagehistory} />
export default WithTransfer
