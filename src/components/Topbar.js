import { Layout, Menu, Breadcrumb } from 'antd'
import { useState, useEffect } from 'react'
import OptionPage from './Option'
import ProfilePage from './Profile'
import Router from 'next/router'
const Topbar = () => {
const { Header, Content, Footer } = Layout
  const [selectedMenuItem, setSelectedMenuItem] = useState('1')
  const logout = () => {
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('token')
    Router.push('/')
  }
  useEffect(() => {
    componentsSwtich()
  }, [])
  const componentsSwtich = key => {
    switch (key) {
      case '1':
        return (Router.replace('/'))
      case '2':
        return <ProfilePage />
      case '3':
        return logout()
      default:
        break
    }
  }
  return (
    <div>

        <Header>
          <div className='logo' />
          <Menu
            theme='dark'
            selectedKeys={selectedMenuItem}
            mode='horizontal'
            onClick={e => setSelectedMenuItem(e.key)}
          >
            <Menu.Item key='1'>MainPage</Menu.Item>
            <Menu.Item key='2'>Profile</Menu.Item>
            <Menu.Item key='3'>Logout</Menu.Item>
          </Menu>
        </Header>
    </div>
  )
}
export default Topbar
