import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const submiter = (event) => {
    event.preventDefault();
    if (name === "admin" && password === "password") {
      navigate('/home')
    } else {
      alert('User name or password incorrect!')
    }
  }

  return (
    <div>
      <form onSubmit={submiter}>
        <label>
          User name
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <hr/>
        <label>
          Password
          <input
            type="text"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <hr/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Login;