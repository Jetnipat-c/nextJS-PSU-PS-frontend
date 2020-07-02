import React,{ useEffect, useState } from "react";
import LoginPage from "../components/Login";

const WithAuth = (props) => {

    const WithAuthComponent = props.component;

    const [token, setToken] = useState(null);
    const [sid, setSid] = useState('')
    //console.log('sid ',sid)
    const checktoken = async => {
         setToken(sessionStorage.getItem('token'))
         setSid(sessionStorage.getItem('username'))
         
    }
     useEffect( () => {
        checktoken()
    }, [])


    if (token === null) {
        return (
            <>
                <LoginPage/>
            </>
        )
    }
    else {
        return (
            <div><WithAuthComponent /></div>
        )
    }

}

export default WithAuth;