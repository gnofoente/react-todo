import { useState } from 'react';
const { v4 } = require('uuid');
const uuidv4 = v4;

import AddTaskForm from '@import/app/components/AddTaskForm';
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
    done: true,
  },
  {
    id: uuidv4(),
    label: 'Allow edit',
    done: true,
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

  function handleEdit(todoId: string, label: string) {
    setTodos(todos.map(item => {
      if (item.id === todoId) {
        item.label = label;
      }
      return item;
    }));
  }

  return (
    <main className="text-xl w-10/12 max-w-4xl">
      <AddTaskForm onAdd={handleOnAdd} />

      <div>
        <ul>
          {todos.map(({ id, label, done}) => 
            <Task 
              key={id} 
              id={id} 
              label={label} 
              done={done} 
              onCheck={handleCheckboxChange} 
              onDelete={handleDelete}
              onEdit={handleEdit} 
            />
          )}
        </ul>
      </div>
    </main>
  )
}