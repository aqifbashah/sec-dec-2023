import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import BroadcastList from "./screens/BroadcastList";
import NewGroup from "./screens/NewGroup";
import Chat from "./screens/Chat";

const Stack = createNativeStackNavigator();

const headerOptions = {
  headerBackVisible: false,
  headerTintColor: "#fff",
  headerStyle: {
    backgroundColor: "#25D366",
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Chat App",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="BroadcastList"
          component={BroadcastList}
          options={headerOptions}
        />
        <Stack.Screen
          name="NewGroup"
          component={NewGroup}
          options={headerOptions}
        />
        <Stack.Screen name="Chat" component={Chat} options={headerOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
