import { format, formatDistanceToNow, setDefaultOptions } from "date-fns";
import { enUS } from "date-fns/locale/en-US";

import { Trash, Check } from "phosphor-react";
import { Task } from "../App";
import { useState } from "react";

import styles from "./TaskComponent.module.css";

interface TaskComponentProps {
  task: Task
  taskList: Task[]
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

export function TaskComponent({ task, taskList, setTasks }: TaskComponentProps) {
  setDefaultOptions({ locale: enUS });
  const createdDateFormatted = format(task.createdAt, "MMM dd 'at' hh:mm aa");
  const createdDateRelativeToNow = formatDistanceToNow(task.createdAt, {
    addSuffix: true,
  });

  const [lines] = useState(task.content.length);

  function handleSetStatusDone(taskStatusToSetDone: string) {
    const newToDoTaskList = taskList.filter((task)=>{
      return task.status != taskStatusToSetDone
    })
    setTasks(newToDoTaskList)
  }

  function handleDeleteTask(taskContentToDelete: string) {
    const tasksWithoutDeletedOne = taskList.filter((task)=>{
      return task.content != taskContentToDelete
    })
    setTasks(tasksWithoutDeletedOne)
  }

  return (
    <div className={status == "todo" ? styles.todoTask : styles.doneTask}>
      <div className={styles.textColumn}>
        <p>{task.content}</p>
        <time title={createdDateFormatted} dateTime={task.createdAt.toISOString()}>
          Created {createdDateRelativeToNow}
        </time>
      </div>

      <div className={lines > 300 ? styles.btnColumn : styles.btnRow}>
        <button
          className={
            status == "todo" ? styles.checkBtn : styles.doneTaskCheckBtn
          }
          onClick={()=>handleSetStatusDone(task.status)}
        >
          <Check size={26} weight="bold" alt="mark as done icon" />
        </button>
        <button 
          className={styles.deleteBtn} 
          onClick={()=>handleDeleteTask(task.content)}>
          <Trash size={26} alt="delete icon" />
        </button>
      </div>
    </div>
  );
}
