import { Task as T_Task } from '@types';

const { v4 } = require('uuid');
const uuidv4 = v4;

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
    done: true,
  },
  {
    id: uuidv4(),
    label: 'Simulate API request to fetch to-dos',
    done: true,
  },
  {
    id: uuidv4(),
    label: 'Add loading screen',
    done: true,
  },
  {
    id: uuidv4(),
    label: 'Fix checkbox styling on multiple browsers',
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
  },
  {
    id: uuidv4(),
    label: 'Build tasks API',
    done: false
  }
];

export function getTasks() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(TODOS);
    }, 2000);
})
}