import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import {StartScreen} from 'my-project/src/screens'
import {StudentLoginScreen} from 'my-project/src/screens'
import {LeaderLoginScreen} from 'my-project/src/screens'
import {Provider} from "react-native-paper";

const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: true,
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="StudentLoginScreen" component={StudentLoginScreen} />
          <Stack.Screen name="LeaderLoginScreen" component={LeaderLoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}