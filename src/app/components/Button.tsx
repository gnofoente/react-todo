import { MouseEventHandler } from "react"

type ButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>,
  children: any
}

export default function Button({ onClick, children } : ButtonProps) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  )
}