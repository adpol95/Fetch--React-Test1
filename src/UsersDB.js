import {useEffect, useState} from "react";

function UsersDB() {
  const [cards, setCards] = useState();
  const [errors, setErrors] = useState();
  useEffect(() => {
    fetch('https://kanbanexpress1-adpol95.b4a.run/card',
      // {
      //   method: "GET", // *GET, POST, PUT, DELETE, etc.
      //   mode: "same-origin", // no-cors, *cors, same-origin
      //   cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      //   credentials: "same-origin", // include, *same-origin, omit
      //   headers: {
      //     "Content-Type": "application/json",
      //     // 'Content-Type': 'application/x-www-form-urlencoded',
      //   },
      //   redirect: "follow", // manual, *follow, error
      //   referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      //   body: undefined // body data type must match "Content-Type" header
      // }
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setCards(result.map(el => <li key={Math.floor(Math.random() * 100) + 1 + ''}>{el.name}</li>))
        },
        (errors) => {
          setErrors(errors)
        })

  }, [])
  return (
    <div className="fetch-get">
      {errors}
      <ul>
      {cards}
      </ul>
    </div>
  )
}

export default UsersDB;