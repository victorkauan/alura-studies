import type { ITask } from "../../../types/task";
import style from "./Item.module.scss";

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
      className={`${style.item} ${isSelected ? style.selectedItem : ""} ${isFinished ? style.finishedItem : ""}`}
      onClick={() => !isFinished && selectTask({
        id,
        name,
        time,
        isSelected,
        isFinished,
      })}
    >
      <h3>{name}</h3>
      <span>{time}</span>
      {isFinished && <span className={style.finished} aria-label="Finished task" />}
    </li>
  );
}
