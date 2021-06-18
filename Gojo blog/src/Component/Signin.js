import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";

const Signin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [emailerror, setEmailerror] = useState(false);
  const [passworderror, setPassworderror] = useState(false);
  const [info, setInfo] = useState();
  const history = useHistory()


  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    if (email.trim() === "") {
      setEmailerror(true);
    }
    if (password.trim() === "") {
      setPassworderror(true);
    }

    info.map((x)=>{
        if((x.emailfir=== email)&&(x.newpass===password)){
            console.log("Login successful")
            history.push("/Dashboard")
        }
    })
  };

  return (
    <div className="Login">
      <h2>Login</h2>
      <br />
      <form onSubmit={submitHandler}>
        <label>Email address</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={emailerror}
          placeholder="Email"
        ></input>
        <br />
        <label>Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={passworderror}
          placeholder="password"
        ></input>
        <br />
        <button type="submit">Login</button>

        <br />
        <a href="">Forget Password</a>
      </form>
    </div>
  );
};

export default Signin;
