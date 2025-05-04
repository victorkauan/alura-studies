import { useEffect, useState } from "react";
import type { ITask } from "../../types/task";
import Button from "../Button";
import Clock from "./Clock";
import style from "./Timer.module.scss"
import { timeToSeconds } from "../../common/utils/time";

interface IProps {
  selectedTask?: ITask
}

export default function Timer({ selectedTask }: IProps) {
  const [time, setTime] = useState<number>()

  useEffect(() => {
    if (selectedTask?.time) {
      setTime(timeToSeconds(selectedTask.time))
    }
  }, [selectedTask])

  return (
    <div className={style.timer}>
      <p className={style.title}>Choose a card and start the timer</p>
      <div className={style.clockWrapper}>
        <Clock time={time} />
      </div>
      <Button>
        Start
      </Button>
    </div>
  )
}
