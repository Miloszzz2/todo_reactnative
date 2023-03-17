import React, { useContext, useState } from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Animated, { SlideOutRight, SlideInLeft } from 'react-native-reanimated';
import { TasksContext } from '../TasksContextProvider';
import 'react-native-get-random-values';
import uuid from 'react-native-uuid';

function Task(props) {
  const { tasks, setTasks, finishedTasks, setFinishedTasks } =
    useContext(TasksContext);
  const deleteItem = async (task, findId) => {
    setFinishedTasks([
      ...finishedTasks,
      {
        task: task,
        id: uuid.v4(),
      },
    ]);

    const newTasks = tasks.filter((el) => el.id !== findId);

    setTimeout(() => {
      setTasks(newTasks);
    }, 600);
  };
  return (
    <>
      <Animated.View exiting={SlideOutRight} entering={SlideInLeft}>
        <BouncyCheckbox
          style={{
            marginBottom: 10,
            borderRadius: 10,
          }}
          iconStyle={{
            borderRadius: 10,
          }}
          innerIconStyle={{ borderRadius: 10, borderWidth: 4 }}
          textStyle={{
            fontFamily: 'Poppins_600SemiBold',
            fontSize: 20,
          }}
          fillColor='black'
          text={props.item.task}
          onPress={(isChecked) => {
            if (isChecked) {
              deleteItem(props.item.task, props.item.id);
            }
          }}
        />
      </Animated.View>
    </>
  );
}

export default Task;
