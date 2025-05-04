import Item from "./Item";
import style from "./List.module.scss"
import type { ITask } from "../../types/task";

interface IProps {
  tasks: ITask[];
  selectTask: (Task: ITask) => void;
}

export default function List({ tasks, selectTask }: IProps) {
  return (
    <aside className={style.taskList}>
      <h2>Studies of the day</h2>
      <ul>
        {tasks.map(task => <Item key={task.id} selectTask={selectTask} {...task} />)}
      </ul>
    </aside>
  );
}
