import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// assets imports
import Homeicon from './src/assets/homeicon.svg'
import Usericon from './src/assets/usericon.svg'
import Chaticon from './src/assets/chaticon.svg'
import Listicon from './src/assets/listicon.svg'

// screen imports
import Home from './src/screens/home';
import Group from './src/screens/group';


const Tab = createBottomTabNavigator();

const App = () => (
  <NavigationContainer>
    <Tab.Navigator tabBarOptions={{
      showLabel: false
    }}>
      <Tab.Screen name="home" component={Home} options={{
        tabBarIcon: ({ focused, color, size }) => {
          return <Homeicon />
        }
      }} />
      <Tab.Screen name="user" component={Group} options={{
        tabBarIcon: ({ focused, color, size }) => {
          return <Usericon />
        }
      }} />
      <Tab.Screen name="chat" component={Home} options={{
        tabBarIcon: ({ focused, color, size }) => {
          return <Chaticon />
        }
      }} />
      <Tab.Screen name="list" component={Home} options={{
        tabBarIcon: ({ focused, color, size }) => {
          return <Listicon fill={color} />
        }
      }} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default App;
