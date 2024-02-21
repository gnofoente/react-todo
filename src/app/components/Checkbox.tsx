import { ChangeEventHandler } from "react";

type CheckboxProps = {
  name: string;
  checked?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  className?: string;
};

const styles = {
  font: "inherit",
  color: "currentColor",
  border: "1px solid currentColor",
};

export default function Checkbox({
  name,
  checked,
  onChange,
  className,
}: CheckboxProps) {
  return (
    <div className={className}>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className={`
          custom-checkbox
          grid
          h-4
          w-4
          appearance-none
          place-content-center
          bg-transparent
          delay-200
          ease-in-out
          before:h-2
          before:w-2 before:scale-0 before:transition-transform
          hover:cursor-pointer
        `}
        style={styles}
      />
    </div>
  );
}
