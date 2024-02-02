import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

import AddToDoForm from '@components/AddToDoForm';
import Task from "@components/Task";

import { Task as T_Task } from '@types';

const TODOS: T_Task[] = [
  {
    id: uuidv4(),
    label: 'Working checkboxes',
    done: true
  },
  {
    id: uuidv4(),
    label: 'Componentize',
    done: true
  },
  {
    id: uuidv4(),
    label: 'Allow delete',
    done: true,
  },
  {
    id: uuidv4(),
    label: 'Press return to add',
    done: false,
  },
  {
    id: uuidv4(),
    label: 'Allow edit',
    done: false,
  },
  {
    id: uuidv4(),
    label: 'Stylize',
    done: false,
  },
  {
    id: uuidv4(),
    label: 'Simulate API request to fetch to-dos',
    done: false,
  },
  {
    id: uuidv4(),
    label: 'Archive done items',
    done: false,
  },
  {
    id: uuidv4(),
    label: 'Folders to store done items',
    done: false,
  },
  {
    id: uuidv4(),
    label: 'Drag to reorder',
    done: false,
  }
];

export default function TodoList() {
  const [todos, setTodos] : [T_Task[], Function] = useState(TODOS);
  

  function handleCheckboxChange(e : any) : void {
    setTodos(todos.map(item => {
      if (item.id === e.target.name) {
        item.done = !item.done;
      }
      return item;
    }))
  }

  function handleOnAdd(todo: T_Task) {
    setTodos([...todos, todo]);
  }

  function handleDelete(todoId: string) {
    setTodos(todos.filter(item => item.id !== todoId));
  }

  return (
    <main>
      <AddToDoForm onAdd={handleOnAdd} />

      <div>
        <ul>
          {todos.map(({ id, label, done}) => 
            <Task 
              key={id} 
              id={id} 
              label={label} 
              done={done} 
              onChange={handleCheckboxChange} 
              handleDelete={handleDelete} 
            />
          )}
        </ul>
      </div>
    </main>
  )
}