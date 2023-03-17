import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';
import HomeScreen from './components/HomeScreen.js';
import FinishedTasksComponent from './components/FinishedTasksScreen.js';
import AboutmeScreen from './components/AboutmeScreen.js';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TasksContextProvider from './components/TasksContextProvider.js';
export default function App() {
  const Drawer = createDrawerNavigator();
  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_600SemiBold });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <TasksContextProvider>
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
            <Drawer.Screen name='About me' component={AboutmeScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
      </TasksContextProvider>
    </SafeAreaProvider>
  );
}
