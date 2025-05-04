import React from "react"
import style from  "./Button.module.scss"

export default class Button extends React.Component<{
  type?: "button" | "submit" | "reset",
  children: React.ReactNode
}> {
  render() {
    const { type = "button" } = this.props
    return <button className={style.button} type={type}>{this.props.children}</button>;
  }
}
