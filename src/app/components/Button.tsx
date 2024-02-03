import { MouseEventHandler } from "react"

type ButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>,
  children: any,
  className?: string 
}

export default function Button({ onClick = () => {}, children, className } : ButtonProps) {
  return (
    <button className={`px-2 py-1 mx-2 ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}