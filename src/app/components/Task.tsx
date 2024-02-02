import { ChangeEventHandler, MouseEventHandler } from "react";
import Button from '@components/Button';

type TaskProps = {
  id: string,
  label: string,
  done: boolean,
  onChange: ChangeEventHandler<HTMLInputElement>,
  handleDelete: (id: string) => void
};

export default function Task({ id, label, done, onChange, handleDelete} : TaskProps) {
  return (
    <li>
      <label>
        <input 
          type="checkbox" 
          name={id} 
          checked={done} 
          onChange={onChange} 
        /> 
        {label}
      </label>
      <Button onClick={() => {handleDelete(id)}}>x</Button>
    </li>
  )
}