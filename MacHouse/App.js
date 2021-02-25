
import React from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, StatusBar } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import Calendar from './screens/Calendar';
import ChatScreen from "./screens/chatScreen";
import HomeScreen from "./screens/HomeScreen";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#7b8be0",
    accent: "#850044",
  },
};

export default function App() {
	return <Calendar></Calendar>;
  return <ChatScreen />;
  <PaperProvider theme={theme}>
      <Management />
  </PaperProvider>
  return <HomeScreen />;
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
	},
});
export default App;


