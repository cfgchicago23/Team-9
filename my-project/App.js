import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { theme } from "./src/core/theme";
import { StartScreen, StudentLoginScreen, LeaderLoginScreen, Lessons, LocalForum } from "my-project/src/screens";
import { Provider } from "react-native-paper";
import LeaderDashboard from './src/screens/LeaderDashboard'
import StudentList from './src/screens/StudentList'


const Stack = createStackNavigator();

export default function App() {
  /*useEffect(() => {
    const apiUrl = 'exp://jbhjudk.anonymous.8081.exp.direct';

    axios.get(apiUrl)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);*/

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

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

