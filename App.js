import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "@ui-kitten/components";
import { useChatClient } from "./useChatClient";
import { OverlayProvider, Chat } from "stream-chat-expo";
import { StreamChat } from "stream-chat";
import HomeScreen from "./screens/Home";
import ChatScreen from "./screens/ChatScreen";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";

import { chatApiKey } from "./chartConfig";

const Stack = createNativeStackNavigator();
const chatClient = StreamChat.getInstance(chatApiKey);

export default function App() {
  const { clientIsReady } = useChatClient();
  if (!clientIsReady) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <OverlayProvider>
      <Chat client={chatClient} theme="messaging light">
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Chat" component={ChatScreen} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </Stack.Navigator>
        </NavigationContainer>
      </Chat>
    </OverlayProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});
