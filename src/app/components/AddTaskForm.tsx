import { FormEvent, useState } from "react";
const { v4 } = require("uuid");
const uuidv4 = v4;

import Button from "@components/Button";
import Input from "@components/Input";

type AddTaskFormProps = {
  onAdd: Function;
};

export default function AddTaskForm({ onAdd }: AddTaskFormProps) {
  const [label, setLabel] = useState<string>("");

  function handleInputChange(e: any): void {
    setLabel(e.target.value);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (label.length < 1) return;
    onAdd({
      id: uuidv4(),
      label,
      done: false,
    });
    setLabel("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-row items-center justify-center py-5"
    >
      <Input
        type="text"
        placeholder="to-do..."
        value={label}
        onChange={handleInputChange}
        className="border-black"
      />
      <Button className="border border-black">Add</Button>
    </form>
  );
}
