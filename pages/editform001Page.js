import React from 'react'
import { useRouter } from 'next/router'
import { Layout } from 'antd'
const { Header, Content, Sider, Footer } = Layout
import HeaderComponent from '../src/components/Header'
import SiderComponent from '../src/components/Sider'
import FooterComponent from '../src/components/Footer'
import WithAuth from '../src/hoc/withAuth'
import EditForm001Content from '../src/components/Pages/EditForm001'
import styled from 'styled-components'
const StyledWrapper = styled.div``
const Pageeidtform001 = () => {
  const router = useRouter()
  const order_id = router.query.order_id
  //console.log('order_id inpage editform001page=',router.query.order_id);
  return (
    <StyledWrapper>
      <title>Editform001</title>
      <Layout>
        <HeaderComponent />
        <Layout>
          <SiderComponent />
          <Layout style={{ padding: '0 24px 24px' }}>
            <EditForm001Content order_id={order_id} />
          </Layout>
        </Layout>
        <FooterComponent />
      </Layout>
    </StyledWrapper>
  )
}
const WithTransfer = () => <WithAuth component={Pageeidtform001} />
export default WithTransfer
