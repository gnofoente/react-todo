import { ChangeEvent, ChangeEventHandler } from "react";
import Button from '@components/Button';

type TaskProps = {
  id: string,
  label: string,
  done: boolean,
  onCheck: ChangeEventHandler<HTMLInputElement>,
  onDelete: (id: string) => void,
  onEdit: (todoId: string, label: string) => void
};

export default function Task(props : TaskProps) {
  const { id, label, done, onCheck, onDelete, onEdit } = props;

  return (
    <li>
      <input 
        type="checkbox" 
        name={id} 
        checked={done} 
        onChange={onCheck} 
      /> 

      <label>
        <input type="text" value={label} onChange={(e: ChangeEvent<HTMLInputElement>) => { onEdit(id, e.target.value)}} />
      </label>

      <Button onClick={() => {onDelete(id)}}>x</Button>
    </li>
  )
}