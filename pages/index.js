import React , { useState, useEffect } from 'react'
import Head from 'next/head';
import WithAuth from '../src/hoc/withAuth'
import styled from 'styled-components'
const StyledWrapper = styled.div`

`
function IndexPage() {
  return(
    <StyledWrapper>
       <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
      </Head>
      <Head>
        <meta name="viewport" content="initial-scale=1.2, width=device-width" key="viewport" />
      </Head>
      <p>Hello world!</p>
    </StyledWrapper>
  )
}
const WithTransfer =()=><WithAuth component={IndexPage} />
export default WithTransfer