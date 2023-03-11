import React, { useState } from 'react';
import { View } from 'react-native';
import AddTask from './AddTask';
import { SafeAreaView } from 'react-native-safe-area-context';
function HomeScreen() {
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
        <AddTask />
      </SafeAreaView>
    </>
  );
}

export default HomeScreen;
