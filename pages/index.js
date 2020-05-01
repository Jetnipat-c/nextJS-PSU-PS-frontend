import LoginPage from '../src/components/Login'
import styled from 'styled-components'
import Router from 'next/router'
import { useState, useEffect } from 'react'
import WithAuth from '../src/hoc/withAuth'
import MainPage from './main'
const StyledWrapper = styled.div`

`
function HomePage() {
  const [token, setToken] = useState(null);

  const CheckToken = async () => {
    setToken(sessionStorage.getItem('token'))
  }

  useEffect(() => {
    CheckToken()
  }, [])

  if(token === null){
    return (
      <>
        <LoginPage />
      </>
    )
  }
  else{
    return (
      <>
        <MainPage></MainPage>
      </>
    )
  }
  
}

export default HomePage