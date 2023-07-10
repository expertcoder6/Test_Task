import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ProfileScreen from './src/ProfileScreen';
import TodaysGame from './src/TodaysGame';
import TodaysGameDetails from './src/TodaysGameDetails';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="TodaysGame" component={TodaysGame} />
        <Stack.Screen name="TodaysGameDetails" component={TodaysGameDetails} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
