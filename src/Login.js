import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import rest from "./rest";

function Login() {
  const [loginIn, setLoginIn] = useState('');
  const [passwordIn, setPasswordIn] = useState('');
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [workIndex, setWorkIndex] = useState(-1);

  useEffect(() => {
    if (workIndex > -1) {
      localStorage.setItem('User', JSON.stringify(user[workIndex]))
    } else {
      rest('GET')
        .then(res => setUser(res))
        .catch(err => console.log(err));
    }
  }, [workIndex])
  const submiter = (event) => {
    event.preventDefault();
    const taker = user.find(el => el.login === loginIn && el.password === passwordIn);
    setWorkIndex(user.indexOf(taker));
    if (taker) setTimeout(() => navigate('/home'), 0);
    else alert('User name or password incorrect! Try again or register new account')
  }


  return (
    <div className="login">
      <form onSubmit={submiter}>
        <div>
          <label>
            User name
            <input
              type="text"
              value={loginIn}
              onChange={(event) => setLoginIn(event.target.value)}
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