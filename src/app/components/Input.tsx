import { ChangeEventHandler } from "react"

type InputProps = {
  name?: string
  value?: string
  checked?: boolean
  className?: string
  placeholder?: string
  type: 'text' | 'number' | 'tel'
  onChange: ChangeEventHandler<HTMLInputElement>
}

export default function Input(props: InputProps) {
  return <input {...props} className={`
    bg-transparent
    box-border
    border-b
    border-black/0 
    px-1
    transition-colors
    hover:border-black/10
    focus:border-black/100
    focus:outline-none ${props.className}`} 
  />
}