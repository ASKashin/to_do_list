import React, { useState } from 'react';
import './App.scss';

const App = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState('');

  const handleCheckboxChange = (id, checked) => {
    const arr = [...list];

    arr.forEach((item) => {
      if (item.id === id) {
        item.completed = checked;
      }
    });
    setList(arr);
  };

  const closeBtn = (id) => {
    const arr2 = [...list];

    arr2.forEach((item) => {
      if (item.id === id) {
        arr2.splice(item, 1);
      }
    });
    setList(arr2);

    ls.set(LS_NAME, arr2);
  };

  useEffect(() => {
    const lsData = ls.get(LS_NAME);

    if (lsData) {
      setList(lsData);
    }
  }, []);

  return (
    <div className="container">
      <div className="ToDoList">
        <h1 className="ToDoList__title">To Do List</h1>
        <input
          className="ToDoList__input"
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button
          className="ToDoList__add"
          onClick={() => {
            const newState = [
              ...list,
              { text: input, completed: false, id: Date.now().toString() },
            ];

            setList(newState);
            ls.set(LS_NAME, newState);
            // window.localStorage.setItem(LS_NAME, JSON.stringify(newState));
          }}
        >
          add
        </button>
        <ul className="ToDoList__list">
          {list.map((item) => {
            return (
              <li key={item.id} className="ToDoList__item">
                <div>
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={(e) =>
                      handleCheckboxChange(item.id, e.target.checked)
                    }
                  />
                  {item.text}
                </div>
                <button onClick={() => closeBtn(item.id)}>x</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
