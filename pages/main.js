import styled from 'styled-components'
import { useState, useEffect } from 'react'
import * as axios from 'axios'
import { useForm } from 'react-hook-form'
import {
  Layout,
  Menu,
  Breadcrumb,
  Form,
  Input,
  Button,
  Radio,
  Row,
  Col,
  Checkbox
} from 'antd'
import Form001 from '../src/components/Form001'
const StyledWrapper = styled.div`
  
`


function MainPage () {
  
  return (
    <StyledWrapper>
      <Form001></Form001>
    </StyledWrapper>
  )
}
export default MainPage
