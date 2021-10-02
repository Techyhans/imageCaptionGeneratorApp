import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from '@react-navigation/native';
import {Main} from "./src/screens/Main";
import {Camera} from "./src/screens/Camera";
import {Caption} from "./src/screens/Caption";
import {CachedResource} from "./src/components/CachedResource";

const Stack = createStackNavigator();

export default function App() {
    const isLoadingComplete = CachedResource();

    if (!isLoadingComplete) {
        return null;
    }

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
