import { ChangeEventHandler } from "react";

type InputProps = {
  name?: string;
  value?: string;
  checked?: boolean;
  className?: string;
  placeholder?: string;
  type: "text" | "number" | "tel";
  onChange: ChangeEventHandler<HTMLInputElement>;
  style?: {};
};

export default function Input(props: InputProps) {
  const classNameList: string[] = [
    "bg-transparent",
    "box-border",
    "border-b",
    "border-black/0",
    "pl-1",
    "transition-colors",
    "hover:border-black/10",
    "focus:border-black/100",
    "focus:outline-none",
  ];

  let classNames = classNameList.join().replaceAll(",", " ");

  return <input {...props} className={classNames} />;
}
