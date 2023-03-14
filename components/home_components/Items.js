import React, { useContext } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { TasksContext } from '../../App.js';

import Task from './Task.js';
import NoTasks from './NoTasks.js';
function Items() {
  const { tasks } = useContext(TasksContext);

  return (
    <View style={{ paddingLeft: 40, paddingTop: 30, paddingBottom: 50 }}>
      <View>
        <Text
          style={{
            fontFamily: 'Poppins_600SemiBold',
            fontSize: 32,
          }}
        >
          Lista Zadań:
        </Text>
      </View>

      <ScrollView style={{ paddingTop: 10, justifySelf: 'flex-start' }}>
        <NoTasks tasks={tasks} />
        {tasks &&
          tasks.map((item) => {
            return <Task item={item} key={item.id} />;
          })}
      </ScrollView>
    </View>
  );
}

export default Items;
