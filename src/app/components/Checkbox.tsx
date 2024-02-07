import { ChangeEventHandler, ReactEventHandler, useState } from "react";

type CheckboxProps = {
  name: string,
  checked?: boolean,
  onChange: ChangeEventHandler<HTMLInputElement>,
  className?: string
};

const styles = {
  font: 'inherit',
  color: 'currentColor',
  border: '1px solid currentColor'
}

export default function Checkbox({name, checked, onChange, className} : CheckboxProps) {
  return (
    <div className={className}>
      <input 
        type="checkbox" 
        name={name} 
        checked={checked}
        onChange={onChange}
        className={`
          appearance-none
          bg-transparent
          hover:cursor-pointer
          h-4
          w-4
          grid
          place-content-center
          before:h-2
          before:w-2
          before:scale-0
          before:transition-transform ease-in-out delay-200
          custom-checkbox
        `}
        style={styles} 
      />
    </div>
  )
}