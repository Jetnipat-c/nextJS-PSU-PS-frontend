import { useState } from "react";
import axios from "axios";
function HomePage() {
  const [user,setUser] = useState('');
  const [pass,setPass] = useState('');
  const [profile, setProfile] = useState([]);
  const login = async () => {
    const result = await axios.post('http://localhost:3001/userloginpsu/login',
    { username: user, password: pass },)
    console.log("xxxxx")
    console.log(result.data)
    sessionStorage.setItem('login',JSON.stringify({user: result.data}))
  }

  const getprofile = async (e) => {
    const profile = sessionStorage.getItem('login',JSON.stringify({user}))
    console.log('profile',profile)
    //setProfile = profile
    e.preventDefault()
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