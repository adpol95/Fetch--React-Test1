import {useState} from "react";
import {useNavigate} from "react-router-dom";
import rest from "./rest";

function Register() {
  const [newLogin, setNewLogin] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [congrats, setCongrats] = useState('');
  const navigate = useNavigate();

  const submiter = (e) => {
    e.preventDefault();
    rest('POST', {
      login: newLogin,
      password: newPassword,
      list: [],
      status: false
    })
      .then(() => {
        setCongrats('Congrats! Your profile is created! In next 7 seconds you will return to the login page')
        setTimeout(() => navigate('/'),7000)
      })
      .catch((err) => alert(err))
  }

  return (
    <div>
      <h1>Add your profile data</h1>
      <form onSubmit={submiter}>
        <div>
          <label>
            Login
            <input
              type="text"
              value={newLogin}
              onChange={(event) => setNewLogin(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              type="text"
              value={newPassword}
              onChange={(event) => setNewPassword(event.target.value)}
            />
          </label>
        </div>
        <button type="submit">Create profile</button>
      </form>
      <h2>{congrats}</h2>
    </div>
  )
}

export default Register;