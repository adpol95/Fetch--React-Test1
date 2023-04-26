import {useEffect, useState} from "react";

function UsersDB() {

  const [cards, setCards] = useState();
  const [errors, setErrors] = useState();
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');

  useEffect(() => {
    fetch('https://kanbanserver-adpol95.b4a.run/card')
      .then((res) => res.json())
      .then(
        (result) => {
          setCards(result.map(el => <li key={Math.floor(Math.random() * 100000) + 1 + ''}>
            <div>
              Login: {' '}
              {el.login}
            </div>
            <div>
              Password: {' '}
              {el.password.replace(/./gi, '*')}
            </div>
            <hr/>
          </li>))
        },
        (errors) => {
          setErrors(errors)
        })

  }, [cards])

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://kanbanserver-adpol95.b4a.run/card', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: formName, email: formEmail})
    })
      .then(data => data.json())
      .then((res) => {
        console.log(res);
        setFormName('');
        setFormEmail('');
      })
  };

  return (
    <div className="fetch-get">
      <ul>
        {cards}
      </ul>
      <hr/>
      <form>
        <label>
          <input
            type="text"
            value={formName}
            onChange={(event) => setFormName(event.target.value)}
            placeholder={"Type your name"}
          />
        </label>
        <hr/>
        <label>
          <input
            type="text"
            value={formEmail}
            onChange={(event) => setFormEmail(event.target.value)}
            placeholder={"Type your email"}
          />
        </label>
        <hr/>
        <button type="submit" onClick={handleSubmit}>Add new user</button>
      </form>
      {JSON.stringify(errors)}
    </div>
  )
}

export default UsersDB;