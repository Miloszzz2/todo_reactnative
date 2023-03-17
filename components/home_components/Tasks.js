import { memo } from 'react';
import Task from './Task';
const Tasks = memo(function TasksMemo({ tasks }) {
  return (
    <>
      {tasks &&
        tasks.map((item) => {
          return <Task item={item} key={item.id} />;
        })}
    </>
  );
});

export default Tasks;
