import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { TaskComponent } from "./components/TaskComponent";
import { useState } from "react";
import styles from "./App.module.css";

import "./App.module.css";
import "./global.css";

export interface Task {
  content: string;
  createdAt: Date;
  status: "todo" | "done" | string;
}

type Tab = "todo" | "done";

function App() {
  const [taskList, setTasks] = useState<Task[]>([]);
  const [activeTab, setActiveTab] = useState<Tab>("todo");

  const todoTasks = taskList.filter((task) => task.status === "todo");
  const doneTasks = taskList.filter((task) => task.status === "done");

  return (
    <>
      <Header />
      <main>
        <section>
          <Form taskList={taskList} setTasks={setTasks} />

          <div className={styles.tabBtn}>
            <button
              className={activeTab == 'todo' ? styles.todoBtn : styles.inactiveTodoBtn}
              onClick={() => setActiveTab("todo")}
            >
              Todo
            </button>
            <button
              className={activeTab == 'done' ? styles.doneBtn : styles.inactiveDoneBtn}
              onClick={() => setActiveTab("done")}
            >
              Done
            </button>
          </div>
          <div className={activeTab == 'todo' ? styles.tabContentTodo : styles.tabContentDone}>
            {activeTab === "todo" && (
              <>
                {todoTasks.length ? (
                  <>
                    {taskList.map((task: Task, index) => {
                      return (
                        <>
                          {task.status === activeTab && (
                            <TaskComponent
                              key={`todo-${index}`}
                              task={task}
                              taskList={taskList}
                              setTasks={setTasks}
                            />
                          )}
                        </>
                      );
                    })}
                  </>
                ) : (
                  <div className={styles.noTodoTasks}>
                    <p>Your task list is clear</p>
                    <span>Ready to begin a new task?</span>
                  </div>
                )}
              </>
            )}

            {activeTab === "done" && (
              <>
                {doneTasks.length ? (
                  <>
                    {taskList.map((task: Task, index) => {
                      return (
                        <>
                          {task.status === activeTab && (
                            <TaskComponent
                              key={`doneTask-${index}`}
                              task={task}
                              taskList={taskList}
                              setTasks={setTasks}
                            />
                          )}
                        </>
                      );
                    })}
                  </>
                ) : (
                  <div className={styles.noTasksDone}>
                    <p>No tasks completed yet</p>
                    <span>Start with a new task today! 😄</span>
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
