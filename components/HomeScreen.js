import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, StyleSheet } from 'react-native';
import BottomPanel from './home_components/BottomPanel';
import TasksScreen from './home_components/TasksScreen';

function HomeScreen() {
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
          <TasksScreen />
          <BottomPanel />
        </View>
      </SafeAreaView>
    </>
  );
}

export default HomeScreen;
