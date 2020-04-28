import { useEffect, useState } from "react";
import LoginPage from "../components/Login";
import Route from 'next/router'


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
            <div><WithAuthComponent/></div>
        )
    }

}

export default WithAuth;