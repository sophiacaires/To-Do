import { format, formatDistanceToNow, setDefaultOptions } from "date-fns";
import { enUS } from "date-fns/locale/en-US";

import { Trash, Check } from "phosphor-react";

import styles from "./Task.module.css";
import { useState } from "react";

interface TaskProps {
  content: string
  createdAt: Date
  status: string
}

export function Task({ content, createdAt, status }: TaskProps) {
  setDefaultOptions({ locale: enUS });
  const createdDateFormatted = format(createdAt, "LLL dd 'at' HH:mm'h'");
  const createdDateRelativeToNow = formatDistanceToNow(createdAt, {
    addSuffix: true,
  });

  const [lines/*, setLines*/] = useState(content.length);

  return (
    <div className={status == 'todo' ? styles.todoTask : styles.doneTask}>
      <div className={styles.textColumn}>
        <p>{content}</p>
        <time title={createdDateFormatted} dateTime={createdAt.toISOString()}>
          Created {createdDateRelativeToNow}
        </time>
      </div>

      <div className={lines > 300 ? styles.btnColumn : styles.btnRow}>
        <button className={status == 'todo' ? styles.checkBtn : styles.doneTaskCheckBtn}>
          <Check size={26} weight="bold" />
        </button>
        <button className={styles.deleteBtn}>
          <Trash size={26} />
        </button>
      </div>
    </div>
  );
}
