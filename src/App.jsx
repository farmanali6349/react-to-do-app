import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';

let globalID = 0;

function App() {
  const [task, setTask] = useState('');
  const [todos, setTodo] = useState([]);

  function createTodo(event) {
    event.preventDefault();

    setTodo(oldValue => {
      setTask('');
      return [...oldValue, {key: globalID++, value: task}];
    })
  }

  function deleteItem(keyID) {
    setTodo(oldValue => {
      return oldValue.filter(item => {
        return item.key != keyID;
      })
    })
  }

  return (
    <>
      <Header />
      <div className="container">
        <form onSubmit={createTodo}>
          <div className="input-group mb-3 my-5">
            <input type="text" className="form-control" aria-describedby="button-addon1" placeholder='Enter the task' value = {task} onChange={e => setTask(e.target.value)} />
            <button className="btn btn-outline-secondary" type="button" id="button-addon1">Create</button>
          </div>
        </form>

        <ul class="list-group">
          {todos.map(item => {
            return (
              <div className='my-3 d-flex w-100' >
            <li className="list-group-item w-100" aria-current="true">{item.value}</li>
            <button type="button" className="btn btn-danger" onClick={()=> deleteItem(item.key)}>Delete</button>
            </div>)
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
