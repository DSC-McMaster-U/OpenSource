import React from "react";
import { StyleSheet, Text, SafeAreaView, StatusBar } from "react-native";
import {
  DefaultTheme,
  Provider as PaperProvider,
  Paragraph,
} from "react-native-paper";
import Calendar from "./screens/Calendar";
import ChatScreen from "./screens/chatScreen";
import HomeScreen from "./screens/HomeScreen";
import Cards from "./screens/dashboard";
import Management from "./screens/Management";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import Dashboard from "./screens/dashboard";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#FDBF57",
    accent: "#7A003C",
    surface: "#5E6A71",
    text: "#5E6A71",
  },
};
const Tab = createBottomTabNavigator();
function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            keyboardHidesTabBar: true,
          }}
        >
          <Tab.Screen
            name="Management"
            component={Management}
            options={{
              tabBarLabel: "Management",
              tabBarIcon: () => (
                <Icon name="hammer-outline" color={"#7A003C"} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Dashboard"
            component={Dashboard}
            options={{
              tabBarLabel: "Dashboard",
              tabBarIcon: () => (
                <Icon name="clipboard-outline" color={"#7A003C"} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: () => (
                <Icon name="home-outline" color={"#7A003C"} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Chat"
            component={ChatScreen}
            options={{
              tabBarLabel: "Chat",
              tabBarIcon: () => (
                <Icon name="chatbubbles-outline" color={"#7A003C"} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Calendar"
            component={Calendar}
            options={{
              tabBarLabel: "Calendar",
              tabBarIcon: () => (
                <Icon name="calendar-outline" color={"#7A003C"} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});

export default App;
