import { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import Timer from "../components/Timer";
import style from "./App.module.scss"
import type { ITask } from "../types/task";

export default function App() {
  const [tasks, setTasks] = useState<ITask[]>([])

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} />
      <Timer />
    </div>
  );
}
