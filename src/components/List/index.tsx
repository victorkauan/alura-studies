import Item from "./Item";
import style from "./List.module.scss"

export default function List() {
  const tasks = [
    { name: "JavaScript", time: "00:30:00" },
    { name: "React", time: "01:00:00" },
    { name: "TypeScript", time: "01:30:00" }
  ]

  return (
    <aside className={style.taskList}>
      <h2>Studies of the day</h2>
      <ul>
        {tasks.map((task, index) => <Item key={index} {...task} />)}
      </ul>
    </aside>
  );
}
