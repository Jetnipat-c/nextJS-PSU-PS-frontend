import { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const StyledWrapper = styled.div`
.bg-image {
  /* The image used */
  background-image: url("../images/bg-blur.jpg");
  
  /* Add the blur effect */
  filter: blur(8px);
  -webkit-filter: blur(8px);
  
  /* Full height */
  height: 100%; 
  
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
`

function LoginPage () {

  return (
    <StyledWrapper>
      <div class="bg-image"></div>
    </StyledWrapper>
  )
}
export default LoginPage
