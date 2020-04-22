import { useState, useEffect } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
import styled from 'styled-components'
const StyledWrapper = styled.div`
  .site-layout-content {
    background: #fff;
    padding: 24px;
    min-height: 280px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`
const ProfilePage = () => {
  const [user, setUser] = useState('')
  const getuser = () => {
    setUser(sessionStorage.getItem('username'))
  }
  useEffect(() => {
    getuser()
  }, [])

  return (
    <StyledWrapper>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Profile</Breadcrumb.Item>
        <Breadcrumb.Item>{user}</Breadcrumb.Item>
      </Breadcrumb>
      <div className='site-layout-content'>Prfile</div>
    </StyledWrapper>
  )
}
export default ProfilePage
