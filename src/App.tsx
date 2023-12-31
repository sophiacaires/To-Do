import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { Task } from "./components/Task";

import styles from "./App.module.css";
import "./global.css";
import { useState } from "react";

export interface Task {
  content: string;
  createdAt: Date;
  status: "todo" | "done" | string;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <main>
          <section>
            <Form tasks={tasks} setTasks={setTasks} />

            {tasks.map((task: Task) => {
              return (
                <>
                  {task.status === "todo" && (
                    <Task
                      content={task.content}
                      createdAt={task.createdAt}
                      status={task.status}
                    />
                  )}
                </>
              );
            })}
          </section>
          <div className="red">&nsbp</div>
          <section className="doneTasks">
            {tasks.map((task) => {
              return (
                <>
                  {task.status === "done" && (
                    <Task
                      content={task.content}
                      createdAt={task.createdAt}
                      status={task.status}
                    />
                  )}
                </>
              );
            })}
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
