import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from '@react-navigation/native';
import {Main} from "./src/screens/Main";
import {Camera} from "./src/screens/Camera";
import {Caption} from "./src/screens/Caption";

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Main' component={Main}/>
          <Stack.Screen name='Camera' component={Camera}/>
          <Stack.Screen name='Caption' component={Caption}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}
