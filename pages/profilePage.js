import react ,  { useState , useEffect } from 'react'
import Router from 'next/router'
import WithAuth from '../src/hoc/withAuth'
import Profile from '../src/components/Profile'
import { Layout, Menu, Breadcrumb } from 'antd'
const { Header, Content, Footer } = Layout
import styled from 'styled-components'
const StyledWarpper = styled.div`
  .site-layout-content {
    background: #fff;
    padding: 24px;
    min-height: 280px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  #components-layout-demo-top .logo {
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 24px 16px 0;
    float: left;
  }
`
const ProfilePage = () =>{
    const logout = () =>{
        sessionStorage.removeItem('username')
        sessionStorage.removeItem('token')
        Router.push('/')
    }
    useEffect(() => {
        componentsSwtich()
      }, [])
    const [selectedMenuItem, setSelectedMenuItem] = useState('1')
  const componentsSwtich = key => {
    switch (key) {
      case '1':
        return (Router.push('/main'))

      case '3':
        return (logout())
      default:
        break
    }
  }

  const gotomain = () =>{
      Router.push('/')
  }
    return(
        <StyledWarpper>
            <title>ProfilePage</title>
            <Layout className='layout'>
        <Header>
          <div className='logo' />
          <Menu
            theme='dark'
            selectedKeys={selectedMenuItem}
            mode='horizontal'
            onClick={e => setSelectedMenuItem(e.key)}
          >
            <Menu.Item key='1'>
               <a onClick={gotomain}>MainPage</a> 
                </Menu.Item>
            <Menu.Item key='3'>Logout</Menu.Item>
          </Menu>
        </Header>
        
        <Content style={{ padding: '0 50px' }}>
          <div>
          <Profile/>
          </div>
        </Content>

        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
       
        </StyledWarpper>
    )
}
const WithTransfer =()=><WithAuth component={ProfilePage} />
export default WithTransfer