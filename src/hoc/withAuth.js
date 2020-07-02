import React, { useEffect, useState } from "react";
import LoginPage from "../components/Login";
import axios from "axios";
import Usertype1 from "../components/Usertype1";
import Usertype2 from "../components/Usertype2";
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
      )}`)
        .then((checktypenum) => {
          //console.log('res.data', res.data)
          setSidtype(checktypenum.data[0].type_id);
          console.log("result", checktypenum.data);
        })
        .catch((error) => {
          console.log("pls intert data");
        })
    
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
  } else if (token != null && sidtype == 0) {
    return (
      <div>
        <WithAuthComponent />
      </div>
    );
  } else if (token != null && sidtype == 1) {
    return (
      <div>
        <Usertype1 />
      </div>
    );
  } else if (token != null && sidtype == 2) {
    return (
      <div>
        <Usertype2 />
      </div>
    );
  }
};

export default WithAuth;
