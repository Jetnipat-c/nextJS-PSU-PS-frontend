import { useState, useEffect } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
import styled from 'styled-components'
import Axios from 'axios'
const StyledWrapper = styled.div`
  .site-layout-content {
    background: #fff;
    padding: 24px;
    min-height: 280px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`
const Profile = () => {
  const [user, setUser] = useState('')
  const getuser = () => {
    setUser(sessionStorage.getItem('username'))
  }
  useEffect(() => {
    getuser(), getprofiledatabase()
  }, [])
  const [profile, setProfile] = useState({})
  const getprofiledatabase = async () => {
    const users = await Axios.get(
      `http://localhost:3001/users/${sessionStorage.getItem('username')}`,
      {
        headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` }
      }
    )
    console.log('user', users)
    setProfile(users.data)

    
  }
  return (
    <StyledWrapper>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Profile</Breadcrumb.Item>
        <Breadcrumb.Item>{user}</Breadcrumb.Item>
      </Breadcrumb>
      <div className='site-layout-content'>
        <div>รหัสนักศึกษา : {profile.sid}</div>
        <div>ชื่อ : {profile.firstname}</div>
        <div>นามสกุล : {profile.lastname}</div>
        <div>บัตรประจำตัวประชาชน : {profile.cid}</div>
      </div>
    </StyledWrapper>
  )
}
export default Profile
