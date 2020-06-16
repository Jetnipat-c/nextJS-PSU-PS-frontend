import React from 'react'
import { Layout } from 'antd'
const { Header, Content, Sider, Footer } = Layout
import HeaderComponent from '../src/components/Header'
import SiderComponent from '../src/components/Sider'
import ContentComponent from '../src/components/Content'
import FooterComponent from '../src/components/Footer'
import WithAuth from '../src/hoc/withAuth'
import styled from 'styled-components'
const StyledWrapper = styled.div`


`
const HomePage = () => {
  return (
    <StyledWrapper>
      <title>HomePage</title>
      <Layout>
        <HeaderComponent />
        <Layout>
          <SiderComponent />
          <Layout style={{ padding: '0 24px 24px' }}>
            <ContentComponent />
          </Layout>
        </Layout>
        <FooterComponent />
      </Layout>
    </StyledWrapper>
  )
}
const WithTransfer =()=><WithAuth component={HomePage} />
export default WithTransfer
