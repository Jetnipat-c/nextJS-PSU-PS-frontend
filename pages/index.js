import { useState } from "react";
import axios from "axios";
function HomePage() {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  
  const login = async () => {
    const result = await axios.post('http://localhost:3001/userloginpsu/login',
    { username: username, password: password },)
    console.log(result.data)
    sessionStorage.setItem('login',JSON.stringify({user: result.data}))
  }
  return (
  <div>
    <h1>Login PSU!</h1>
    <form>
      <h3>username : <input type="text" onChange={(e)=>setUsername(e.target.value)}></input> </h3>
      <h3>password : <input type="text" onChange={(e)=>setPassword(e.target.value)}></input> </h3>
      <button type="submit" onClick={login}>Login</button>
    </form>
  </div>
  )
}

export default HomePage