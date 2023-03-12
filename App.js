import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';
import HomeScreen from './components/Home.js';
import FinishedTasks from './components/FinishedTasks.js';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const Drawer = createDrawerNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_600SemiBold });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
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
          <Drawer.Screen name='Finished Tasks' component={FinishedTasks} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
