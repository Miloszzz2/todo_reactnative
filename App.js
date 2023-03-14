import 'react-native-gesture-handler';
import React, { createContext, useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';
import HomeScreen from './components/HomeScreen.js';
import FinishedTasksComponent from './components/FinishedTasksScreen.js';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export const TasksContext = createContext();

const Drawer = createDrawerNavigator();

export default function App() {
  const [finishedTasks, setFinishedTasks] = useState([
    { task: 'Zad', id: 122 },
  ]);
  const [tasks, setTasks] = useState([]);
  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_600SemiBold });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <TasksContext.Provider
        value={{ tasks, setTasks, finishedTasks, setFinishedTasks }}
      >
        <NavigationContainer>
          <Drawer.Navigator
            initialRouteName='Home'
            screenOptions={{
              headerShown: false,
              drawerType: 'back',
              drawerActiveBackgroundColor: '#6320EE',
              drawerActiveTintColor: 'white',
              drawerItemStyle: {
                borderRadius: 5,
              },
              drawerLabelStyle: {
                fontFamily: 'Poppins_600SemiBold',
              },
            }}
          >
            <Drawer.Screen name='Tasks' component={HomeScreen} />
            <Drawer.Screen
              name='Finished Tasks'
              component={FinishedTasksComponent}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </TasksContext.Provider>
    </SafeAreaProvider>
  );
}
