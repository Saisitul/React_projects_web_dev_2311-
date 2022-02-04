import React, { useState } from "react";
import Login from "./Component/Login";
import Register from "./Component/Register";

const App = () => {
  const [login_status, setlogin_status] = useState(false);
  const [register_status, setregister_status] = useState(false);

  return (
    <>
    <div>
      <nav>
        <h1>Login and Register page</h1>
        <button
          onClick={() => {
            setlogin_status(true);
            setregister_status(false);
          }}
        >
        Go to login
        </button>

        <button
          onClick={() => {
            setregister_status(true);
            setlogin_status(false);
          }}
        >
        Go to register
        </button>

        {login_status && <Login />}
        {register_status && <Register />}

      </nav>
      </div>  
    </>
  );
};

export default App;
