import LoginPage from '../src/components/Login'
import styled from 'styled-components'
import Router from 'next/router'
import { useState, useEffect } from 'react'
import WithAuth from '../src/hoc/withAuth'
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
        {Router.push('/Mainpage_test')}
      </>
    )
  }
  
}

export default HomePage