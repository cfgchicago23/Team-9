//import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { theme } from "./src/core/theme";
import { Provider } from "react-native-paper";
import { LocalForum, Lessons, Announcements, LeaderLoginScreen, StudentLoginScreen, StartScreen, LeaderDashboard, StudentList } from "my-project/src/screens";
import React from 'react';


const Stack = createStackNavigator();

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
          <Stack.Screen
            name="StudentLoginScreen"
            component={StudentLoginScreen}
          />
          <Stack.Screen
            name="LeaderLoginScreen"
            component={LeaderLoginScreen}
          />
          <Stack.Screen name="Lessons" component={Lessons} />
          <Stack.Screen name="LeaderDashboard" component={LeaderDashboard} />
          <Stack.Screen name="StudentList" component={StudentList} />
          <Stack.Screen name="LocalForum" component={LocalForum} />
          <Stack.Screen name="Announcements" component={Announcements} />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

