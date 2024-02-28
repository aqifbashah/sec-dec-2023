import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Button
        title="Press me"
        color="red"
        onPress={() => Alert.alert("Simple Button pressed")}
      />
      <StatusBar style="auto" />
      <View>
        <Text>Test test</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
