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
          onClick={() =>
            setList([
              ...list,
              { text: input, completed: false, id: Date.now().toString() },
            ])
          }
        >
          add
        </button>
        <ul className="ToDoList__list">
          {list.map((item) => {
            return (
              <li key={item.id} className="ToDoList__item">
                {item.text}
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={(e) =>
                    handleCheckboxChange(item.id, e.target.checked)
                  }
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
