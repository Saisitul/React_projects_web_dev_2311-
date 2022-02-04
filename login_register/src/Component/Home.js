import React, {useState} from 'react';
import Login from './Login'

const Home=()=> {
  const [logout_status, setlogout_status] = useState(false)

  const ButtonHandler = ()=>{
    setlogout_status(true)
  }
  return (
  <>
      {logout_status && <Login />}
      {!logout_status && 
      <div>
      <button onClick={ButtonHandler}>Logout</button>
      <p>Hello User</p>
      </div>}
  </>
)}

export default Home;
