import React, { useEffect, useState } from "react";
import LoginPage from "../components/Login";
import axios from "axios";
const WithAuth = (props) => {
  const WithAuthComponent = props.component;

  const [token, setToken] = useState(null);
  const [sidtype, setSidtype] = useState("");
  console.log("sidtype ", sidtype);
  const checktoken = async () => {
    setToken(sessionStorage.getItem("token"));
    const checktypenum = await axios.get(
      `http://localhost:3001/users/checktype/${sessionStorage.getItem(
        "username"
      )}`
    );
    setSidtype(checktypenum.data[0].type_id);
    console.log("result", checktypenum.data);
  };

  useEffect(() => {
    checktoken();
  }, []);

  if (token === null) {
    return (
      <>
        <LoginPage />
      </>
    );
  }

    else if (token != null && sidtype == 2){
        return 'type 2'
    }
    else if (token != null && sidtype == 1){
        return 'type 1'
    }
  else {
    return (
      <div>
        <WithAuthComponent />
      </div>
    );
  }
};

export default WithAuth;
