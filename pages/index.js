import LoginPage from '../src/components/Login'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import axios from 'axios'
const StyledWrapper = styled.div`

`
function HomePage() {
  const [user,setUser] = useState('');
  const [pass,setPass] = useState('');
  const [profile, setProfile] = useState();

  useEffect(()=>{
    getprofile();
  },[])

  const login = async () => {
    const result = await axios.post('http://localhost:3001/userloginpsu/login',
    { username: user, password: pass },)
    console.log(result.data)
    sessionStorage.setItem('login',JSON.stringify({user: result.data}))
    
  }

  const getprofile = async () => {
    const profiles = sessionStorage.getItem('login',JSON.stringify(user))
    console.log('profiles',profiles)
    setProfile(profiles)
    //console.log('profile',profile)
    //console.log(sessionStorage.getItem('login',JSON.stringify({user})))
  }
  return (
  <div>
    <h1>Login PSU!</h1>
      <h3>username : <input type="text" onChange={(e)=>setUser(e.target.value)}></input> </h3>
      <h3>password : <input type="text" onChange={(e)=>setPass(e.target.value)}></input> </h3>
      <button type="submit" onClick={login}>Login</button>
      <button type="submit" onClick={getprofile}>Get profile</button>
      {profile}
  </div>
  )
}

export default HomePage