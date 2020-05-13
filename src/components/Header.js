import React, { useState, useEffect } from 'react'
import Router from 'next/router'
import { Layout, Menu } from 'antd'
const { SubMenu } = Menu
const { Header, Content, Sider, Footer } = Layout
import styled from 'styled-components'
const StyledWrapper = styled.div``

const HeaderComponent = () => {
  const logout = () => {
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('token')
    Router.push('/')
  }
  const [username, setUsername] = useState('')
  const getuser = () => {
    setUsername(sessionStorage.getItem('username'))
  }
  const gotoPage = () => {
    Router.push('/homepage')
  }
  const gotoProfilePage = () => {
    Router.push('/formprofilepage')
  }
  useEffect(() => {
    getuser()
  }, [])

  return (
    <StyledWrapper>
      <Header className='header'>
        <div className='logo' />
        <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']}>
          <Menu.Item key='1'>
            <a onClick={gotoPage}>Purchasing system</a>
          </Menu.Item>
          <Menu.Item key='2'>
            <a onClick={gotoProfilePage}>{username}</a>
          </Menu.Item>
          <Menu.Item key='3'>
            <a onClick={logout}>SignOut</a>
          </Menu.Item>
        </Menu>
      </Header>
    </StyledWrapper>
  )
}
export default HeaderComponent
