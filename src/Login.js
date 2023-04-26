import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import rest from "./rest";

function Login() {
  const [name, setName] = useState('');
  const [passwordIn, setPasswordIn] = useState('');
  const navigate = useNavigate();
  const [user, setUser] = useState('')

  useEffect(() => {
    rest('GET').then((res) => setUser(res));
  }, [])
  const submiter = (event) => {
    event.preventDefault();
    user.forEach((el) => {
      if (name === el.login && passwordIn === el.password) navigate('/home');
      else alert('User name or password incorrect!')
    })
    if (name === "admin" && passwordIn === "password") {

    }
  }

  return (
    <div className="login">
      <form onSubmit={submiter}>
        <div>
          <label>
            User name
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              type="text"
              value={passwordIn}
              onChange={(event) => setPasswordIn(event.target.value)}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
        <p>Don't have an account? <span onClick={(event) => {
          event.preventDefault();
          navigate('/login')
        }
        }>Register!</span></p>
      </form>
    </div>
  )
}

export default Login;