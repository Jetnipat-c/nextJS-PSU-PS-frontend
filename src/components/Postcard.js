import { useState, useEffect } from 'react'
import styled from 'styled-components'
const StyledWrapper = styled.div`

`

const Postcard = props => {
    const {sid,loca,date} = props.data
    return(
        <StyledWrapper>
            <div>
              <h3>date : {date}</h3>  <p> sid : {sid}   loca :  {loca}  </p>
            </div>
        </StyledWrapper>
    )
}

export default Postcard