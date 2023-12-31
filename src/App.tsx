import { PlusCircle } from "phosphor-react";
import { Header } from "./components/Header";
import { Task } from "./components/Task";
import { useState } from "react";

import styles from "./App.module.css";
import "./global.css";

const date = new Date("2023-12-30 12:46:00"); //apenas para teste
const datetwo = new Date("2023-12-30 20:32:00"); //apenas para teste
const now = new Date();

interface Task {
  id: number
  content: string
  createdAt: Date
}

const newTasks: Task[] = [
  {
    id: 1,
    content: "Task 1: Learn React",
    createdAt: new Date("2023-01-01T08:00:00"),
  },
  {
    id: 2,
    content: "Task 2: Build a React App",
    createdAt: new Date("2023-01-02T10:30:00"),
  },
  {
    id: 3,
    content: "Task 3: Deploy to Production",
    createdAt: new Date("2023-01-03T15:45:00"),
  },
  {
    id: 4,
    content: "Task 4: Write Documentation",
    createdAt: new Date("2023-01-04T12:20:00"),
  },
  {
    id: 5,
    content: "Task 5: Share with the Team",
    createdAt: new Date("2023-01-05T09:15:00"),
  },
  {
    id: 6,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eaque quae accusamus nihil harum rerum incidunt iste debitis voluptatem architecto nemo eum porro totam sed asperiores quaerat, omnis quibusdam doloremque?ae accusamus nihil harum rerum incidunt iste debitis voluptatem architecto nemo eum porro totam sed asperiores quaerat, omnis quibusdam doloremque?",
    createdAt: new Date("2023-01-05T09:15:00"),
  }
];

function App() {
  const [tasks, setTasks] = useState<Task[]>(newTasks);

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.taskForm}>
          <input type="text" placeholder="Add task to list" />
          <button className={styles.addBtn}>
            <PlusCircle size={26} />
          </button>
        </div>
        <main>
          {tasks.map((task)=>{
            return (
              <Task key={task.id} content={task.content} createdAt={task.createdAt} />
            )
          })}
         
        </main>
      </div>
    </>
  );
}

export default App;
