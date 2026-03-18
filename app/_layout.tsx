import { View, StyleSheet } from "react-native";
import { Stack } from "expo-router";
import Header from "@/componenets/Header";

export default function Layout() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.stackContainer}>
        <Stack screenOptions={{ headerShown: false }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Takes full screen
  },
  stackContainer: {
    flex: 1, // Takes remaining space below header
  },
});