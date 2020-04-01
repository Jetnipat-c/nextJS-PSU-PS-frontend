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
    background-color: hsla(120, 33%, 99%, 0.952);
  }
  .box_btn {
    display: flex;
    align-items: center;
    justify-content: center;
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
        <div className='container'>
          <div className='box_login'>
            <h1>Login PSU!</h1>
            <h3>
              username :{' '}
              <input
                type='text'
                onChange={e => setUser(e.target.value)}
              ></input>{' '}
            </h3>
            <h3>
              password :{' '}
              <input
                type='text'
                onChange={e => setPass(e.target.value)}
              ></input>{' '}
            </h3>
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
