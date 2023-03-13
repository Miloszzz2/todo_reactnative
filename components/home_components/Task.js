import React, { useContext } from 'react';
import { TasksContext } from '../Home.js';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Animated, { SlideOutRight, SlideInLeft } from 'react-native-reanimated';
function Task(props) {
  const { tasks, setTasks } = useContext(TasksContext);
  const deleteItem = (findId) => {
    const newTasks = tasks.filter((el) => el.id !== findId);

    setTimeout(() => {
      setTasks(newTasks);
    }, 200);
  };
  return (
    <Animated.View
      exiting={SlideOutRight}
      entering={SlideInLeft}
      key={props.item.id}
    >
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
        onPress={(isChecked) => (isChecked ? deleteItem(props.item.id) : '')}
      />
    </Animated.View>
  );
}

export default Task;
