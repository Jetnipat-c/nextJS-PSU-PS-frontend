import { useState, useEffect } from 'react'
import DetialHistory from '../src/components/DetialHistory'
import styled from 'styled-components'
const StyledWrapper = styled.div`

`
const Showdetial = () =>{
    return(
        <StyledWrapper>
            <DetialHistory></DetialHistory>
        </StyledWrapper>
    )
}
export default Showdetial