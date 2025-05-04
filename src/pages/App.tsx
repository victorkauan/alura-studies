import { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import Timer from "../components/Timer";
import style from "./App.module.scss";
import type { ITask } from "../types/task";

export default function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [selectedTask, setSelectedTask] = useState<ITask>();

  function selectTask(task: ITask) {
    setSelectedTask(task);
    setTasks(previous => previous.map(previousTask => ({
      ...previousTask,
      isSelected: previousTask.id === task.id
    })));
  }

  function finishTask() {
    if (selectedTask) {
      setSelectedTask(undefined);
      setTasks(previous => previous.map(previousTask => {
        if (previousTask.id !== selectedTask.id) {
          return previousTask;
        }

        return {
          ...previousTask,
          isSelected: false,
          isFinished: true
        };
      }));
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} selectTask={selectTask} />
      <Timer selectedTask={selectedTask} finishTask={finishTask} />
    </div>
  );
}
