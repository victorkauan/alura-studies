import { v4 as uuidv4 } from "uuid"
import Button from "../Button";
import style from "./Form.module.scss"
import type { ITask } from "../../types/task";
import { Dispatch, SetStateAction, useState } from "react";

interface IProps {
  setTasks: Dispatch<SetStateAction<ITask[]>>
}

export default function Form({ setTasks }: IProps) {
  const [name, setName] = useState<string>("")
  const [time, setTime] = useState<string>("00:00:00")

  function addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setTasks(previous => [
      ...previous,
      {
        id: uuidv4(),
        name,
        time,
        isSelected: false,
        isFinished: false
      }
    ])
    setName("")
    setTime("00:00:00")
  }

  return (
    <form className={style.newTask} onSubmit={addTask}>
      <div className={style.inputContainer}>
        <label htmlFor="name">Add a new study</label>
        <input
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={event => setName(event.target.value)}
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
          value={time}
          onChange={event => setTime(event.target.value)}
          placeholder="What do you want to study?"
          required
        />
      </div>
      <Button type="submit">Add</Button>
    </form>
  );
}
