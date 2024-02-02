import { useState } from "react";
import {v4 as uuidv4} from 'uuid';

import Button from "@components/Button";

type AddToDoFormProps = {
  onAdd: Function;
}

export default function AddToDoForm({ onAdd } : AddToDoFormProps) {
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

  function handleOnKeyDown(e) {
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