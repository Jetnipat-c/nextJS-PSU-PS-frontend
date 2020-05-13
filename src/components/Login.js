import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import Router from 'next/router'
const StyledWrapper = styled.div`
  .main {
    display: flex;
    justify-content: center;
    align-items: center;
    //    background : DarkGray ;
    width: 100;
    height: 100vh;
    background-image: url(../static/images/bg.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .box_login {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    min-width: 300px;
    min-height: 200px;
    background-color: rgba(255, 255, 255, 0.9);
  }
  .box_btn {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  button {
    margin: 10px;
  }
  h1 {
    margin-top: 10px;
    font-family: 'Roboto';
    font-weight: 600;
    color: rgb(90, 90, 90);
  }
`

function LoginPage () {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const [profile, setProfile] = useState()

  const onFinish = values => {
    //console.log('Received values of form: ', values)
  }

  useEffect(() => {
    getprofile()
  }, [])

  const login = async () => {
    const result = await axios
      .post('http://localhost:3001/auth/login', {
        username: user,
        password: pass
      })
      .then(result => {
        sessionStorage.setItem('token', result.data.access_token)
        sessionStorage.setItem('username', user)
        Router.push('/homepage')
      })
      .catch(result => {
        if (result.status == undefined) {
          alert('Password or user is incorrect')
        }
      })
    // console.log('result data',result.data)
    // console.log('username',user)
  }

  const getprofile = async () => {
    const profiles = sessionStorage.getItem('login', JSON.stringify(user))
    //console.log('profiles', profiles)
    setProfile(profiles)
    //console.log('profile',profile)
    //console.log(sessionStorage.getItem('login',JSON.stringify({user})))
  }
  return (
    <StyledWrapper>
      <div className='main'>
        <div className='box_login'>
          <h1>Login PSU</h1>
          <Form
            name='normal_login'
            className='login-form'
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name='username'
              rules={[
                { required: true, message: 'Please input your Username!' }
              ]}
            >
              <Input
                prefix={<UserOutlined className='site-form-item-icon' />}
                placeholder='Username'
                onChange={e => setUser(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              name='password'
              rules={[
                { required: true, message: 'Please input your Password!' }
              ]}
            >
              <Input
                prefix={<LockOutlined className='site-form-item-icon' />}
                type='password'
                placeholder='Password'
                onChange={e => setPass(e.target.value)}
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name='remember' valuePropName='checked' noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
            </Form.Item>

            <Form.Item>
              <Button
                type='primary'
                htmlType='submit'
                className='login-form-button'
                onClick={login}
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </StyledWrapper>
  )
}
export default LoginPage
