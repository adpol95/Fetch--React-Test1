import {useEffect, useState} from "react";

function UsersDB() {
  // const initialVal = {
  //   path: 'card',
  //   method: 'POST',
  //   body: { name: 'sdasds', email: 'sfascsac' }
  // }
  // const [cards, setCards] = useState();
  // const [errors, setErrors] = useState();
  const [count, setCounter] = useState(0);
  // const [fetcher, setFetcher] = useState(initialVal);
  // const [formName, setFormName] = useState('');
  // const [formEmail, setFormEmail] = useState('');

  useEffect(() => {
    fetch('https://kanbanexpress1-adpol95.b4a.run/card'
      // {
      //   method: 'POST', // *GET, POST, PUT, DELETE, etc.
      //   body: JSON.stringify({name: 'Test2', email: 'test2@mail.ru'}), // body data type must match "Content-Type
      //   headers: {
      //     'Content-type': 'application/json',
      //   },
      //   // header
      // }
    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          // setCards(result.map(el => <li key={Math.floor(Math.random() * 100) + 1 + ''}>{el.name}</li>))
        })

  }, [])
  return (
    <div className="fetch-get">
      {/*<ul>*/}
      {/*{cards}*/}
      {/*</ul>*/}
      <button className="fetch-get__btn fetch-get__btn--minus" onClick={() => setCounter(count - 1)}> Minus</button>
      {count}
      <button className="fetch-get__btn fetch-get__btn--plus" onClick={() => setCounter(count + 1)}> Plus</button>
      <hr/>
      {/*<form >*/}
      {/*  <label>*/}
      {/*    <input*/}
      {/*      type="text"*/}
      {/*      value={formName}*/}
      {/*      onChange={(event) => setFormName(event.target.value)}*/}
      {/*      placeholder={"Type your name"}*/}
      {/*    />*/}
      {/*  </label>*/}
      {/*  <hr/>*/}
      {/*  <label>*/}
      {/*    <input*/}
      {/*      type="text"*/}
      {/*      value={formEmail}*/}
      {/*      onChange={(event) => setFormEmail(event.target.value)}*/}
      {/*      placeholder={"Type your email"}*/}
      {/*    />*/}
      {/*  </label>*/}
      {/*  <hr/>*/}
      {/*  <button onClick={() => {*/}
      {/*    setFetcher({...fetcher, method: 'POST', body: JSON.stringify({ name: formName, email: formEmail })})*/}
      {/*  }}>Add new user</button>*/}
      {/*</form>*/}
    </div>
  )
}

export default UsersDB;