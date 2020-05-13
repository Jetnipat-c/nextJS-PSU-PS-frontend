import React from 'react'
import { Layout } from 'antd'
const { Header, Content, Sider, Footer } = Layout
import HeaderComponent from '../src/components/Header'
import SiderComponent from '../src/components/Sider'
import FooterComponent from '../src/components/Footer'
import WithAuth from '../src/hoc/withAuth'
import ProfileContent from '../src/components/Pages/Profile'
import styled from 'styled-components'
const StyledWrapper = styled.div``
const Pageprofile = () => {
  return (
    <StyledWrapper>
      <title>ProfilePage</title>
      <Layout>
        <HeaderComponent />
        <Layout>
          <SiderComponent />
          <Layout style={{ padding: '0 24px 24px' }}>
            <ProfileContent />
          </Layout>
        </Layout>
        <FooterComponent />
      </Layout>
    </StyledWrapper>
  )
}
const WithTransfer = () => <WithAuth component={Pageprofile} />
export default WithTransfer
