import Item from "./Item";
import style from "./List.module.scss"
import type { ITask } from "../../types/task";

export default function List({ tasks }: { tasks: ITask[] }) {
  return (
    <aside className={style.taskList}>
      <h2>Studies of the day</h2>
      <ul>
        {tasks.map((task, index) => <Item key={index} {...task} />)}
      </ul>
    </aside>
  );
}
