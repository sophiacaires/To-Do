import { PlusCircle } from "phosphor-react";
import React, { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

import styles from "./Form.module.css";
import { Task } from "../App";

interface FormProps{
    tasks: Task[]
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

export function Form({tasks, setTasks}: FormProps) {
  
  const [newTaskContent, setNewTaskContent] = useState("");

  function handleNewTask(event: FormEvent) {
    event.preventDefault();

    const newTask = {
        content: newTaskContent,
        createdAt: new Date,
        status: 'todo'
    }

    setTasks([...tasks, newTask]);
    setNewTaskContent("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTaskContent(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório");
  }

  const isNewTaskEmpty = newTaskContent.length == 0;

  return (
    <form className={styles.taskForm} onSubmit={handleNewTask}>
      <input
        type="text"
        placeholder="Add task to list"
        value={newTaskContent}
        onChange={handleNewTaskChange}
        onInvalid={handleNewTaskInvalid}
      />
      <button type="submit" className={styles.addBtn} disabled={isNewTaskEmpty}>
        <PlusCircle size={26} />
      </button>
    </form>
  );
}
