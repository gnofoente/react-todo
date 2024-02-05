import { useState, useEffect } from 'react';

import AddTaskForm from '@components/AddTaskForm';
import Task from "@components/Task";
import Loader from '@components/Loader';
import { getTasks as fetchTasks } from '@import/app/services/tasks'

import { Task as T_Task } from '@types';
import ErrorMessage from './ErrorMessage';

type DataStatus = 'loading' | 'error' | 'loaded';

export default function TodoList() {
  const [todos, setTodos] : [T_Task[], Function] = useState([]);
  const [status, setStatus] : [DataStatus, Function]  = useState('loading');

  useEffect(() => {
    try {
      setTasks();
    } catch {
      setStatus('error');
    }
  }, []);

  async function setTasks() {
    if (todos.length > 0) return;
    setTodos(await fetchTasks());
    setStatus('loaded');
  }

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

  if (status === 'loading') {
    return <Loader />
  }

  if (status === 'error') {
    return <ErrorMessage>Something went wrong. Please contact your administrator.</ErrorMessage>
  }

  return (
    <>
      <AddTaskForm onAdd={handleOnAdd} />

      <div className="w-full h-full overflow-y-scroll">
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
    </>
  )
}