import {useEffect, useState} from "react";
import rest from "./rest";

function Home() {
  const [newTask, setNewTask] = useState('');
  const profile = useState(JSON.parse(localStorage.getItem('User')));
  const [toDo, setToDo] = useState(profile.list);
  const [taskAdd, setTaskAdd] = useState(false);
  const date = useState(new Date());


  useEffect(() => {
    localStorage.removeItem('User');
  }, [])

  useEffect(() => {
    if (taskAdd) {
      rest('PATCH', {...profile, list: toDo}, profile._id)
        .then(() => {
          console.log('Task added in DB list');
          setTaskAdd(false);
          setNewTask('');
        })
    }
  }, [taskAdd])

  const suby = (event) => {
    event.preventDefault()
    const goal = {
      id: Math.floor(Math.random() * 1000) + 1 + '',
      task: newTask
    }
    setToDo([...toDo, goal])
    setTaskAdd(true)
  }

  const deleteOrDone = (event) => {
    event.preventDefault();
    if (event.target.nodeName === "BUTTON") {
      const patOrDel = event.target.innerText === "X" ? toDo.filter(el => event.target.id !== el.id) : toDo.map(el => el.id === event.target.id ? {
        ...el,
        status: !el.status
      } : el)
      setToDo(patOrDel);
    }

    setTaskAdd(true);
  }
  return (
    <section className="to-do-list">
      <div className="to-do-list__top">
        <p className="to-do-list__title-text">
          To Do List
        </p>
        <div className="to-do-list__date">
          Date: {date.getDate()}.{date.getMonth() + 1}.{date.getFullYear()}
        </div>
      </div>
      <div className="to-do-list__input">
        <form onSubmit={suby}>
          <label>
            <input
              type="text"
              onChange={(event) => setNewTask(event.target.value)}
              value={newTask}
              className="to-do-list__input-area"
              placeholder="Your goals"
            />
          </label>
          <button type="submit" className="to-do-list__btn to-do-list__btn--input">Add to list</button>
        </form>
      </div>
      <div className="to-do-list__items">
        <ul className="to-do-list__unordered-list" style={{listStyleType: "decimal"}}>
          {toDo.map(el =>
            <li className="to-do-list__item"
                key={el.id} onClick={(event) => deleteOrDone(event)}>
              <p
                className={el.status ? "to-do-list__item-text to-do-list__item-text--active" : "to-do-list__item-text"}>{el.task}</p>
              <button id={el.id} className="to-do-list__btn to-do-list__btn--done">Done</button>
              <button id={el.id} className="to-do-list__btn to-do-list__btn--del">X</button>
            </li>
          )}
        </ul>
      </div>
    </section>
  )
}

export default Home;