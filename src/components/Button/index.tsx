import React from "react"
import style from  "./Button.module.scss"

interface IProps {
  type?: "button" | "submit" | "reset",
  onClick?: () => void
  children?: React.ReactNode
}

export default function Button({ children, type = "button", onClick }: IProps) {
  return <button className={style.button} type={type} onClick={onClick}>{children}</button>;
}
