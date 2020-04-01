import { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

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
    min-width: 320px;
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
`

function LoginPage () {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const [profile, setProfile] = useState()

  useEffect(() => {
    getprofile()
  }, [])

  const login = async () => {
    const result = await axios.post(
      'http://localhost:3001/userloginpsu/login',
      { username: user, password: pass }
    )
    console.log(result.data)
    sessionStorage.setItem('login', JSON.stringify({ user: result.data }))
  }

  const getprofile = async () => {
    const profiles = sessionStorage.getItem('login', JSON.stringify(user))
    console.log('profiles', profiles)
    setProfile(profiles)
    //console.log('profile',profile)
    //console.log(sessionStorage.getItem('login',JSON.stringify({user})))
  }
  return (
    <StyledWrapper>
      <div className='main'>
        <div className='box_login'>
          <h1>Login PSU</h1>
          <h3>
            username :{' '}
            <input type='text' onChange={e => setUser(e.target.value)}></input>{' '}
          </h3>
          <h3>
            password :{' '}
            <input type='text' onChange={e => setPass(e.target.value)}></input>{' '}
          </h3>
          <div className='box_btn'>
            <button type='submit' onClick={login}>
              Login
            </button>
            <button type='submit' onClick={getprofile}>
              Get profile
            </button>
            {profile}
          </div>
        </div>
      </div>
    </StyledWrapper>
  )
}
export default LoginPage
