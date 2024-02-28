import {
  Image,
  SafeAreaView,
  ScrollView,
  View,
  RefreshControl,
  Pressable,
} from "react-native";
import { useState } from "react";
import { Header, Paragraph, Small } from "../components/typography";

const MESSAGES = [
  {
    image: "https://reactnative.dev/img/tiny_logo.png",
    name: "React Native 1",
    message: "Hello, World!",
  },
  {
    image: "https://reactnative.dev/img/tiny_logo.png",
    name: "React Native 2",
    message: "Hello, World!",
  },
  {
    image: "https://reactnative.dev/img/tiny_logo.png",
    name: "React Native 3",
    message: "Hello, World!",
  },
  {
    image: "https://reactnative.dev/img/tiny_logo.png",
    name: "React Native 4",
    message: "Hello, World!",
  },
  {
    image: "https://reactnative.dev/img/tiny_logo.png",
    name: "React Native 5",
    message: "Hello, World!",
  },
  {
    image: "https://reactnative.dev/img/tiny_logo.png",
    name: "React Native 6",
    message: "Hello, World!",
  },
  {
    image: "https://reactnative.dev/img/tiny_logo.png",
    name: "React Native 7",
    message: "Hello, World!",
  },
  {
    image: "https://reactnative.dev/img/tiny_logo.png",
    name: "React Native 8",
    message: "Hello, World!",
  },
  {
    image: "https://reactnative.dev/img/tiny_logo.png",
    name: "React Native 9",
    message: "Hello, World!",
  },
  {
    image: "https://reactnative.dev/img/tiny_logo.png",
    name: "React Native 10",
    message: "Hello, World!",
  },
  {
    image: "https://reactnative.dev/img/tiny_logo.png",
    name: "React Native 11",
    message: "Hello, World!",
  },
  {
    image: "https://reactnative.dev/img/tiny_logo.png",
    name: "React Native 12",
    message: "Hello, World!",
  },
  {
    image: "https://reactnative.dev/img/tiny_logo.png",
    name: "React Native 13",
    message: "Hello, World!",
  },
  {
    image: "https://reactnative.dev/img/tiny_logo.png",
    name: "React Native 14",
    message: "Hello, World!",
  },
  {
    image: "https://reactnative.dev/img/tiny_logo.png",
    name: "React Native 15",
    message: "Hello, World!",
  },
];

export default function Home({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);
  function onRefresh() {
    // this is a fake async function that simulates a network request
    console.log(MESSAGES, "Refreshing messages");
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }

  function openBroadcastList() {
    // navigate to the name which is defined in the App.js file
    navigation.navigate("BroadcastList");
  }

  function openNewGroup() {
    navigation.navigate("NewGroup");
  }
  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
        flex: 1,
        paddingVertical: 20,
      }}
    >
      <View style={{ paddingHorizontal: 16 }}>
        <Header>Chats</Header>
        <View
          style={{
            paddingTop: 16,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Paragraph onPress={openBroadcastList}>Broadcast List</Paragraph>
          <Paragraph onPress={openNewGroup}>New Group</Paragraph>
        </View>
        {/* <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ paddingBottom: 32 }}
            >
              <View
                style={{
                  height: 100,
                  width: 200,
                  backgroundColor: "lightgray",
                  borderRadius: 8,
                  marginRight: 16,
                }}
              />
              <View
                style={{
                  height: 100,
                  width: 200,
                  backgroundColor: "lightgray",
                  borderRadius: 8,
                  marginRight: 16,
                }}
              />
              <View
                style={{
                  height: 100,
                  width: 200,
                  backgroundColor: "lightgray",
                  borderRadius: 8,
                  marginRight: 16,
                }}
              />
            </ScrollView> */}
        <ScrollView
          style={{ marginHorizontal: -16, paddingHorizontal: 16 }}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {MESSAGES.map((message, index) => (
            <MessageCard key={index} {...message} navigation={navigation} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

function MessageCard({ image, name, message, navigation }) {
  function openChat() {
    console.log("Opening chat", name);
    navigation.navigate("Chat", { name });
  }
  return (
    <Pressable onPress={openChat}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
          borderBottomWidth: 1,
          borderBottomColor: "#f0f0f0",
          paddingVertical: 8,
        }}
      >
        <Image
          style={{ width: 50, height: 50, borderRadius: 1000 }}
          source={{
            uri: image || "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
        <View>
          <Paragraph style={{ fontWeight: 600 }}>
            {name || "No name provided"}
          </Paragraph>
          <Small>{message || "No message provided"}</Small>
        </View>
      </View>
    </Pressable>
  );
}
