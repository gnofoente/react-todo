import { ChangeEvent, ChangeEventHandler } from "react";
import Button from "@components/Button";
import Input from "@components/Input";
import Checkbox from "@components/Checkbox";

type TaskProps = {
  id: string;
  label: string;
  done: boolean;
  onCheck: ChangeEventHandler<HTMLInputElement>;
  onDelete: (id: string) => void;
  onEdit: (todoId: string, label: string) => void;
};

export default function Task(props: TaskProps) {
  const { id, label, done, onCheck, onDelete, onEdit } = props;

  return (
    <li className="flex flex-row items-center justify-between">
      <div className="flex basis-11/12 flex-row">
        <Checkbox
          name={id}
          checked={done}
          onChange={onCheck}
          className="mr-2 flex basis-4 flex-row items-center justify-center"
        />

        <div
          className={`strikethrough ${done ? "strikethrough-striked" : ""} relative`}
        >
          {done ? (
            <p className="border-black-0 box-border border-b border-black/0 px-1">
              {label}
            </p>
          ) : (
            <Input
              type="text"
              value={label}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                onEdit(id, e.target.value);
              }}
              style={{ width: `${label.length + 1}ch` }}
            />
          )}
        </div>
      </div>

      <Button
        className="
          max-w-1
          basis-1
          text-black/40
          hover:font-bold
          hover:text-black/100
        "
        onClick={() => {
          onDelete(id);
        }}
      >
        x
      </Button>
    </li>
  );
}
