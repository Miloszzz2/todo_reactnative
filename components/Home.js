import React, { useState } from 'react';
import { View } from 'react-native';
import AddTask from './AddTask';

function HomeScreen() {
  return (
    <>
      <View
        style={{
          flexDirection: 'column',
          backgroundColor: '#F8F0FB',
          flex: 1,
          justifyContent: 'space-between',
        }}
      >
        <AddTask />
      </View>
    </>
  );
}

export default HomeScreen;
