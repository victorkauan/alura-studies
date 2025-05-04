import { useEffect, useState } from "react";
import type { ITask } from "../../types/task";
import Button from "../Button";
import Clock from "./Clock";
import style from "./Timer.module.scss"
import { timeToSeconds } from "../../common/utils/time";

interface IProps {
  selectedTask?: ITask
  finishTask: () => void
}

export default function Timer({ selectedTask, finishTask }: IProps) {
  const [time, setTime] = useState<number>()

  useEffect(() => {
    if (selectedTask?.time) {
      setTime(timeToSeconds(selectedTask.time))
    }
  }, [selectedTask])

  function countdown(counter: number = 0) {
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1)
        return countdown(counter - 1)
      }
      finishTask()
    }, 1000)
  }

  return (
    <div className={style.timer}>
      <p className={style.title}>Choose a card and start the timer</p>
      <div className={style.clockWrapper}>
        <Clock time={time} />
      </div>
      <Button onClick={() => countdown(time)}>
        Start
      </Button>
    </div>
  )
}
