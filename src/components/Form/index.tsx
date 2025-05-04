import React from "react";
import Button from "../Button";
import style from './Form.module.scss'

export default class Form extends React.Component {
  render() {
    return (
      <form className={style.newTask}>
        <div className={style.inputContainer}>
          <label htmlFor="task">Add a new study</label>
          <input
            id="task"
            name="task"
            type="text"
            placeholder="What do you want to study?"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="time">Time</label>
          <input
            id="time"
            name="time"
            type="time"
            step="1"
            min="00:00:00"
            max="01:30:00"
            placeholder="What do you want to study?"
            required
          />
        </div>
        <Button />
      </form>
    );
  }
}
