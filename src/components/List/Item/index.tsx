import type { ITask } from "../../../types/task"
import style from "./Item.module.scss"

interface IProps extends ITask {
  selectTask: (Task: ITask) => void;
}

export default function Item({
  id,
  name,
  time,
  isSelected,
  isFinished,
  selectTask
}: IProps) {
  return (
    <li
      className={`${style.item} ${isSelected ? style.selectedItem : ''}`}
      onClick={() => selectTask({
        id,
        name,
        time,
        isSelected,
        isFinished,
      })}
    >
      <h3>{name}</h3>
      <span>{time}</span>
    </li>
  )
}
