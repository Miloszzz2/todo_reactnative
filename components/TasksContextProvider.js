import { createContext, useState } from 'react';

export const TasksContext = createContext();

function TasksContextProvider({ children }) {
  const [finishedTasks, setFinishedTasks] = useState([]);
  const [tasks, setTasks] = useState([]);

  return (
    <TasksContext.Provider
      value={{ finishedTasks, setFinishedTasks, tasks, setTasks }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export default TasksContextProvider;
