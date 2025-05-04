import React from 'react'
import style from  './Button.module.scss'

export default class Button extends React.Component<React.HTMLAttributes<HTMLButtonElement>> {
  render() {
    return <button className={style.button}>{this.props.children}</button>;
  }
}
