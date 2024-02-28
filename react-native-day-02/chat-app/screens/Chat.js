import { SafeAreaView, Text } from "react-native";

export default function Chat({ route }) {
  // this is the name of the user that was passed from the Home screen
  const name = route.params.name;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20,
      }}
    >
      <Text>Chat with {name}</Text>
    </SafeAreaView>
  );
}
