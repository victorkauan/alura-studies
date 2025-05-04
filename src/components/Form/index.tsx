import React from "react";
import { v4 as uuidv4 } from "uuid"
import Button from "../Button";
import style from "./Form.module.scss"
import type { ITask } from "../../types/task";

export default class Form extends React.Component<{
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}> {
  state = { name: "", time: "00:00:00" }
  addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    this.props.setTasks(previous => [
      ...previous,
      {
        ...this.state,
        id: uuidv4(),
        isSelected: false,
        isFinished: false
      }
    ])
    this.setState({ name: "", time: "00:00:00" })
  }
  render() {
    return (
      <form className={style.newTask} onSubmit={this.addTask.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="name">Add a new study</label>
          <input
            id="name"
            name="name"
            type="text"
            value={this.state.name}
            onChange={event => this.setState({ ...this.state, name: event.target.value })}
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
            min="00:00:01"
            max="01:30:00"
            value={this.state.time}
            onChange={event => this.setState({ ...this.state, time: event.target.value })}
            placeholder="What do you want to study?"
            required
          />
        </div>
        <Button type="submit">Add</Button>
      </form>
    );
  }
}
