import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import Router from 'next/router'

import styled from 'styled-components'
const StyledWrapper = styled.div`

`
const LoginPage = () => {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const signin = async () => {
    const result = await axios.post(
      'http://localhost:3001/auth/login',
      { username: user, password: pass }
    )
    // console.log('result data',result.data)
    // console.log('username',user)
    sessionStorage.setItem('token', (  result.data.access_token ))
    sessionStorage.setItem('username', user)
    Router.push('/main')
  }
  return(
    <StyledWrapper>
      <Container maxWidth="sm">
        dsfdsf
      </Container>
      
    </StyledWrapper>
  )
}
export default  LoginPage