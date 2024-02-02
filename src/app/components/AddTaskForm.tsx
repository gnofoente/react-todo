import { KeyboardEvent, useState } from "react";
const { v4 } = require('uuid');
const uuidv4 = v4;

import Button from "@components/Button";

type AddTaskFormProps = {
  onAdd: Function;
}

export default function AddTaskForm({ onAdd } : AddTaskFormProps) {
  const [label, setLabel] : [string, Function] = useState('');

  function handleInputChange(e : any) : void {
    setLabel(e.target.value);
  }

  function handleClick() {
    if (label.length < 1) return;
    onAdd({
      id: uuidv4(),
      label,
      done: false
    });
  }

  function handleOnKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.code !== 'Enter') return;
    handleClick();
  }
  
  return (
    <div>
      <input type="text" onChange={handleInputChange} onKeyDown={handleOnKeyDown} />
      <Button onClick={handleClick}>Add</Button>
    </div>
  )
}