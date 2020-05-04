import react , { useState, useEffect } from 'react'
import WithAuth from '../src/hoc/withAuth'
import styled from 'styled-components'
const StyledWrapper = styled.div`

`
function IndexPage() {
  return(
    <StyledWrapper>
      <title>Index</title>
    </StyledWrapper>
  )
}
const WithTransfer =()=><WithAuth component={IndexPage} />
export default WithTransfer