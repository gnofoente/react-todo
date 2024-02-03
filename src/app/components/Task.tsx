import { ChangeEvent, ChangeEventHandler } from "react";
import Button from '@components/Button';
import Input from '@components/Input';

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
    <li className="flex flex-row justify-between">
      <div className="basis-11/12 flex flex-row">
        <Input 
          type="checkbox" 
          name={id} 
          checked={done} 
          onChange={onCheck}
          className="hover:cursor-pointer basis-4 mr-2"
        /> 

        <Input 
          type="text" 
          value={label} 
          onChange={(e: ChangeEvent<HTMLInputElement>) => { onEdit(id, e.target.value)}}
          className="basis-11/12" 
        />
      </div>

      <Button 
        className="
          text-black/40 
          hover:text-black/100 
          hover:font-bold
          basis-1
          max-w-1
        " 
        onClick={() => {onDelete(id)}}
      >
        x
      </Button>
    </li>
  )
}