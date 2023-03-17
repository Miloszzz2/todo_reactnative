import React, { useContext } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { TasksContext } from '../TasksContextProvider';
import Tasks from './Tasks.js';
import NoTasks from './NoTasks.js';
function Items() {
  const { tasks } = useContext(TasksContext);

  return (
    <View
      style={{ paddingLeft: 40, paddingTop: 30, paddingBottom: 50, flex: 1 }}
    >
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

      <ScrollView
        style={{
          paddingTop: 10,
          justifySelf: 'flex-start',
          boxSizing: 'border-box',
        }}
      >
        <NoTasks tasks={tasks} />
        <Tasks tasks={tasks} />
      </ScrollView>
    </View>
  );
}

export default Items;
