import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Layout, Menu, Breadcrumb } from 'antd'
const { SubMenu } = Menu
const { Header, Content, Sider, Footer } = Layout


import WithAuth from '../src/hoc/withAuth'
import Example from '../src/components/Pages/Genpdf'
import styled from 'styled-components'

const StyledWrapper = styled.div`

`
const GenpdfPage = (props) => {
    const router = useRouter();
    const order_id = router.query.order_id;
    //console.log('order_id before send=',router.query.order_id);


  return (
    <StyledWrapper>
      <title>GenpdfPage</title>
            <Example order_id ={order_id}/>
    </StyledWrapper>
  )
}
const WithTransfer =()=><WithAuth component={GenpdfPage} />
export default WithTransfer
