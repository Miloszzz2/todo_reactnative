import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, StyleSheet } from 'react-native';
import BottomPanel from './home_components/BottomPanel';
import Items from './home_components/Items';
import { createContext, useState } from 'react';
import 'react-native-get-random-values';
import uuid from 'react-native-uuid';

export const TasksContext = createContext();

function HomeScreen() {
  const [tasks, setTasks] = useState([{ task: 'zadanie 1', id: uuid.v4() }]);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
  return (
    <>
      <SafeAreaView
        style={{
          flexDirection: 'column',
          backgroundColor: '#F8F0FB',
          flex: 1,
          justifyContent: 'space-between',
        }}
      >
        <View style={styles.container}>
          <TasksContext.Provider value={{ tasks, setTasks }}>
            <Items />
            <BottomPanel />
          </TasksContext.Provider>
        </View>
      </SafeAreaView>
    </>
  );
}

export default HomeScreen;
