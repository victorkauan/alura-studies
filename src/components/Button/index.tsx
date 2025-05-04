import React from "react"
import style from  "./Button.module.scss"

export default class Button extends React.Component<{
  type?: "button" | "submit" | "reset",
  onClick?: () => void
  children: React.ReactNode
}> {
  render() {
    const { type = "button", onClick } = this.props
    return <button className={style.button} type={type} onClick={onClick}>{this.props.children}</button>;
  }
}
