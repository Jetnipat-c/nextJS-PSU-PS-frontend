import React,{ useEffect, useState } from "react";
import LoginPage from "../components/Login";

const WithAuth = (props) => {

    const WithAuthComponent = props.component;

    const [token, setToken] = useState(null);

    useEffect(() => {
        setToken(sessionStorage.getItem('token'))
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