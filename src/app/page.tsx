"use client";

import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

const TODOS: Todo[] = [
  {
    id: uuidv4(),
    label: 'Allow controlling checkboxes for the to-do list',
    done: true
  },
  {
    id: uuidv4(),
    label: 'Break components into smaller, cohesive pieces',
    done: false
  },
  {
    id: uuidv4(),
    label: 'Allow to delete to-dos',
    done: false,
  },
  {
    id: uuidv4(),
    label: 'Allow to edit existing to-dos',
    done: false,
  },
  {
    id: uuidv4(),
    label: 'Add style',
    done: false,
  },
  {
    id: uuidv4(),
    label: 'Allow archiving for done to-dos',
    done: false,
  },
  {
    id: uuidv4(),
    label: 'Allow the creation of folders for storing to-dos',
    done: false,
  }
];

interface Todo {
  id: string;
  label: string;
  done: boolean;
}

export default function Main() {
  const [todos, setTodos] : [Todo[], Function] = useState(TODOS);
  const [label, setLabel] : [string, Function] = useState('');

  function handleInputChange(e : any) : void {
    setLabel(e.target.value);
  }

  function handleClickAdd() : void {
    const todo : Todo = {
      id: uuidv4(),
      label: label,
      done: false
    };

    setTodos([
      ...todos, todo
    ]);
  }

  function handleCheckboxChange(e : any) : void {
    setTodos(todos.map(item => {
      if (item.id === e.target.name) {
        item.done = !item.done;
      }
      return item;
    }))
  }

  return (
    <>
      <header>
        <h1>My To-do List</h1>
      </header>

      <main>
        <input type="text" onChange={handleInputChange} />
        <button onClick={handleClickAdd}>Add</button>

        <div>
          <ul>
            {todos.map(todo => 
              <li key={todo.id}>
                <label>
                  <input type="checkbox" name={todo.id} checked={todo.done} onChange={handleCheckboxChange} /> 
                  {todo.label}
                </label>
              </li>
            )}
          </ul>
        </div>
      </main>

      <footer>
        Made with love by Gustavo Nofoente
      </footer>
    </>
  )
}