import 'react-native-gesture-handler';
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';
import HomeScreen from './components/Home.js';

const Drawer = createDrawerNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_600SemiBold });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerShown: false,
          drawerType: 'back',

          drawerActiveBackgroundColor: '#6320EE',
          drawerActiveTintColor: 'white',
          drawerInactiveTintColor: 'white',
          drawerItemStyle: {
            borderRadius: 5,
          },
        }}
      >
        <Drawer.Screen name='Home' component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
