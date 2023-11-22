import React from 'react'

interface Props{
    children:string;
    onClick: () => void;
    color?:string;   // ? is htere to tell that this  property is optional
}
const Button = ({children, onClick, color='primary'}: Props) => {
  return (
    <button className={'btn btn-' + color} onClick= {onClick}>{children}</button>
  )
}

export default Button