import { StatusBar } from "expo-status-bar";
import { LogBox, StyleSheet, Text, View } from "react-native";
import Navigation from "./app/navigation/Navigation";
import { initFirebase } from "./app/utils/firebase";
LogBox.ignoreAllLogs();
export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Navigation />
    </>
  );
}
