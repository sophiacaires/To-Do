import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { TaskComponent } from "./components/TaskComponent";
import { useState } from "react";

import styles from "./App.module.css";
import "./global.css";

export interface Task {
  content: string;
  createdAt: Date;
  status: "todo" | "done" | string;
}

function App() {
  const [taskList, setTasks] = useState<Task[]>([]);

  return (
    <>
      <Header />
      <main>
        <section>
          <Form taskList={taskList} setTasks={setTasks} />

          {taskList.map((task: Task) => {
            return (
              <>
                {task.status === "todo" && (
                  <TaskComponent
                    task={task}
                    taskList={taskList}
                    setTasks={setTasks}
                  />
                )}
              </>
            );
          })}
        </section>
        {taskList.map((task) => {
          return (
            <>
              {task.status === "done" && (
                <>
                  <section className="doneTasks">
                    <div className={styles.sectionTitle}>
                      <p className={"bold-title"}>DONE</p>
                    </div>
                    <TaskComponent
                      task={task}
                      taskList={taskList}
                      setTasks={setTasks}
                    />
                  </section>
                </>
              )}
            </>
          );
        })}
      </main>
    </>
  );
}

export default App;
